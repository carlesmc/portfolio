const EN = {
  "role": "Cloud Platform Engineer · Valencia, Spain",
  "intro.1": "I help companies get their product into the cloud and keep it running smoothly: secure, reliable, and with no surprises on the bill.",
  "intro.2": "I'm a telecommunications engineer with a master's in cybersecurity. I work as a Cloud Platform Engineer at Zeleros and take on freelance projects.",
  "link.contact": "Get in touch", "link.exp": "Experience",
  "ed.file": "your-project/main.tf", "ed.mod": "\"your_product\"",
  "ed.k0": "source", "ed.v0": "\"./cloud\"", "ed.k1": "secure", "ed.k2": "scale ", "ed.v2": "\"auto\"",
  "ed.k3": "cost  ", "ed.v3": "\"only what you use\"", "ed.g": "  go_live = true",
  "h.services": "What I can do for you",
  "s1.t": "Launch your product in the cloud", "s1.d": "I build the infrastructure your app needs to run reliably and scale as your user base grows.",
  "s2.t": "Ship with confidence", "s2.d": "I automate the path from code to production, so releasing updates is fast and nothing breaks along the way.",
  "s3.t": "Keep your data safe", "s3.d": "I lock down access and networks so only the right people get in. My background is in cybersecurity, so security always comes first.",
  "s4.t": "Connect your devices", "s4.d": "If your business runs connected sensors, machines or batteries, I stream their data in real time and turn it into insights you can act on.",
  "s5.t": "Cut your cloud bill", "s5.d": "I review what you're paying for and right-size your resources to what you actually use.",
  "how": "We start with a call to understand what you need. Then I send you a proposal with a clear scope and timeline. When the work is done, everything is documented and in your hands.",
  "h.exp": "Experience", "now": "present",
  "x1": "I lead the cloud platform that ingests and analyzes battery fleet data in real time, including a system that diagnoses battery health on the spot.",
  "exp.more": "More than 5 years of experience in software engineering and cloud.", "exp.li": "Full career on LinkedIn",
  "tools": "Tools I use every day",
  "h.edu": "Education",
  "e1": "MSc in Cybersecurity and Cyberintelligence", "e2": "Telecommunications Engineering",
  "certs": "Certifications", "langs": "Languages: Spanish and Valencian (native), English (C1).",
  "h.contact": "Contact",
  "c.p": "Have a project in mind, or just want to talk? Drop me a line and I'll get back to you within a day or two.",
  "c.copy": "Copy", "c.copied": "Copied"
};

const nodes = [...document.querySelectorAll("[data-i18n]")];
const ES = Object.fromEntries(nodes.map(n => [n.dataset.i18n, n.textContent]));
ES["c.copied"] = "Copiado";
const btn = document.getElementById("lang");
const t = key => (document.documentElement.lang === "en" ? EN : ES)[key];

function setLang(lang) {
  document.documentElement.lang = lang;
  nodes.forEach(n => { const v = t(n.dataset.i18n); if (v != null) n.textContent = v; });
  btn.textContent = lang === "en" ? "ES" : "EN";
  try { localStorage.setItem("lang", lang); } catch {}
}

let saved = null;
try { saved = localStorage.getItem("lang"); } catch {}
const initial = saved || ((navigator.language || "es").toLowerCase().startsWith("es") ? "es" : "en");
if (initial === "en") setLang("en");
btn.addEventListener("click", () => setLang(document.documentElement.lang === "en" ? "es" : "en"));

const copy = document.getElementById("copy");
copy.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("carlesmartinezchova@gmail.com");
    copy.textContent = t("c.copied");
    setTimeout(() => { copy.textContent = t("c.copy"); }, 1800);
  } catch {
    const r = document.createRange();
    r.selectNodeContents(document.getElementById("email"));
    const s = getSelection(); s.removeAllRanges(); s.addRange(r);
  }
});
