#!/usr/bin/env python3
"""Build index.html: a standalone gallery of every components/<Name>/preview.html.

Each preview is inlined as an iframe srcdoc with tokens, bundle and React loaded.
Run from the repo root: python3 scripts/build-gallery.py
"""
import glob, html, os, re

HEAD = ('<link rel="stylesheet" href="tokens.css"><link rel="stylesheet" href="components/bundle.css">'
        '<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>'
        '<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>'
        '<script src="components/bundle.js"></script>')

cards = []
for path in sorted(glob.glob('components/*/preview.html')):
    name = path.split('/')[1]
    src = open(path).read()
    m = re.search(r'@dsCard([^>]*)-->', src)
    meta = m.group(1) if m else ''
    height = int((re.search(r'height=(\d+)', meta) or [0, 300])[1])
    sub = (re.search(r'subtitle="([^"]*)"', meta) or [0, ''])[1]
    doc = f'<!doctype html><html><head><meta charset="utf-8">{HEAD}</head><body>{src}</body></html>'
    cards.append(f'''<section id="{name}">
<header><h2>{name}</h2><span>{html.escape(sub)}</span></header>
<iframe title="{name} preview" loading="lazy" style="height:{height}px" srcdoc="{html.escape(doc)}"></iframe>
</section>''')

nav = ''.join(f'<a href="#{p.split("/")[1]}">{p.split("/")[1]}</a>' for p in sorted(glob.glob('components/*/preview.html')))
page = f'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Proof design system</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&family=Martian+Mono:wdth,wght@75..112,100..800&display=swap">
<link rel="stylesheet" href="tokens.css">
<style>
body{{margin:0;background:var(--bg);color:var(--fg);font-family:var(--font-sans)}}
h1{{font-size:56px;letter-spacing:-0.035em;margin:0;padding:var(--space-4)}}
nav{{display:flex;flex-wrap:wrap;gap:var(--space-2) var(--space-3);padding:var(--space-3) var(--space-4);border-block:var(--border-structural) solid var(--rule);font:11px var(--font-mono);text-transform:uppercase}}
nav a,button{{color:var(--link)}}
button{{font:11px var(--font-mono);text-transform:uppercase;background:none;border:var(--border-structural) solid var(--rule);color:var(--fg);padding:var(--space-1) var(--space-2);cursor:pointer}}
section{{border-bottom:var(--border-structural) solid var(--rule)}}
header{{display:flex;gap:var(--space-3);align-items:baseline;padding:var(--space-3) var(--space-4)}}
h2{{margin:0;font-size:20px;letter-spacing:-0.02em}}
header span{{font:11px var(--font-mono);text-transform:uppercase;color:var(--muted)}}
iframe{{display:block;width:100%;border:0;background:var(--bg)}}
</style>
</head>
<body>
<h1>Proof</h1>
<nav><button id="theme">Toggle dark</button>{nav}</nav>
{''.join(cards)}
<script>
document.getElementById('theme').onclick=function(){{
  var dark=document.documentElement.dataset.theme!=='dark', t=dark?'dark':'light';
  document.documentElement.dataset.theme=t;
  document.querySelectorAll('iframe').forEach(function(f){{try{{f.contentDocument.documentElement.dataset.theme=t}}catch(e){{}}}});
}};
</script>
</body>
</html>
'''
open('index.html', 'w').write(page)
print(len(cards), 'previews')
