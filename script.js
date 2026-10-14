const EN = {
  "nav.services": "Services", "nav.experience": "Experience", "nav.skills": "Stack", "nav.education": "Education", "nav.contact": "Contact",
  "hero.status": "Available for freelance projects and new opportunities",
  "hero.lead": "I design, build and secure cloud platforms end to end, from application code to the underlying network. My goal: platforms that are secure by design, cost-efficient and effortlessly scalable.",
  "hero.cta1": "Let's work together", "hero.cta2": "See my career",
  "facts.years": "years in cloud & engineering", "facts.msc": "Cybersecurity (UPV)", "facts.lang": "English · Valencian C2", "facts.iot": "Large-scale telemetry",
  "services.title": "Freelance services",
  "services.sub": "For startups and SMEs that need professional infrastructure without building a platform team.",
  "s1.t": "Infrastructure as Code", "s1.d": "Reproducible Azure/GCP environments with Terraform and Ansible: version-controlled, auditable and hands-off.",
  "s2.t": "Deployment & CI/CD", "s2.d": "Docker containerization and Azure DevOps or Jenkins pipelines to take your backend to production reliably.",
  "s3.t": "Security & Zero Trust", "s3.d": "Private Endpoint networks, identity management (Keycloak / Azure AD) and DevSecOps best practices.",
  "s4.t": "IoT & data platforms", "s4.d": "Real-time telemetry ingestion, data pipelines and isolation of sensitive customer data.",
  "s5.t": "AI in production", "s5.d": "Integration of managed services (Google Vertex AI) and inference engines into real architectures.",
  "s6.t": "Observability & cost", "s6.d": "Grafana/Elastic monitoring and cloud resource optimization to lower cost per device or service.",
  "exp.title": "Experience", "exp.sub": "My career, from industrial engineering to cloud platforms.", "exp.present": "Present",
  "z2.intro": "Technical leadership and end-to-end engineering of a high-throughput cloud IoT platform managing massive telemetry from distributed battery fleets.",
  "z2.a": "Resilient cloud architecture for real-time data ingestion, built for critical fleet-management operations.",
  "z2.b": "Real-time inference engine for instant battery diagnostics from live telemetry.",
  "z2.c": "Data ingestion pipelines for retraining models developed by the modelling team.",
  "z2.d": "Core backend/frontend logic and application optimization for containerized environments.",
  "z2.e": "Automated provisioning with Terraform and Ansible: reproducible deployments without manual intervention.",
  "z2.f": "Zero Trust architecture with Private Endpoints to isolate sensitive client data.",
  "z2.g": "Centralized observability stack and resource optimization to minimize cost per device.",
  "i.a": "Hybrid cloud operations: Linux infrastructure across Azure and on-premise, networking and security.",
  "i.b": "App orchestration with Docker Swarm and provisioning with Terraform and Ansible.",
  "i.c": "CI/CD with Jenkins and Azure DevOps for Water Sector solutions.",
  "i.d": "PostgreSQL/MySQL databases and monitoring with Grafana and Elasticsearch.",
  "z1.d": "First stage at Zeleros, building the company's cloud infrastructure foundations.",
  "a.d": "Junior software engineer in a specialized team for defect detection and repair in the automotive industry. Built a custom solution and worked with vision and mechanical engineers on a robotic system for repairing and polishing metallic surfaces. Systems integration, advanced programming and database management.",
  "skills.title": "Tech stack", "skills.certs": "Certifications",
  "edu.title": "Education",
  "e1.t": "MSc in Cybersecurity and Cyberintelligence", "e2.t": "Telecommunications Engineering (Telematic Systems)",
  "c.title": "Let's talk", "c.sub": "A freelance project or an opportunity? Tell me and I'll reply within 24–48 h.",
  "c.name": "Name", "c.msg": "Message", "c.send": "Send by email"
};

const nodes = [...document.querySelectorAll("[data-i18n]")];
const ES = Object.fromEntries(nodes.map(n => [n.dataset.i18n, n.innerHTML]));
const btn = document.getElementById("lang");

function setLang(lang) {
  const dict = lang === "en" ? EN : ES;
  nodes.forEach(n => { if (dict[n.dataset.i18n] != null) n.innerHTML = dict[n.dataset.i18n]; });
  document.documentElement.lang = lang;
  btn.textContent = lang === "en" ? "ES" : "EN";
  try { localStorage.setItem("lang", lang); } catch {}
}

let saved = null;
try { saved = localStorage.getItem("lang"); } catch {}
const initial = saved || ((navigator.language || "es").toLowerCase().startsWith("es") ? "es" : "en");
if (initial === "en") setLang("en");
btn.addEventListener("click", () => setLang(document.documentElement.lang === "en" ? "es" : "en"));

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const subject = encodeURIComponent("Contacto desde el portfolio · " + f.get("name"));
  const body = encodeURIComponent(f.get("msg") + "\n\n— " + f.get("name") + " (" + f.get("email") + ")");
  location.href = "mailto:carlesmartinezchova@gmail.com?subject=" + subject + "&body=" + body;
});
