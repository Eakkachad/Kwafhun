# CONTRIBUTING.md — กระบวนการทำงานเป็นทีม

> ภาษาไทยเป็นหลัก / วิธีทำงานร่วมกันใน repo นี้

## Branching Strategy

ใช้ Git Flow แบบย่อ:

| Branch | ใช้สำหรับ |
|---|---|
| `main` | เวอร์ชันที่สมบูรณ์ นำเสนอได้ |
| `docs/*` | แก้เอกสาร (เช่น `docs/pitch`, `docs/data-bank`) |
| `feat/*` | ฟีเจอร์ใน `app/` (เช่น `feat/pwa-offline`) |

ตัวอย่าง:
```bash
git checkout -b docs/data-bank
# แก้ไขแล้ว
git add data/ docs/
git commit -m "เพิ่มสถิติกสศ. 1.8 ล้านคน"
git push origin docs/data-bank
# สร้าง Pull Request ใน GitHub
```

## กฎการ Commit

- ข้อความกระชับ ไม่เกิน 72 ตัวอักษร ภาษาไทยได้
- ใช้กริยาเปิด: เพิ่ม / แก้ / ลบ / ย้าย / ต่อเติม
- ตัวอย่าง: `เพิ่มตาราง KPI ระยะสั้นใน roadmap`

## ขั้นตอน Pull Request

1. ดึง `main` ล่าสุดก่อนเสมอ: `git pull origin main`
2. แก้ใน branch ของตัวเอง ห้าม push ตรง `main`
3. เปิด PR อธิบายว่าแก้อะไร / ทำไม / อ้างอิงไฟล์ไหน
4. ให้อย่างน้อย 1 คน (เช่น Researcher) review ก่อน merge

## ใครรับผิดชอบไฟล์ไหน (Ownership)

| โฟลเดอร์ | Owner | ข้อห้าม |
|---|---|---|
| `docs/01-pitch/` | Presenter | ห้ามแก้ตัวเลขโดยไม่ผ่าน Researcher |
| `docs/02-application/` | Product Owner | — |
| `docs/03-architecture/` | Developer + Compliance | — |
| `docs/04-research/` | Researcher | ห้ามแก้โดยไม่ระบุ source |
| `docs/05-roadmap/` | Product Owner | — |
| `data/stats/` | Researcher | ห้ามแก้โดยไม่มี source กำกับ |
| `design/` | Designer | — |
| `app/` | Developer | เริ่มเมื่อไอเดียพร้อม |

## Checklist ก่อน Merge

- [ ] ตัวเลขในไฟล์ทั้งหมดตรงกับ `data/stats/stats.th.json`
- [ ] เอกสารภาษาไทย-อังกฤษสอดคล้อง (หัวข้อเทคนิคเป็น EN)
- [ ] ไม่มี `[UNVERIFIED]` ค้างใน content ที่จะนำเสนอ
