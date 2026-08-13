# app/ — Prototype (ยังไม่เริ่ม)

> สถานะ: **ยังไม่เริ่มโค้ด** — ทีมเน้นทำให้ไอเดียแข็งแรงก่อน (ดู `docs/05-roadmap/roadmap.md`)

## แผน Tech Stack (ข้อเสนอ)

- **Frontend:** Next.js / React (TypeScript) + Tailwind CSS — เป็น PWA
- **AI:** RAG (Retrieval-Augmented Generation) ดึงข้อมูลจากฐานจริง (สพฐ., กสศ., AIS LearnDi, TCAS)
- **Offline:** Service Worker Caching (PWA) — ครูดาวน์โหลดคอนเทนต์ล่วงหน้า
- **Compliance:** Anonymous-First + PDPA Consent

## หน้าจอที่ต้องทำสำหรับ Demo (ขอบเขตแคบ)

1. **Discovery** — Netflix of Dreams (วิดีโอสั้น + Interactive Quiz)
2. **1-Page Dream Roadmap** — ผลลัพธ์ RAG AI (ดาวน์โหลด/พิมพ์ได้)
3. **Teacher Dashboard** — สรุป PDF รายงานห้องเรียน 1 คลิก

## เริ่มเมื่อ

- [ ] Data Bank ผ่าน Review (ไม่มี `[UNVERIFIED]` ค้างในข้อมูลที่ใช้ Demo)
- [ ] ตัดสินใจขอบเขต Demo กับ Product Owner
- [ ] เพิ่มคำสั่ง dev/build/lint/test ลงใน `AGENTS.md`
