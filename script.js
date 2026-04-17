const skills = [
  {
    title: "SOC & Security Operations",
    summary:
      "Monitoring, alert review, log analysis, incident notes, and Microsoft Sentinel lab practice.",
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
      "Web app work with authentication, access control, deployment, and basic application security in mind.",
    items: ["OWASP Top 10", "JWT", "RBAC", "SSL/TLS"],
    accent: "#ffd166"
  },
  {
    title: "IT Infrastructure",
    summary:
      "Support experience across networks, Windows and Linux systems, Microsoft 365, Active Directory, and backups.",
    items: ["Firewalls", "MFA", "AD/GPO", "50+ endpoints"],
    accent: "#ff715b"
  }
];

const featuredProjects = [
  {
    title: "Microsoft Sentinel SOC Lab",
    summary:
      "A Microsoft Sentinel lab where I set up Azure resources, connected Ubuntu and Windows logs, and used KQL to check authentication activity and failed logons.",
    stack: ["Microsoft Sentinel", "Log Analytics", "DCR", "Ubuntu Syslog", "Windows SecurityEvent", "KQL"],
    status: "Featured SOC case study",
    links: [{ label: "Discuss this work", href: "#contact" }],
    accent: "#48e08e",
    featured: true,
    caseStudy: [
      { label: "Build", value: "Created the Azure resource groups, Sentinel workspace, Ubuntu VM, and Windows VM." },
      { label: "Collect", value: "Added data collection rules for Ubuntu syslog and Windows security events." },
      { label: "Check", value: "Used KQL to confirm Linux auth logs and Windows 4625 failed logons." }
    ],
    preview: {
      title: "Inside the case study",
      points: [
        "4 Azure/Sentinel screenshots",
        "8 setup phases from resources to KQL",
        "Syslog and Event ID 4625 validation"
      ]
    },
    evidenceTitle: "Lab evidence captured",
    evidence: [
      "Azure resource groups for the cloud shell storage, Network Watcher, Sentinel workspace, Ubuntu VM, and Windows VM.",
      "A Sentinel workspace connected with separate collection rules for Ubuntu syslog and Windows security events.",
      "A Syslog query showing auth and login-related activity from vm-ubuntu-server.",
      "A SecurityEvent query showing Windows Event ID 4625 failed logons with account, activity, and source IP fields."
    ],
    screenshots: [
      {
        title: "Azure resource layout",
        src: "assets/test_logs/Screenshot from 2026-04-17 04-37-33.png",
        alt: "Azure resource groups for the Sentinel lab setup",
        width: 1123,
        height: 270,
        caption:
          "The lab resources are separated so the workspace, Ubuntu VM, Windows VM, and watcher resources are easy to follow."
      },
      {
        title: "Sentinel workspace and collection rules",
        src: "assets/test_logs/Screenshot from 2026-04-17 04-38-14.png",
        alt: "Azure Sentinel workspace and data collection rules",
        width: 760,
        height: 270,
        caption:
          "The Log Analytics workspace is connected to Microsoft Sentinel, with one rule for Ubuntu syslog and one for Windows security logs."
      },
      {
        title: "Ubuntu auth telemetry in KQL",
        src: "assets/test_logs/Screenshot from 2026-04-17 04-40-38.png",
        alt: "KQL query showing Ubuntu syslog authentication events",
        width: 1373,
        height: 444,
        caption:
          "This query checks Linux auth messages coming from vm-ubuntu-server."
      },
      {
        title: "Windows failed logon evidence",
        src: "assets/test_logs/Screenshot from 2026-04-17 04-44-41.png",
        alt: "KQL query showing Windows failed logon event ID 4625",
        width: 1373,
        height: 444,
        caption:
          "This query filters failed logons and keeps the fields I would use during review."
      }
    ],
    lifecycle: [
      {
        phase: "1. Define the lab goal",
        detail:
          "Build a small SOC practice lab where Ubuntu and Windows activity flows into Microsoft Sentinel."
      },
      {
        phase: "2. Plan the Azure structure",
        detail:
          "Keep the Azure resources organized by function: Sentinel workspace, Ubuntu server, Windows server, Network Watcher, and Cloud Shell storage."
      },
      {
        phase: "3. Create Sentinel and Log Analytics",
        detail:
          "Create the Log Analytics workspace, enable Microsoft Sentinel, and use the workspace as the central place for the logs."
      },
      {
        phase: "4. Connect Ubuntu syslog",
        detail:
          "Create the Ubuntu data collection rule, connect vm-ubuntu-server, and collect syslog events."
      },
      {
        phase: "5. Connect Windows security logs",
        detail:
          "Create the Windows security data collection rule, connect vm-windows-serv, and collect SecurityEvent records."
      },
      {
        phase: "6. Validate Linux events with KQL",
        detail:
          "Run Syslog queries for auth and login messages, then check the host, facility, severity, process ID, and source IP fields."
      },
      {
        phase: "7. Validate Windows failed logons",
        detail:
          "Run SecurityEvent queries for Event ID 4625 and keep the main fields: time, computer, account, activity, and IP address."
      },
      {
        phase: "8. Explain the full analyst workflow",
        detail:
          "Use the screenshots to explain the lab from resource setup to log collection, KQL checks, and possible next steps like alerts and workbooks."
      }
    ]
  },
  {
    title: "Sisi Africa",
    summary:
      "A practice social content app with posts, comments, responsive sections, and media-ready setup.",
    stack: ["Next.js", "MongoDB", "JWT", "AWS S3"],
    status: "Non-commercial web app",
    links: [
      {
        label: "View repository",
        href: "https://github.com/Apongpoh/sisi-africa"
      },
      {
        label: "Live demo",
        href: "https://sauti-africa-rho.vercel.app/"
      }
    ],
    accent: "#ffd166",
    preview: {
      title: "More details to add",
      points: ["Feed screenshot", "Comment flow", "Media upload notes"]
    },
    evidence: [
      "Add one screenshot of the feed or content detail page.",
      "Add a short note about authentication and media handling.",
      "Keep the live demo link updated."
    ],
    lifecycle: [
      {
        phase: "Idea",
        detail:
          "Build a simple social content app with posts, comments, responsive navigation, and media support."
      },
      {
        phase: "Architecture",
        detail:
          "Use Next.js components, MongoDB data patterns, authentication dependencies, and AWS S3-ready media handling."
      },
      {
        phase: "User Flow",
        detail:
          "Build the feed, comments, side sections, mobile visibility controls, and loading state."
      },
      {
        phase: "Security Considerations",
        detail:
          "Plan for JWT, password hashing, validation, sanitization, and rate limiting."
      },
      {
        phase: "Learning Outcome",
        detail:
          "Practiced component organization, full-stack data flow, and safer planning for content apps."
      }
    ]
  },
  {
    title: "Tierra",
    summary:
      "A practice marketplace app with product browsing, search, vendor flows, support tickets, and Bitcoin wallet ideas.",
    stack: ["Next.js", "TypeScript", "Bitcoin", "Security scripts"],
    status: "Non-commercial web app",
    links: [
      {
        label: "View repository",
        href: "https://github.com/Apongpoh/tierra"
      },
      {
        label: "Demo coming soon",
        href: "#contact"
      }
    ],
    accent: "#ff715b",
    preview: {
      title: "More details to add",
      points: ["Product search screenshot", "Vendor flow", "Wallet concept notes"]
    },
    evidence: [
      "Add a screenshot of search, product detail, or vendor dashboard.",
      "Add a short note about security scripts and validation.",
      "Add a demo link after deployment."
    ],
    lifecycle: [
      {
        phase: "Concept",
        detail:
          "Build a marketplace-style app with product browsing, vendor flows, support workflows, and crypto wallet ideas."
      },
      {
        phase: "Product Experience",
        detail:
          "Add category browsing, filtering, pagination, quick-view product modals, support ticket replies, and responsive sections."
      },
      {
        phase: "Security Layer",
        detail:
          "Add security audit, monitoring, and test scripts, plus validation and authentication-focused dependencies."
      },
      {
        phase: "Crypto Exploration",
        detail:
          "Try Bitcoin wallet flows, escrow concepts, QR code generation, and transaction screens."
      },
      {
        phase: "Learning Outcome",
        detail:
          "Practiced larger app structure, marketplace workflows, and security-aware feature planning."
      }
    ]
  },
  {
    title: "Fiorell",
    summary:
      "A practice dating app concept with profiles, matching, messaging, location-aware discovery, premium flows, and crypto payment ideas.",
    stack: ["Next.js", "MongoDB", "JWT", "Crypto payments"],
    status: "Non-commercial web app",
    links: [
      {
        label: "View repository",
        href: "https://github.com/Apongpoh/fiorell"
      },
      {
        label: "Demo coming soon",
        href: "#contact"
      }
    ],
    accent: "#48e08e",
    preview: {
      title: "More details to add",
      points: ["Profile screenshot", "Match flow", "Messaging notes"]
    },
    evidence: [
      "Add one screenshot of profile, matching, or messaging screens.",
      "Add a short note about privacy protections and protected routes.",
      "Add a demo link after deployment."
    ],
    lifecycle: [
      {
        phase: "Problem Framing",
        detail:
          "Explore how a privacy-focused dating app could handle discovery, matching, messaging, and premium account flows."
      },
      {
        phase: "Core Build",
        detail:
          "Plan user profiles, photo management, like/pass actions, matches, messaging, settings, and dashboard pages."
      },
      {
        phase: "Data Model",
        detail:
          "Use MongoDB and Mongoose concepts for users, matches, messages, likes, subscriptions, and location-aware discovery."
      },
      {
        phase: "Security & Privacy",
        detail:
          "Plan JWT authentication, bcrypt password hashing, protected API routes, Zod validation, and privacy-friendly payment options."
      },
      {
        phase: "Learning Outcome",
        detail:
          "Practiced a larger full-stack app with privacy, payments, user safety, and API documentation in mind."
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

const createScreenshotFigure = (screenshot) => {
  const figure = createElement("figure", "lab-evidence-card");
  figure.tabIndex = 0;
  figure.setAttribute("aria-label", `${screenshot.title}: ${screenshot.caption}`);

  const image = document.createElement("img");
  image.src = screenshot.src;
  image.alt = screenshot.alt;
  image.loading = "lazy";
  image.decoding = "async";

  if (screenshot.width && screenshot.height) {
    image.width = screenshot.width;
    image.height = screenshot.height;
  }

  const caption = createElement("figcaption");
  caption.append(
    createElement("strong", "", screenshot.title),
    createElement("span", "", screenshot.caption)
  );

  figure.append(image, caption);
  return figure;
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
      `project-card${project.featured ? " featured case-study" : ""}`
    );
    card.style.setProperty("--card-accent", project.accent);
    card.setAttribute("data-animate", "");

    card.append(
      createElement("span", "project-status", project.status)
    );

    if (project.caseStudy) {
      const caseStudy = createElement("dl", "case-study-points");
      project.caseStudy.forEach((point) => {
        const group = createElement("div", "case-study-point");
        group.append(
          createElement("dt", "", point.label),
          createElement("dd", "", point.value)
        );
        caseStudy.append(group);
      });
      card.append(caseStudy);
    }

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
    const lifecycleButton = createElement("button", "project-link", "View case study");
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
  const evidenceTitle = document.getElementById("lifecycle-evidence-title");
  const evidence = document.getElementById("lifecycle-evidence");
  const gallery = document.getElementById("lifecycle-gallery");
  const steps = document.getElementById("lifecycle-steps");
  const lifecycleButtons = document.querySelectorAll("[data-project-index]");
  const closeButtons = document.querySelectorAll("[data-close-lifecycle]");

  if (!modal || !title || !summary || !evidenceTitle || !evidence || !gallery || !steps) {
    return;
  }

  const closeLifecycle = () => {
    modal.hidden = true;
    document.body.classList.remove("lifecycle-open");
  };

  const openLifecycle = (project) => {
    title.textContent = project.title;
    summary.textContent = project.summary;
    evidenceTitle.textContent = project.evidenceTitle || "Evidence to add";
    evidence.replaceChildren();
    gallery.replaceChildren();
    steps.replaceChildren();

    project.evidence.forEach((item) => {
      evidence.append(createElement("li", "", item));
    });

    if (project.screenshots) {
      const galleryGrid = createElement("div", "lifecycle-gallery-grid");
      project.screenshots.forEach((screenshot) => {
        galleryGrid.append(createScreenshotFigure(screenshot));
      });
      gallery.append(galleryGrid);
    }

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

const setupThemeToggle = () => {
  const toggle = document.querySelector(".theme-toggle");
  const toggleText = document.querySelector(".theme-toggle-text");
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");

  if (!toggle || !toggleText) {
    return;
  }

  const getSavedTheme = () => {
    try {
      return localStorage.getItem("portfolio-theme");
    } catch (error) {
      return null;
    }
  };

  const saveTheme = (theme) => {
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch (error) {
      // The toggle still works for the current session if storage is blocked.
    }
  };

  const applyTheme = (theme, shouldSave = false) => {
    document.documentElement.dataset.theme = theme;
    themeColor?.setAttribute("content", theme === "light" ? "#fbfcf7" : "#080908");
    toggleText.textContent = theme === "light" ? "White" : "Dark";
    toggle.setAttribute("aria-pressed", String(theme === "light"));
    toggle.setAttribute(
      "aria-label",
      `Switch to ${theme === "light" ? "dark" : "white"} mode`
    );

    if (shouldSave) {
      saveTheme(theme);
    }
  };

  const currentTheme = document.documentElement.dataset.theme || "dark";
  applyTheme(currentTheme);

  toggle.addEventListener("click", () => {
    const activeTheme = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    applyTheme(activeTheme === "light" ? "dark" : "light", true);
  });

  mediaQuery.addEventListener("change", (event) => {
    if (!getSavedTheme()) {
      applyTheme(event.matches ? "light" : "dark");
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

  animated.forEach((element, index) => {
    const delay = Math.min(index * 45, 240);
    element.style.setProperty("--reveal-delay", `${delay}ms`);
    observer.observe(element);
  });
};

renderSkills();
renderProjects();
setupProjectLifecycle();
setupNavigation();
setupThemeToggle();
setupActiveSection();
setupReveal();

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}
