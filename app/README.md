# app/ — Prototype (ยังไม่เริ่ม)

> สถานะ: **ยังไม่เริ่มโค้ด** — ทีมเน้นทำให้ไอเดียแข็งแรงก่อน (ดู `docs/05-roadmap/roadmap.md`)

## แผน Tech Stack (ข้อเสนอ)

- **Frontend:** Next.js / React (TypeScript) + Tailwind CSS — เป็น PWA
- **Engine:** Constraint-Aware Matching Engine (hard-constraint filter ก่อน → score/rank) + grounded data จากชุดข้อมูลที่ป้อนเอง — deterministic, instant-update, verifiable (แรงบันดาลใจด้านสถาปัตยกรรม: `docs/04-research/deepman-integration.md`)
- **Offline:** Service Worker Caching (PWA) — ครูดาวน์โหลดคอนเทนต์ล่วงหน้า + engine เบาประมวลผล Edge/Local ได้
- **Compliance:** Two-Tier PDPA — Anonymous (วิเคราะห์) + Consent (รายงาน สพฐ.)

## หน้าจอที่ต้องทำสำหรับ Demo (ขอบเขตแคบ)

1. **Discovery** — Netflix of Dreams (วิดีโอสั้น + Interactive Quiz)
2. **1-Page Dream Roadmap** — ผลลัพธ์ RAG AI (ดาวน์โหลด/พิมพ์ได้)
3. **Teacher Dashboard** — สรุป PDF รายงานห้องเรียน 1 คลิก

## เริ่มเมื่อ

- [ ] Data Bank ผ่าน Review (ไม่มี `[UNVERIFIED]` ค้างในข้อมูลที่ใช้ Demo)
- [ ] ตัดสินใจขอบเขต Demo กับ Product Owner
- [ ] เพิ่มคำสั่ง dev/build/lint/test ลงใน `AGENTS.md`
