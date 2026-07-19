# My Personal Website

A home for my projects, thoughts, observations and whatever else tickles my fancy.

**Live:** [zachcrutcher.com](https://zachcrutcher.com)

## Tech Stack

- **Framework:** Rails 8
- **Front end:** Hotwire — Turbo + Stimulus, no build step
- **Assets:** importmaps
- **Styles:** plain CSS, no framework
- **CI:** RuboCop, Brakeman, test suite on every push
- **CD:** automated deploy to Fly.io via GitHub Actions

## Notes on a few decisions

- **Importmaps over a bundler.** No Node toolchain for a site this size — dependencies are pinned and served directly.
- **Plain CSS.** Been a while since using plain CSS. Felt like a good project to get back to the basics.
- **Theme toggle.** Stimulus controller with `localStorage` for persistence, plus an inline script in `<head>` so the stored theme applies before first paint and there's no flash of the wrong theme.
