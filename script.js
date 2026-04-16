const skills = [
  {
    title: "SOC & Security Operations",
    summary:
      "Hands-on monitoring, alert triage, log analysis, incident documentation, and Microsoft Sentinel lab practice.",
    items: [
      "Security+",
      "Microsoft Sentinel",
      "Incident response",
      "Threat analysis"
    ],
    accent: "#48e08e"
  },
  {
    title: "Secure Full-Stack Development",
    summary:
      "Application security experience across custom web apps, e-commerce platforms, authentication, and deployment.",
    items: ["OWASP Top 10", "JWT", "RBAC", "SSL/TLS"],
    accent: "#ffd166"
  },
  {
    title: "IT Infrastructure",
    summary:
      "Operational support across networks, Windows/Linux systems, Microsoft 365, Active Directory, and backups.",
    items: ["Firewalls", "MFA", "AD/GPO", "50+ endpoints"],
    accent: "#ff715b"
  }
];

const featuredProjects = [
  {
    title: "Portfolio Website",
    summary:
      "A personal portfolio for presenting cybersecurity focus, full-stack skills, project work, and professional contact links.",
    stack: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    status: "Live repository",
    links: [
      {
        label: "View commits",
        href: "https://github.com/Apongpoh/Porfolio-Apongpoh/commits"
      },
      { label: "Contact me", href: "#contact" }
    ],
    accent: "#48e08e",
    featured: true
  },
  {
    title: "Microsoft Sentinel SOC Lab",
    summary:
      "A dedicated lab environment for unified threat monitoring, log analysis, and incident response across Kali Linux, Windows, and Ubuntu servers.",
    stack: ["Microsoft Sentinel", "Kali Linux", "Windows", "Ubuntu"],
    status: "SOC practice",
    links: [{ label: "Discuss this work", href: "#contact" }],
    accent: "#ffd166"
  },
  {
    title: "Secure Web Application Delivery",
    summary:
      "A body of client-facing full-stack work focused on secure authentication, RBAC, OWASP remediation, SSL/TLS, and data protection.",
    stack: ["AppSec", "JWT", "bcrypt", "OWASP"],
    status: "5+ applications",
    links: [{ label: "Request walkthrough", href: "#contact" }],
    accent: "#ff715b"
  }
];

const createElement = (tag, className, text) => {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (text) {
    element.textContent = text;
  }

  return element;
};

const renderSkills = () => {
  const skillList = document.getElementById("skill-list");

  if (!skillList) {
    return;
  }

  const fragment = document.createDocumentFragment();

  skills.forEach((skill) => {
    const card = createElement("article", "skill-card");
    card.style.setProperty("--card-accent", skill.accent);
    card.setAttribute("data-animate", "");

    card.append(
      createElement("h3", "", skill.title),
      createElement("p", "", skill.summary)
    );

    const list = createElement("ul", "pill-list");
    skill.items.forEach((item) => list.append(createElement("li", "", item)));
    card.append(list);
    fragment.append(card);
  });

  skillList.append(fragment);
};

const renderProjects = () => {
  const projectList = document.getElementById("project-list");

  if (!projectList) {
    return;
  }

  const fragment = document.createDocumentFragment();

  featuredProjects.forEach((project) => {
    const card = createElement(
      "article",
      `project-card${project.featured ? " featured" : ""}`
    );
    card.style.setProperty("--card-accent", project.accent);
    card.setAttribute("data-animate", "");

    card.append(
      createElement("span", "project-status", project.status),
      createElement("h3", "", project.title),
      createElement("p", "", project.summary)
    );

    const stack = createElement("ul", "project-stack");
    project.stack.forEach((item) => stack.append(createElement("li", "", item)));
    card.append(stack);

    const actions = createElement("div", "project-actions");
    project.links.forEach((link) => {
      const anchor = createElement("a", "project-link", link.label);
      anchor.href = link.href;

      if (link.href.startsWith("http")) {
        anchor.target = "_blank";
        anchor.rel = "noreferrer";
      }

      actions.append(anchor);
    });
    card.append(actions);

    fragment.append(card);
  });

  projectList.append(fragment);
};

const setupNavigation = () => {
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links a");

  if (!toggle || !navLinks) {
    return;
  }

  const closeMenu = () => {
    toggle.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  };

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    navLinks.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("nav-open", !isOpen);
  });

  links.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
};

const setupActiveSection = () => {
  const links = [...document.querySelectorAll(".nav-links a")];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!sections.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        links.forEach((link) => {
          const isCurrent = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("is-active", isCurrent);
        });
      });
    },
    { rootMargin: "-38% 0px -54% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
};

const setupReveal = () => {
  const animated = document.querySelectorAll("[data-animate]");

  if (!animated.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    animated.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  animated.forEach((element) => observer.observe(element));
};

renderSkills();
renderProjects();
setupNavigation();
setupActiveSection();
setupReveal();

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}
