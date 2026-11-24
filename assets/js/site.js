const events = [...(window.BAYESCOMP_EVENTS || [])].sort((a, b) =>
  b.date.localeCompare(a.date)
);

const todayInTokyo = new Intl.DateTimeFormat("sv-SE", {
  timeZone: "Asia/Tokyo",
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
}).format(new Date());

const formatDate = (date) =>
  new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Tokyo"
  }).format(new Date(`${date}T00:00:00+09:00`));

const createLink = ({ label, url }, className = "") => {
  const link = document.createElement("a");
  link.href = url;
  link.textContent = label;
  if (className) link.className = className;
  return link;
};

const createMetaItem = (label, value) => {
  const item = document.createElement("div");
  const term = document.createElement("dt");
  const description = document.createElement("dd");
  term.textContent = label;
  description.textContent = value;
  item.append(term, description);
  return item;
};

const createAbstract = (event) => {
  const details = document.createElement("details");
  const summary = document.createElement("summary");
  const body = document.createElement("div");

  details.className = "abstract-details";
  summary.textContent = "Abstract / 概要";
  body.className = "abstract-body";

  (event.abstract || []).forEach((text) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    body.append(paragraph);
  });

  if (event.links?.length) {
    const links = document.createElement("div");
    links.className = "event-links";
    event.links.forEach((link) => links.append(createLink(link)));
    body.append(links);
  }

  details.append(summary, body);
  return details;
};

const createEventCard = (event, variant = "standard") => {
  const article = document.createElement("article");
  const date = document.createElement("time");
  const title = document.createElement("h3");
  const speaker = document.createElement("p");
  const metadata = document.createElement("dl");

  if (variant === "standard") article.id = event.id;
  article.className = `event-card event-card-${variant}`;
  date.className = "event-date";
  date.dateTime = event.date;
  date.textContent = formatDate(event.date);
  title.textContent = event.title;
  speaker.className = "event-speaker";
  speaker.textContent = event.speaker;
  metadata.className = "event-meta";
  metadata.append(
    createMetaItem("Time", event.time),
    createMetaItem("Venue", event.venue),
    createMetaItem("Language", event.language)
  );

  article.append(date, title, speaker, metadata);

  if (event.registration && event.date >= todayInTokyo) {
    article.append(
      createLink(event.registration, "registration-link")
    );
  }

  if (event.abstract?.length) article.append(createAbstract(event));
  return article;
};

const nextContainer = document.querySelector("[data-next-event]");
const upcomingEvents = events
  .filter((event) => event.date >= todayInTokyo)
  .sort((a, b) => a.date.localeCompare(b.date));

if (nextContainer) {
  nextContainer.replaceChildren();
  if (upcomingEvents.length) {
    nextContainer.append(createEventCard(upcomingEvents[0], "featured"));
  } else {
    const emptyState = document.createElement("article");
    const label = document.createElement("p");
    const heading = document.createElement("h3");
    const text = document.createElement("p");
    label.className = "event-date";
    label.textContent = "Schedule update";
    heading.textContent = "The next seminar will be announced here.";
    text.textContent = "次回の日程が決まり次第、このページでお知らせします。過去の講演は年別アーカイブからご覧いただけます。";
    emptyState.className = "empty-state";
    emptyState.append(label, heading, text, createLink({ label: "View the archive ↓", url: "#archive" }, "text-link"));
    nextContainer.append(emptyState);
  }
}

document.querySelectorAll("[data-event-count]").forEach((element) => {
  element.textContent = String(events.length);
});

const recentContainer = document.querySelector("[data-recent-events]");
if (recentContainer) {
  const pastEvents = events.filter((event) => event.date < todayInTokyo);
  pastEvents.slice(0, 3).forEach((event) =>
    recentContainer.append(createEventCard(event, "compact"))
  );
}

const yearFilter = document.querySelector("[data-year-filter]");
const archiveContainer = document.querySelector("[data-archive-events]");
const years = [...new Set(events.map((event) => event.date.slice(0, 4)))];

const renderArchiveYear = (year) => {
  if (!archiveContainer || !yearFilter) return;

  let archiveUpdated = false;
  const updateArchive = () => {
    archiveContainer.replaceChildren();
    events
      .filter((event) => event.date.startsWith(year))
      .forEach((event) => archiveContainer.append(createEventCard(event)));

    yearFilter.querySelectorAll("button").forEach((button) => {
      const isCurrent = button.dataset.year === year;
      button.setAttribute("aria-pressed", String(isCurrent));
    });
    archiveUpdated = true;
  };

  const mathJax = window.MathJax;
  if (!mathJax?.whenReady) {
    // Initial content is rendered before MathJax loads and typesets the page.
    updateArchive();
    return;
  }

  // Wait for active typesetting before removing the previous year's content.
  mathJax.whenReady(() => {
    mathJax.typesetClear([archiveContainer]);
    updateArchive();
  })
    .then(() => mathJax.typesetPromise([archiveContainer]))
    .catch((error) => {
      if (!archiveUpdated) updateArchive();
      console.warn("MathJax could not typeset the seminar archive:", error);
    });
};

if (yearFilter && archiveContainer) {
  years.forEach((year) => {
    const count = events.filter((event) => event.date.startsWith(year)).length;
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.year = year;
    button.textContent = `${year} · ${count}`;
    button.addEventListener("click", () => renderArchiveYear(year));
    yearFilter.append(button);
  });
  if (years.length) renderArchiveYear(years[0]);
}

const menuButton = document.querySelector("[data-menu-button]");
const menu = document.querySelector("[data-menu]");

if (menuButton && menu) {
  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    menu.classList.remove("is-open");
  };

  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    menu.classList.toggle("is-open", !expanded);
  });
  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

const parallaxHero = document.querySelector("[data-parallax-hero]");
const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

const clamp = (value, minimum, maximum) =>
  Math.min(Math.max(value, minimum), maximum);

const updateHeroParallax = () => {
  if (!parallaxHero) return;

  if (motionPreference.matches) {
    parallaxHero.style.setProperty("--hero-shift", "0px");
    return;
  }

  const rect = parallaxHero.getBoundingClientRect();
  const progress = clamp(-rect.top / Math.max(rect.height, 1), 0, 1);
  const maximumShift = Math.min(110, rect.height * 0.17);
  parallaxHero.style.setProperty(
    "--hero-shift",
    `${(progress * maximumShift).toFixed(1)}px`
  );
};

if (parallaxHero) {
  updateHeroParallax();
  window.addEventListener("scroll", updateHeroParallax, { passive: true });
  window.addEventListener("resize", updateHeroParallax);
  motionPreference.addEventListener?.("change", updateHeroParallax);
}
