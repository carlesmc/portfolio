const EN = {
  "mast": "Datasheet · Cloud platform engineering",
  "lede": "I design, build and secure cloud platforms for IoT and data, from application code to the underlying network.",
  "av.status": "Status", "av.statusv": "Available", "av.freev": "Projects & consulting",
  "av.job": "Hiring", "av.jobv": "Open to offers", "av.base": "Base", "av.lang": "Languages",
  "h.1": "Description", "h.1d": "General description", "h.2": "Typical application",
  "h.4": "Experience", "h.5": "Tech stack", "h.6": "Education", "h.7": "Contact",
  "d.p1": "Cloud Platform Engineer specialized in end-to-end delivery of scalable IoT architectures. I combine a background in Telecommunications and Cybersecurity with a software engineering mindset: infrastructure is a version-controlled product.",
  "d.p2": "My goal is simple: platforms that are secure by design, cost-efficient and effortlessly scalable.",
  "f.h": "Features",
  "f.1": "Infrastructure as code on Azure and GCP with Terraform and Ansible",
  "f.2": "Full delivery lifecycle for containerized applications with Docker",
  "f.3": "Zero Trust networking with Private Endpoints and identity (Keycloak / Azure AD)",
  "f.4": "Managed AI services (Google Vertex AI) in production",
  "f.5": "Real-time IoT telemetry at fleet scale",
  "f.6": "MSc in Cybersecurity and Cyberintelligence (UPV)",
  "g.b1": "Battery fleet", "g.b1s": "IoT telemetry", "g.b2": "Ingestion", "g.b2s": "real time",
  "g.b3": "Inference", "g.b3s": "live diagnostics", "g.b4": "Fleet management", "g.b4s": "critical operations",
  "g.r": "Retraining", "g.rs": "custom models", "g.obs": "Centralized observability · cost per device",
  "fig": "Figure 1. IoT telemetry platform for battery fleets, Zeleros (2025–present). Simplified.",
  "h.3": "Services",
  "o.h": "I bring your product to life in the cloud: secure, scalable and with no surprises on the bill.",
  "o.p": "I work directly with you, from idea to deployment. No middlemen, and no need to build a platform team.",
  "o.c": "If you need to…", "o.s": "What you get", "o.a": "With",
  "s1.t": "Launch your product in the cloud", "s1.d": "Production-ready infrastructure, reproducible and documented, that grows with you.",
  "s2.t": "Ship without fear", "s2.d": "Every change reaches production automatically and reliably, with no manual steps.",
  "s3.t": "Protect your customers' data", "s3.d": "Controlled access, private networks and a solid foundation for audits.",
  "s4.t": "Connect your devices", "s4.d": "Real-time telemetry from your equipment and data ready for decisions.",
  "s5.t": "Bring AI into your product", "s5.d": "Models running inside your application, on real data and in real time.",
  "s6.t": "Pay less for the cloud", "s6.d": "Visibility into what you spend and resources sized to what you actually use.",
  "w.h": "How we work", "w.1": "We talk", "w.1d": "You tell me your goal and where you're starting from. No commitment.",
  "w.2": "Proposal", "w.2d": "Clear scope, timeline and deliverables, in writing.",
  "w.3": "Delivery", "w.3d": "I build, document and hand you full control.",
  "cta.1": "Tell me about your project", "cta.2": "See experience",
  "now": "now",
  "z2.intro": "Technical leadership and end-to-end engineering of a high-throughput cloud IoT platform managing massive telemetry from distributed battery fleets.",
  "z2.a": "Resilient cloud architecture for real-time data ingestion, built for critical fleet-management operations.",
  "z2.b": "Real-time inference engine for instant battery diagnostics from live telemetry.",
  "z2.c": "Data ingestion pipelines for retraining the modelling team's custom models.",
  "z2.d": "Core backend/frontend logic and application optimization for containerized environments.",
  "z2.e": "Automated provisioning with Terraform and Ansible: reproducible deployments without manual intervention.",
  "z2.f": "Zero Trust architecture with Private Endpoints to isolate sensitive client data.",
  "z2.g": "Centralized observability stack and resource optimization to minimize cost per device.",
  "i.a": "Hybrid cloud operations: Linux infrastructure across Azure and on-premise, networking and security.",
  "i.b": "Application orchestration with Docker Swarm and provisioning with Terraform and Ansible.",
  "i.c": "CI/CD with Jenkins and Azure DevOps for water sector solutions.",
  "i.d": "PostgreSQL/MySQL databases and monitoring with Grafana and Elasticsearch.",
  "z1.d": "First stage at Zeleros, building the foundations of the company's cloud infrastructure.",
  "a.d": "Junior software engineer in a team specialized in defect detection and repair for the automotive industry. Worked with vision and mechanical engineers on a robotic system for repairing and polishing metallic surfaces. Systems integration, advanced programming and databases.",
  "k.iac": "IaC & automation", "k.sec": "Security", "k.data": "Data & observability", "k.cert": "Certifications",
  "e1": "MSc in Cybersecurity and Cyberintelligence", "e2": "Telecommunications Engineering, Telematic Systems",
  "c.p": "A freelance project or a job offer? Write to me and I'll reply within 24–48 h.",
  "c.copy": "Copy email", "c.copied": "Copied", "c.open": "Open mail"
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
