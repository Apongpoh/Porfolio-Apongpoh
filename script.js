const featuredProjects = [
  {
    title: "Secure Client Portal",
    stack: ["JavaScript", "Node.js", "JWT", "Role-Based Access"],
    summary:
      "Client-facing dashboard with secure authentication flow and protected business data.",
    status: "Template — replace with your real project details"
  },
  {
    title: "Python API Hardening",
    stack: ["Python", "Flask/FastAPI", "Input Validation", "Logging"],
    summary:
      "Backend service template focused on API security controls and audit-ready observability.",
    status: "Template — replace with your real project details"
  },
  {
    title: "Threat Monitoring Toolkit",
    stack: ["Python", "SIEM Concepts", "Alert Triage"],
    summary:
      "Starter concept for collecting and reviewing suspicious events with analyst-friendly outputs.",
    status: "Template — replace with your real project details"
  }
];

const projectList = document.getElementById("project-list");

featuredProjects.forEach((project) => {
  const card = document.createElement("article");
  card.className = "card";

  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.summary}</p>
    <p><strong>Stack:</strong> ${project.stack.join(" • ")}</p>
    <p><em>${project.status}</em></p>
  `;

  projectList.appendChild(card);
});

document.getElementById("year").textContent = new Date().getFullYear();
