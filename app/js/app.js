(function () {
  const D = window.KWAFHUN_DATA;
  const E = window.KWAFHUN_ENGINE;

  const state = {
    grade: "m3",
    location: "ชลบุรี",
    income: "low",
    interest: [],
    skills: [],
    badges: [],
    profileSubmitted: false
  };

  const app = document.getElementById("app");
  const nav = document.getElementById("nav");

  function go(hash) { location.hash = hash; }

  function render() {
    const route = location.hash.replace("#/", "") || "discover";
    setActiveNav(route);
    app.innerHTML = views[route] ? views[route]() : "<h2>ไม่พบหน้า</h2>";
    bindRoute();
  }

  function setActiveNav(route) {
    nav.querySelectorAll("a").forEach((a) => {
      a.classList.toggle("active", a.getAttribute("href") === "#/" + route);
    });
  }

  const views = {
    discover: function () {
      return `
        <h1>The Netflix of Dreams</h1>
        <p class="sub">ดู 3-5 คลิป แล้วตอบคำถามสั้นๆ — ค้นหาว่า "ทำอะไรสนุกและเป็นไปได้"</p>
        <div class="grid">
          ${D.careers.map((c) => `
            <div class="card" onclick="window.__watch('${c.id}')">
              <div class="card-thumb">🎬</div>
              <div class="card-title">${c.name}</div>
              <div class="card-meta">${c.field} · ${c.sample}</div>
            </div>`).join("")}
        </div>
        <div id="quizBox"></div>`;
    },

    learn: function () {
      return `
        <h1>Learn — เริ่มเรียนได้เลย</h1>
        <p class="sub">คอร์สสั้น 10-15 นาที เรียนจบรับ Badge (ไม่มีลีดเดอร์บอร์ด — เน้นความก้าวหน้าส่วนตัว)</p>
        <div class="grid">
          ${D.courses.map((c) => `
            <div class="card" onclick="window.__enroll('${c.id}')">
              <div class="card-thumb">📘</div>
              <div class="card-title">${c.title}</div>
              <div class="card-meta">${c.provider} · ${c.duration}</div>
              <div class="badge-hint">${state.badges.includes(c.badge) ? "✅ " : ""}Badge: ${c.badge}</div>
            </div>`).join("")}
        </div>
        <div class="panel">
          <strong>Badge ที่สะสมแล้ว (${state.badges.length}):</strong>
          <span>${state.badges.length ? state.badges.join(", ") : "ยังไม่มี — เริ่มเรียนได้เลย"}</span>
        </div>`;
    },

    roadmap: function () {
      if (!state.profileSubmitted) {
        return `
          <h1>สร้าง Dream Roadmap ของคุณ</h1>
          <p class="sub">กรอกโปรไฟล์ (Anonymous — ไม่ใช้ชื่อจริง) แล้วระบบจะตัดตัวเลือก "เป็นไปไม่ได้" ก่อน แล้วจัดลำดับที่เหลือ</p>
          ${formProfile()}
          <button class="btn" onclick="window.__submit()">สร้างแผนของฉัน →</button>`;
      }
      const result = E.matchProfile(state);
      const topCareer = result.careers[0];
      return `
        <h1>1-Page Dream Roadmap</h1>
        <div class="roadmap">
          <h2>🎯 เส้นทางที่เหมาะกับคุณ</h2>
          <div class="panel">
            <strong>สายอาชีพแนะนำ:</strong>
            ${topCareer ? `<span>${topCareer.item.name} (ตรงกับความสนใจ ${topCareer.item.field} + สกิลที่คุณมี)</span>` : "ยังไม่มีสายที่เข้าเงื่อนไข — ปรับโปรไฟล์"}
          </div>
          <h3>ขั้นตอนถัดไป (3 ขั้น)</h3>
          <ol class="steps">
            <li>เรียนคอร์สแนะนำ + เก็บ Badge (ดูในหน้า Learn)</li>
            <li>สมัครค่ายที่ตรงความสนใจ (ลิสต์ด้านล่าง)</li>
            <li>สมัครทุนที่เข้าเงื่อนไข (ลิสต์ด้านล่าง)</li>
          </ol>
          <h3>💡 โอกาสที่ "เป็นไปได้จริง" สำหรับคุณ</h3>
          <h4>ค่าย (${result.camps.length})</h4>
          ${result.camps.length ? result.camps.map((r) => `<div class="li">🏕 ${r.item.name} — ฟรี: ${r.item.free ? "✅" : "❌"}</div>`).join("") : "<div class='li'>ไม่มีค่ายที่เข้าเงื่อนไขพื้นที่/ความสนใจ</div>"}
          <h4>ทุนการศึกษา (${result.scholarships.length})</h4>
          ${result.scholarships.length ? result.scholarships.map((r) => `<div class="li">🎓 ${r.item.name} — ${r.item.amount}<div class="muted">${r.item.note}</div></div>`).join("") : "<div class='li'>ไม่มีทุนที่เข้าเงื่อนไขปัจจุบัน</div>"}
          <div class="trace muted">ทุกคำแนะนำ trace กลับไปที่ชุดข้อมูลจริงได้ (ดู js/data.js) — deterministic, ไม่มี hallucination</div>
        </div>
        <button class="btn" onclick="window.print()">พิมพ์ / บันทึกเป็น PDF</button>`;
    },

    teacher: function () {
      return `
        <h1>Teacher Dashboard</h1>
        <p class="sub">Zero-Setup — ครูไม่ต้องกรอกข้อมูลนักเรียน แค่เปิดหน้าจอ ให้เด็กทำกิจกรรมผ่าน QR</p>
        <div class="panel">
          <strong>ขั้นตอน:</strong> 1) ขอ Consent ผู้ปกครอง (รายงาน สพฐ. ชั้นนี้ต้องมีตัวตนจริง — PDPA) → 2) เปิดกิจกรรม → 3) ระบบสรุป PDF 1 คลิก
        </div>
        <div class="grid">
          <div class="card">
            <div class="card-thumb">📊</div>
            <div class="card-title">รายงานความสนใจรายห้อง (Mock)</div>
            <div class="card-meta">ห้อง ม.3/1 · 32 คน · Tech 40%, Creative 25%, Health 20%</div>
            <button class="btn" onclick="window.__teacherReport()">สร้าง PDF รายงาน 1 คลิก</button>
          </div>
          <div class="card">
            <div class="card-thumb">⏱</div>
            <div class="card-title">เวลาเฉลี่ยต่อคาบ</div>
            <div class="card-meta">จับเวลาอัตโนมัติ: 3 นาที 20 วินาที (เป้า < 5 นาที)</div>
          </div>
        </div>`;
    }
  };

  function formProfile() {
    const interests = ["Technology", "Creative", "Health", "Business", "Education", "Media", "Engineering"];
    const skills = ["tech", "logic", "art", "science", "language", "math", "finance"];
    return `
      <div class="form">
        <label>ระดับชั้น
          <select id="pGrade">${E.GRADE_ORDER.map((g) => `<option ${g === state.grade ? "selected" : ""}>${g}</option>`).join("")}</select>
        </label>
        <label>พื้นที่
          <select id="pLoc">
            ${["ชลบุรี", "ขอนแก่น", "เชียงใหม่", "พิษณุโลก", "อื่นๆ"].map((l) => `<option ${l === state.location ? "selected" : ""}>${l}</option>`).join("")}
          </select>
        </label>
        <label>สถานะรายได้ครัวเรือน
          <select id="pInc">
            <option value="low" ${state.income === "low" ? "selected" : ""}>รายได้ต่ำ (เข้าข่าย กสศ.)</option>
            <option value="mid" ${state.income === "mid" ? "selected" : ""}>รายได้ปานกลางขึ้นไป</option>
          </select>
        </label>
        <fieldset><legend>ความสนใจ (เลือกได้หลาย)</legend>
          ${interests.map((i) => `<label class="chk"><input type="checkbox" class="pInt" value="${i}" ${state.interest.includes(i) ? "checked" : ""}> ${i}</label>`).join("")}
        </fieldset>
        <fieldset><legend>วิชา/สกิลที่ถนัด</legend>
          ${skills.map((s) => `<label class="chk"><input type="checkbox" class="pSkill" value="${s}" ${state.skills.includes(s) ? "checked" : ""}> ${s}</label>`).join("")}
        </fieldset>
      </div>`;
  }

  window.__submit = function () {
    state.grade = document.getElementById("pGrade").value;
    state.location = document.getElementById("pLoc").value;
    state.income = document.getElementById("pInc").value;
    state.interest = Array.from(document.querySelectorAll(".pInt:checked")).map((x) => x.value);
    state.skills = Array.from(document.querySelectorAll(".pSkill:checked")).map((x) => x.value);
    state.profileSubmitted = true;
    render();
  };

  window.__enroll = function (id) {
    const course = D.courses.find((c) => c.id === id);
    if (course && !state.badges.includes(course.badge)) {
      state.badges.push(course.badge);
      alert("✅ เรียนจบ " + course.title + " → ได้ Badge: " + course.badge);
      render();
    }
  };

  window.__watch = function (id) {
    const c = D.careers.find((x) => x.id === id);
    const box = document.getElementById("quizBox");
    if (box && c) {
      box.innerHTML = `
        <div class="panel">
          <strong>🎬 กำลังดู: ${c.name}</strong>
          <p class="muted">${c.sample}</p>
          <p><strong>คำถาม:</strong> หลังดูคลิปนี้ คุณรู้สึกอยากลองทำแบบนี้ไหม?
          <button class="btn" onclick="this.closest('.panel').innerHTML='✅ บันทึกความสนใจแล้ว (${c.field})'">อยากลอง!</button>
          <button class="btn" onclick="this.closest('.panel').innerHTML='🗑 ตัดตัวเลือกนี้ออก (ประหยัดเวลา)'">ไม่ใช่แนว</button></p>
        </div>`;
    }
  };

  window.__teacherReport = function () {
    window.print();
  };

  function bindRoute() {
    const btns = document.querySelectorAll("[onclick^='window.__']");
    // nothing extra needed — handlers already global
  }

  window.addEventListener("hashchange", render);
  render();
})();
