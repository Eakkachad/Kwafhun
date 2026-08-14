# Competitive Deep-Dive — "คว้าฝัน (Catch the Dream)"
### Career-discovery / guidance platform for Thai students (ป.5–ม.3, ages 10–15)
**Prepared for:** AIS JUMP THAILAND Hackathon 2026 pitch deck (competitive slides)
**Research date:** 14 Aug 2026
**Analyst note on discipline:** Every number below carries a source + URL + year and a [VERIFIED] / [UNVERIFIED] tag. "Not disclosed" is used where a company does not publish a figure — no guessing. WebSearch/WebFetch used for all numbers; memory was not trusted.

**Tagging convention:**
- **[VERIFIED]** = figure traced to company site, official filing, reputable news, Crunchbase/PitchBook/Tracxn, or SimilarWeb, with the year shown.
- **[UNVERIFIED]** = figure appears only in a data aggregator / estimate service, is dated/ambiguous, or sources conflict.

---

## 0. Key framing for the deck

**Core claim being defended:** "No Thai player does the *full* Career Journey — self-discovery → skill mapping → careers → study paths → labor market → scholarships — with AI matching + real activities."

After this research the claim holds, with nuance:
- **Thai market** is split into (a) **community + TCAS-admission** hubs (Dek-D, mytcas), (b) **free content / light self-discovery quizzes** (TruePlookpanya's "Plook Explorer", Starfish Labz), (c) **exam-prep & tutoring** (OnDemand/LEARN, OpenDurian), and (d) **upskilling / corporate & adult learning** (SkillLane, Conicle, Globish). None chain the *whole* journey from a self-discovery assessment through labor-market data to scholarships with an AI matching engine for the 10–15 age band.
- The **full-journey category exists internationally** (Naviance, YouScience, Xello, SchooLinks, BridgeU, Unifrog) — proof the model works — **but none is localized for Thailand** (no Thai curriculum, no TCAS/TGAT-TPAT integration, no กสศ./Thai-scholarship graph, US/UK pricing at $/£ per student per district). This is the whitespace.

**Direct vs adjacent classification:**
- **Direct-ish (career discovery for students):** TruePlookpanya (Plook Explorer), Thai OCIT/aptitude research tools, and every international benchmark.
- **Adjacent:** Dek-D (community + admissions), mytcas (official admissions plumbing), Starfish Labz (teacher/parent PD + student SEL), SkillLane/Conicle/Globish (upskilling), OpenDurian/OnDemand/LEARN (exam prep & tutoring).

---

## 1. Thai / SEA competitors table

| Company | What it is | Target user | Users / traffic / funding | Pricing | Business / revenue model | Gap vs a full career-journey platform |
|---|---|---|---|---|---|---|
| **Dek-D.com** | Largest Thai teen/education community; forums + web-fiction + TCAS admissions hub; runs Dek-D's TCAS Fair | Teens, students, university applicants (skews 18–24) | ~3M monthly visitors (2018) **[VERIFIED, Wikipedia]**; SimilarWeb Jul 2026: **~6.4M monthly visits**, global rank **#7,661**, Thailand **#78**, 95.5% Thai traffic **[VERIFIED, SimilarWeb]**. Operated by Dek-D Interactive Co. Ltd (since 2005). Funding not disclosed. | Free to users; ad + events + fair revenue | Media / community + ad + paid events (TCAS Fair, Study Abroad Fair, Pre-Admission mock exams) | Community + admissions content, **no structured self-discovery→career→scholarship engine, no AI matching**; audience older (18–24), not 10–15 |
| **TruePlookpanya** (trueplookpanya.com) | Free online learning hub by True Corp; lessons, exam banks, quizzes; **"Plook Explorer" self-discovery/career quiz** | Students all levels (early childhood → higher ed), teachers | FB page ~318k likes **[VERIFIED]**; total registered users **not disclosed [UNVERIFIED]**. Backed by True Corporation (CSR arm). | Free | CSR / brand platform funded by True Corp (not a standalone P&L) | Has a self-discovery quiz + content, **but no skill-mapping graph, no labor-market data, no scholarship matching, no AI constraint engine, no "real activities" pipeline** — the widest partial overlap, still shallow |
| **Starfish Labz / Starfish Education** | Free online courses + certificates; teacher/parent professional development + student SEL/STEAM | Teachers & parents (primary), students (indirect) | **385,000+ active users**, **23,000+ schools**, **12.9M learning activities**, **525,000+ certificates**, "7.6M positive impacts" **[VERIFIED, HUNDRED.org]**. Funded by philanthropy (Firetree Trust) **[VERIFIED, Firetree]**. | Free (gamified coins unlock premium) | Non-profit / grant + philanthropy funded | Teacher/parent PD & SEL, **not a student-facing career-journey product**; no career matching, study-path or scholarship layer |
| **Globish (Globish Academia)** | Online 1-on-1 foreign-language (English) classes with corporate arm | Kids, students, working adults, corporates | **US$2.36M Series A+ (Oct 2022)** from DEPA, Premier, N-VEST, 500 TukTuks, StormBreaker, RareJob, BonAngels **[VERIFIED, TNGlobal/EdTechReview]**; ~30,000 students, 400 teachers, 300,000 lessons/yr **[UNVERIFIED, aggregated]**; founded 2014 | Paid course packages (B2C + B2B) | Language-course subscription/packages + corporate training | Language upskilling only; **no career discovery, no study-path/scholarship layer** |
| **SkillLane** | Online course marketplace + corporate LMS ("SkillLane Technology PCL") | Working adults / upskillers, corporates, universities | **1.3M users [UNVERIFIED, Tracxn]**; **revenue ฿221M (FY2022) [VERIFIED, Tracxn/PitchBook]**; investors 500 Global, AIS, 500 TukTuks, CyberAgent Capital; **filed for IPO late 2024 [VERIFIED]**; founded 2014 | Per-course purchase + B2B SaaS | Course sales + corporate LMS subscriptions | Adult upskilling / degree partnerships; **not student career discovery**, no 10–15 focus |
| **Conicle** | Corporate learning platform ("cloud university") / LMS | Enterprises & their employees | **US$3M Series A (2021)** led by InVent (Intouch Holdings), + 500 TukTuks, Stormbreaker, Stundi; prior **$900k seed [VERIFIED, e27/ThaiPR]**; **1M+ users / 500k+ registered, 50+ orgs** (AIA, PTT, Makro, Honda) **[UNVERIFIED, company claim]**; founded 2014 | B2B SaaS (per-seat) | Enterprise LMS subscriptions | Corporate reskilling; **zero student career-journey overlap** |
| **LEARN Corporation (เลิร์น)** | Umbrella of 9–12 edu business units: **OnDemand** (tutoring), **TCASter**, Ignite, Premier Prep, EduSmith, Skooldio, Degree Plus, Code Genius, schools | Students (exam prep, TCAS), adults (Skooldio), schools | Founded 2005; **1,000+ employees, 9–12 business units [VERIFIED, learn.co.th]**; revenue estimate **$25–50M [UNVERIFIED, LeadIQ]**; SET IPO status **not confirmed [UNVERIFIED]** | Paid courses / tutoring packages | Tutoring + course sales + school operations | Exam-prep & tutoring powerhouse; **TCASter touches admissions data but not the self-discovery→career→scholarship journey with AI matching** |
| **OpenDurian** | Online exam-prep (TOEIC, IELTS, TCAS/GAT-PAT, civil service, Chinese) | Students & test-takers | **Revenue ฿297M (FY2022) [VERIFIED, Tracxn]**; **Seed round 2019 with 500 Global [VERIFIED]**; founded 2013 | Freemium + paid courses | Course sales + freemium exam banks | Test prep only; **no career discovery / study-path guidance / scholarships** |
| **mytcas.com / TCAS** | Official central university-admission system run by **ทปอ (CUPT, Council of University Presidents of Thailand)**; TGAT/TPAT aptitude exams flow through it | ม.6 / university applicants | Official monopoly system; SimilarWeb tracks seasonal spikes (see gaps). Government/consortium funded. | Free (application fees per program) | Public / consortium-operated admissions infrastructure | **Admissions plumbing, not guidance** — no self-discovery, no career matching, no scholarship engine; a *destination/integration target*, not a competitor |
| **Thai career-aptitude tools** (e.g., academic **OCIT — Online Career Intelligence Test**; various MBTI/Holland apps; tucareers) | Career/personality aptitude tests | Thai high-school students | OCIT validated on **2,000 students across 6 Thai regions** (academic research, Gardner Multiple-Intelligence + Holland) **[VERIFIED, research abstract]**; commercial apps' user bases not disclosed | Mostly free / one-off | Research tools, ad-supported apps | Point-solution *assessments only*; **no end-to-end journey, no scholarship/activity connection, not productized at scale for 10–15** |

---

## 2. International benchmarks table (category exists globally, not localized for Thailand)

| Company | What it is | Target user | Users / schools / funding | Pricing | Business model | Localization gap for Thailand |
|---|---|---|---|---|---|---|
| **Naviance (PowerSchool)** | Market-leading College, Career & Life Readiness (CCLR) platform | US K-12 students, counselors, parents | **10M+ student users, 500,000+ educators [VERIFIED, PowerSchool/BusinessWire 2022]**; owned by PowerSchool | **Not publicly disclosed** — quote-based, district license **[VERIFIED, G2]** | B2B2C SaaS, district license (per-student) | US-centric (US colleges, Common App); no Thai curriculum/TCAS/กสศ.; English; no 10–15 ป.5 localization |
| **YouScience** | Aptitude-based career discovery (Brightpath / Discovery) using Ball Aptitude Battery brain games + certifications | US students (mainly HS), schools | **13,400+ institutions, 4.1M individuals [VERIFIED, PRNewswire 2025]**; **strategic investment from ECMC Group Education Impact Fund, Apr 2025, "multiple millions" (undisclosed) [VERIFIED, TechBuzz/PRNewswire]**; founded 2006 | Per-student / school license (not public) | B2B SaaS + certification revenue | US aptitude norms & certifications; not Thai-localized; no TCAS/scholarship graph |
| **Xello** | College & career readiness + future-readiness program (Years 7–13) | K-12 students, counselors, CTE | **~8M students [VERIFIED, search/company]**; statewide in Wisconsin & Florida (free to FL districts from fall 2023); used by Philadelphia, NYC, Boston | **Not public** — district license, quote-based **[VERIFIED, Capterra]** | B2B SaaS, district license | US/Canada/UK focus; English; no Thai study-path or scholarship layer |
| **SchooLinks** | Modern CCR platform connecting K-12 ↔ higher-ed ↔ employers | US K-12 districts & students | **$80M Series B (Oct 2024)** led by Susquehanna Growth Equity (+ Stephens Group, Strada, ASA) **[VERIFIED, BusinessWire]**; live in **40 states**; 15× districts / 10× students since Series A | Per-student SaaS (not public) | B2B SaaS, district license per-student | US-only; US career/labor data; no Thai localization |
| **Roadtrip Nation** | Non-profit career-exploration via **13,500+ video interviews** + "Virtual Roadtrip" narrative journey | US middle-school → college | **13,500+ video interviews [VERIFIED, company]**; nonprofit reaching "millions"; funded by grants/sponsors | Content licensed to schools / free tiers | Non-profit; content licensing + grants | Closest to "Netflix of Jobs" video model — **but US professionals/English, no matching engine, no scholarships/study-paths, not Thai** |
| **BridgeU** | University & careers guidance for **international** K-12 schools | International-school students (incl. some in SEA) | **1,000+ schools in 140+ countries [VERIFIED, company]**; raised **$8.63M (Octopus Ventures) [VERIFIED, Crunchbase/Dealroom]**; acquired by **Kaplan (2021)**, then **Manifest Global (Apr 2025) [VERIFIED, PIE News]**; founded 2013 | School license (not public) | B2B SaaS to international schools | Targets international/English-medium schools & global universities; **not Thai national curriculum / Thai public schools / TCAS / กสศ.** |
| **Unifrog** | "Universal destinations platform" — one-stop careers/university/apprenticeship guidance + **scholarship & funding finder** | UK (and intl) secondary students | **3,000–4,000 UK schools & colleges [VERIFIED, company/edtechimpact]**; **126 employees (2026) [UNVERIFIED, Tracxn]**; funding **not clearly disclosed** (Tracxn: no VC raised; known impact/PE involvement unconfirmed) **[UNVERIFIED]**; founded 2012 | School subscription (per-school/site license) | B2B SaaS, school subscription | UK-centric (UCAS, UK apprenticeships); English; no Thai TCAS/กสศ. graph |

---

## 3. Positioning insight (quadrant map inputs)

**Axes for the deck:**
- **X — Personalization / AI matching** (low = generic content or one-shot quiz → high = constraint-based AI matching over a knowledge graph)
- **Y — Connects to labor market / scholarships / real activities** (low = content only → high = links to jobs data, scholarships, camps, real activities)

**Where each sits (analyst estimate from feature evidence above — directional, for a bubble/quadrant chart):**

| Quadrant | Players | Rationale |
|---|---|---|
| **Low AI matching · Low labor/scholarship connection** (bottom-left = content/community) | Dek-D, Starfish Labz, OpenDurian, OnDemand/LEARN, SkillLane, Conicle, Globish, mytcas | Content, community, exam-prep, upskilling or admissions plumbing. No student-facing career matching + no scholarship/activity graph. |
| **Some personalization · Low connection** (has a quiz, little downstream) | TruePlookpanya (Plook Explorer), Thai OCIT/MBTI apps, YouScience (aptitude, high on X but US labor only), Roadtrip Nation (video discovery, no matching) | Self-discovery/aptitude exists but doesn't chain to Thai study-paths + scholarships + activities. |
| **High AI/personalization · High connection** (top-right = full journey) | **International full-journey: Naviance, Xello, SchooLinks, BridgeU, Unifrog** | These DO span discovery → careers → study paths → (some) labor-market + scholarships. **Proof the category works — but all non-Thai / not localized.** |
| **TARGET whitespace** | **คว้าฝัน (Catch the Dream)** | The only play aiming for top-right **AND** Thai-localized (Thai curriculum, TCAS/TGAT-TPAT, กสศ. scholarships, university camps) **AND** aimed at the young 10–15 (ป.5–ม.3) band where no incumbent focuses. |

**Three defensible talking points for the slide:**
1. **No Thai incumbent occupies the top-right.** The closest Thai overlap (TruePlookpanya's Plook Explorer) is a shallow quiz with no AI matching, no labor-market data, and no scholarship connection.
2. **The full-journey category is proven at scale internationally** — Naviance 10M+ students, Xello ~8M, SchooLinks raised $80M in 2024, YouScience 4.1M individuals — validating the model without occupying Thailand.
3. **Age-band gap:** every Thai player that touches careers/admissions skews to ม.6/university applicants (Dek-D 18–24; mytcas; TCASter). คว้าฝัน targets 10–15, upstream of the decision, where guidance has the most leverage and no one is playing.

---

## 4. "Could-not-verify" gaps (be honest in the deck)

| Data point | Status | Note |
|---|---|---|
| TruePlookpanya registered-user / MAU count | **Not disclosed** | Only FB likes (~318k) found; True Corp does not publish platform user totals. Do NOT state a user number. |
| Dek-D funding / revenue | **Not disclosed** | Private (Dek-D Interactive). Traffic verified via SimilarWeb; financials not public. |
| Globish user/lesson/teacher counts (30k / 400 / 300k) | **[UNVERIFIED]** | From aggregator summaries, not a primary press release. Funding ($2.36M, 2022) IS verified. |
| SkillLane 1.3M users; Conicle 1M users | **[UNVERIFIED / company claim]** | Revenue (SkillLane ฿221M FY2022) and funding rounds are verified; headline user counts are self-reported/aggregated. |
| LEARN Corporation revenue / SET IPO | **[UNVERIFIED]** | $25–50M is a LeadIQ estimate; no confirmed SET listing found. Verify on set.or.th before quoting. |
| Naviance / Xello / YouScience / SchooLinks / BridgeU / Unifrog **pricing** | **Not disclosed** | All are quote-based district/school licenses; none publish per-student pricing. Say "quote-based, not public." |
| YouScience ECMC investment amount | **Undisclosed ("multiple millions")** | CEO confirmed range to press; exact figure not released. |
| Unifrog funding & revenue | **[UNVERIFIED]** | Tracxn shows no VC raise; a known impact/PE stake was not confirmable in this pass. State "funding not publicly confirmed." |
| mytcas.com traffic | **Partial** | SimilarWeb page exists (April 2026 ranking referenced) but exact monthly-visit figure not captured; highly seasonal around TCAS rounds. |
| Thai career-aptitude apps' user bases | **Not disclosed** | OCIT is academic (2,000-student validation); commercial MBTI/Holland apps don't publish MAU. |

---

## Source list (URLs)

- Dek-D: https://en.wikipedia.org/wiki/Dek-D.com ; https://www.similarweb.com/website/dek-d.com/ (Jul 2026) ; https://www.bitec.co.th/event/dek-ds-tcas-fair-dek-ds-study-abroad-fair-2026
- TruePlookpanya: https://www.trueplookpanya.com/quiz/start ; https://www.facebook.com/TruePlookpanya/
- Starfish Labz: https://hundred.org/en/innovations/starfish-labz ; https://www.firetreetrust.org/starfish-education ; https://www.starfishlabz.com/
- Globish: https://technode.global/2022/10/03/thai-edtech-firm-globish-succeeds-in-closing-2-36m-fundraising-deal-progressing-to-series-a/ ; https://www.edtechreview.in/news/thai-edtech-firm-globish-raises-2-36m-to-expand-its-foreign-language-learning-platform/
- SkillLane: https://tracxn.com/d/companies/skilllane/ ; https://pitchbook.com/profiles/company/113183-83 ; https://investor.skilllane.com/en/home
- Conicle: https://e27.co/conicle-bags-us3m-series-a-to-grow-its-cloud-university-in-thailand-20210401/ ; https://www.thaipr.net/en/finance_en/3044223
- OpenDurian: https://tracxn.com/d/companies/opendurian/ ; https://www.crunchbase.com/organization/opendurian
- LEARN Corporation: https://www.learn.co.th/our-businesses/ ; https://leadiq.com/c/learn-corporation/5e4244d1626d3b6fe0606766
- mytcas / TCAS: https://student.mytcas.com/ ; https://www.eduzones.com/2025/09/30/mytcas/ ; https://www.similarweb.com/website/mytcas.com/
- Thai aptitude / OCIT: (academic OCIT abstract via search) ; https://www.tucareers.com/career-toolbox
- Naviance: https://www.powerschool.com/solutions/college-career-and-life-readiness/naviance-cclr/ ; https://www.businesswire.com/news/home/20220201006189/en/ ; https://www.g2.com/products/powerschool-naviance/reviews
- YouScience: https://www.prnewswire.com/news-releases/youscience-announces-strategic-investment-from-ecmc-groups-education-impact-fund-... ; https://www.youscience.com/education/brightpath/discovery/ ; https://www.techbuzznews.com/youscience-secures-ecmc-group-investment-to-expand-career-connected-learning/
- Xello: https://xello.world/en/ ; https://www.capterra.com/p/204490/Xello/ ; https://www.floridashines.org/xello-administrators
- SchooLinks: https://www.businesswire.com/news/home/20241020113677/en/ ; https://www.schoolinks.com/
- Roadtrip Nation: https://roadtripnation.com/virtual-roadtrip ; https://texasoncourse.org/tools/roadtrip-nation/
- BridgeU: https://thepienews.com/kaplan-acquires-bridgeu/ ; https://www.prnewswire.com/news-releases/manifest-global-strengthens-international-education-portfolio-with-bridgeu-acquisition-302421399.html ; https://app.dealroom.co/companies/bridgeu
- Unifrog: https://www.unifrog.org/uk-schools ; https://edtechimpact.com/products/unifrog/ ; https://tracxn.com/d/companies/unifrog/
