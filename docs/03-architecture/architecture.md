# สถาปัตยกรรมระบบ "คว้าฝัน" (System Architecture)

> สำหรับ Developer / Data / Compliance — ใช้ประกอบ PRD และนำเสนอ

## ภาพรวม / High-Level Flow

```
[ โครงสร้างระบบ "คว้าฝัน" — City-First Edition ]

  1. Interactive Discovery — "Netflix of Jobs" (In-Classroom Activity)
     ├─► คลังสื่อ "A Day With..." — 1 วันกับอาชีพจริง (Crowdsourced Short-Video จาก Role Model Creators)
     ├─► Recommendation: แนะนำอาชีพ "เกี่ยวข้องกัน" โดยเดินบน Knowledge Graph เดียวกับข้อ 3 (edge `related_to`/`requires_skill` — ไม่ใช่ LLM แยกต่างหาก) → แก้ปัญหาฝันกระจุก 10 อาชีพ
     └─► แสดงผลผ่าน AIS PLAYBOX / PWA (Offline-Ready) ในคาบแนะแนว 1 ชม./สัปดาห์

  2. Learning Platform (Netflix/Coursera-style) — เริ่มเรียนได้ทันที
     ├─► คอร์สสั้นจากมหาวิทยาลัยเครือข่าย / Creator / AIS LearnDi
     ├─► Gamification: Achievement, แต้มสะสม, Badge (ตามหลัก SDT — เน้น feedback เชิงบวก ไม่เน้นการแข่ง)
     └─► Screening: ทำในคาบเรียน — คอร์สพื้นฐาน + แบบวัดความสนใจที่ครูดำเนินการในห้อง (ทุกคนเท่ากัน) ก่อนสมัครค่าย/กิจกรรม

  3. Knowledge Graph + Constraint-Aware Matching Engine (แทน "RAG AI" ลอยๆ)
     ├─► Graph DB (ชั้นข้อมูล): Job ↔ Skill ↔ Pathway/Course ↔ Organization (มหาวิทยาลัย/กสศ./นายจ้างพันธมิตร/AIS LearnDi) ↔ Content ("A Day With...")
     ├─► Constraint-Based Screening: ตัดชุดตัวเลือก "เป็นไปไม่ได้" ทิ้งก่อน (hard constraint)
     │     แล้วค่อย score จัดลำดับตัวเลือกที่เหลือ (soft) — หลัก "veto, not vote"
     ├─► Grounded Data: ดึงจากชุดข้อมูลที่ทีมป้อน/ได้รับอนุญาตเท่านั้น (สพฐ., กสศ., TCAS, AIS LearnDi)
     ├─► Instant Update: เพิ่มข้อมูลทุน/คอร์สใหม่ → Roadmap อัปเดตได้ทันที (no retraining)
     └─► Output: **ใช้กราฟ+เอนจิ้นเดียวกันขับเคลื่อน 3 จุด** — Job Recommendation (Discovery) + "1-Page Dream Roadmap" (Plan) + แมตช์ทุน (Connect) — ทุกคำแนะนำ trace กลับที่มาข้อมูลได้

  4. Human-in-the-Loop Ecosystem (Support System)
     ├─► Teacher Dashboard: สรุปรายงานความสนใจห้องเรียนใน 1 คลิก (ลดงานเอกสารครู)
     ├─► Opportunity Pipeline: ส่งโปรไฟล์เด็กที่ผ่าน screening + สนใจจริงไปยังทุน กสศ./มหาวิทยาลัย
     ├─► Activity/ค่าย Hub: จับคู่เด็กกับค่าย Open House ของมหาวิทยาลัยเครือข่าย (บูรพา/นเรศวร/มข/มช)
     └─► Volunteer Mentor Network: พี่เลี้ยงนิสิตนักศึกษาให้คำปรึกษาผ่าน LINE OA (vet + กำกับดูแล)
```

## องค์ประกอบหลัก / Key Components

### 1. Interactive Discovery — "Netflix of Jobs" (Frontend/PWA)
- แอป Progressive Web App (PWA) + Service Worker Caching
- คอนเทนต์หลัก: **"A Day With..."** — วิดีโอสั้น "1 วันกับอาชีพจริง" (เช่น 1 วันกับ Data Scientist, 1 วันกับวิศวกรอวกาศ) พร้อม Interactive Quiz ซ้อนท้าย
- **Job Recommendation:** ทุกวิดีโอที่ดู/ชอบ คือการเดินบน Knowledge Graph เดียวกับข้อ 3 (edge `related_to`/`requires_skill`) → แนะนำอาชีพ "ใกล้เคียง" ที่เด็กอาจไม่เคยเห็น (เช่น ชอบ Data Scientist → เห็น ML Engineer, Bioinformatician, Actuary) — คำนวณด้วยกราฟ+ตัดกรอง ไม่ใช่ LLM แยก ผลจึงยัง deterministic/trace ได้
- ครูดาวน์โหลดเนื้อหาล่วงหน้าผ่าน AIS 5G → เปิดเล่น Offline ในห้องเรียน
- กิจกรรมกลุ่มผ่าน QR Code (ไม่ต้องสมัครสมาชิก — Zero-Setup)

### 2. Learning Platform & Gamification (Frontend/Backend)
- Netflix/Coursera-style UI: คอร์สเรียนเริ่มได้ทันที, Track ความคืบหน้า
- Gamification: Achievement, Badge (อ้างอิง AIS Digital Badge), แต้มสะสม, Reward/ของขวัญ
- Screening Engine: คะแนนคอร์สพื้นฐาน + แบบวัดความสนใจ → คัดเด็กที่สนใจจริงก่อนเข้าร่วมค่าย/กิจกรรม (กันงบจ่ายเปล่า)
- Sponsorship Tracker: ติดตามเด็กที่เก็บ Achievement ครบเกณฑ์ → แมตช์ที่นั่ง Bootcamp ระดับประเทศ (2–3 ที่นั่ง)

### 3. Knowledge Graph + Constraint-Aware Matching Engine (Backend/Algorithmic)
- **Knowledge Graph เป็นแกนกลางเดียว** ที่ขับเคลื่อนทั้ง Discovery (job recommendation), Learn (course→skill mapping) และ Plan/Connect (roadmap+ทุน) แทนการทำ 3 ระบบแยกกัน
  - **Node types:** `Job`, `Skill`, `Pathway/Course`, `Organization` (มหาวิทยาลัยเครือข่าย/กสศ./นายจ้างพันธมิตร/AIS LearnDi), `Content` (วิดีโอ "A Day With...")
  - **Edge types:** `requires_skill`, `leads_to` (job→job หรือ course→job), `offered_by`, `sponsors`, `related_to`
- **หลักการ "veto, not vote":** ตัดชุดตัวเลือกที่เข้าเงื่อนไขไม่ได้ (hard constraint: ระดับชั้น, เกณฑ์ทุน, พื้นที่, วิชาพื้นฐาน) ออกก่อน → แล้ว score จัดลำดับตัวเลือกที่เหลือ (soft: ความตรงกับความสนใจ/ความพร้อม) — ใช้หลักเดียวกันไม่ว่าจะแนะนำอาชีพ (Discovery) หรือทุน/คอร์ส (Plan)
- **Grounded Data Only:** ใช้ชุดข้อมูลที่ทีมป้อน/ได้รับอนุญาตเท่านั้น (หลักสูตร สพฐ. / ทุน กสศ. / TCAS / AIS LearnDi) — AI ไม่เจนข้อมูลเอง
- **Instant Update:** นำเข้าข้อมูลอาชีพ/ทุน/คอร์สใหม่ → แมตช์ได้ทันที (ไม่ต้อง retrain เหมือน LLM) — ลดต้นทุน + อัปเดตตลอดเวลา
- **Deterministic & Verifiable:** ผลลัพธ์ซ้ำได้ทุกครั้ง (audit ได้) และทุกคำแนะนำ trace กลับไปยังแหล่งข้อมูลจริงได้ — สร้างความน่าเชื่อถือกับ กสศ./สพฐ./ผู้ปกครอง
- **Edge/Local Ready:** engine เบา (constraint-based + graph lookup) → ประมวลผลที่ขอบเครือข่าย AIS/Local ได้ ไม่ต้องพึ่ง Cloud ทุกครั้ง
- Output: **3 จุดใช้กราฟ+เอนจิ้นเดียวกัน** — Job Recommendation (Discovery) + 1-Page Dream Roadmap (Plan) + แมตช์ทุน Opportunity Pipeline (Connect)

> **หมายเหตุ:** แนวคิดนี้ได้รับแรงบันดาลใจด้านสถาปัตยกรรมจากงานวิจัย constraint pruning / ranking-first-filter ใน `docs/04-research/deepman-integration.md` — ไม่ได้เป็นการนำโค้ดจากโปรเจกต์อื่นมาใช้

### 4. Human-in-the-Loop
- Teacher Dashboard → สรุป PDF รายงานรายห้อง 1 คลิก
- Volunteer Mentor Network → แชตผ่าน LINE OA (vetting + กำกับดูแล)

## การบูรณาการ AIS (AIS Technology Integration)

| เทคโนโลยี AIS | บทบาท | Synergy |
|---|---|---|
| AIS 5G / Fibre / Edge | ส่งมอบคอนเทนต์ + ครูดาวน์โหลดล่วงหน้า | แก้ Digital Divide |
| AIS PLAYBOX / PLAY | จอแสดงผลในห้องเรียน | เป็น EdTech Terminal |
| AIS LearnDi | คอร์สทักษะดิจิทัล + Digital Badge | Talent Pipeline ตั้งแต่ ม.ต้น |
| AIS Cloud | โฮสต์ Knowledge Graph DB + Constraint-Aware Engine | ความปลอดภัยระดับ Enterprise |
| LINE OA / API | ส่ง Teacher Report + Mentor Chat | Automation + ต่อเนื่อง |

## ความปลอดภัยข้อมูล / PDPA — ข้อมูลแยก 2 ชั้น (Two-Tier Data Model)

| ชั้นข้อมูล | ใช้เพื่ออะไร | เก็บอะไร | เงื่อนไข |
|---|---|---|---|
| **ชั้นวิเคราะห์ (Analytics Layer)** | AI Roadmap, วัดความสนใจ, achievement | Anonymous ID + รหัสจำลองรายห้อง | ไม่มีชื่อ/เลขบัตรประชาชน |
| **ชั้นรายงาน สพฐ. (Report Layer)** | Teacher Dashboard PDF ที่ครูยื่นประเมิน | ชื่อ-นามสกุลจริง, ห้องเรียน | ต้องได้รับ **Consent ทั้งผู้เยาว์และผู้ปกครองร่วมกัน** ก่อน (เด็กอายุเกิน 10 ปี ตาม PDPA มาตรา 20 — ไม่ใช่ 15 ปี) |

- **Anonymous-First:** ค่าเริ่มต้นของระบบคือไม่เก็บข้อมูลระบุตัวตน ยกเว้นที่จำเป็นต่อรายงาน สพฐ. เท่านั้น
- ขอ Consent จากผู้ปกครองล่วงหน้า (ผ่านโรงเรียน) ก่อนเก็บชั้นรายงาน
- **จุดตัดอายุที่ถูกต้องตาม PDPA มาตรา 20:** เด็กอายุ 10 ปีหรือต่ำกว่า — ผู้ปกครองยินยอมฝ่ายเดียว; เด็กอายุเกิน 10 ปี (ครอบคลุมกลุ่มเป้าหมายเราเกือบทั้งหมด ป.5–ม.3 อายุ ~10–15 ปี) — ต้องได้รับความยินยอมจาก**ทั้งตัวเด็กเองและผู้ปกครองร่วมกัน** (แก้ไข 14 ส.ค. 2569 — เดิมเอกสารเขียนผิดเป็น "เด็กอายุต่ำกว่า 15 ปี" ซึ่งไม่ใช่จุดตัดจริงของกฎหมาย)
- ไม่จัดเก็บข้อมูลนำไปใช้เชิงพาณิชย์โดยไม่ได้รับอนุญาต
- **การคุ้มครองเด็ก (Child Safety):** Mentor Network ต้องผ่าน **Vetting** (ตรวจประวัติ/ยืนยันตัวตน), แชตถูก monitor, มีช่องทางรายงานเหตุการณ์, ทำงานตามนโยบายคุ้มครองเด็กของสถานศึกษา

## กลยุทธ์การลงพื้นที่ (City-First GTM)

| ขั้นตอน | กลไก | ค่าใช้จ่าย/งบ |
|---|---|---|
| 1. เปิดคาบแนะแนว Discovery ในโรงเรียนหัวเมือง | ใช้ AIS PLAYBOX/PWA ฟรี | ต่ำ |
| 2. เรียนคอร์สพื้นฐาน + คัดกรอง **ในคาบเรียน** | คอร์สจากมหาวิทยาลัย/creator (ทุกคนเท่ากัน) | ต่ำ-ฟรี |
| 3. คัดกรองเด็กที่สนใจจริง (คะแนน + แบบวัดในห้อง) | Screening Engine | ฟรี (ระบบ) |
| 4. จัดค่าย/กิจกรรมกับมหาวิทยาลัยเครือข่าย | ใช้สถานที่+นิสิต+คณาจารย์ที่มีอยู่แล้ว | ต่อหัวต่ำ |
| 5. มอบ Achievement + Sponsorship Bootcamp | 2–3 ที่นั่ง/รุ่น | ระดมทุนจาก Sponsor |

**หลักการบริหารงบ:** ใช้ทรัพยากรที่มีอยู่แล้วของมหาวิทยาลัย/สพฐ./AIS ให้สูงสุด ก่อนใช้เงินของตัวเอง + Screening ก่อนจ่าย

## โมเดลธุรกิจ / Business Model (B2B2G)

| ฝ่าย | ได้อะไร | จ่ายอะไร |
|---|---|---|
| กสศ. / สพฐ. | เครื่องมือชี้เป้าเด็ก ลด dropout | งบพัฒนาทุนมนุษย์ |
| มหาวิทยาลัย | เข้าถึงเด็กตามความสนใจ ประชาสัมพันธ์ Open House ดึง Talent | Sponsor / Matchmaking fee + ใช้ทรัพยากรค่าย |
| AIS | ESG / ขยายฐาน 5G + LearnDi | โครงข่าย + Cloud |
| ผู้สนับสนุน Bootcamp | CSR + เข้าถึง Talent อายุน้อย | จ่ายค่าที่นั่ง Sponsorship (2–3 ที่นั่ง/รุ่น) |
| นักเรียน | ฟรี — คอร์ส + Roadmap + ทุนแมตช์ + โอกาส Bootcamp | — |
