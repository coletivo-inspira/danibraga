"""Extrai texto e imagens do PDF do portfolio para a pasta extracted/."""
import json
import os
import sys

import pymupdf

PDF = os.path.join(os.path.dirname(__file__), "..", "docs", "portfolio.pdf")
OUT = os.path.join(os.path.dirname(__file__), "..", "extracted")
IMG_OUT = os.path.join(OUT, "images")

os.makedirs(IMG_OUT, exist_ok=True)

doc = pymupdf.open(PDF)
print(f"Paginas: {len(doc)}")

pages_text = []
img_index = []
seen_xrefs = set()

for pno, page in enumerate(doc, start=1):
    text = page.get_text("text").strip()
    pages_text.append({"page": pno, "text": text})

    for i, info in enumerate(page.get_images(full=True), start=1):
        xref = info[0]
        if xref in seen_xrefs:
            continue
        seen_xrefs.add(xref)
        try:
            base = doc.extract_image(xref)
        except Exception as e:  # noqa: BLE001
            print(f"  p{pno} img{i} xref{xref}: ERRO {e}")
            continue
        ext = base["ext"]
        w, h = base["width"], base["height"]
        if w < 100 or h < 100:
            continue  # ignora icones/ornamentos minusculos
        name = f"p{pno:03d}-{i:02d}-{w}x{h}.{ext}"
        with open(os.path.join(IMG_OUT, name), "wb") as f:
            f.write(base["image"])
        img_index.append({"page": pno, "file": name, "w": w, "h": h})

with open(os.path.join(OUT, "text.json"), "w", encoding="utf-8") as f:
    json.dump(pages_text, f, ensure_ascii=False, indent=2)

with open(os.path.join(OUT, "text.txt"), "w", encoding="utf-8") as f:
    for p in pages_text:
        f.write(f"\n========== PAGINA {p['page']} ==========\n{p['text']}\n")

with open(os.path.join(OUT, "images.json"), "w", encoding="utf-8") as f:
    json.dump(img_index, f, ensure_ascii=False, indent=2)

print(f"Imagens extraidas: {len(img_index)}")
print(f"Paginas com texto: {sum(1 for p in pages_text if p['text'])}")
