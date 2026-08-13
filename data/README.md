# Data Bank — คลังข้อมูลสถิติอ้างอิง

> ฐานข้อมูลกลางของโครงการ "คว้าฝัน" — **ทุกตัวเลขที่ใช้ในสไลด์/เอกสารต้องมาจากที่นี่**

## โครงสร้าง

```
data/
├── stats/
│   ├── stats.th.json      # คลังสถิติหลัก (ทุก Pillar) พร้อม source
│   ├── sources.tsv        # ตารางแหล่งอ้างอิง (ตรวจสอบแล้ว/ยัง)
│   └── README.md          # ไฟล์นี้
```

## กฎการใช้ตัวเลข

1. **ห้ามพิมพ์ตัวเลขลอยๆ** ใน Pitch / ใบสมัคร ให้ copy จาก `stats.th.json` เสมอ
2. ตัวเลขที่ `verified: false` จะมีแท็ก `[UNVERIFIED]` — **ห้ามนำไปพูดต่อกรรมการ** จนกว่า Researcher จะหาหลักฐานรองรับ
3. ถ้าพบสถิติใหม่ → เพิ่มเข้า JSON พร้อม `source` + `source_ref` ครบ แล้วตั้ง PR ให้ Researcher review

## สถิติที่ยังต้องตรวจ (UNVERIFIED)

รายการเหล่านี้ใช้ในเอกสารอยู่แต่ยังไม่มีเอกสารต้นทางแน่ชัด — เป็นงานเร่งด่วนของ Researcher:

| id | สถิติ | สถานะ |
|---|---|---|
| `intrinsic_motivation_retention` | Intrinsic Motivation → Retention Rate สูงขึ้น | ❌ ยังไม่มี paper |
| `informal_low_skill_labor` | แรงงานนอกระบบ > 50% | ❌ ยังไม่มี paper |
| `guidance_teacher_shortage` | 60–70% ไม่มีครูแนะแนวตรงสาย | ❌ ยังไม่มี paper |
| `teacher_paperwork_load` | ครูใช้เวลาเอกสาร 30–40% | ❌ ยังไม่มี paper |
| `primary_target_volume` | กลุ่มเป้าหมาย 3.2 ล้านคน | ❌ คำนวณเอง |
| `teacher_target` | ครู 150,000 คน | ❌ คำนวณเอง |

> 📌 หลักการประเมิน: สถิติจากรายงานองค์กร (กสศ., NESDC, TDRI, OECD) เชื่อถือได้ รายการอื่นต้องหา primary source
