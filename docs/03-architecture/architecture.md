# สถาปัตยกรรมระบบ "คว้าฝัน" (System Architecture)

> สำหรับ Developer / Data / Compliance — ใช้ประกอบ PRD และนำเสนอ

## ภาพรวม / High-Level Flow

```
[ โครงสร้างระบบ "คว้าฝัน" — City-First Edition ]

  1. Interactive Discovery (In-Classroom Activity)
     ├─► คลังสื่อ Crowdsourced Short-Video จาก Role Model Creators
     └─► แสดงผลผ่าน AIS PLAYBOX / PWA (Offline-Ready) ในคาบแนะแนว 1 ชม./สัปดาห์

  2. Learning Platform (Netflix/Coursera-style) — เริ่มเรียนได้ทันที
     ├─► คอร์สสั้นจากมหาวิทยาลัยเครือข่าย / Creator / AIS LearnDi
     ├─► Gamification: Achievement, แต้มสะสม, Badge, Leaderboard
     └─► Screening: ต้องเรียนคอร์สพื้นฐาน + แบบวัดความสนใจก่อนสมัครค่าย/กิจกรรม

  3. RAG AI Pathway & Opportunity Router (Engine)
     ├─► AI RAG ดึงข้อมูลจากฐานข้อมูลจริง: สพฐ. + ทุน กสศ. + AIS LearnDi + TCAS
     └─► สร้าง "1-Page Dream Roadmap" รายบุคคล (พิมพ์เป็นกระดาษ/ดาวน์โหลดได้)

  4. Human-in-the-Loop Ecosystem (Support System)
     ├─► Teacher Dashboard: สรุปรายงานความสนใจห้องเรียนใน 1 คลิก (ลดงานเอกสารครู)
     ├─► Opportunity Pipeline: ส่งโปรไฟล์เด็กที่ผ่าน screening + สนใจจริงไปยังทุน กสศ./มหาวิทยาลัย
     ├─► Activity/ค่าย Hub: จับคู่เด็กกับค่าย Open House ของมหาวิทยาลัยเครือข่าย (บูรพา/นเรศวร/มข/มช)
     └─► Volunteer Mentor Network: พี่เลี้ยงนิสิตนักศึกษาให้คำปรึกษาผ่าน LINE OA
```

## องค์ประกอบหลัก / Key Components

### 1. Interactive Discovery (Frontend/PWA)
- แอป Progressive Web App (PWA) + Service Worker Caching
- ครูดาวน์โหลดเนื้อหาล่วงหน้าผ่าน AIS 5G → เปิดเล่น Offline ในห้องเรียน
- กิจกรรมกลุ่มผ่าน QR Code (ไม่ต้องสมัครสมาชิก — Zero-Setup)

### 2. Learning Platform & Gamification (Frontend/Backend)
- Netflix/Coursera-style UI: คอร์สเรียนเริ่มได้ทันที, Track ความคืบหน้า
- Gamification: Achievement, Badge (อ้างอิง AIS Digital Badge), แต้มสะสม, Reward/ของขวัญ
- Screening Engine: คะแนนคอร์สพื้นฐาน + แบบวัดความสนใจ → คัดเด็กที่สนใจจริงก่อนเข้าร่วมค่าย/กิจกรรม (กันงบจ่ายเปล่า)
- Sponsorship Tracker: ติดตามเด็กที่เก็บ Achievement ครบเกณฑ์ → แมตช์ที่นั่ง Bootcamp ระดับประเทศ (2–3 ที่นั่ง)

### 3. RAG AI Engine (Backend/AI)
- Retrieval-Augmented Generation ดึงจากฐานข้อมูลจริงเท่านั้น
- แหล่งข้อมูล: หลักสูตร สพฐ. / ทุน กสศ. / TCAS / AIS LearnDi
- Output: 1-Page Dream Roadmap + แมตช์ทุน Opportunity Pipeline

### 3. Human-in-the-Loop
- Teacher Dashboard → สรุป PDF รายงานรายห้อง 1 คลิก
- Volunteer Mentor Network → แชตผ่าน LINE OA

## การบูรณาการ AIS (AIS Technology Integration)

| เทคโนโลยี AIS | บทบาท | Synergy |
|---|---|---|
| AIS 5G / Fibre / Edge | ส่งมอบคอนเทนต์ + ครูดาวน์โหลดล่วงหน้า | แก้ Digital Divide |
| AIS PLAYBOX / PLAY | จอแสดงผลในห้องเรียน | เป็น EdTech Terminal |
| AIS LearnDi | คอร์สทักษะดิจิทัล + Digital Badge | Talent Pipeline ตั้งแต่ ม.ต้น |
| AIS Cloud | โฮสต์ RAG AI + ฐานข้อมูล | ความปลอดภัยระดับ Enterprise |
| LINE OA / API | ส่ง Teacher Report + Mentor Chat | Automation + ต่อเนื่อง |

## ความปลอดภัยข้อมูล / PDPA

- **Anonymous-First System:** ไม่บังคับชื่อจริง/เลขบัตรประชาชน
- รหัสจำลองรายห้องเรียน (ไม่เชื่อมโยงตัวบุคคล)
- ขอ Consent จากผู้ปกครอง (เด็กอายุ <15 ปี ตาม PDPA)
- ไม่จัดเก็บข้อมูลนำไปใช้เชิงพาณิชย์โดยไม่ได้รับอนุญาต

## กลยุทธ์การลงพื้นที่ (City-First GTM)

| ขั้นตอน | กลไก | ค่าใช้จ่าย/งบ |
|---|---|---|
| 1. เปิดคาบแนะแนว Discovery ในโรงเรียนหัวเมือง | ใช้ AIS PLAYBOX/PWA ฟรี | ต่ำ |
| 2. เด็กเรียนคอร์สพื้นฐานบนแพลตฟอร์ม | คอร์สจากมหาวิทยาลัย/creator | ต่ำ-ฟรี |
| 3. คัดกรองเด็กที่สนใจจริง (คะแนน + แบบวัด) | Screening Engine | ฟรี (ระบบ) |
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
