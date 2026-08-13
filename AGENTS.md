# AGENTS.md — แนวทางทำงานร่วมกัน

> คู่มือนี้ใช้สำหรับมนุษย์และ AI Agent ในการทำงานใน repo นี้
> This file guides both human team members and AI agents.

## ภาษา / Language

- **เอกสาร (Docs):** ภาษาไทยเป็นหลัก ภาษาอังกฤษรอง (Bilingual: หัวข้อ/คำศัพท์เทคนิคเป็น EN)
- **Code (เมื่อเริ่มเขียน):** ตัวแปร/ฟังก์ชัน/คอมเมนต์เป็นภาษาอังกฤษเสมอ
- **Commit message:** ใช้ภาษาไทยได้ กระชับ ไม่เกิน 72 ตัวอักษร

## โครงสร้างทีมแนะนำ / Suggested Team Roles

| Role | ความรับผิดชอบ | โฟลเดอร์หลัก |
|---|---|---|
| Product Owner / Presenter | Pitch, Storytelling, ตอบกรรมการ | `docs/01-pitch/` |
| Researcher | ตรวจสอบสถิติ/แหล่งอ้างอิง ไม่ให้ Overclaim | `data/`, `docs/04-research/` |
| UX/UI Designer | Wireframe, Mockup, โลโก้, สไลด์ | `design/` |
| Developer (Full-stack) | PWA Prototype, RAG AI Demo | `app/` |
| Data/Compliance | โครงสร้างข้อมูล, PDPA, API design | `data/`, `docs/03-architecture/` |

## กฎสำคัญ / Golden Rules

1. **ห้าม Overclaim** — ทุกสถิติต้องมีแหล่งอ้างอิงตรวจสอบได้ใน `data/stats/` ถ้าไม่มี source ให้แปะแท็ก `[UNVERIFIED]` และถาม Researcher ก่อน
2. **ทุกตัวเลขต้องมาจาก Data Bank** — ห้ามพิมพ์ตัวเลขลอยๆ ในสไลด์/เอกสาร ให้ดึงจาก `data/stats/stats.th.json` เสมอ
3. **ก่อนปรับเอกสารสำคัญ** ให้ดู `docs/05-roadmap/` ว่าเราอยู่เฟสไหน เพื่อไม่ให้สัญญากับกรรมการเกินจริง
4. **แบ่งงานตามโฟลเดอร์** — หลีกเลี่ยงการแก้ไฟล์คนอื่นพร้อมกัน (conflict) ใช้ Pull Request / Branch ตาม `CONTRIBUTING.md`

## ขั้นตอนการทำงานก่อนเริ่ม Coding

> เป้าหมาย: ไอเดียแข็งแรงก่อนเริ่มโค้ด ตามตารางด้านล่าง

- [ ] ตรวจความถูกต้องของสถิติทั้งหมดใน Data Bank
- [ ] ตัดสินใจขอบเขต Prototype (สโคปแคบแต่ Demo ฉลุย ดีกว่ากว้างแต่พัง)
- [ ] เลือก Tech Stack (แนะนำ: Next.js/React PWA + RAG)
- [ ] เขียน Product Requirement (PRD) ใน `docs/03-architecture/`

## เครื่องมือ / Commands

ยังไม่มี build system — ระบบโค้ดจะเริ่มใน `app/` ภายหลัง เมื่อเริ่มแล้วให้เพิ่มคำสั่ง (dev/build/lint/test) ไว้ในส่วนนี้ทันที

```bash
# TODO: เมื่อเริ่ม app/ ให้บันทึกคำสั่งจริงตรงนี้
# npm run dev
# npm run build
# npm run lint
```
