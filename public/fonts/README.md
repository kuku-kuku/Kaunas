# Fonts

Self-hosted to avoid the render-blocking Google Fonts request. Files are the official Google Fonts
woff2 builds, split into `latin` and `latin-ext` subsets (Lithuanian letters are in `latin-ext`).

| File | Family | Weight | License |
|---|---|---|---|
| `barlow-condensed-600-*.woff2` | Barlow Condensed | 600 | SIL Open Font License 1.1 |
| `barlow-condensed-800-*.woff2` | Barlow Condensed | 800 | SIL Open Font License 1.1 |
| `inter-var-*.woff2` | Inter (variable) | 300–800 | SIL Open Font License 1.1 |

`@font-face` rules live at the top of `src/index.css`.
