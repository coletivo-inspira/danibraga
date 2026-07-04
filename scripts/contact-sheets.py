"""Gera folhas de contato (grades de miniaturas rotuladas) das imagens extraidas."""
import json
import os

from PIL import Image, ImageDraw

BASE = os.path.join(os.path.dirname(__file__), "..", "extracted")
IMG = os.path.join(BASE, "images")
OUT = os.path.join(BASE, "contact-sheets")
os.makedirs(OUT, exist_ok=True)

files = sorted(os.listdir(IMG))
THUMB = (320, 220)
COLS, ROWS = 4, 5
PER_SHEET = COLS * ROWS
CELL_H = THUMB[1] + 28

for s in range(0, len(files), PER_SHEET):
    batch = files[s : s + PER_SHEET]
    sheet = Image.new("RGB", (COLS * (THUMB[0] + 8) + 8, ROWS * (CELL_H + 8) + 8), "white")
    draw = ImageDraw.Draw(sheet)
    for idx, fname in enumerate(batch):
        col, row = idx % COLS, idx // COLS
        x = 8 + col * (THUMB[0] + 8)
        y = 8 + row * (CELL_H + 8)
        try:
            im = Image.open(os.path.join(IMG, fname))
            im.thumbnail(THUMB)
            sheet.paste(im, (x, y))
        except Exception as e:  # noqa: BLE001
            draw.text((x, y), f"ERRO {e}", fill="red")
        draw.text((x, y + THUMB[1] + 6), fname, fill="black")
    n = s // PER_SHEET + 1
    sheet.save(os.path.join(OUT, f"sheet-{n:02d}.png"))
    print(f"sheet-{n:02d}.png: {len(batch)} imgs")
