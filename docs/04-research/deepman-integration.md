# Deep_Man Integration — จุดนำมาใช้สร้างความโดดเด่น

> วิเคราะห์จาก 3 โปรเจกต์ใน `/home/eggchad/eakject/research/Deep_Man` (อัปเดต 13 ส.ค. 2026)
> เป้าหมาย: ยกระดับ Technical Capabilities (35%) ของ "คว้าฝัน" ให้ไม่ใช่ RAG แบบ "ทุกทีมทำ" แต่เป็นสถาปัตยกรรมที่แตกต่างและอธิบายได้
>
> ⚠️ **สำคัญ:** ทั้ง 3 โปรเจกต์เป็นงานวิจัยของทีม/เพื่อนร่วมงาน (MIT license ยกเว้น topological-latent-engine ไม่มี LICENSE) — **เราไม่ไป copy โค้ดข้ามโปรเจกต์** แต่เอา **หลักการ/สถาปัตยกรรม** มาเป็นแรงบันดาลใจออกแบบของเราเอง

---

## 1. สรุป 3 โปรเจกต์ (30 วินาที)

| โปรเจกต์ | แก่น | จุดที่เจ๋ง | จุดอ่อน (honest) |
|---|---|---|---|
| **katgpt-rs** | Neuro-symbolic micro-Transformer + constraint pruning (Rust, 378 feature flags, CPU-only) | ConstraintPruner/ScreeningPruner (ตัดตัวเลือกที่ผิดกฎออกก่อน), KeywordRouter (เลือกผู้เชี่ยวชาญตามโจทย์), modelless-first (แก้ bias ได้โดยไม่ต้องเทรน), speculative decoding | micro-GPT เล็กมาก ไม่ใช่โมเดลใหญ่ |
| **alice** (A.L.I.C.E. Sandbox) | Cognitive agent แบบ Global Workspace Theory (GWT) ไม่ใช้ gradient, 0-alloc hot path, CPU single-core | Geometric Manifold Memory (จำแบบเรขาคณิต), Adaptive Budget (ปรับงบคิดตามความอยากรู้), deterministic neuro-symbolic validation, Offline Sleep Consolidation | เป็น sandbox วิจัย ไม่ใช่ product |
| **topological-latent-engine** (AXIOM) | QA/reasoning แบบ VSA (hyperdimensional vector) + Knowledge Graph, deterministic 100%, zero-training, CPU-only ~18MB | "Instant learning" — `/teach` แล้วตอบได้ทันทีแบบ µs, evidence recall 99.69%, latency ~100ms | TriviaQA candidate แค่ 24.53% (หาคำตอบได้ 76% แต่เลือกคำตอบไม่เก่ง) — honest มากว่ายังไม่ใช่ open-domain QA |

---

## 2. จุดที่นำมาสร้าง "ความโดดเด่น" ให้คว้าฝัน

### 💡 A. "Screening Engine" ของเรา → ใช้หลัก ConstraintPruner ของ katgpt-rs

**ตอนนี้ (เดิม):** เราบอกว่า "มีระบบคัดกรองเด็กที่สนใจจริง" — เป็นแนวคิดลอยๆ ไม่มีกลไกทางเทคนิค

**ใหม่:** ออกแบบ Screening เป็น **Constraint-Based Screening** เลียนแบบ `ConstraintPruner` ของ katgpt-rs:
- ป้อน "โปรไฟล์นักเรียน" (Anonymous ID, ความสนใจ, ผลคอร์สพื้นฐาน, ระดับชั้น)
- ระบบ **ตัดชุดตัวเลือกที่เข้าเงื่อนไขไม่ได้ออกก่อน (hard constraint)** — เหมือน pruner ที่ตัด token ผิดกฎออกก่อน decode
- เหลือเฉพาะตัวเลือก "เป็นไปได้จริง" → แล้วค่อย score จัดลำดับ (soft)
- **พูดได้ว่า:** "เราใช้การคัดกรองแบบ constraint-first ไม่ใช่แค่คะแนนรวม — ตัดของที่เป็นไปไม่ได้ออกก่อน แล้วค่อยเรียงสิ่งที่เหลือ" — ตรงกับหลักการ `veto, not vote` ใน AXIOM ranking synthesis

> ค่าที่ได้: ตอบคำถามกรรมการ "ทำไมระบบนี้ไม่แนะนำของที่เด็กทำไม่ได้" ได้แบบมีสถาปัตยกรรมรองรับ ไม่ใช่คำพูดลอย

### 💡 B. RAG AI → แนวคิด "Instant Learning" จาก AXIOM

**ตอนนี้ (เดิม):** "RAG ดึงข้อมูลจากชุดข้อมูลที่ได้รับอนุญาต" — ถูกต้องแต่เป็นกระแสที่ทุกทีมใช้

**ใหม่:** เพิ่มแนวคิด **"Grounding-first, explainable"** ที่ได้แรงบันดาลใจจาก AXIOM:
- AXIOM โชว์ว่า **เพิ่มความจริง 1 ข้อ → ระบบใช้ได้ทันทีแบบ µs (no retraining)** — ต่างจาก LLM ที่ต้อง fine-tune
- เรานำเสนอ: **"ข้อมูลทุน/คอร์สใหม่ที่เรานำเข้า → Roadmap อัปเดตได้ทันที ไม่ต้องเทรนโมเดล"** — เป็นความได้เปรียบที่จับต้องได้
- และใช้หลัก "evidence recall 99.69%" มาบอกว่า: **ทุกคำแนะนำต้อง trace กลับไปถึงแหล่งข้อมูลจริงได้เสมอ** (เราคุมด้วยชุดข้อมูลที่ป้อนเอง ไม่ใช่ open-domain)

> ค่าที่ได้: Technical Capabilities มองเห็น "ทีมเข้าใจ AI engineering จริง" ไม่ใช่แค่เรียก API เปิดๆ

### 💡 C. "Adaptive Budget" / Surprise Signal จาก alice → Gamification ที่ปรับตามตัวเด็ก

**ตอนนี้ (เดิม):** Gamification ตาม SDT (Badge + feedback) — ดีอยู่แล้ว แต่เป็นแบบ "ตั้งเกณฑ์ตายตัว"

**ใหม่:** เพิ่ม **"curiosity-aware path"** ได้แรงบันดาลใจจาก alice Adaptive Budget (ปรับงบคิดตาม Surprise index / temporal derivative):
- ระบบติดตาม "ความสนใจที่เปลี่ยนไป" ของเด็กแต่ละคน (วิดีโอ/คอร์สที่ดูนาน, คำถามที่ถามซ้ำ)
- เมื่อจับ "สัญญาณสนใจ" ในสาขาไหน → ขยายเส้นทาง/คอร์ส/ค่ายในสาขานั้นให้ (adaptive)
- **พูดได้ว่า:** "เราไม่แค่ให้รางวัล เราปรับเส้นทางตามความอยากรู้จริงของเด็ก" — ยกระดับจาก gamification ธรรมดาเป็น **"curiosity-driven pathway"**

> ค่าที่ได้: คำว่า "Intrinsic Motivation" ไม่ใช่แค่สโลแกน แต่มีกลไกติดตามความอยากรู้รองรับ

### 💡 D. หลัก "modelless-first / CPU-only / deterministic" → โจทย์ AIS (Edge/Offline)

**ตอนนี้ (เดิม):** PWA offline caching ฝั่ง client — โอเค

**ใหม่:** ชูแนวคิด **"deterministic + CPU-light"** (จากทั้ง katgpt/alice/AXIOM) ตอบโจทย์ AIS เรื่อง **Edge/5G/Cloud**:
- เพราะสถาปัตยกรรมเราเป็น constraint-based + data-grounded → **สามารถประมวลผลที่ Edge/Local ได้จริง ไม่ต้องพึ่ง GPU/Cloud ทุกครั้ง**
- สอดคล้อง AIS Cloud + ลดค่าใช้จ่าย → **"คำแนะนำที่ใช้ได้แม้ offline"** (ข้อมูลถูก cache + engine ตัวเล็กที่ครูดาวน์โหลดไปได้)
- **พูดได้ว่า:** "โมเดลเรามีน้ำหนักเบา deterministic ทำนายซ้ำได้ (bit-identical) — เหมาะกับประมวลผลที่ขอบเครือข่าย AIS Edge/Local ไม่ใช่ฝากชีวิตไว้กับ cloud ตัวใหญ่"

> ค่าที่ได้: AIS Tech Integration แข็งแกร่ง เพราะไม่ได้ใช้แค่โครงข่าย แต่ใช้ข้อดีของ architecture เรากับการประมวลผล Edge — ตรงกับจุดแข็ง AIS 5G/Cloud

### 💡 E. "Deterministic & Verifiable" → สร้างความน่าเชื่อถือ PDPA/Trust

- ทั้ง 3 โปรเจกต์เน้น **deterministic (ผลซ้ำกันทุกครั้ง, audit ได้)**
- เรานำมาเล่า: **"คำแนะนำทุกเส้นทาง deterministic + ตรวจสอบย้อนหลังได้ (ทุกผลลัพธ์ trace กลับที่มาข้อมูลได้)"** — สร้างความน่าเชื่อถือกับ กสศ./สพฐ./ผู้ปกครอง และเข้ากับ Two-Tier PDPA
- ตอบประเด็น "AI black-box" ที่กรรมการกังวลเรื่องเด็ก

---

## 3. สิ่งที่ต้องระวัง (อย่า overclaim)

1. **ห้ามบอกว่า "เราใช้ katgpt/alice/AXIOM"** — เป็นโปรเจกต์วิจัยคนละชุด เราใช้แค่ "แรงบันดาลใจด้านสถาปัตยกรรม"
2. **ห้ามอ้างตัวเลข performance ของเขา** (เช่น 29× TTFT, evidence recall 99.69%) ว่าเป็นของระบบเรา — เราไม่ได้เอาไป run จริง (เป็นหลักฐานแนวคิดว่า "แนวทางนี้ทำได้" เท่านั้น)
3. **topological-latent-engine ไม่มี LICENSE** — ห้ามนำโค้ด/ส่วนใดมาใส่; ใช้ได้แค่แนวคิด (VSA/KG) ที่เป็นความรู้สาธารณะ
4. **อย่าเคลมว่าเราสร้าง "AI agent"** — เราแค่ทำ "engine คัดกรอง/แมตช์แบบ constraint-based + grounded" ซึ่งเป็นของที่ Hackathon demo ได้จริง
5. หลักฐานทั้งหมดต้องเข้า Data Bank ก่อนใช้ในสไลด์ (Golden Rule #2)

---

## 4. ข้อสรุป (Takeaway สำหรับทีม)

| มิติ | เดิม | ใหม่ (จาก Deep_Man) |
|---|---|---|
| Screening | แนวคิดลอย | **Constraint-Based Screening** (ตัด impossible ก่อน) |
| AI/RAG | RAG มาตรฐาน | **Grounding-first + Instant Learning + explainable** |
| Gamification | Badge ตาม SDT | **Curiosity-aware adaptive pathway** |
| AIS/Edge | Offline cache client | **CPU-light deterministic → Edge/Local ready** |
| Trust/PDPA | Two-Tier | **Deterministic + verifiable ทุกผลลัพธ์** |

> สาระสำคัญ: เราไม่จำเป็นต้อง "ใส่ AI เท่ๆ" แต่ต้อง **อธิบายสถาปัตยกรรมได้ว่าทำไมคำแนะนำจึงแม่น/ปลอดภัย/ตรวจสอบได้** — นี่คือสิ่งที่แยกทีมที่ใช้ ChatGPT เปิดๆ ออกจากทีมที่เข้าใจ engineering
