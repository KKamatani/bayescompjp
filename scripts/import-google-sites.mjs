import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const pages = [2026, 2025, 2024, 2023].map((year) => ({
  year,
  url: `https://sites.google.com/view/bayescompjp/seminar/${year}`
}));

const outputPath = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "../assets/data/events.js"
);

const decodeHtml = (value) =>
  value
    .replace(/<[^>]+>/g, "")
    .replace(/&#(x?[0-9a-f]+);/gi, (_, number) =>
      String.fromCodePoint(
        number[0].toLowerCase() === "x"
          ? Number.parseInt(number.slice(1), 16)
          : Number.parseInt(number, 10)
      )
    )
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();

const extractBlocks = (html) =>
  [...html.matchAll(/<(?:p|h[1-6])\b[^>]*>([\s\S]*?)<\/(?:p|h[1-6])>/gi)]
    .map((match) => decodeHtml(match[1]))
    .filter(Boolean);

const monthNumbers = new Map(
  [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
  ].map((month, index) => [month, index + 1])
);

[
  "jan", "feb", "mar", "apr", "may", "jun",
  "jul", "aug", "sep", "oct", "nov", "dec"
].forEach((month, index) => monthNumbers.set(month, index + 1));

const parseDate = (label, year) => {
  const normalized = label
    .replace(/^Date:\s*/i, "")
    .replace(/\bMa y\b/i, "May")
    .replace(/\bMa r\b/i, "March")
    .toLowerCase();
  const month = [...monthNumbers].find(([name]) => normalized.includes(name));
  const day = normalized.match(/\b(\d{1,2})(?:st|nd|rd|th)?\b/);

  if (!month || !day) {
    throw new Error(`Could not parse date: ${label}`);
  }

  return `${year}-${String(month[1]).padStart(2, "0")}-${String(day[1]).padStart(2, "0")}`;
};

const valueAfterLabel = (blocks, pattern) => {
  const value = blocks.find((block) => pattern.test(block));
  return value?.replace(pattern, "").trim() || "";
};

const isRegistrationLine = (text) =>
  /^(オンライン参加|参加希望|if you plan to attend|kindly register|physical:|virtual:)/i.test(text);

const isLanguageLine = (text) =>
  /this presentation will be held in japanese|本発表は日本語で開催/i.test(text);

const cleanImportedText = (text) =>
  text
    .replace(/Hyv\\"arinen/g, "Hyvärinen")
    .replace(/R\\[‘’]\{e\}nyi/g, "Rényi")
    .replace(/\$\\alpha\$/g, "α")
    .replace(/\$\(O\(\\varepsilon\^2\)\)\$/g, "O(ε²)")
    .replace(/\$\(O\(\\varepsilon\^\{-6\}\)\)\$/g, "O(ε⁻⁶)")
    .replace(/\$\(O\(\\varepsilon\^\{-7\}\)\)\$/g, "O(ε⁻⁷)")
    .replace(/Kullback--Leibler/g, "Kullback–Leibler")
    .replace(/Itakura--Saito/g, "Itakura–Saito")
    .replace(/Promi- nent/g, "Prominent")
    .replace(/esti- mator/g, "estimator")
    .replace(/error\.Our/g, "error. Our")
    .replace(/\blibrairies\b/g, "libraries")
    .replace(/\bFrechet\b/g, "Fréchet")
    .replace(/\s+/g, " ")
    .trim();

const eventLinks = (paragraphs) => {
  const joined = paragraphs.join(" ");
  const urls = new Set(joined.match(/https?:\/\/[^\s)]+/g) || []);

  for (const match of joined.matchAll(/arXiv(?::| preprint arXiv:)\s*(\d{4}\.\d+)/gi)) {
    urls.add(`https://arxiv.org/abs/${match[1]}`);
  }

  for (const match of joined.matchAll(/\b(10\.\d{4,9}\/[A-Z0-9._;()/:+-]+)\b/gi)) {
    urls.add(`https://doi.org/${match[1].replace(/[.,;:]$/, "")}`);
  }

  return [...urls]
    .map((url) => url.replace(/[.,;:]$/, ""))
    .filter((url) => !/zoom\.us|forms\.gle/i.test(url))
    .map((url) => ({
      label: /arxiv\.org/i.test(url)
        ? "arXiv"
        : /doi\.org/i.test(url)
          ? "DOI"
          : "Related link",
      url
    }));
};

const parseEvents = (blocks, year, sourceUrl) => {
  const dateIndexes = blocks
    .map((block, index) => (/^Date:\s*/i.test(block) ? index : -1))
    .filter((index) => index >= 0);

  return dateIndexes.map((start, eventIndex) => {
    const end = dateIndexes[eventIndex + 1] ?? blocks.length;
    const eventBlocks = blocks.slice(start, end);
    const titleIndex = eventBlocks.findIndex((block) => /^Title:\s*/i.test(block));
    const firstRegistrationIndex = eventBlocks.findIndex(isRegistrationLine);
    const abstractEnd = firstRegistrationIndex >= 0
      ? firstRegistrationIndex
      : eventBlocks.length;
    const paragraphs = eventBlocks
      .slice(titleIndex + 1, abstractEnd)
      .filter((text) => !isLanguageLine(text))
      .map((text) => cleanImportedText(text.replace(/^Abstract[.:]?\s*/i, "")))
      .filter(Boolean);

    return {
      id: `event-${year}-${String(eventIndex + 1).padStart(2, "0")}`,
      date: parseDate(eventBlocks[0], year),
      time: cleanImportedText(valueAfterLabel(eventBlocks, /^Time:\s*/i)).replace(" - ", "–"),
      venue: cleanImportedText(valueAfterLabel(eventBlocks, /^In person (?:location|Location):\s*/i)),
      speaker: cleanImportedText(valueAfterLabel(eventBlocks, /^Speaker:\s*/i))
        .replace(/\s*\/\s*/g, " / "),
      title: cleanImportedText(valueAfterLabel(eventBlocks, /^Title:\s*/i)),
      language: eventBlocks.some(isLanguageLine) ? "Japanese" : "English",
      abstract: paragraphs,
      links: eventLinks(paragraphs),
      source: sourceUrl
    };
  });
};

const events = [];

for (const page of pages) {
  const response = await fetch(page.url);
  if (!response.ok) {
    throw new Error(`${page.url}: ${response.status} ${response.statusText}`);
  }
  const html = await response.text();
  events.push(...parseEvents(extractBlocks(html), page.year, page.url));
}

events.sort((a, b) => b.date.localeCompare(a.date));

const output = `/*\n * SEMINAR EVENTS\n * Newest first. Add future events by copying one object.\n * Past registration links are intentionally omitted.\n */\nwindow.BAYESCOMP_EVENTS = ${JSON.stringify(events, null, 2)};\n`;

await writeFile(outputPath, output, "utf8");
console.log(`Imported ${events.length} events to ${outputPath}`);
