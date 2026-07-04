import json, os
base = os.path.join(os.path.dirname(__file__), "..", "extracted")
d = json.load(open(os.path.join(base, "images.json"), encoding="utf-8"))
for p in sorted(set(i["page"] for i in d)):
    imgs = [i for i in d if i["page"] == p]
    print(f"p{p:02d} ({len(imgs)}):", ", ".join(f"{i['w']}x{i['h']}" for i in imgs))
total_mb = sum(os.path.getsize(os.path.join(base, "images", i["file"])) for i in d) / 1e6
print(f"TOTAL: {len(d)} imgs, {total_mb:.0f} MB")
