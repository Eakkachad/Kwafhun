# สรุปรวมโครงการ "คว้าฝัน" (Catch the Dream) — All-in-One Summary

> เอกสารนี้รวบรวมสาระสำคัญจากทุกไฟล์ใน `docs/` ไว้ที่เดียว สำหรับอ่านเร็ว/ทวนก่อนส่งงานหรือซ้อมตอบกรรมการ
> รายละเอียดเต็มของแต่ละหัวข้อ ให้ตามลิงก์ไปที่เอกสารต้นทางท้ายแต่ละหมวด — ไฟล์นี้คือ**สรุป** ไม่ใช่ต้นทางของความจริง (source of truth คือ `data/stats/stats.th.json` และเอกสารในแต่ละโฟลเดอร์)
> อัปเดตล่าสุด: 13 ส.ค. 2026

---

## 1. ภาพรวมโครงการ (Positioning)

> **"คว้าฝัน" คือ Career GPS ของเด็กไทย** — แพลตฟอร์มที่เปลี่ยนคาบแนะแนว 1 ชั่วโมง/สัปดาห์ ให้เด็กค้นพบตัวเอง เรียนสกิลจริง สร้างแผนเฉพาะตัว และแมตช์เข้ากับทุน/ค่าย/อาชีพที่ "เป็นไปได้จริง" — โดยครูไม่ต้องทำงานเพิ่ม

- **ชื่อรอง:** The Netflix of Jobs / Dreams & Career Navigator for Thai Youth
- **แข่งขัน:** AIS JUMP THAILAND Hackathon 2026 — แทร็ก **Future Ready Talent**
- **ผู้ใช้ 4 กลุ่ม (B2B2G2C):** นักเรียน ป.5–ม.3 (ฟรี) / ครู-แนะแนว (Zero-Setup) / มหาวิทยาลัยเครือข่าย (พันธมิตร/ผู้จ่าย) / กสศ.-สพฐ.-สปอนเซอร์ (ผู้สนับสนุนงบ)
- **ไทม์ไลน์:** สมัครถึง **16 ส.ค. 2026** → Semi-Final 21 ส.ค. → Hack Days 4–6 ก.ย. → Demo Day 11 ก.ย.
- **เกณฑ์ตัดสิน:** Problem-Solution Fit 35% / Technical Capabilities 35% / Market Potential 20% / Presentation 10%

📄 รายละเอียดเต็ม: [`docs/03-architecture/PRD.md`](03-architecture/PRD.md) §1

---

## 2. ปัญหา (Problem — เข้มมาก อ้างอิงครบ)

**แกนปัญหา:** "เด็กมีฝันแต่ไม่มีเส้นทาง — และระบบแนะแนวไม่สามารถช่วยสร้างเส้นทางนั้นได้" เกิดจาก Dream Gap (Circumscription & Compromise, Gottfredson) ที่เด็กเริ่มตัดอาชีพทักษะสูงออกตั้งแต่อายุ 6–8 ปี เพราะไม่เห็น Role Model

| มิติ | ตัวเลข | แหล่งที่มา |
|---|---|---|
| นักเรียนยากจน/ยากจนพิเศษ | **1.8 ล้านคน** (รายได้เฉลี่ย 34–41 บาท/วัน) | กสศ. |
| โอกาสเรียนต่ออุดมศึกษา Q1 vs Q5 | **10–12.4% vs 65–80%** (ต่าง 5–6 เท่า) | กสศ. |
| ฝันกระจุกแค่ 10 อาชีพดั้งเดิม | **47–50%** ของเด็กอายุ 15 ปี | OECD PISA |
| อายุที่เริ่มตัดตัวเลือกอาชีพ | **6–8 ปี** | Gottfredson (1981/2002) |
| ขาดแคลนแรงงานทักษะสูง (STEM/AI/Digital) | **300,000–500,000 คน** | NESDC |
| ต้นทุน Skill Mismatch | **3.3 ล้านล้านบาท** | TDRI |
| นักเรียน ม.ปลาย ไม่รู้จะเรียนอะไร | **59–60%** (เป็น survey ไม่ใช่สถิติทางการ) | MGR Online / AdmissionPremium |
| เด็กนอกระบบการศึกษา | **1.02 ล้านคน (8.41%)** — 394,039 คนอยู่ในวัยบังคับ | กสศ. 2567 |
| ชั่วโมงแนะแนวจริงต่อปี | **10–15 ชม./ปี** (เป็นแค่กิจกรรมขั้นพื้นฐาน) | UNICEF Thailand |
| ครูใช้เวลานอกห้องเรียน | **42% ของเวลาทำงาน = 84 วัน/ปี** | สสค. 2563 / OECD TALIS 2018 |
| โรงเรียนขยายโอกาส (ป.1–ม.3) | **7,000+ แห่ง** | สพฐ. |
| ที่นั่งมหาวิทยาลัย vs ผู้สมัคร | ที่นั่ง**มากกว่า**ผู้สมัคร (ต้องเปิดรับตรงหลายรอบ) | The MATTER |

⚠️ **ตัวเลขที่ยังไม่ verified — ห้ามใช้จนกว่าจะหาแหล่งยืนยัน:** สัดส่วนโรงเรียนไม่มีครูแนะแนวตรงสาย (60–70%), สัดส่วนแรงงานนอกระบบ (50%), ผลของ Intrinsic Motivation ต่อ Retention Rate, กลุ่มเป้าหมาย 3.2 ล้านคน/ครู 150,000 คน (เป็นตัวเลขคำนวณเองของทีม)

📄 รายละเอียดเต็ม: [`docs/04-research/pain-points.md`](04-research/pain-points.md), [`docs/04-research/teacher-painpoints.md`](04-research/teacher-painpoints.md), [`data/stats/stats.th.json`](../data/stats/stats.th.json)

---

## 3. กลุ่มเป้าหมาย (Target)

- **หลัก:** นักเรียน ป.5–ม.3 อายุ 10–15 ปี เริ่มจากเมืองหัวเมือง (ชลบุรี/พิษณุโลก/ขอนแก่น/เชียงใหม่) ก่อนขยายสู่พื้นที่ห่างไกล — ประมาณ 3.2 ล้านคนทั่วประเทศ (ตัวเลขคำนวณเอง ยังไม่ verified)
- **พฤติกรรม:** คุ้นเคยวิดีโอสั้น/แพลตฟอร์มออนไลน์ แต่มีข้อจำกัดอุปกรณ์/เน็ตที่บ้าน → **การเรียน+คัดกรองต้องเกิดในคาบเรียน** ไม่ใช่ที่บ้าน (กันไม่ให้เด็กมีทรัพยากรได้เปรียบ)
- **รอง/ผู้เอื้ออำนวย:** ครู/ครูแนะแนว ~150,000 คนในโรงเรียน 7,000+ แห่ง (ตัวเลขคำนวณเอง), มหาวิทยาลัยเครือข่าย 4 แห่ง, กสศ./สพฐ./AIS Academy

📄 รายละเอียดเต็ม: [`docs/02-application/application-form.md`](02-application/application-form.md) §3

---

## 4. โซลูชัน (Solution — แกนของไอเดีย)

**"คว้าฝัน" = "Netflix of Jobs"** ขับเคลื่อนด้วย **Knowledge Graph + Constraint-Aware Matching Engine เดียว** (ไม่ใช่ RAG/LLM agent) ที่ป้อนทั้ง 4 ผลิตภัณฑ์ย่อย:

| ขั้นตอน | กลไก |
|---|---|
| **Discover** | "Netflix of Jobs" — คอนเทนต์ **"A Day With..."** (1 วันกับอาชีพจริง, Crowdsourced Role Model) + **Job Recommendation**: แนะนำอาชีพเกี่ยวข้องผ่าน Knowledge Graph (แก้ปัญหาฝันกระจุก 10 อาชีพ) |
| **Learn** | คอร์สสั้นสไตล์ Coursera จากมหาวิทยาลัยเครือข่าย/Creator/AIS LearnDi + Gamification ตามหลัก SDT (Badge/ความคืบหน้า ไม่เน้น leaderboard/ของรางวัลจับต้องได้) |
| **Plan** | **Constraint-Aware Matching Engine** ("veto, not vote") — ตัดตัวเลือกที่เป็นไปไม่ได้ก่อน (hard constraint) แล้วจัดลำดับที่เหลือ (soft) → **1-Page Dream Roadmap** |
| **Connect** | Opportunity Router — แมตช์เด็กเข้ากับทุน กสศ./มหาวิทยาลัย + Volunteer Mentor Network + Sponsorship ที่นั่ง Bootcamp |

### กลไกทางเทคนิค

- **Knowledge Graph** เป็นแกนกลางเดียว: Node = `Job`, `Skill`, `Pathway/Course`, `Organization`, `Content`; Edge = `requires_skill`, `leads_to`, `offered_by`, `sponsors`, `related_to`
- **Constraint-Aware Matching Engine** — deterministic, instant-update (ไม่ต้อง retrain เหมือน LLM), ทุกคำแนะนำ trace กลับที่มาข้อมูลได้, เบาพอรันที่ Edge/Local ได้ — **แรงบันดาลใจสถาปัตยกรรมจาก 3 โปรเจกต์วิจัย** (katgpt-rs ConstraintPruner, alice Adaptive Budget, AXIOM Knowledge Graph/instant-learning) โดยไม่ copy โค้ด ไม่อ้างตัวเลข performance ของเขา
- Screening (คัดกรองความสนใจ) เกิด**ในคาบเรียน**เท่านั้น — ป้องกันไม่ให้เอื้อเด็กมีทรัพยากรที่บ้าน (แก้ Portfolio Paradox)

### ทำไมไม่ใช่ RAG/LLM Agent (การตัดสินใจสำคัญ)

ทีมเปลี่ยนจากแนวคิด "RAG AI" เดิมมาเป็น Constraint-Aware Engine เพราะ: (1) build ได้จริงใน 3 วันของ Hackathon โดยไม่เสี่ยง LLM พังหน้า demo, (2) deterministic/verifiable → สร้างความน่าเชื่อถือกับข้อมูลเด็ก/PDPA, (3) เบาพอรัน Edge ได้ ไม่ต้องพึ่ง GPU/Cloud ตลอด, (4) แตกต่างจากทีมอื่นที่ทำ RAG ทั่วไป — **ห้ามพูดว่าเราสร้าง "AI agent" หรือใช้ LLM/RAG ในทุกเอกสาร**

📄 รายละเอียดเต็ม: [`docs/03-architecture/architecture.md`](03-architecture/architecture.md), [`docs/03-architecture/PRD.md`](03-architecture/PRD.md), [`docs/04-research/deepman-integration.md`](04-research/deepman-integration.md), [`docs/02-application/application-form.md`](02-application/application-form.md) §4

---

## 5. การบูรณาการเทคโนโลยี AIS

| เทคโนโลยี AIS | บทบาทในโซลูชัน |
|---|---|
| AIS 5G / Fibre / Edge | ส่งคอนเทนต์ + ครูดาวน์โหลดล่วงหน้า → แก้ Digital Divide |
| AIS PLAYBOX / PLAY | จอแสดงผลในห้องเรียน (EdTech Terminal) |
| **AIS LearnDi** | คอร์สทักษะดิจิทัล + **Digital Badge** — เส้นทางสะสม Badge สู่ Portfolio (กลไกกลาง ไม่ใช่ฟีเจอร์เสริม) |
| AIS Cloud | โฮสต์ Knowledge Graph DB + Constraint-Aware Engine (CPU-light → รัน Edge/Local ได้) |
| LINE OA / API | ส่ง Teacher Report + Mentor Chat (vetted + monitored) |

📄 รายละเอียดเต็ม: [`docs/03-architecture/architecture.md`](03-architecture/architecture.md)

---

## 6. ขอบเขต MVP สำหรับ Hackathon Demo (ทำได้จริงใน 3 วัน)

**In-Scope (P0):** Discovery (Netflix-style) · Constraint-Aware Matching (กรอกโปรไฟล์ → ลิสต์ที่เป็นไปได้จริง) · 1-Page Dream Roadmap (PDF) · Teacher Dashboard (PDF รายห้อง 1 คลิก) · Badge/ความคืบหน้า (P1)

**Out-of-Scope (พูดเป็น "vision" ได้ แต่ไม่ทำตอนนี้):** โมเดล ML/LLM ที่ต้อง train, ระบบสมัครสมาชิกจริง (ใช้ Anonymous ID + QR แทน), API จริงของ กสศ./สพฐ. (ใช้ข้อมูลจำลองที่ป้อนเอง), Payment/Bootcamp จริง

> หลักการ: Demo ฉลุย 4 หน้าจอ ดีกว่าโปรเจกต์พัง 10 หน้าจอ — กรรมการให้คะแนนความลึก ไม่ใช่จำนวนฟีเจอร์

**สถานะ Prototype ล่าสุด:** เริ่มมี `app/` จริงแล้ว (index.html, css, js, service worker, manifest) — ดูสถานะล่าสุดใน `app/README.md`

📄 รายละเอียดเต็ม: [`docs/03-architecture/PRD.md`](03-architecture/PRD.md) §4

---

## 7. โมเดลธุรกิจ (Business Model — B2B2G2C)

| Stream | ใครจ่าย | อ้างอิง/เมื่อไหร่ |
|---|---|---|
| B2B — มหาวิทยาลัย | Sponsor/Matchmaking fee ต่อค่ายที่ประกาศ | เมื่อประกาศค่าย |
| B2G — กสศ./สพฐ. | งบพัฒนาทุนมนุษย์/โครงการ | ต่อเนื่องรายปี |
| CSR — สปอนเซอร์ Bootcamp | ~45,000 บาท/รุ่น (TechUp) หรือผ่าน กสศ. (ลดหย่อนภาษี 2 เท่า) | ต่อรุ่น 2–3 ที่นั่ง |
| B2C — นักเรียน | **ฟรีตลอด** | — |

**ตรรกะ:** ไม่เก็บเงินเด็ก (ไม่ซ้ำรอยความเหลื่อมล้ำ) แต่เก็บจากฝั่งที่ได้ประโยชน์ธุรกิจ/ESG — โมเดล Sponsored Seat มีกลไกจริงรองรับแล้วในไทย (เซ็นทรัล "สานฝันทำเพื่อน้อง", Generation Thailand 79% ได้งานใน 6 เดือน, GenNX 85% ได้งาน)

📄 รายละเอียดเต็ม: [`docs/03-architecture/PRD.md`](03-architecture/PRD.md) §5, [`docs/04-research/pain-points.md`](04-research/pain-points.md) หมวด 5

---

## 8. KPI ที่วัดได้จริง (พร้อมเครื่องมือ + Baseline)

| KPI | เป้า | วิธีวัด |
|---|---|---|
| North Star — "ตัดสินใจได้" | baseline จาก 30 คนแรก | Pre-post 15 ข้อ อิง MDMSES/CDMSE/Career Decision Scale (สเกลมีลิขสิทธิ์ — ต้องขออนุญาต ห้ามก็อปคำถามลงสไลด์) |
| Engagement | > 60% เรียนคอร์สจบ ≥1 | Log ระบบ (Anonymous ID) |
| Screening yield | > 30% ผ่าน screening → เข้าค่ายจริง | ระบบแมตช์ + มหาวิทยาลัยยืนยัน |
| Teacher time | < 5 นาที/คาบ | จับเวลาในระบบ |
| Teacher reuse | > 50% ใช้ซ้ำเดือนถัดไป | ระบบ log |
| Pipeline | ≥ 10 คนแมตช์ทุนจริงใน pilot | รายงาน กสศ./มหาวิทยาลัย |

**กลุ่มเทียบ (Control):** แนะนำ **Staggered rollout** (2 เมืองเปิดก่อน 2 เมืองเป็นกลุ่มรอ 1 เทอม) — ไม่ใช่ "ไม่ได้รับความช่วยเหลือ" ลดข้อกังวลจริยธรรม

⚠️ เป้าตัวเลขทั้งหมด (>60%, >30% ฯลฯ) เป็น **สมมติฐานเริ่มต้น** ยังไม่มี pilot จริงวัด — ต้องแทนที่ด้วย baseline จริงทันทีที่มีข้อมูล

📄 รายละเอียดเต็ม: [`docs/03-architecture/PRD.md`](03-architecture/PRD.md) §6

---

## 9. กลยุทธ์ลงพื้นที่ & Roadmap (City-First)

- **หลักการ:** ไม่เริ่มจากชนบท — เริ่มจากเมืองหัวเมืองที่มีมหาวิทยาลัย/ทรัพยากรอยู่แล้ว (สอดคล้องโมเดล Area-Based Career Coach ของ กสศ. ที่พิสูจน์แนวทางมาแล้ว)
- **Phase 1 (6–12 เดือน):** Pilot 4 เมือง (ชลบุรี-บูรพา / พิษณุโลก-นเรศวร / ขอนแก่น-มข / เชียงใหม่-มช)
- **Phase 2 (1–3 ปี):** ขยายผ่าน สพฐ. 7,000+ แห่ง + AIS Academy — ต้องพิสูจน์ผลจาก pilot ก่อน ห้ามเคลมตัวเลขระดับชาติ (Q1 +15–20%, ลด dropout 30%) ว่าเป็นผลจริงจนกว่าจะมี RCT
- **Phase 3 (3–5 ปี):** Macro Impact — บรรเทา Skill Mismatch (บริบทของปัญหา ไม่ใช่ผลลัพธ์ที่วัดได้)
- **Pilot Outreach:** มี One-Pager + LOI Template + Talking Points พร้อมใช้คุยกับโรงเรียน/มหาวิทยาลัยแล้ว (ยังไม่มี MOU จริง — เป้าคือได้ LOI ก่อน Demo Day)

📄 รายละเอียดเต็ม: [`docs/05-roadmap/roadmap.md`](05-roadmap/roadmap.md), [`docs/02-application/pilot-outreach-kit.md`](02-application/pilot-outreach-kit.md)

---

## 10. ความเสี่ยง & แนวรับมือกรรมการ (Overclaim Guard)

| ประเด็นเสี่ยง | วิธีรับมือ |
|---|---|
| AI ช่วยแก้จนได้ทันที | เปลี่ยนเป็น "Opportunity Router" — แมตช์เข้าทุนที่มีอยู่แล้ว ไม่ใช่ผู้แจกเงิน |
| ผลิตวิดีโอ Interactive เองไม่ทัน | Crowdsourced Role Model Network + AI Content Tagging (ใช้วิดีโอที่ได้รับอนุญาต) |
| "ลดภาระครู 70%" | ห้ามพูดว่าเป็นผลจริง — พูดว่า "ออกแบบให้อัตโนมัติ" แล้ววัดผลจริงใน pilot |
| ติดตั้ง Hardware 7,000 โรงเรียน | ใช้ PWA + Service Worker + AIS 5G Edge แทน — ไม่ต้องซื้อฮาร์ดแวร์ |
| เด็กทำตามแผนเองไม่ได้ (ขาด Self-Regulation) | Volunteer Mentor Network (นิสิตทุน กสศ.) 15 นาที/สัปดาห์ |
| Screening ซ้ำรอย Portfolio Paradox | ย้ายคัดกรองเข้าคาบเรียน — ทุกคนเท่ากัน ไม่ใช่แข่งทรัพยากรที่บ้าน |
| AI Hallucination | Constraint-Aware Engine deterministic + grounded data เท่านั้น (ไม่ใช่ RAG แบบ black-box) |
| ลิขสิทธิ์วิดีโอ Crowdsourced | ใช้เฉพาะที่ได้รับอนุญาต/CC/ผลิตเอง + คัดกรองคอนเทนต์ก่อนเผยแพร่ |
| ความปลอดภัยเด็กใน Mentor Network | Vetting + Monitor + ช่องทางรายงาน + Consent ผู้ปกครองก่อนเสมอ |
| Gamification ทำลายแรงจูงใจภายใน | ออกแบบตาม SDT — Reward = โอกาสจริง (ค่าย/บูทแคมป์) ไม่ใช่ของรางวัลรายกิจกรรม |
| PDPA ข้อมูลเด็ก <15 ปี | **Two-Tier Data Model**: ชั้นวิเคราะห์ = Anonymous ID, ชั้นรายงาน สพฐ. = ต้องมี Consent ผู้ปกครอง |
| ตัวเลขมหภาค (3.3 ล้านล้าน, shortage) | เล่าเป็น "บริบทของปัญหา" เท่านั้น ไม่ใช่ผลลัพธ์ที่เราวัดได้ |
| แรงบันดาลใจสถาปัตยกรรมจากงานวิจัยทีม/เพื่อน (katgpt-rs, alice, AXIOM) | ห้ามอ้างว่า "ใช้" โปรเจกต์เหล่านั้นหรือโชว์ตัวเลข performance ของเขาเป็นของเรา — เป็นแค่แรงบันดาลใจสถาปัตยกรรม |

📄 รายละเอียดเต็ม: [`docs/03-architecture/risk-defense.md`](03-architecture/risk-defense.md), [`docs/01-pitch/demo-script.md`](01-pitch/demo-script.md) (Q&A defense เต็ม 12+ ข้อ)

---

## 11. Insight เสริมจาก Deep Research (ทำให้ไอเดีย "โหดขึ้น")

- **มหาวิทยาลัยต่างจังหวัดต้องการ Talent อยู่แล้ว** และใช้ค่าย (สอวน., KKBS CAMP, UBU I-Camp) เป็นกลไกเฟ้นคนอยู่แล้ว — "คว้าฝัน" ตอบ pain point ฝั่งมหาวิทยาลัยได้ตรง
- **Gamification ได้ผลจริงแต่ต้องระวัง:** Sailer & Homner (2019) g=0.49 (ความรู้); Deci, Koestner & Ryan (1999) รางวัลจับต้องได้ทำลาย intrinsic motivation d=−0.28 ถึง −0.40; Hanus & Fox (2015) badge+leaderboard มากไปลดแรงจูงใจ
- **Role Model effect เป็น causal จริง:** Porter & Serra (2020) — เจอ role model หญิง → เลือกเรียนเอก econ เพิ่ม 8 percentage points
- **Sponsored Seat ทำงานได้จริงในไทยแล้ว:** Generation Thailand, กสศ. (ลดหย่อนภาษี 2 เท่า), เซ็นทรัล/KFC/ซูเปอร์จิ๋วผ่าน กสศ., GenNX
- **ช่องว่างตลาด:** Dek-D/TruePlookpanya/Starfish Labz/Naviance ไม่มีใครทำ Career Journey ครบวงจร (ค้นตัวเอง → ทักษะ → อาชีพ → เส้นทางเรียน → ตลาดแรงงาน → ทุน) แบบเชื่อม AI matching + กิจกรรมจริง
- **ปัญหาครูคือ "ขาดกำลังคน + คนไม่ตรงสาย" มากกว่าขาดเนื้อหา** — ครูแนะแนวจำนวนมากไม่ได้จบตรงสาย; ระบบประเมิน ว.PA ผ่าน DPA ทำให้ "รายงานอัตโนมัติ" มีคุณค่าจริง (ไม่ใช่แค่ไอเดียลอยๆ)
- **ยังไม่มีแพลตฟอร์มไทยที่ทำงานร่วมกับครู (teacher-side workflow)** ตรงจุดตัดงานเอกสาร+แนะแนว — เป็นช่องว่างที่ยังไม่มีคู่แข่งเข้ามาเต็มตัว

📄 รายละเอียดเต็ม: [`docs/04-research/pain-points.md`](04-research/pain-points.md), [`docs/04-research/teacher-painpoints.md`](04-research/teacher-painpoints.md), [`docs/04-research/benchmarks.md`](04-research/benchmarks.md)

---

## 12. งานที่ยังค้าง / Gap ที่ต้องปิดก่อนส่ง

1. ตรวจสอบตัวเลข `[UNVERIFIED]` ใน Data Bank ก่อนใช้ในสไลด์จริง (guidance_teacher_shortage, informal_low_skill_labor, intrinsic_motivation_retention, primary_target_volume, teacher_target)
2. หา pilot school/มหาวิทยาลัยเซ็น LOI อย่างน้อย 1 แห่งก่อน Demo Day (ใช้ `pilot-outreach-kit.md`)
3. ทดสอบแบบวัด North Star (MDMSES/CDMSE ที่ปรับแล้ว) กับกลุ่มตัวอย่าง 30 คน + ตรวจเรื่องลิขสิทธิ์สเกล
4. พัฒนา Prototype ต่อจาก `app/` ให้ครบ 4 หน้าจอ P0 (Discovery, Roadmap, Teacher Dashboard, Matching)
5. สร้างภาพสไลด์จริงจาก `design/slides/image-prompts.md` แล้วประกอบเป็น PDF/PPTX

---

## แผนที่เอกสาร (File Map)

| ไฟล์ | เนื้อหา |
|---|---|
| `docs/03-architecture/PRD.md` | **เอกสารหลักของ Solution** — positioning, user journey, MVP, KPI, business model |
| `docs/03-architecture/architecture.md` | สถาปัตยกรรมเทคนิค, AIS integration, PDPA, City-First GTM, business model |
| `docs/03-architecture/risk-defense.md` | Overclaim ทุกจุด + วิธีแก้ + ตารางความเสี่ยง |
| `docs/04-research/deepman-integration.md` | ที่มาแนวคิด Constraint-Aware Engine (แรงบันดาลใจ ไม่ใช่ copy) |
| `docs/01-pitch/pitch-deck.md` | โครงสร้างสไลด์ 10 หน้า + storytelling tips |
| `docs/01-pitch/demo-script.md` | Elevator pitch 60 วิ + Q&A defense 12+ ข้อ |
| `docs/02-application/application-form.md` | เนื้อหาพร้อมคัดลอกลงใบสมัคร (ปัญหา/เป้าหมาย/solution) |
| `docs/02-application/pilot-outreach-kit.md` | One-pager/LOI/สคริปต์คุยกับโรงเรียน-มหาวิทยาลัย |
| `docs/04-research/pain-points.md` | Deep research pain point 6 มิติ (นักเรียน/ครู/มหาวิทยาลัย/gamification/เงินทุน/AIS) |
| `docs/04-research/teacher-painpoints.md` | Research เจาะลึกปัญหาครูไทย (งานเอกสาร, ว.PA, EdTech adoption) |
| `docs/04-research/benchmarks.md` | Benchmark โลก (Naviance, Roadtrip Nation, iSEE) + ทฤษฎีที่ใช้ |
| `docs/05-roadmap/roadmap.md` | เฟสพัฒนา + กฎห้าม overclaim ตัวเลข |
| `design/slides/image-prompts.md` | Prompt ภาพสไลด์ 10 แผ่นสำหรับ ChatGPT Image Model |
| `data/stats/stats.th.json` | Data Bank ต้นทาง — ทุกตัวเลขต้องอ้างจากที่นี่ |
