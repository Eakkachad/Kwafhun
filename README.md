# คว้าฝัน (Catch the Dream)

**The Netflix of Dreams & Career Navigator for Thai Youth**

> แพลตฟอร์มแนะแนวอาชีพที่เปลี่ยนคาบแนะแนวให้เป็นพื้นที่ค้นหาความฝัน
> ร่วมกับ AI Personalized Action Plan และ Opportunity Router เชื่อมเด็กยากจนเข้าหาทุนการศึกษา
> An interactive career-discovery & guidance platform with AI action plans and scholarship routing for underserved Thai students.

**สำหรับการแข่งขัน / For:** AIS JUMP THAILAND Hackathon 2026

---

## สถานะปัจจุบัน / Current Status

- [x] ฐานข้อมูลสถิติเชิงประจักษ์ (Data Bank) — `data/`
- [x] เอกสารไอเดีย ใบสมัคร และ Pitch Deck — `docs/`
- [x] โครงสร้างระบบและกลยุทธ์รับมือกรรมการ — `docs/03-architecture/`
- [ ] Prototype PWA (เริ่มหลังไอเดียแข็งแรง) — `app/`

## โครงสร้าง Repository

```
JUMP/
├── README.md            # ภาพรวมโครงการ (ไฟล์นี้)
├── AGENTS.md            # แนวทางทำงานร่วมกันของทีม (AI + คน)
├── CONTRIBUTING.md      # กระบวนการทำงานเป็นทีม
├── .gitignore
├── docs/
│   ├── 01-pitch/        # สไลด์ 10 หน้า + สคริปต์นำเสนอ
│   ├── 02-application/  # เนื้อหากรอกใบสมัคร Hackathon
│   ├── 03-architecture/ # สถาปัตยกรรมระบบ + การบูรณาการ AIS
│   ├── 04-research/     # Benchmark + แหล่งอ้างอิงที่ตรวจสอบแล้ว
│   └── 05-roadmap/      # แผนพัฒนาและ KPI
├── data/
│   ├── stats/           # คลังสถิติ (JSON/CSV) พร้อมแหล่งที่มา
│   └── README.md
├── design/
│   ├── slides/          # ไฟล์สไลด์
│   ├── logo/            # โลโก้ / แบรนด์
│   └── wireframes/      # Mockup หน้าจอ
└── app/                 # (วางแผน) PWA Prototype
```

## แกนไอเดีย / Core Idea

1. **Discover** — The Netflix of Dreams: คลังวิดีโอสั้นจาก Role Model จริง (Crowdsourced) เปิดในคาบแนะแนว 1 ชม./สัปดาห์
2. **Plan** — RAG AI สร้าง "1-Page Dream Roadmap" ส่วนบุคคล จากข้อมูลจริง (สพฐ. + กสศ. + AIS LearnDi + TCAS)
3. **Connect** — Opportunity Router เชื่อมเด็กยากจนเข้าหาทุน กสศ. / มหาวิทยาลัย + พี่เลี้ยง (Mentor Network)

## ตัวเลขหลัก / Key Numbers

| สถิติ | ค่า |
|---|---|
| นักเรียนยากจน/ยากจนพิเศษ | 1.8 ล้านคน |
| รายได้เฉลี่ยครัวเรือนยากจนพิเศษ | 34–41 บาท/วัน |
| โอกาสเรียนต่ออุดมศึกษา Q1 vs Q5 | 10–12.4% vs 65–80% |
| ฝันกระจุก 10 อาชีพดั้งเดิม (OECD PISA) | 47–50% |
| ขาดแคลนแรงงานทักษะสูง (NESDC) | 300,000–500,000 คน |
| ความสูญเสียจาก Skill Mismatch (TDRI) | 3.3 ล้านล้านบาท |
| โรงเรียนขยายโอกาส (สพฐ.) | 7,000+ แห่ง |

> ดูข้อมูลอ้างอิงเต็มใน [`data/stats/stats.th.json`](data/stats/stats.th.json)

## เริ่มอ่านจากไหน / Quick Start

1. [`docs/01-pitch/pitch-deck.md`](docs/01-pitch/pitch-deck.md) — โครงสร้างสไลด์ 10 หน้า
2. [`docs/02-application/`](docs/02-application/) — เนื้อหาพร้อมคัดลอกลงใบสมัคร
3. [`docs/03-architecture/risk-defense.md`](docs/03-architecture/risk-defense.md) — จุดเสี่ยง/Overclaim และวิธีแก้
