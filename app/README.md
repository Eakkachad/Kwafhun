# app/ — Prototype "คว้าฝัน"

> สถานะ: **Prototype v0 (13 ส.ค. 2026)** — เปิดได้ทันทีด้วยเบราว์เซอร์ ไม่ต้อง build
> เปิด: `python3 -m http.server 8000` แล้วไปที่ `http://localhost:8000` (หรือเปิด `index.html` ตรงๆ)

## สิ่งที่ prototype นี้โชว์ (สโคปแคบ ฉลุย 4 หน้าจอ)

| หน้าจอ | ไฟล์หลัก | ทำอะไร |
|---|---|---|
| 1. Discovery | `index.html` → `#/discover` | Netflix-style วิดีโอสั้น + Interactive Quiz |
| 2. Learn + Badge | `#/learn` | คอร์สสั้น + สะสม Badge (SDT-style — ไม่มี leaderboard) |
| 3. Dream Roadmap | `#/roadmap` | 1-Page Roadmap จาก Constraint-Aware Matcher (ดาวน์โหลด/พิมพ์ได้) |
| 4. Teacher Dashboard | `#/teacher` | สรุป PDF รายงานรายห้อง 1 คลิก (ข้อมูล mock) |

## โครงสร้าง

```
app/
├── index.html          # SPA ตัวเดียว (hash routing)
├── css/styles.css      # ธีมเรียบง่าย
├── js/
│   ├── data.js         # ชุดข้อมูล (mock): คอร์ส/ทุน/ค่าย/อาชีพ
│   ├── engine.js       # Constraint-Aware Matching Engine (หลัก "veto, not vote")
│   ├── app.js          # routing + render
│   └── pdf.js          # สร้าง PDF แบบ print-friendly
├── manifest.json       # PWA meta (เปิดใช้ service worker ภายหลัง)
└── sw.js               # Service Worker (offline caching — เปิดภายหลัง)
```

## Constraint-Aware Engine (ใน `js/engine.js`)

```
matchProfile(profile, data):
  1. hard-filter: ตัดทุกตัวเลือกที่ขัดเงื่อนไข (ระดับชั้น / วิชาพื้นฐาน / พื้นที่ / ค่าใช้จ่าย / เกณฑ์ทุน)
  2. score: จัดลำดับตัวเลือกที่เหลือ ตามความตรงกับความสนใจ + ระยะทาง + โอกาส
  3. return: ลิสต์ "เป็นไปได้จริง" + เหตุผล trace ได้ (ทุกข้อ = เงื่อนไขที่ pass/fail)
```

- **Deterministic:** อินพุตเดียวกัน → ผลลัพธ์เดียวกันทุกครั้ง
- **Grounded:** ทุกคำแนะนำชี้กลับไปที่ record ใน `data.js` (traceable)
- **Instant Update:** เพิ่มคอร์ส/ทุนใน `data.js` → ระบบแมตช์ทันที ไม่ต้อง retrain

## แผนต่อ (หลัง Hackathon)

- [ ] ใช้ Next.js/React + Tailwind (จาก prototype นี้ย้าย)
- [ ] ต่อ PWA Service Worker (ไฟล์พร้อมแล้วใน repo)
- [ ] ย้าย data จาก mock → ชุดข้อมูลจริง (หลักสูตร สพฐ./ทุน กสศ. ที่ได้รับอนุญาต)
- [ ] เพิ่มคำสั่ง dev/build/lint/test ลงใน `AGENTS.md`

## Compliance

- ใช้ Anonymous ID + รหัสห้อง (ไม่มีชื่อ/เลขบัตรประชาชนใน prototype)
- Consent ผู้ปกครอง = หน้าแรกของ Teacher flow (สองชั้น: วิเคราะห์ anonymous / รายงาน สพฐ. มีตัวตน)
