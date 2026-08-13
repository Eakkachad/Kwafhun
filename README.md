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
2. **Learn** — แพลตฟอร์มแบบ Netflix/Coursera: คอร์สเรียนรู้ได้ทันที + Gamification (Achievement/Reward) เพื่อสร้างแรงจูงใจต่อเนื่อง
3. **Plan** — RAG AI สร้าง "1-Page Dream Roadmap" ส่วนบุคคล จากชุดข้อมูลที่ทีมป้อน/ได้รับอนุญาต (สพฐ. + กสศ. + AIS LearnDi + TCAS)
4. **Connect** — Opportunity Router เชื่อมเด็กยากจนเข้าหาทุน กสศ. / มหาวิทยาลัย + พี่เลี้ยง (Mentor Network) + Sponsorship ที่นั่ง Bootcamp ระดับประเทศ

## กลยุทธ์ Go-To-Market (City-First Strategy)

> เรา **ไม่เริ่มจากชนบท** แต่เริ่มจาก **เมืองหัวเมือง** ที่มีมหาวิทยาลัย/ทรัพยากรบุคคลในพื้นที่แล้ว
> เพราะในโรงเรียนหัวเมืองยังมีเด็กจำนวนมากที่ "ยังไม่รู้ว่าจะไปทางไหน" เช่นเดียวกับปัญหาเดิม แต่เรามี:
> กำลังคน (นิสิต/คณาจารย์), สถานที่/ค่าย Open House, และโครงข่ายใกล้มหาวิทยาลัยเครือข่าย (ม.บูรพา / ม.นเรศวร / มข. / มช.)

- **เมืองนำร่อง:** ชลบุรี (บูรพา), พิษณุโลก (นเรศวร), ขอนแก่น (มข.), เชียงใหม่ (มช.)
- **กลไกกิจกรรม:** ให้เด็ก **ได้รู้ → ได้ลอง → ได้ทำจริง** เพื่อช่วยให้ "ตัดตัวเลือก" อาชีพที่ไม่อยากไปแทนที่จะไม่รู้เลย
- **ระบบคัดกรอง (Screening) — ทำในห้องเรียน ไม่ใช่ที่บ้าน:** คอร์สพื้นฐาน + แบบวัดความสนใจถูกจัดเป็นกิจกรรมในคาบเรียน (ทุกคนเท่าเทียมกัน ไม่เอื้อผู้มีทรัพยากร/เวลาที่บ้าน) → คัดเฉพาะเด็กที่สนใจจริง (ประหยัดงบ ไม่จ่ายเปล่า) โดยไม่ซ้ำรอย bias ของระบบ Portfolio ที่เราวิพากษ์วิจารณ์
- **บริหารงบ:** ใช้ทรัพยากรที่มีอยู่แล้วของมหาวิทยาลัย/สพฐ. + จัดลำดับให้กิจกรรมทำได้ด้วยงบต่อหัวต่ำ

## โมเดลคุณค่า (Value Engine)

```
Discover (Netflix of Dreams) ─► Learn (Coursera-style คอร์ส + Gamification)
      └─► Screening ในคาบเรียน: คัดเด็กที่สนใจจริง (ทุกคนเรียนเท่ากันในห้อง)
            └─► Activities/ค่ายกับมหาวิทยาลัยเครือข่าย (ได้ลอง ได้ทำจริง)
                  └─► Achievement/แต้มสะสม → Reward + Sponsorship ที่นั่ง Bootcamp ระดับประเทศ (2–3 ที่นั่ง)
                        └─► Talent Pipeline → ทุน กสศ./มหาลัย → กำลังคนทักษะสูง
```

## ตัวเลขหลัก / Key Numbers

| สถิติ | ค่า | หมายเหตุ |
|---|---|---|
| นักเรียนยากจน/ยากจนพิเศษ | 1.8 ล้านคน | กสศ. |
| รายได้เฉลี่ยครัวเรือนยากจนพิเศษ | 34–41 บาท/วัน | กสศ. |
| โอกาสเรียนต่ออุดมศึกษา Q1 vs Q5 | 10–12.4% vs 65–80% | กสศ. |
| ฝันกระจุก 10 อาชีพดั้งเดิม (OECD PISA) | 47–50% | OECD |
| ขาดแคลนแรงงานทักษะสูง (NESDC) | 300,000–500,000 คน | NESDC |
| ความสูญเสียจาก Skill Mismatch (TDRI) | 3.3 ล้านล้านบาท | TDRI |
| นักเรียน ม.ปลาย ยังไม่รู้จะเรียนอะไร | 59–60% | survey ⚠️ |
| ชั่วโมงแนะแนวต่อเด็กต่อปี | 10–15 ชม. | UNICEF |
| งานเอกสารครู | 42% ของเวลาทำงาน | สสค./TALIS |
| ที่นั่งมหาวิทยาลัย vs ผู้สมัคร | ที่นั่งมากกว่า | The MATTER |

> ดูข้อมูลอ้างอิงเต็มใน [`data/stats/stats.th.json`](data/stats/stats.th.json) และผล research ใน [`docs/04-research/pain-points.md`](docs/04-research/pain-points.md)

## เริ่มอ่านจากไหน / Quick Start

1. [`docs/01-pitch/pitch-deck.md`](docs/01-pitch/pitch-deck.md) — โครงสร้างสไลด์ 10 หน้า
2. [`docs/02-application/`](docs/02-application/) — เนื้อหาพร้อมคัดลอกลงใบสมัคร
3. [`docs/03-architecture/risk-defense.md`](docs/03-architecture/risk-defense.md) — จุดเสี่ยง/Overclaim และวิธีแก้
