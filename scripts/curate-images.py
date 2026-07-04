"""Cura as imagens extraidas do PDF: mapeia para projetos, otimiza para web."""
import os

from PIL import Image

BASE = os.path.join(os.path.dirname(__file__), "..")
SRC = os.path.join(BASE, "extracted", "images")
DST = os.path.join(BASE, "assets", "images")

# Mapeamento explicito: arquivo extraido -> destino relativo em assets/images
MAP = {
    # Hero / geral
    "p003-01-1536x1024.png__hero": ("hero-bg.jpg", 1920),
    "p001-01-3046x2031.jpeg": ("texture-olive.jpg", 1400),
    # Eco Resort (Zagaia, Bonito/MS) p3-6
    "p003-01-1536x1024.png": ("projects/eco-resort/cover.jpg", 1600),
    "p004-02-1536x1024.png": ("projects/eco-resort/01.jpg", 1600),
    "p004-03-1229x820.png": ("projects/eco-resort/02.jpg", 1600),
    "p005-01-1536x1024.png": ("projects/eco-resort/03.jpg", 1600),
    "p005-02-1383x922.png": ("projects/eco-resort/04.jpg", 1600),
    "p006-01-922x615.png": ("projects/eco-resort/05.jpg", 1600),
    "p006-02-1383x922.png": ("projects/eco-resort/06.jpg", 1600),
    "p006-03-922x615.png": ("projects/eco-resort/07.jpg", 1600),
    # Estrela do Formoso p7-9
    "p007-01-1536x1024.png": ("projects/estrela-do-formoso/cover.jpg", 1600),
    "p008-01-1076x717.png": ("projects/estrela-do-formoso/01.jpg", 1600),
    "p008-02-1076x717.png": ("projects/estrela-do-formoso/02.jpg", 1600),
    "p009-01-1076x717.png": ("projects/estrela-do-formoso/03.jpg", 1600),
    "p009-02-1076x717.png": ("projects/estrela-do-formoso/04.jpg", 1600),
    # Pousada Olho D'Agua p10-12
    "p010-01-1536x1024.png": ("projects/pousada-olho-dagua/cover.jpg", 1600),
    "p011-01-1076x717.png": ("projects/pousada-olho-dagua/01.jpg", 1600),
    "p011-02-1076x717.png": ("projects/pousada-olho-dagua/02.jpg", 1600),
    "p012-02-1076x717.png": ("projects/pousada-olho-dagua/03.jpg", 1600),
    "p012-03-1076x717.png": ("projects/pousada-olho-dagua/04.jpg", 1600),
    # Chales p13-14
    "p013-01-1536x1024.png": ("projects/chales/cover.jpg", 1600),
    "p014-01-1536x1024.png": ("projects/chales/01.jpg", 1600),
    "p014-02-820x1229.png": ("projects/chales/02.jpg", 1200),  # retrato
    # Nascente Azul p15-16
    "p015-01-1536x1024.png": ("projects/nascente-azul/cover.jpg", 1600),
    "p016-01-1076x717.png": ("projects/nascente-azul/01.jpg", 1600),
    "p016-02-1076x717.png": ("projects/nascente-azul/02.jpg", 1600),
    # Casa de Fazenda p17-19
    "p017-01-1536x1024.png": ("projects/casa-de-fazenda/cover.jpg", 1600),
    "p018-01-1076x717.png": ("projects/casa-de-fazenda/01.jpg", 1600),
    "p018-03-1076x717.png": ("projects/casa-de-fazenda/02.jpg", 1600),
    "p019-01-922x615.png": ("projects/casa-de-fazenda/03.jpg", 1600),
    "p019-02-922x615.png": ("projects/casa-de-fazenda/04.jpg", 1600),
    "p019-03-922x615.png": ("projects/casa-de-fazenda/05.jpg", 1600),
    "p019-04-922x615.png": ("projects/casa-de-fazenda/06.jpg", 1600),
    # Sobre
    "p014-02-820x1229.png__about": ("about-portrait.jpg", 1200),
    "p018-01-1076x717.png__about": ("about-studio.jpg", 1600),
}

total = 0
for src_name, (rel, max_w) in MAP.items():
    real_src = src_name.split("__")[0]
    src_path = os.path.join(SRC, real_src)
    dst_path = os.path.join(DST, rel.replace("/", os.sep))
    os.makedirs(os.path.dirname(dst_path), exist_ok=True)
    im = Image.open(src_path).convert("RGB")
    if im.width > max_w:
        im = im.resize((max_w, round(im.height * max_w / im.width)), Image.LANCZOS)
    im.save(dst_path, "JPEG", quality=82, progressive=True, optimize=True)
    kb = os.path.getsize(dst_path) // 1024
    total += kb
    print(f"{rel}  {im.width}x{im.height}  {kb} KB")

# OG image 1200x630 (crop central do hero)
im = Image.open(os.path.join(SRC, "p003-01-1536x1024.png")).convert("RGB")
tw, th = 1200, 630
scale = max(tw / im.width, th / im.height)
im2 = im.resize((round(im.width * scale), round(im.height * scale)), Image.LANCZOS)
left = (im2.width - tw) // 2
top = (im2.height - th) // 2
im2.crop((left, top, left + tw, top + th)).save(
    os.path.join(DST, "og-home.jpg"), "JPEG", quality=85, progressive=True, optimize=True
)
print("og-home.jpg  1200x630")

# Cor media da textura (para tokens.css)
tex = Image.open(os.path.join(SRC, "p001-01-3046x2031.jpeg")).convert("RGB").resize((50, 50))
px = list(tex.getdata())
avg = tuple(sum(c[i] for c in px) // len(px) for i in range(3))
print(f"\nTextura verde-oliva media: rgb{avg} = #{avg[0]:02x}{avg[1]:02x}{avg[2]:02x}")
print(f"TOTAL otimizado: {total/1024:.1f} MB")
