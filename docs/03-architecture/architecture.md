# สถาปัตยกรรมระบบ "คว้าฝัน" (System Architecture)

> สำหรับ Developer / Data / Compliance — ใช้ประกอบ PRD และนำเสนอ

## ภาพรวม / High-Level Flow

```
[ โครงสร้างระบบ "คว้าฝัน" ]

  1. Interactive Discovery (In-Classroom Activity)
     ├─► คลังสื่อ Crowdsourced Short-Video จาก Role Model Creators
     └─► แสดงผลผ่าน AIS PLAYBOX / PWA (Offline-Ready) ในคาบแนะแนว 1 ชม./สัปดาห์

  2. RAG AI Pathway & Opportunity Router (Engine)
     ├─► AI RAG ดึงข้อมูลจากฐานข้อมูลจริง: สพฐ. + ทุน กสศ. + AIS LearnDi + TCAS
     └─► สร้าง "1-Page Dream Roadmap" รายบุคคล (พิมพ์เป็นกระดาษ/ดาวน์โหลดได้)

  3. Human-in-the-Loop Ecosystem (Support System)
     ├─► Teacher Dashboard: สรุปรายงานความสนใจห้องเรียนใน 1 คลิก (ลดงานเอกสารครู)
     ├─► Opportunity Pipeline: ส่งโปรไฟล์เด็กยากจนที่มีเป้าหมายตรงไปยังทุน กสศ.
     └─► Volunteer Mentor Network: พี่เลี้ยงนิสิตนักศึกษาให้คำปรึกษาผ่าน LINE OA
```

## องค์ประกอบหลัก / Key Components

### 1. Interactive Discovery (Frontend/PWA)
- แอป Progressive Web App (PWA) + Service Worker Caching
- ครูดาวน์โหลดเนื้อหาล่วงหน้าผ่าน AIS 5G → เปิดเล่น Offline ในห้องเรียน
- กิจกรรมกลุ่มผ่าน QR Code (ไม่ต้องสมัครสมาชิก — Zero-Setup)

### 2. RAG AI Engine (Backend/AI)
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

## โมเดลธุรกิจ / Business Model (B2B2G)

| ฝ่าย | ได้อะไร | จ่ายอะไร |
|---|---|---|
| กสศ. / สพฐ. | เครื่องมือชี้เป้าเด็กยากจน ลด dropout | งบพัฒนาทุนมนุษย์ |
| มหาวิทยาลัย | เข้าถึงเด็กตามความสนใจ ประชาสัมพันธ์ Open House | Sponsor / Matchmaking fee |
| AIS | ESG / ขยายฐาน 5G + LearnDi | โครงข่าย + Cloud |
| นักเรียน | ฟรี — Roadmap + ทุนแมตช์ | — |
