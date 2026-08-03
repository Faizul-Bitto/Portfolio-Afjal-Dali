// -------------------------------------------
// 0. Partial Loader — loads section HTML from /partials
//    All features initialize after partials are injected.
// -------------------------------------------
const PARTIALS = [
  "navbar",
  "hero",
  "about",
  "skills",
  "experience",
  "projects",
  "publications",
  "certifications",
  "education",
  "contact",
  "footer",
];

async function loadPartials() {
  const tasks = PARTIALS.map((name) =>
    fetch(`partials/${name}.html`)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load partial: ${name}`);
        return res.text();
      })
      .then((html) => {
        const el = document.getElementById(`partial-${name}`);
        if (el) el.outerHTML = html;
      })
  );
  await Promise.all(tasks);
}

// ----------------------------------------------------------------
// 1. Initialize everything AFTER partials are loaded
// ----------------------------------------------------------------
async function init() {
  try {
    await loadPartials();
  } catch (err) {
    console.error("Failed to load sections:", err);
    document.body.innerHTML =
      '<p style="padding:2rem;color:#f87171;font-family:sans-serif">Failed to load page sections. Please serve this site over HTTP (e.g. GitHub Pages or a local server).</p>';
    return;
  }

  // Re-render Lucide icons injected via partials
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  initCursorGlow();
  initScrollProgress();
  initNavbarScroll();
  initActiveNav();
  initTyping();
  initReveal();
  initCardHover();
  initLogo();
  initMobileMenu();
  initSmoothScroll();
}

// -------------------------------------------
// 2. Cursor Glow Follower
// -------------------------------------------
function initCursorGlow() {
  const cursorGlow = document.getElementById("cursor-glow");
  if (!cursorGlow) return;

  document.addEventListener("mousemove", (e) => {
    cursorGlow.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
  });

  document.addEventListener("mouseleave", () => {
    cursorGlow.style.opacity = "0";
  });
  document.addEventListener("mouseenter", () => {
    cursorGlow.style.opacity = "1";
  });
}

// -------------------------------------------
// 3. Scroll Progress Bar
// -------------------------------------------
function initScrollProgress() {
  const progressBar = document.getElementById("scroll-progress");
  if (!progressBar) return;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    progressBar.style.width = progress + "%";
  });
}

// -------------------------------------------
// 3. Navbar Background on Scroll
// -------------------------------------------
function initNavbarScroll() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  });
}

// -------------------------------------------
// 4. Nav Active Link Highlighting
// -------------------------------------------
function initActiveNav() {
  const navLinks = document.querySelectorAll(".nav-link");
  if (!navLinks.length) return;

  function updateActiveNav() {
    const scrollPos = window.scrollY + 150;
    navLinks.forEach((link) => {
      const section = document.querySelector(link.getAttribute("href"));
      if (section) {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      }
    });
  }

  window.addEventListener("scroll", updateActiveNav);
  window.addEventListener("load", updateActiveNav);
  updateActiveNav();
}

// -------------------------------------------
// 5. Typing Animation for Hero Subtitle
// -------------------------------------------
function initTyping() {
  const typingEl = document.getElementById("typing-text");
  if (!typingEl) return;

  const fullText = typingEl.textContent;
  typingEl.textContent = "";
  typingEl.classList.add("typing-cursor");

  let charIndex = 0;

  function typeChar() {
    if (charIndex < fullText.length) {
      typingEl.textContent += fullText.charAt(charIndex);
      charIndex++;
      setTimeout(typeChar, 35 + Math.random() * 30);
    } else {
      typingEl.classList.remove("typing-cursor");
      const cursorSpan = document.createElement("span");
      cursorSpan.className = "typing-cursor";
      cursorSpan.style.color = "#fbbf24";
      cursorSpan.style.fontWeight = "100";
      cursorSpan.textContent = "|";
      typingEl.parentNode.appendChild(cursorSpan);
    }
  }

  setTimeout(typeChar, 600);
}

// -------------------------------------------
// 6. Scroll Reveal Animations
// -------------------------------------------
function initReveal() {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  document
    .querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-stagger"
    )
    .forEach((el) => {
      revealObserver.observe(el);
    });
}

// -------------------------------------------
// 7. Card Hover Effects
// -------------------------------------------
function initCardHover() {
  document.querySelectorAll(".card, .project-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--mouse-x", x + "%");
      card.style.setProperty("--mouse-y", y + "%");
    });
  });
}

// -------------------------------------------
// 8. Logo Click -> Scroll to Top
// -------------------------------------------
function initLogo() {
  document.getElementById("logo")?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// -------------------------------------------
// 9. Mobile Hamburger Menu
// -------------------------------------------
function initMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuOverlay = document.getElementById("menu-overlay");

  if (!hamburger || !mobileMenu || !menuOverlay) return;

  function toggleMenu(open) {
    hamburger.classList.toggle("open", open);
    mobileMenu.classList.toggle("open", open);
    menuOverlay.classList.toggle("open", open);
    document.body.style.overflow = open ? "hidden" : "";
  }

  hamburger.addEventListener("click", () => {
    const isOpen = hamburger.classList.contains("open");
    toggleMenu(!isOpen);
  });

  menuOverlay.addEventListener("click", () => {
    toggleMenu(false);
  });

  document.querySelectorAll(".mobile-link").forEach((link) => {
    link.addEventListener("click", () => {
      toggleMenu(false);
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768 && hamburger.classList.contains("open")) {
      toggleMenu(false);
    }
  });
}

// -------------------------------------------
// 10. Smooth scroll for anchor links
// -------------------------------------------
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// -------------------------------------------
// BOOT — wait for DOM, then load partials + init
// -------------------------------------------
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}