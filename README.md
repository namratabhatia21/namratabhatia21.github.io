# namratabhatia21.github.io

My personal site: **https://namratabhatia21.github.io**

The story in one line: seven years explaining complex systems to people, now building them with AI.
Grey marks the "explaining" years and orange the "building" years, everywhere on the site.

| Page | What's on it |
|---|---|
| `index.html` | The story with portrait, the career line, leadership and projects (incoming) |
| `work.html` | Projects (incoming) |
| `experience.html` | Two chapters: Building (2023 – now) and Explaining (2016 – 2023), plus certifications |
| `about.html` | Longer story, how I work, toolkit |

Plain HTML, one shared `style.css` and `site.js`. No build step. Supports light and dark mode and phones, and respects `prefers-reduced-motion`.
`technical-writer.html` is my earlier application page.

## Editing

- CV download: set `CV_URL` in `site.js`. The buttons stay hidden until it's set.
- Search for `TODO(Namrata)` for the things to check.

Preview locally: `python3 -m http.server 8000`, then open http://localhost:8000.
