/* Constraint-Aware Matching Engine — หลัก "veto, not vote"
   Deterministic + Grounded: ผลลัพธ์ชี้กลับไปที่ record ใน data.js เสมอ */
(function () {
  const GRADE_ORDER = ["m1", "m2", "m3", "m4", "m5", "m6"];

  function gradeRank(g) { return GRADE_ORDER.indexOf(g); }

  /* 1) HARD FILTER — ตัดตัวเลือกที่เป็นไปไม่ได้ทิ้งก่อน */
  function hardFilterCareer(career, profile) {
    const reasons = [];
    if (gradeRank(profile.grade) < gradeRank(career.minGrade)) {
      reasons.push("ยังไม่ถึงระดับชั้นขั้นต่ำของสายนี้");
    }
    const needSkills = career.skills.filter((sk) => !profile.skills.includes(sk));
    if (needSkills.length > 0) {
      reasons.push("ขาดวิชาพื้นฐาน: " + needSkills.join(", "));
    }
    return { pass: reasons.length === 0, reasons };
  }

  function hardFilterScholarship(sch, profile) {
    const reasons = [];
    if (gradeRank(profile.grade) < gradeRank(sch.eligibility.minGrade)) {
      reasons.push("ยังไม่ถึงเกณฑ์ชั้นเรียนของทุนนี้");
    }
    if (sch.eligibility.income === "low" && profile.income !== "low") {
      reasons.push("ไม่เข้าเกณฑ์รายได้ของทุนนี้");
    }
    return { pass: reasons.length === 0, reasons };
  }

  function hardFilterCamp(camp, profile) {
    const reasons = [];
    if (!camp.remote && profile.location && camp.location !== profile.location) {
      reasons.push("ค่ายอยู่นอกพื้นที่ที่คุณเลือก");
    }
    if (profile.interest.length > 0 && !profile.interest.includes(camp.field)) {
      reasons.push("สายงานไม่ตรงกับความสนใจที่เลือก");
    }
    return { pass: reasons.length === 0, reasons };
  }

  /* 2) SOFT SCORE — จัดลำดับตัวเลือกที่เหลือ */
  function scoreCareer(career, profile) {
    let score = 0;
    if (profile.interest.includes(career.field)) score += 3;
    const skillMatch = career.skills.filter((sk) => profile.skills.includes(sk)).length;
    score += skillMatch; // ตรงกับสกิลที่เลือกมากเท่าไหร่ คะแนนสูง
    return score;
  }

  function matchProfile(profile) {
    const D = window.KWAFHUN_DATA;

    const careers = D.careers
      .map((c) => ({ type: "career", item: c, ...hardFilterCareer(c, profile) }))
      .filter((r) => r.pass)
      .map((r) => ({ ...r, score: scoreCareer(r.item, profile) }))
      .sort((a, b) => b.score - a.score);

    const scholarships = D.scholarships
      .map((s) => ({ type: "scholarship", item: s, ...hardFilterScholarship(s, profile) }))
      .filter((r) => r.pass);

    const camps = D.camps
      .map((k) => ({ type: "camp", item: k, ...hardFilterCamp(k, profile) }))
      .filter((r) => r.pass);

    return {
      careers, scholarships, camps,
      summary: {
        totalCareers: careers.length,
        totalScholarships: scholarships.length,
        totalCamps: camps.length
      }
    };
  }

  window.KWAFHUN_ENGINE = {
    matchProfile,
    GRADE_ORDER,
    hardFilterCareer,
    hardFilterScholarship,
    hardFilterCamp
  };
})();
