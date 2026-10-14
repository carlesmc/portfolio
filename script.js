const EN = {
  "role": "Cloud Platform Engineer · Valencia, Spain",
  "intro.1": "I help companies take their product to the cloud and keep it running: secure, stable and with no surprises on the bill.",
  "intro.2": "I'm a telecommunications engineer with a master's in cybersecurity. I work as a Cloud Platform Engineer at Zeleros, take on freelance projects and am open to new opportunities.",
  "link.contact": "Get in touch", "link.exp": "Experience",
  "h.services": "How I can help",
  "s1.t": "Put your product in the cloud", "s1.d": "I set up the infrastructure so your application runs reliably and can grow when more users arrive.",
  "s2.t": "Ship changes without fear", "s2.d": "I automate the path from code to production, so releasing improvements is fast and doesn't break anything.",
  "s3.t": "Protect your data", "s3.d": "I set up access and networks so only the right people get in. I come from cybersecurity, so it's the first thing I check.",
  "s4.t": "Connect your equipment", "s4.d": "If your business has connected sensors, machines or batteries, I collect their data in real time and turn it into useful information.",
  "s5.t": "Spend less on the cloud", "s5.d": "I review what you pay and size resources to what you actually use.",
  "how": "We start with a call to understand what you need. Then I send you a proposal with a clear scope and timeline. When we finish, everything is documented and under your control.",
  "h.exp": "Experience", "now": "now",
  "x1": "I lead the cloud platform that collects and analyzes battery fleet data in real time, including a system that diagnoses battery health instantly.",
  "x2": "Managed Azure and on-premise infrastructure for water sector solutions, and automated their deployments and monitoring.",
  "x3": "Built the foundations of the company's cloud infrastructure.",
  "x4": "Developed software for a robotic system that detects and repairs defects on automotive metal surfaces.",
  "tools": "Everyday tools",
  "h.edu": "Education",
  "e1": "MSc in Cybersecurity and Cyberintelligence", "e2": "Telecommunications Engineering",
  "certs": "Certifications", "langs": "Languages: Spanish, Valencian and English (C1).",
  "h.contact": "Contact",
  "c.p": "Have a project in mind or a job offer? Write to me and I'll reply within a day or two.",
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
