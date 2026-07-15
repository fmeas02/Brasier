@tailwind base;
@tailwind components;
@tailwind utilities;

* { box-sizing: border-box; }

:root {
  --bg: #14100d;
  --bg-2: #1b1611;
  --surface: #211a14;
  --accent: #a8462c;
  --accent-light: #c85a3c;
  --gold: #c9a25e;
  --text: #f4ede2;
  --text-dim: rgba(244, 237, 226, 0.62);
  --text-muted: rgba(244, 237, 226, 0.38);
  --line: rgba(201, 162, 94, 0.14);
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-manrope), sans-serif;
}

::selection { background: var(--accent); color: #fff; }
.serif { font-family: var(--font-fraunces), serif; }
.h1 { font-family: var(--font-fraunces), serif; font-weight: 300; line-height: 0.96; letter-spacing: -0.02em; }
.h2 { font-family: var(--font-fraunces), serif; font-weight: 400; line-height: 1.0; letter-spacing: -0.02em; }
.label { font-size: 11px; letter-spacing: .28em; text-transform: uppercase; color: var(--gold); font-weight: 500; }
.line-mask { overflow: hidden; }
.magnetic { display: inline-flex; }
.grain { position: fixed; inset: 0; pointer-events: none; z-index: 60; opacity: 0.05; mix-blend-mode: overlay; }
.img-treat { filter: brightness(0.82) saturate(1.05) contrast(1.05); }
.btn-primary { background: var(--accent); color: var(--text); transition: background .3s ease; border-radius: 999px; }
.btn-primary:hover { background: var(--accent-light); }
.card { background: var(--surface); border: 1px solid var(--line); border-radius: 2px; transition: transform .35s ease, border-color .3s ease; }
.card:hover { border-color: var(--gold); transform: translateY(-4px); }
.nav-blur { backdrop-filter: blur(16px); background: rgba(20,16,13,0.7); }
.divider { height: 1px; background: var(--line); }
