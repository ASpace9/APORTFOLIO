"use strict";

const PROJECTS = [
  {
    title: "Ocean Fast Ferries Inc.",
    category: "Ocean Fast Ferries Inc.",
    categoryLabel: "Animated Chat to Book Poster",
    year: "2022",
    image: "assets/projects/O1.jpg",
    description: "An automated chat to bot booking in messenger. Powered by UChat."
  },
  {
    title: "Ocean Fast Ferries Inc.",
    category: "Ocean Fast Ferries Inc.",
    categoryLabel: "Travel Pubmat",
    year: "2022",
    image: "assets/projects/O2.jpg",
    description: "Work | Travel | Save | Repeat, a reminder to individuals to travel responsibly."
  },
  {
    title: "Ocean Fast Ferries Inc.",
    category: "Ocean Fast Ferries Inc.",
    categoryLabel: "Travel Pubmat",
    year: "2022",
    image: "assets/projects/O3.jpg",
    description: "A travel recommendation for the upcoming weekend."
  },
  {
    title: "Ocean Fast Ferries Inc.",
    category: "Ocean Fast Ferries Inc.",
    categoryLabel: "Travel Pubmat",
    year: "2022",
    image: "assets/projects/O4.jpg",
    description: "Bacolod & Ilo-Ilo Featured Locations."
  },
  {
    title: "Ocean Fast Ferries Inc.",
    category: "Ocean Fast Ferries Inc.",
    categoryLabel: "Travel Pubmat",
    year: "2022",
    image: "assets/projects/O5.jpg",
    description: "Getafe Bohol Featured Locations."
  },
  {
    title: "RKJ Apparel",
    category: "RKJ Apparel",
    categoryLabel: "Polo-shirt Mock-up",
    year: "2026",
    image: "assets/projects/R1.jpg",
    description: "Region 7 LTO Uniform."
  },
  {
    title: "RKJ Apparel",
    category: "RKJ Apparel",
    categoryLabel: "Polo-shirt Mock-up",
    year: "2026",
    image: "assets/projects/R2.jpg",
    description: "MGMB Construction, OPC Uniform."
  },
  {
    title: "RKJ Apparel",
    category: "RKJ Apparel",
    categoryLabel: "Polo-shirt Mock-up",
    year: "2026",
    image: "assets/projects/R3.jpg",
    description: "AG Flames Uniform.."
  },
  {
    title: "RKJ Apparel",
    category: "RKJ Apparel",
    categoryLabel: "Polo-shirt Mock-up",
    year: "2026",
    image: "assets/projects/R4.jpg",
    description: "Lethal Ataraxia Jersey"
  },
  {
    title: "RKJ Apparel",
    category: "RKJ Apparel",
    categoryLabel: "Polo-shirt Mock-up",
    year: "2026",
    image: "assets/projects/R5.jpg",
    description: "Swayne Graphic Design Services Uniform."
  },
  {
    title: "Don Macchiatos",
    category: "Don Macchiatos",
    categoryLabel: "Coffee Aesthetic Post",
    year: "2026",
    image: "assets/projects/D1.jpg",
    description: "Your Coffee's better half."
  },
  {
    title: "Don Macchiatos",
    category: "Don Macchiatos",
    categoryLabel: "Coffee Aesthetic Post",
    year: "2026",
    image: "assets/projects/D2.jpg",
    description: "Sweet Moments in Every Sip Insta Post."
  },
  {
    title: "Don Macchiatos",
    category: "Don Macchiatos",
    categoryLabel: "Coffee Aesthetic Post",
    year: "2026",
    image: "assets/projects/D3.jpg",
    description: "Don Macchiatos Flavor Anniversary Don Darko & Donya Berry."
  },
  {
    title: "Don Macchiatos",
    category: "Don Macchiatos",
    categoryLabel: "Coffee Aesthetic Post",
    year: "2026",
    image: "assets/projects/D4.jpg",
    description: "One Sip for Every Moment, Don Macchiatos"
  },
  {
    title: "Don Macchiatos",
    category: "Don Macchiatos",
    categoryLabel: "Coffee Aesthetic Post",
    year: "2026",
    image: "assets/projects/D5.jpg",
    description: "Introduction of Don Macchiatos New Flavor Iced Barako."
  },
  {
    title: "Don Lemon",
    category: "Don Lemon",
    categoryLabel: "Iced Lemonade Aesthetic Post",
    year: "2026",
    image: "assets/projects/L1.jpg",
    description: "The initial flavor of Don Lemon."
  },
  {
    title: "Don Lemon",
    category: "Don Lemon",
    categoryLabel: "Thursday Lemonade Aesthetic Post",
    year: "2026",
    image: "assets/projects/L2.jpg",
    description: "One sip closer to the weekend."
  },
  {
    title: "Don Lemon",
    category: "Don Lemon",
    categoryLabel: "Iced Lemonade Aesthetic Post",
    year: "2026",
    image: "assets/projects/L3.jpg",
    description: "Quench your thirst with Don Lemon, Refreshingly good. Perfect for you."
  },
  {
    title: "Don Lemon",
    category: "Don Lemon",
    categoryLabel: "Summer Iced Lemonade Aesthetic Post",
    year: "2026",
    image: "assets/projects/L4.jpg",
    description: "Summer just got cooler, A refreshing, modern taste."
  },
  {
    title: "Don Lemon",
    category: "Don Lemon",
    categoryLabel: "New Flavor Poster",
    year: "2026",
    image: "assets/projects/L5.jpg",
    description: "Introducing New Flavor of Don Lemon, Lemon Strawberry, and Lemon Orange."
  },
  {
    title: "Kuku’s Frozen Yogurt",
    category: "Kuku",
    categoryLabel: "June Yogurt Aesthetic Post",
    year: "2026",
    image: "assets/projects/K1.jpg",
    description: "Fresh Month, Fresh You."
  },
  {
    title: "Kuku’s Frozen Yogurt",
    category: "Kuku",
    categoryLabel: "Yogurt Aesthetic Post",
    year: "2026",
    image: "assets/projects/K2.jpg",
    description: "Kukulicious Tasty and Healthy, for only 39 Pesos."
  },
  {
    title: "Kuku’s Frozen Yogurt",
    category: "Kuku",
    categoryLabel: "Matcha Yogurt Aesthetic Post",
    year: "2026",
    image: "assets/projects/K3.jpg",
    description: "Frozen Matcha Yogurt Variants for only 39 Pesos."
  },
  {
    title: "Kuku’s Frozen Yogurt",
    category: "Kuku",
    categoryLabel: "Pistachio Aesthetic Post",
    year: "2026",
    image: "assets/projects/K4.jpg",
    description: "Forzen Vanilla Yogurt with Pistachio Sauce. Pistachio Goodness!"
  },
  {
    title: "Kuku’s Frozen Yogurt",
    category: "Kuku",
    categoryLabel: "Mixed Flavor Yogurt Aesthetic Post",
    year: "2026",
    image: "assets/projects/K5.jpg",
    description: "Matcha Vanilla Yogurt w/ Grapes and Manggo Toppings for only 99 Pesos."
  },
  {
    title: "Mr. Pure Ice",
    category: "Mr. Pure Ice",
    categoryLabel: "Ice Tubes Aesthetic Post",
    year: "2026",
    image: "assets/projects/M1.jpg",
    description: "Beat the heat with Mr. Pure Ice! 🧊☀️"
  },
  {
    title: "Mr. Pure Ice",
    category: "Mr. Pure Ice",
    categoryLabel: "Ice Tubes Aesthetic Post",
    year: "2026",
    image: "assets/projects/M2.jpg",
    description: "₱60 ONLY! 🧊 10KG of Pure Ice — Now Open for Bulk Orders!"
  },
  {
    title: "Mr. Pure Ice",
    category: "Mr. Pure Ice",
    categoryLabel: "Ice Tubes Aesthetic Post",
    year: "2026",
    image: "assets/projects/M3.jpg",
    description: "Pure Ice. Pure Service. Trusted Experts. 🧊💙"
  },
  {
    title: "Mr. Pure Ice",
    category: "Mr. Pure Ice",
    categoryLabel: "Ice Tubes Aesthetic Post",
    year: "2026",
    image: "assets/projects/M4.jpg",
    description: "Fresh Ice. Reliable Delivery. 🧊🚚"
  },
  {
    title: "Mr. Pure Ice",
    category: "Mr. Pure Ice",
    categoryLabel: "Ice Tubes Aesthetic Post",
    year: "2026",
    image: "assets/projects/M5.jpg",
    description: "Clean Ice. Reliable Supply. Zero Worries. 🧊💙"
  },
  {
    title: "Proud Bisaya Bai",
    category: "Proud Bisaya Bai",
    categoryLabel: "Ice Tubes Aesthetic Post",
    year: "2026",
    image: "assets/projects/P1.jpg",
    description: "Clean Ice. Reliable Supply. Zero Worries. 🧊💙"
  },
  {
    title: "Proud Bisaya Bai",
    category: "Proud Bisaya Bai",
    categoryLabel: "Ice Tubes Aesthetic Post",
    year: "2026",
    image: "assets/projects/P2.jpg",
    description: "Clean Ice. Reliable Supply. Zero Worries. 🧊💙"
  },
  {
    title: "Proud Bisaya Bai",
    category: "Proud Bisaya Bai",
    categoryLabel: "Ice Tubes Aesthetic Post",
    year: "2026",
    image: "assets/projects/P3.jpg",
    description: "Clean Ice. Reliable Supply. Zero Worries. 🧊💙"
  },
  {
    title: "Proud Bisaya Bai",
    category: "Proud Bisaya Bai",
    categoryLabel: "Ice Tubes Aesthetic Post",
    year: "2026",
    image: "assets/projects/P4.jpg",
    description: "Clean Ice. Reliable Supply. Zero Worries. 🧊💙"
  },
  {
    title: "Proud Bisaya Bai",
    category: "Proud Bisaya Bai",
    categoryLabel: "Ice Tubes Aesthetic Post",
    year: "2026",
    image: "assets/projects/P5.jpg",
    description: "Clean Ice. Reliable Supply. Zero Worries. 🧊💙"
  },
  {
    title: "MGS",
    category: "MGS",
    categoryLabel: "Ice Tubes Aesthetic Post",
    year: "2026",
    image: "assets/projects/S1.jpg",
    description: "Clean Ice. Reliable Supply. Zero Worries. 🧊💙"
  },
  {
    title: "MGS",
    category: "MGS",
    categoryLabel: "Ice Tubes Aesthetic Post",
    year: "2026",
    image: "assets/projects/S2.jpg",
    description: "Clean Ice. Reliable Supply. Zero Worries. 🧊💙"
  },
  {
    title: "MGS",
    category: "MGS",
    categoryLabel: "Ice Tubes Aesthetic Post",
    year: "2026",
    image: "assets/projects/S3.jpg",
    description: "Clean Ice. Reliable Supply. Zero Worries. 🧊💙"
  },
  {
    title: "MGS",
    category: "MGS",
    categoryLabel: "Ice Tubes Aesthetic Post",
    year: "2026",
    image: "assets/projects/S4.jpg",
    description: "Clean Ice. Reliable Supply. Zero Worries. 🧊💙"
  },
  {
    title: "MGS",
    category: "MGS",
    categoryLabel: "Ice Tubes Aesthetic Post",
    year: "2026",
    image: "assets/projects/S5.jpg",
    description: "Clean Ice. Reliable Supply. Zero Worries. 🧊💙"
  },
  {
    title: "Cavella",
    category: "Cavella",
    categoryLabel: "Ice Tubes Aesthetic Post",
    year: "2026",
    image: "assets/projects/C1.jpg",
    description: "Clean Ice. Reliable Supply. Zero Worries. 🧊💙"
  },
  {
    title: "Cavella",
    category: "Cavella",
    categoryLabel: "Ice Tubes Aesthetic Post",
    year: "2026",
    image: "assets/projects/C2.jpg",
    description: "Clean Ice. Reliable Supply. Zero Worries. 🧊💙"
  },
  {
    title: "Cavella",
    category: "Cavella",
    categoryLabel: "Ice Tubes Aesthetic Post",
    year: "2026",
    image: "assets/projects/C3.jpg",
    description: "Clean Ice. Reliable Supply. Zero Worries. 🧊💙"
  },
    {
    title: "Cavella",
    category: "Cavella",
    categoryLabel: "Ice Tubes Aesthetic Post",
    year: "2026",
    image: "assets/projects/C4.jpg",
    description: "Clean Ice. Reliable Supply. Zero Worries. 🧊💙"
  },
  {
    title: "Cavella",
    category: "Cavella",
    categoryLabel: "Ice Tubes Aesthetic Post",
    year: "2026",
    image: "assets/projects/C5.jpg",
    description: "Clean Ice. Reliable Supply. Zero Worries. 🧊💙"
  },
  {
    title: "Alvo",
    category: "Alvo",
    categoryLabel: "Ice Tubes Aesthetic Post",
    year: "2026",
    image: "assets/projects/A1.jpg",
    description: "Clean Ice. Reliable Supply. Zero Worries. 🧊💙"
  },
  {
    title: "Alvo",
    category: "Alvo",
    categoryLabel: "Ice Tubes Aesthetic Post",
    year: "2026",
    image: "assets/projects/A2.jpg",
    description: "Clean Ice. Reliable Supply. Zero Worries. 🧊💙"
  },
  {
    title: "Alvo",
    category: "Alvo",
    categoryLabel: "Ice Tubes Aesthetic Post",
    year: "2026",
    image: "assets/projects/A3.jpg",
    description: "Clean Ice. Reliable Supply. Zero Worries. 🧊💙"
  },
    {
    title: "Alvo",
    category: "Alvo",
    categoryLabel: "Ice Tubes Aesthetic Post",
    year: "2026",
    image: "assets/projects/A4.jpg",
    description: "Clean Ice. Reliable Supply. Zero Worries. 🧊💙"
  },
  {
    title: "Alvo",
    category: "Alvo",
    categoryLabel: "Ice Tubes Aesthetic Post",
    year: "2026",
    image: "assets/projects/A5.jpg",
    description: "Clean Ice. Reliable Supply. Zero Worries. 🧊💙"
  },
  {
    title: "Marstek",
    category: "Marstek",
    categoryLabel: "Ice Tubes Aesthetic Post",
    year: "2026",
    image: "assets/projects/T1.jpg",
    description: "Clean Ice. Reliable Supply. Zero Worries. 🧊💙"
  },
  {
    title: "Marstek",
    category: "Marstek",
    categoryLabel: "Ice Tubes Aesthetic Post",
    year: "2026",
    image: "assets/projects/T2.jpg",
    description: "Clean Ice. Reliable Supply. Zero Worries. 🧊💙"
  },
  {
    title: "Marstek",
    category: "Marstek",
    categoryLabel: "Ice Tubes Aesthetic Post",
    year: "2026",
    image: "assets/projects/T3.jpg",
    description: "Clean Ice. Reliable Supply. Zero Worries. 🧊💙"
  },
  {
    title: "Marstek",
    category: "Marstek",
    categoryLabel: "Ice Tubes Aesthetic Post",
    year: "2026",
    image: "assets/projects/T4.jpg",
    description: "Clean Ice. Reliable Supply. Zero Worries. 🧊💙"
  },
  {
    title: "Marstek",
    category: "Marstek",
    categoryLabel: "Ice Tubes Aesthetic Post",
    year: "2026",
    image: "assets/projects/T5.jpg",
    description: "Clean Ice. Reliable Supply. Zero Worries. 🧊💙"
  },
    {
    title: "Padayon",
    category: "Padayon",
    categoryLabel: "Ice Tubes Aesthetic Post",
    year: "2026",
    image: "assets/projects/Y1.jpg",
    description: "Clean Ice. Reliable Supply. Zero Worries. 🧊💙"
  },
  {
    title: "Padayon",
    category: "Padayon",
    categoryLabel: "Ice Tubes Aesthetic Post",
    year: "2026",
    image: "assets/projects/Y2.jpg",
    description: "Clean Ice. Reliable Supply. Zero Worries. 🧊💙"
  },
  {
    title: "Padayon",
    category: "Padayon",
    categoryLabel: "Ice Tubes Aesthetic Post",
    year: "2026",
    image: "assets/projects/Y3.jpg",
    description: "Clean Ice. Reliable Supply. Zero Worries. 🧊💙"
  },
  {
    title: "Padayon",
    category: "Padayon",
    categoryLabel: "Ice Tubes Aesthetic Post",
    year: "2026",
    image: "assets/projects/Y4.jpg",
    description: "Clean Ice. Reliable Supply. Zero Worries. 🧊💙"
  },
  {
    title: "Padayon",
    category: "Padayon",
    categoryLabel: "Ice Tubes Aesthetic Post",
    year: "2026",
    image: "assets/projects/Y5.jpg",
    description: "Clean Ice. Reliable Supply. Zero Worries. 🧊💙"
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const panels = [...document.querySelectorAll(".view-panel")];
  const routeLinks = [...document.querySelectorAll(".route-link")];
  const navLinks = [...document.querySelectorAll(".nav-link")];
  const transition = document.querySelector(".page-transition");
  const viewNumber = document.getElementById("view-number");
  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".main-navigation");
  let isRouting = false;

  function normalizeHash(hash) {
    const safeHash = hash || "#home";
    return panels.some(panel => `#${panel.id}` === safeHash) ? safeHash : "#home";
  }

  function updateNavigation(targetHash) {
    navLinks.forEach(link => link.classList.toggle("is-active", link.getAttribute("href") === targetHash));
    const index = panels.findIndex(panel => `#${panel.id}` === targetHash);
    viewNumber.textContent = String(index + 1).padStart(2, "0");
    document.title = `${panels[index].id.charAt(0).toUpperCase() + panels[index].id.slice(1)} — Aureum Creative`;
  }

  function activatePanel(targetHash) {
    panels.forEach(panel => {
      const active = `#${panel.id}` === targetHash;
      panel.classList.toggle("is-active", active);
      panel.setAttribute("aria-hidden", String(!active));
      if (active) {
        const scroller = panel.querySelector(".panel-scroll");
        if (scroller) scroller.scrollTop = 0;
      }
    });
    updateNavigation(targetHash);
    window.setTimeout(observeRevealItems, 50);
  }

  function routeTo(targetHash, pushHistory = true) {
    targetHash = normalizeHash(targetHash);
    const current = document.querySelector(".view-panel.is-active");
    if (isRouting || (current && `#${current.id}` === targetHash)) return;

    isRouting = true;
    navigation.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    transition.className = "page-transition is-covering";

    window.setTimeout(() => {
      activatePanel(targetHash);
      if (pushHistory) history.pushState({ panel: targetHash }, "", targetHash);
      transition.className = "page-transition is-revealing";
    }, 480);

    window.setTimeout(() => {
      transition.className = "page-transition";
      isRouting = false;
    }, 1040);
  }

  routeLinks.forEach(link => {
    link.addEventListener("click", event => {
      const hash = link.getAttribute("href");
      if (hash && hash.startsWith("#")) {
        event.preventDefault();
        routeTo(hash);
      }
    });
  });

  window.addEventListener("popstate", () => routeTo(normalizeHash(window.location.hash), false));
  activatePanel(normalizeHash(window.location.hash));

  menuToggle.addEventListener("click", () => {
    const open = navigation.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  document.addEventListener("click", event => {
    if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) {
      navigation.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });

  // Project carousel
  const deck = document.getElementById("project-deck");
  const previousButton = document.querySelector(".carousel-button--prev");
  const nextButton = document.querySelector(".carousel-button--next");
  const projectNumber = document.getElementById("project-number");
  const projectTotal = document.getElementById("project-total");
  const progressBar = document.getElementById("progress-bar");
  const filterButtons = [...document.querySelectorAll(".filter-button")];
  let activeFilter = "all";
  let activeIndex = 0;
  let visibleProjects = [...PROJECTS];

  const wrapIndex = (index, total) => (index % total + total) % total;

  function renderDeck() {
    deck.innerHTML = "";
    if (!visibleProjects.length) return;

    const positions = visibleProjects.length < 3 ? [0] : [-2, -1, 0, 1, 2];
    positions.forEach(offset => {
      const index = wrapIndex(activeIndex + offset, visibleProjects.length);
      const project = visibleProjects[index];
      const card = document.createElement("article");
      card.className = "project-card";
      card.dataset.offset = String(offset);
      card.dataset.projectIndex = String(index);
      card.tabIndex = offset === 0 ? 0 : -1;
      card.setAttribute("aria-label", `${project.title}, ${project.categoryLabel}`);
      card.innerHTML = `
        <img src="${project.image}" alt="${project.title} project preview">
        <div class="project-card-meta">
          <div>
            <p>${project.categoryLabel}</p>
            <h3>${project.title}</h3>
          </div>
          <span>${project.year}</span>
        </div>`;

      card.addEventListener("click", () => {
        if (offset === 0) openModal(project);
        else {
          activeIndex = index;
          renderDeck();
        }
      });
      card.addEventListener("keydown", event => {
        if ((event.key === "Enter" || event.key === " ") && offset === 0) {
          event.preventDefault();
          openModal(project);
        }
      });
      deck.appendChild(card);
    });

    projectNumber.textContent = String(activeIndex + 1).padStart(2, "0");
    projectTotal.textContent = String(visibleProjects.length).padStart(2, "0");
    progressBar.style.width = `${((activeIndex + 1) / visibleProjects.length) * 100}%`;
  }

  function stepProject(direction) {
    activeIndex = wrapIndex(activeIndex + direction, visibleProjects.length);
    renderDeck();
  }

  previousButton.addEventListener("click", () => stepProject(-1));
  nextButton.addEventListener("click", () => stepProject(1));

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      filterButtons.forEach(item => item.classList.toggle("is-active", item === button));
      visibleProjects = activeFilter === "all"
        ? [...PROJECTS]
        : PROJECTS.filter(project => project.category === activeFilter);
      activeIndex = 0;
      renderDeck();
    });
  });

  // Touch support
  let touchStartX = 0;
  deck.addEventListener("touchstart", event => {
    touchStartX = event.changedTouches[0].clientX;
  }, { passive: true });
  deck.addEventListener("touchend", event => {
    const distance = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(distance) > 45) stepProject(distance > 0 ? -1 : 1);
  }, { passive: true });

  renderDeck();

  // Modal
  const modal = document.getElementById("project-modal");
  const modalClose = document.querySelector(".modal-close");
  const modalImage = document.getElementById("modal-image");
  const modalTitle = document.getElementById("modal-title");
  const modalCategory = document.getElementById("modal-category");
  const modalDescription = document.getElementById("modal-description");
  let lastFocusedElement = null;

  function openModal(project) {
    lastFocusedElement = document.activeElement;
    modalImage.src = project.image;
    modalImage.alt = `${project.title} enlarged preview`;
    modalTitle.textContent = project.title;
    modalCategory.textContent = `${project.categoryLabel} / ${project.year}`;
    modalDescription.textContent = project.description;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    modalClose.focus();
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    if (lastFocusedElement) lastFocusedElement.focus();
  }

  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", event => {
    if (event.target === modal) closeModal();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) closeModal();
    if (!modal.classList.contains("is-open") && document.querySelector("#work.is-active")) {
      if (event.key === "ArrowLeft") stepProject(-1);
      if (event.key === "ArrowRight") stepProject(1);
    }
  });

  // Reveal-on-scroll inside independently scrolling panels
  let revealObserver;
  function observeRevealItems() {
    if (revealObserver) revealObserver.disconnect();
    const activeScroller = document.querySelector(".view-panel.is-active .panel-scroll");
    if (!activeScroller) return;
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    }, { root: activeScroller, threshold: .12 });
    document.querySelectorAll(".view-panel.is-active .reveal-on-scroll").forEach(item => revealObserver.observe(item));
  }
  observeRevealItems();

  // Contact form: opens the visitor's email application. Change CONTACT_EMAIL below.
  const CONTACT_EMAIL = "alingato.2026@gmail.com";
  const form = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  form.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(`Project inquiry: ${data.get("projectType")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nProject type: ${data.get("projectType")}\n\n${data.get("message")}`
    );
    formStatus.textContent = "Opening your email application…";
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    window.setTimeout(() => {
      formStatus.textContent = `Please send the prepared email to ${CONTACT_EMAIL}.`;
    }, 900);
  });

  document.getElementById("current-year").textContent = new Date().getFullYear();
  initGoldParticles();
});

function initGoldParticles() {
  const canvas = document.getElementById("gold-particle-canvas");
  const context = canvas.getContext("2d");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) return;

  let width = 0;
  let height = 0;
  let pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  let particles = [];
  const pointer = { x: null, y: null };

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * pixelRatio;
    canvas.height = height * pixelRatio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    createParticles();
  }

  function createParticles() {
    const count = Math.max(24, Math.min(72, Math.floor((width * height) / 23000)));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - .5) * .22,
      vy: (Math.random() - .5) * .22,
      radius: Math.random() * 1.4 + .45,
      alpha: Math.random() * .45 + .18
    }));
  }

  function animate() {
    context.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i += 1) {
      const particle = particles[i];
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < -20) particle.x = width + 20;
      if (particle.x > width + 20) particle.x = -20;
      if (particle.y < -20) particle.y = height + 20;
      if (particle.y > height + 20) particle.y = -20;

      if (pointer.x !== null) {
        const dx = particle.x - pointer.x;
        const dy = particle.y - pointer.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 130 && distance > 0) {
          particle.x += (dx / distance) * .32;
          particle.y += (dy / distance) * .32;
        }
      }

      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fillStyle = `rgba(215, 173, 82, ${particle.alpha})`;
      context.fill();

      for (let j = i + 1; j < particles.length; j += 1) {
        const other = particles[j];
        const dx = particle.x - other.x;
        const dy = particle.y - other.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 115) {
          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(other.x, other.y);
          context.strokeStyle = `rgba(215, 173, 82, ${(1 - distance / 115) * .09})`;
          context.lineWidth = .6;
          context.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", event => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
  }, { passive: true });
  window.addEventListener("pointerleave", () => {
    pointer.x = null;
    pointer.y = null;
  });

  resize();
  animate();
}
