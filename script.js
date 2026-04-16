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
    title: "Microsoft Sentinel SOC Lab",
    summary:
      "A dedicated lab environment for unified threat monitoring, log analysis, alert triage, and incident response practice across Kali Linux, Windows, and Ubuntu servers.",
    stack: ["Microsoft Sentinel", "Kali Linux", "Windows", "Ubuntu", "Alert triage"],
    status: "SOC practice",
    links: [
      { label: "Discuss this work", href: "#contact" },
      { label: "Evidence placeholder", href: "#contact" }
    ],
    accent: "#48e08e",
    featured: true,
    preview: {
      title: "SOC evidence preview",
      points: ["Sentinel dashboard placeholder", "Sample KQL query placeholder", "Incident notes placeholder"]
    },
    evidence: [
      "Add Sentinel workspace screenshot with sample alerts.",
      "Add one sanitized KQL query and investigation notes.",
      "Add a short incident report showing triage, impact, and response."
    ],
    lifecycle: [
      {
        phase: "Goal",
        detail:
          "Build a practical SOC training environment that connects endpoint activity with centralized monitoring and analyst-style review."
      },
      {
        phase: "Environment Design",
        detail:
          "Use Kali Linux, Windows, and Ubuntu systems to represent attacker tooling, user endpoints, and server telemetry sources."
      },
      {
        phase: "Monitoring Setup",
        detail:
          "Route security-relevant logs into Microsoft Sentinel for unified visibility, alert review, and event correlation."
      },
      {
        phase: "Detection Practice",
        detail:
          "Review suspicious activity, document triage notes, collect evidence, and practice moving from raw events to incident response decisions."
      },
      {
        phase: "Improvement Loop",
        detail:
          "Use each scenario to improve log coverage, refine alert handling, and strengthen blue-team investigation habits."
      }
    ]
  },
  {
    title: "Sisi Africa",
    summary:
      "A non-commercial social content web app with posts, comments, responsive sections, authentication-oriented dependencies, and media-ready infrastructure.",
    stack: ["Next.js", "MongoDB", "JWT", "AWS S3"],
    status: "Non-commercial web app",
    links: [
      {
        label: "View repository",
        href: "https://github.com/Apongpoh/sisi-africa"
      },
      {
        label: "Live demo placeholder",
        href: "#contact"
      }
    ],
    accent: "#ffd166",
    preview: {
      title: "App preview placeholder",
      points: ["Feed screenshot placeholder", "Comment flow placeholder", "Media upload placeholder"]
    },
    evidence: [
      "Add one screenshot of the feed or content detail page.",
      "Add a short note explaining authentication and media handling.",
      "Add a demo link after deployment."
    ],
    lifecycle: [
      {
        phase: "Idea",
        detail:
          "Explore a social content platform around community posting, comments, responsive navigation, and media-ready infrastructure."
      },
      {
        phase: "Architecture",
        detail:
          "Structure the app with Next.js components, MongoDB data patterns, authentication dependencies, and AWS S3-ready media handling."
      },
      {
        phase: "User Flow",
        detail:
          "Build a feed-style experience with posts, comment loading, side sections, mobile visibility controls, and a branded loading state."
      },
      {
        phase: "Security Considerations",
        detail:
          "Include JWT, password hashing, validation, sanitization, and rate-limiting dependencies to support safer application flows."
      },
      {
        phase: "Learning Outcome",
        detail:
          "Strengthened component organization, full-stack data flow thinking, and secure-by-default planning for content applications."
      }
    ]
  },
  {
    title: "Tierra",
    summary:
      "A non-commercial marketplace-style web app with product discovery, advanced search, vendor flows, support tickets, and Bitcoin wallet concepts.",
    stack: ["Next.js", "TypeScript", "Bitcoin", "Security scripts"],
    status: "Non-commercial web app",
    links: [
      {
        label: "View repository",
        href: "https://github.com/Apongpoh/tierra"
      },
      {
        label: "Live demo placeholder",
        href: "#contact"
      }
    ],
    accent: "#ff715b",
    preview: {
      title: "Marketplace preview placeholder",
      points: ["Product search placeholder", "Vendor flow placeholder", "Wallet concept placeholder"]
    },
    evidence: [
      "Add a screenshot of search, product detail, or vendor dashboard.",
      "Add a short case-study note for security scripts and validation.",
      "Add a demo link after deployment."
    ],
    lifecycle: [
      {
        phase: "Concept",
        detail:
          "Design a marketplace-style app that combines product browsing, vendor flows, support workflows, and crypto wallet ideas."
      },
      {
        phase: "Product Experience",
        detail:
          "Build category browsing, advanced filtering, pagination, quick-view product modals, support ticket replies, and responsive sections."
      },
      {
        phase: "Security Layer",
        detail:
          "Add security audit, monitoring, and test scripts alongside validation and authentication-oriented dependencies."
      },
      {
        phase: "Crypto Exploration",
        detail:
          "Experiment with Bitcoin wallet flows, escrow concepts, QR code generation, and transaction-oriented user interface patterns."
      },
      {
        phase: "Learning Outcome",
        detail:
          "Practiced larger application state management, marketplace workflows, and security-conscious feature planning."
      }
    ]
  },
  {
    title: "Fiorell",
    summary:
      "A privacy-focused dating app concept with profiles, matching, messaging, location-aware discovery, premium flows, and cryptocurrency payment support.",
    stack: ["Next.js", "MongoDB", "JWT", "Crypto payments"],
    status: "Non-commercial web app",
    links: [
      {
        label: "View repository",
        href: "https://github.com/Apongpoh/fiorell"
      },
      {
        label: "Live demo placeholder",
        href: "#contact"
      }
    ],
    accent: "#48e08e",
    preview: {
      title: "Privacy flow placeholder",
      points: ["Profile screenshot placeholder", "Match flow placeholder", "Messaging placeholder"]
    },
    evidence: [
      "Add one screenshot of profile, matching, or messaging screens.",
      "Add a short note on privacy protections and protected routes.",
      "Add a demo link after deployment."
    ],
    lifecycle: [
      {
        phase: "Problem Framing",
        detail:
          "Explore how a privacy-focused dating app could support discovery, matching, messaging, and premium account flows."
      },
      {
        phase: "Core Build",
        detail:
          "Plan user profiles, photo management, like/pass interactions, match detection, real-time messaging, settings, and dashboard pages."
      },
      {
        phase: "Data Model",
        detail:
          "Use MongoDB and Mongoose concepts for users, matches, messages, likes, subscriptions, and location-aware discovery."
      },
      {
        phase: "Security & Privacy",
        detail:
          "Include JWT authentication, bcrypt password hashing, protected API routes, Zod validation, and privacy-focused payment options."
      },
      {
        phase: "Learning Outcome",
        detail:
          "Practiced building a complex full-stack product with privacy, payments, user safety, and API documentation in mind."
      }
    ]
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

  featuredProjects.forEach((project, index) => {
    const card = createElement(
      "article",
      `project-card${project.featured ? " featured" : ""}`
    );
    card.style.setProperty("--card-accent", project.accent);
    card.setAttribute("data-animate", "");

    card.append(
      createElement("span", "project-status", project.status)
    );

    if (project.preview) {
      const preview = createElement("div", "project-preview");
      preview.append(createElement("strong", "project-preview-title", project.preview.title));

      const previewList = createElement("ul", "project-preview-list");
      project.preview.points.forEach((point) => {
        previewList.append(createElement("li", "", point));
      });
      preview.append(previewList);
      card.append(preview);
    }

    card.append(
      createElement("h3", "", project.title),
      createElement("p", "", project.summary)
    );

    const stack = createElement("ul", "project-stack");
    project.stack.forEach((item) => stack.append(createElement("li", "", item)));
    card.append(stack);

    const actions = createElement("div", "project-actions");
    const lifecycleButton = createElement("button", "project-link", "View lifecycle");
    lifecycleButton.type = "button";
    lifecycleButton.setAttribute("data-project-index", String(index));
    actions.append(lifecycleButton);

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

const setupProjectLifecycle = () => {
  const modal = document.getElementById("project-lifecycle");
  const title = document.getElementById("lifecycle-title");
  const summary = document.getElementById("lifecycle-summary");
  const evidence = document.getElementById("lifecycle-evidence");
  const steps = document.getElementById("lifecycle-steps");
  const lifecycleButtons = document.querySelectorAll("[data-project-index]");
  const closeButtons = document.querySelectorAll("[data-close-lifecycle]");

  if (!modal || !title || !summary || !evidence || !steps) {
    return;
  }

  const closeLifecycle = () => {
    modal.hidden = true;
    document.body.classList.remove("lifecycle-open");
  };

  const openLifecycle = (project) => {
    title.textContent = project.title;
    summary.textContent = project.summary;
    evidence.replaceChildren();
    steps.replaceChildren();

    project.evidence.forEach((item) => {
      evidence.append(createElement("li", "", item));
    });

    project.lifecycle.forEach((item) => {
      const step = createElement("li", "lifecycle-step");
      step.append(
        createElement("strong", "", item.phase),
        createElement("p", "", item.detail)
      );
      steps.append(step);
    });

    modal.hidden = false;
    document.body.classList.add("lifecycle-open");
    modal.querySelector(".lifecycle-close")?.focus();
  };

  lifecycleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const project = featuredProjects[Number(button.dataset.projectIndex)];

      if (project?.lifecycle) {
        openLifecycle(project);
      }
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", closeLifecycle);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeLifecycle();
    }
  });
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
setupProjectLifecycle();
setupNavigation();
setupActiveSection();
setupReveal();

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}
