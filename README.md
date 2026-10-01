# namratabhatia21.github.io

My personal site: **https://namratabhatia21.github.io**

The centrepiece is one of the AI systems I designed, drawn as a blueprint that builds
itself while you scroll. A camera follows each component as it's added: ingestion,
queue, autoscaled workers, a BERT classifier, parallel LLM rule agents, engineer review,
and tracing and evaluation underneath. Each component comes with its architecture
decision record (ADR). At the end the view zooms out, simulated traffic flows through
the system, the workers autoscale and telemetry drops into the tracing layer.

- One `index.html` file with inline SVG and vanilla JS. No build step, no dependencies apart from Google Fonts.
- Dark blueprint theme, or an engineering-paper theme in light mode. Works on phones and respects `prefers-reduced-motion`.
- `technical-writer.html` is my earlier application page (it uses `images/` and `assets/`).

## Editing

- Links (LinkedIn, CV): `LINKS` at the top of the `<script>`. Buttons stay hidden until set.
- Stack ticker: `STACK`.
- Components and ADRs: `STAGES` (component, title, decision, rationale).
- Career log and projects: plain HTML. Search for `TODO(Namrata)`.

Preview locally: `python3 -m http.server 8000`, then open http://localhost:8000.
