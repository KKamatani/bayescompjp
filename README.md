# BayesCompJp website

Static website for the Seminar on Bayesian Computation. It is designed for GitHub Pages and has no build step. MathJax 4 is loaded from jsDelivr to display mathematical notation.

## Add or update a seminar

Edit `assets/data/events.js`. Keep the newest event first and copy an existing event object.

Required fields:

- `id`: unique short identifier
- `date`: `YYYY-MM-DD`
- `time`: include `JST`
- `venue`
- `speaker`: name and affiliation
- `title`
- `language`: normally `English` or `Japanese`
- `abstract`: an array of paragraphs
- `links`: related papers or project pages

For a future event, an optional registration link can be added:

```js
registration: {
  label: "Register for online participation",
  url: "https://..."
}
```

The next future event is shown automatically at the top. Once its date has passed, it moves into the recent list and archive. Remove expired Zoom or registration links after the event.

## Mathematical notation

Titles and abstracts support inline math with `$...$` or `\(...\)`, and display math with `$$...$$` or `\[...\]`. Math is also rendered after switching archive years.

Use `String.raw` in `assets/data/events.js` to preserve LaTeX backslashes:

```js
title: String.raw`Convergence in $L^2(\pi)$`,
abstract: [
  String.raw`The target distribution is \(\pi\).`,
  String.raw`$$\pi(\theta \mid x) = \frac{p(x \mid \theta)\,p(\theta)}{p(x)}.$$`
]
```

In ordinary quoted JavaScript strings, double each backslash instead (for example, `"$\\pi$"`). Use `\$` for a literal dollar sign. An internet connection is needed to load MathJax, including during local preview.

## Local preview

From this directory, run:

```sh
python3 -m http.server 8001
```

Then open <http://localhost:8001/>.

## GitHub Pages

Create a repository named `bayescompjp`, push this directory, and configure Pages to deploy from the root of the default branch. The expected project URL is:

<https://kkamatani.github.io/bayescompjp/>

The `.nojekyll` file keeps GitHub Pages from applying Jekyll processing.

## Migration record

The 2023–2026 archive was imported from the former Google Sites pages. `scripts/import-google-sites.mjs` documents that one-time migration and overwrites `assets/data/events.js` when run. Do not run it after making manual updates unless a fresh re-import is intended.
