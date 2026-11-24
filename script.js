/* ==========================================================================
   🎂 BIRTHDAY SURPRISE CONFIGURATION (SUPER EASY TO EDIT!)
   ==========================================================================
   Change her name, birthday date, love letter paragraphs, and photos below!
   To use your own photos:
   1. Put your photos in an "images/" folder (e.g., "images/pic1.jpg")
   2. Or paste any direct image URL in the `image` field below.
   ========================================================================== */

const BIRTHDAY_CONFIG = {
  herName: "My Favorite Girl",          // <-- Put her name or cute nickname here!
  yourName: "Yours Forever ♡",          // <-- Put your name here!
  birthdayBadge: "Special Edition • Happy Birthday, My Love",

  heroSubtitle:
    "To the girl who turns ordinary days into my favorite memories. Today is all about celebrating you, your laugh, and every little thing that makes you so effortlessly magic.",

  // The two mini polaroids on the top scrapbook cover
  heroPolaroids: {
    first: {
      caption: "my happiest place ♡",
      image: "images/1795448396928.jpg"
    },
    second: {
      caption: "that smile I adore ✨",
      image: "images/1795448396933.jpg"
    }
  },

  // The Love Letter inside the Wax-Sealed Envelope
  loveLetter: {
    postmark: "Birthday Post • Sealed With Everything I Feel",
    salutation: "To My Dearest Love,",
    paragraphs: [
      "Happy Birthday to the girl who makes my whole world softer, brighter, and infinitely better just by being in it. Every time I look at you, I still catch myself wondering how I got lucky enough to walk beside someone as kind, radiant, and effortlessly wonderful as you.",
      "I love the way your eyes light up when you talk about the things you care about. I love your laugh—especially the one you try to hold back when something is extra silly. I even love the quiet, ordinary moments where we aren't doing anything special at all, because with you, every single second feels worth keeping.",
      "Thank you for being my safe place, my favorite adventure, and my best friend. I hope this year brings you as much happiness, warmth, and magic as you bring into my life every single day. No matter where life takes us next, I'll always be right here cheering you on and loving you more than yesterday."
    ],
    signoffPhrase: "Forever & always yours,"
  },

  // Polaroid Memory Wall — each card can be clicked to flip & read the secret note on the back!
  // Categories: "dates", "silly", "her"
  polaroids: [
    {
      id: 1,
      category: "dates",
      date: "Chapter 01",
      caption: "Our favorite little date ☕",
      backNote: "I barely remember what we ordered because I couldn't stop looking across the table at you.",
      tilt: "-2.5deg",
      tapeColor: "rgba(244, 206, 212, 0.75)",
      image: "images/1795448396928.jpg"
    },
    {
      id: 2,
      category: "her",
      date: "Golden Hour",
      caption: "Effortlessly gorgeous 🌸",
      backNote: "You didn't even know I took this one, and it's still one of my favorite photos on my phone.",
      tilt: "2.2deg",
      tapeColor: "rgba(213, 175, 126, 0.45)",
      image: "images/1795448396933.jpg"
    },
    {
      id: 3,
      category: "silly",
      date: "Unfiltered Us",
      caption: "Laughing until it hurt 😂",
      backNote: "Nobody else on earth makes me laugh the way you do. My favorite chaotic partner-in-crime.",
      tilt: "-1.8deg",
      tapeColor: "rgba(189, 214, 196, 0.65)",
      image: "images/1795448396936.jpg"
    },
    {
      id: 4,
      category: "dates",
      date: "Late Walks",
      caption: "Sunset & holding hands 🌅",
      backNote: "Walking next to you with your hand in mine is genuinely my favorite feeling in the world.",
      tilt: "3deg",
      tapeColor: "rgba(244, 206, 212, 0.75)",
      image: "images/1795448396940.jpg"
    },
    {
      id: 5,
      category: "her",
      date: "Birthday Girl",
      caption: "The prettiest smile ✨",
      backNote: "If I could bottle up your smile and keep it forever, I would. Never stop shining, my love.",
      tilt: "-2.8deg",
      tapeColor: "rgba(213, 175, 126, 0.45)",
      image: "images/1795448396944.jpg"
    },
    {
      id: 6,
      category: "silly",
      date: "Core Memory",
      caption: "Here's to a million more ♡",
      backNote: "Every chapter with you is better than the last. Happy birthday, baby!",
      tilt: "1.9deg",
      tapeColor: "rgba(244, 206, 212, 0.75)",
      image: "images/imagesyour-photo.jpg"
    }
  ],

  // Little Pocket Notes in the bottom jar
  pocketNotes: [
    "Out of everyone in the world, I still can't believe I get to call you mine.",
    "You look extra pretty today (and yes, I know without even seeing you yet).",
    "My favorite sound in the entire universe is your laugh.",
    "Thank you for making even the most ordinary days feel like magic.",
    "I love the way you care so deeply about the people around you.",
    "Every time my phone lights up with your name, I still smile like an idiot.",
    "You are my favorite notification, my favorite hello, and my hardest goodbye.",
    "Happy Birthday, baby! Tonight is all about spoiling you ♡"
  ],

  // =========================================================================
  // 🕵️‍♂️ VISITOR TRACKING CONFIGURATION (/track endpoint)
  // =========================================================================
  // Visits are automatically stored in a permanent append-only Cloud Database
  // so every device (your phone, your PC, etc.) sees the exact same complete
  // visitor history, and NO visit record is ever deleted or overwritten!
  // View all visits anytime at:  /track/  (or /track/index.html)
  tracking: {
    enabled: true,
    storageKey: "bday_scrapbook_visitor_logs_v1",
    dbAppKey: "6o77ku48",
    liveSyncTopic: "jit-sarmili-zifa-bday-track-9921",
    customWebhookUrl: "" // Optional: Discord / Telegram / Custom webhook URL
  }
};

/* ==========================================================================
   DREAMY PASTEL PLACEHOLDER SVG GENERATOR
   (Displays cute illustrated scrapbook art until you drop in your real photos!)
   ========================================================================== */
function createScrapbookPlaceholderSVG(index, title) {
  const palettes = [
    { bg1: "#FDECEF", bg2: "#F8D5DC", accent: "#D87A88", sub: "#7F9A86" },
    { bg1: "#FDF3EB", bg2: "#F6DEC9", accent: "#D59B7E", sub: "#D87A88" },
    { bg1: "#F2F7F4", bg2: "#DCE9E0", accent: "#7F9A86", sub: "#D87A88" },
    { bg1: "#F9EEF5", bg2: "#EBD5E3", accent: "#B87A9C", sub: "#D5AF7E" },
    { bg1: "#FFF2F4", bg2: "#F7CFD7", accent: "#C96A78", sub: "#D5AF7E" },
    { bg1: "#FBF4EE", bg2: "#F3DFD1", accent: "#C87D65", sub: "#7F9A86" }
  ];
  const p = palettes[index % palettes.length];
  const safeTitle = title.replace(/[<>&"]/g, "");

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
    <defs>
      <linearGradient id="g${index}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${p.bg1}"/>
        <stop offset="100%" stop-color="${p.bg2}"/>
      </linearGradient>
    </defs>
    <rect width="400" height="400" fill="url(#g${index})"/>
    <circle cx="320" cy="85" r="45" fill="#FFFDF9" fill-opacity="0.65"/>
    <circle cx="85" cy="310" r="65" fill="#FFFDF9" fill-opacity="0.45"/>
    <!-- Decorative botanical & heart illustration -->
    <g transform="translate(200, 185)">
      <circle cx="0" cy="0" r="76" fill="#FFFDF9" fill-opacity="0.82" stroke="${p.accent}" stroke-width="1.5" stroke-dasharray="4 4"/>
      <path d="M0 36 C0 36 -42 8 -42 -18 C-42 -34 -28 -45 -14 -45 C-5 -45 0 -38 0 -32 C0 -38 5 -45 14 -45 C28 -45 42 -34 42 -18 C42 8 0 36 0 36 Z" fill="${p.accent}" fill-opacity="0.85"/>
      <circle cx="-26" cy="-48" r="4" fill="${p.sub}"/>
      <circle cx="30" cy="-42" r="3" fill="${p.sub}"/>
      <circle cx="36" cy="24" r="3.5" fill="${p.sub}"/>
    </g>
    <text x="200" y="315" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="16" fill="#5D4347">${safeTitle}</text>
    <text x="200" y="340" text-anchor="middle" font-family="sans-serif" font-size="11" letter-spacing="1.5" fill="#8E7276">SWAP WITH YOUR PHOTO</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

/* ==========================================================================
   INITIALIZE CONTENT FROM CONFIG
   ========================================================================== */
function initContent() {
  document.getElementById("her-name").textContent = BIRTHDAY_CONFIG.herName;
  document.getElementById("footer-her-name").textContent = BIRTHDAY_CONFIG.herName;
  document.getElementById("your-name").textContent = BIRTHDAY_CONFIG.yourName;
  document.getElementById("nav-date-badge").textContent = BIRTHDAY_CONFIG.birthdayBadge;
  document.getElementById("hero-subtitle").textContent = BIRTHDAY_CONFIG.heroSubtitle;

  // Hero Polaroids
  const heroImg1 = document.getElementById("hero-img-1");
  const heroImg2 = document.getElementById("hero-img-2");
  heroImg1.src =
    BIRTHDAY_CONFIG.heroPolaroids.first.image ||
    createScrapbookPlaceholderSVG(0, "Us Together ♡");
  heroImg2.src =
    BIRTHDAY_CONFIG.heroPolaroids.second.image ||
    createScrapbookPlaceholderSVG(1, "Your Smile ✨");
  document.getElementById("hero-cap-1").textContent =
    BIRTHDAY_CONFIG.heroPolaroids.first.caption;
  document.getElementById("hero-cap-2").textContent =
    BIRTHDAY_CONFIG.heroPolaroids.second.caption;

  // Love Letter
  document.getElementById("letter-date").textContent =
    BIRTHDAY_CONFIG.loveLetter.postmark;
  document.getElementById("letter-salutation").textContent =
    BIRTHDAY_CONFIG.loveLetter.salutation;
  document.getElementById("preview-greeting").textContent =
    BIRTHDAY_CONFIG.loveLetter.salutation;
  document.getElementById("letter-signoff-phrase").textContent =
    BIRTHDAY_CONFIG.loveLetter.signoffPhrase;

  const letterBodyEl = document.getElementById("letter-body");
  letterBodyEl.innerHTML = BIRTHDAY_CONFIG.loveLetter.paragraphs
    .map((p) => `<p>${p}</p>`)
    .join("");

  // Render Polaroid Wall
  renderPolaroids("all");
}

/* ==========================================================================
   RENDER & INTERACT WITH POLAROID MEMORY WALL
   ========================================================================== */
function renderPolaroids(filter) {
  const grid = document.getElementById("polaroid-grid");
  const items =
    filter === "all"
      ? BIRTHDAY_CONFIG.polaroids
      : BIRTHDAY_CONFIG.polaroids.filter((item) => item.category === filter);

  grid.innerHTML = items
    .map((item, idx) => {
      const imgSrc =
        item.image || createScrapbookPlaceholderSVG(idx + 2, item.caption);
      return `
      <div class="polaroid-card" data-id="${item.id}" style="--tilt: ${item.tilt || "-2deg"}" tabindex="0" role="button" aria-label="Memory card: ${item.caption}. Click to flip for secret note.">
        <div class="mini-tape" style="background: ${item.tapeColor || "rgba(244, 206, 212, 0.75)"}"></div>
        <div class="polaroid-card-inner">
          <!-- FRONT -->
          <div class="polaroid-front">
            <div class="polaroid-photo-frame">
              <img src="${imgSrc}" alt="${item.caption}" loading="lazy" />
              <span class="polaroid-date-tag">${item.date}</span>
              <button class="polaroid-expand-btn" data-expand="${item.id}" aria-label="View full size photo">
                View Full ⤢
              </button>
            </div>
            <div class="polaroid-front-footer">
              <span class="polaroid-front-caption">${item.caption}</span>
              <span class="flip-hint">Flip ↻</span>
            </div>
          </div>

          <!-- BACK (Secret Note) -->
          <div class="polaroid-back">
            <span class="back-pin-heart">♡</span>
            <p class="back-handwritten-note">"${item.backNote}"</p>
            <div class="back-footer">
              <span>${item.date}</span>
              <span>Tap to flip back ↻</span>
            </div>
          </div>
        </div>
      </div>
    `;
    })
    .join("");

  // Attach flip & lightbox listeners
  grid.querySelectorAll(".polaroid-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      const expandBtn = e.target.closest("[data-expand]");
      if (expandBtn) {
        e.stopPropagation();
        const id = Number(expandBtn.getAttribute("data-expand"));
        openLightbox(id);
        return;
      }
      card.classList.toggle("is-flipped");
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        card.classList.toggle("is-flipped");
      }
    });
  });
}

/* ==========================================================================
   LIGHTBOX MODAL FOR FULL PHOTO VIEW
   ========================================================================== */
function openLightbox(id) {
  const idx = BIRTHDAY_CONFIG.polaroids.findIndex((p) => p.id === id);
  if (idx === -1) return;
  const item = BIRTHDAY_CONFIG.polaroids[idx];
  const imgSrc =
    item.image || createScrapbookPlaceholderSVG(idx + 2, item.caption);

  document.getElementById("lightbox-img").src = imgSrc;
  document.getElementById("lightbox-date").textContent = item.date;
  document.getElementById("lightbox-caption").textContent = item.caption;
  document.getElementById("lightbox-back-note").textContent = `"${item.backNote}"`;

  const modal = document.getElementById("lightbox-modal");
  modal.classList.add("is-active");
  modal.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  const modal = document.getElementById("lightbox-modal");
  modal.classList.remove("is-active");
  modal.setAttribute("aria-hidden", "true");
}

/* ==========================================================================
   INTERACTIVE WAX-SEALED ENVELOPE LOGIC
   ========================================================================== */
function setupEnvelope() {
  const envelope = document.getElementById("envelope-wrapper");
  const unfoldedCard = document.getElementById("unfolded-letter");
  const closeBtn = document.getElementById("close-letter-btn");

  function openLetter() {
    if (!envelope.classList.contains("is-open")) {
      envelope.classList.add("is-open");
      envelope.setAttribute("aria-expanded", "true");
      burstConfettiHearts(28);

      setTimeout(() => {
        unfoldedCard.classList.add("is-visible");
        unfoldedCard.setAttribute("aria-hidden", "false");
        unfoldedCard.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 520);
    } else {
      unfoldedCard.classList.add("is-visible");
      unfoldedCard.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  function closeLetter(e) {
    if (e) e.stopPropagation();
    unfoldedCard.classList.remove("is-visible");
    unfoldedCard.setAttribute("aria-hidden", "true");
    envelope.classList.remove("is-open");
    envelope.setAttribute("aria-expanded", "false");
  }

  envelope.addEventListener("click", openLetter);
  envelope.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openLetter();
    }
  });
  closeBtn.addEventListener("click", closeLetter);
}

/* ==========================================================================
   POCKET NOTES JAR DISPENSER
   ========================================================================== */
function setupPocketNotes() {
  let noteIdx = 0;
  const noteEl = document.getElementById("dispensed-note");
  const counterEl = document.getElementById("note-counter");
  const nextBtn = document.getElementById("next-note-btn");
  const dispenser = document.querySelector(".note-dispenser");

  nextBtn.addEventListener("click", () => {
    noteIdx = (noteIdx + 1) % BIRTHDAY_CONFIG.pocketNotes.length;
    dispenser.style.transform = "scale(0.97)";
    setTimeout(() => {
      noteEl.textContent = `"${BIRTHDAY_CONFIG.pocketNotes[noteIdx]}"`;
      counterEl.textContent = `Note ${noteIdx + 1} of ${BIRTHDAY_CONFIG.pocketNotes.length}`;
      dispenser.style.transform = "scale(1)";
    }, 140);
  });
}

/* ==========================================================================
   FLOATING PASTEL PETALS & HEART CONFETTI CANVAS
   ========================================================================== */
const particles = [];
const burstParticles = [];

function setupCanvas() {
  const canvas = document.getElementById("petals-canvas");
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  // Ambient floating petals
  for (let i = 0; i < 22; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: 6 + Math.random() * 8,
      speedY: 0.35 + Math.random() * 0.55,
      speedX: -0.25 + Math.random() * 0.5,
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.015,
      color:
        i % 3 === 0
          ? "rgba(243, 194, 203, 0.55)"
          : i % 3 === 1
          ? "rgba(247, 220, 210, 0.55)"
          : "rgba(216, 122, 136, 0.35)"
    });
  }

  function drawHeart(x, y, size, color, rotation) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.fillStyle = color;
    ctx.beginPath();
    const topCurveHeight = size * 0.3;
    ctx.moveTo(0, topCurveHeight);
    ctx.bezierCurveTo(0, 0, -size / 2, 0, -size / 2, topCurveHeight);
    ctx.bezierCurveTo(-size / 2, (size + topCurveHeight) / 2, 0, (size + topCurveHeight) / 1.4, 0, size);
    ctx.bezierCurveTo(0, (size + topCurveHeight) / 1.4, size / 2, (size + topCurveHeight) / 2, size / 2, topCurveHeight);
    ctx.bezierCurveTo(size / 2, 0, 0, 0, 0, topCurveHeight);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw ambient petals
    particles.forEach((p) => {
      p.y += p.speedY;
      p.x += p.speedX + Math.sin(p.y * 0.012) * 0.3;
      p.angle += p.spin;

      if (p.y > canvas.height + 20) {
        p.y = -15;
        p.x = Math.random() * canvas.width;
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.ellipse(0, 0, p.size, p.size * 0.58, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    // Draw celebratory heart bursts
    for (let i = burstParticles.length - 1; i >= 0; i--) {
      const b = burstParticles[i];
      b.x += b.vx;
      b.y += b.vy;
      b.vy += 0.14; // gentle gravity
      b.rotation += b.vRot;
      b.alpha -= 0.012;

      if (b.alpha <= 0) {
        burstParticles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = Math.max(0, b.alpha);
      drawHeart(b.x, b.y, b.size, b.color, b.rotation);
      ctx.restore();
    }

    requestAnimationFrame(animate);
  }

  animate();
}

function burstConfettiHearts(count = 36) {
  const colors = ["#D87A88", "#F3B6C0", "#E5989B", "#D5AF7E", "#7F9A86"];
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight * 0.45;

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 2.5 + Math.random() * 6.5;
    burstParticles.push({
      x: centerX + (Math.random() - 0.5) * 120,
      y: centerY + (Math.random() - 0.5) * 60,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 3.5,
      size: 10 + Math.random() * 12,
      color: colors[i % colors.length],
      rotation: (Math.random() - 0.5) * 1.2,
      vRot: (Math.random() - 0.5) * 0.05,
      alpha: 1
    });
  }
}

/* ==========================================================================
   GENTLE MUSIC-BOX BIRTHDAY MELODY (Built-in Web Audio — No MP3 required!)
   ========================================================================== */
function setupMusicBox() {
  const btn = document.getElementById("music-toggle");
  const label = document.getElementById("music-label");
  let audioCtx = null;
  let isPlaying = false;
  let timerId = null;

  // Music-box notes for "Happy Birthday" in warm C major / F major
  const melody = [
    { f: 261.63, d: 0.35 }, { f: 261.63, d: 0.25 }, { f: 293.66, d: 0.55 },
    { f: 261.63, d: 0.55 }, { f: 349.23, d: 0.55 }, { f: 329.63, d: 1.0 },
    { f: 261.63, d: 0.35 }, { f: 261.63, d: 0.25 }, { f: 293.66, d: 0.55 },
    { f: 261.63, d: 0.55 }, { f: 392.00, d: 0.55 }, { f: 349.23, d: 1.0 },
    { f: 261.63, d: 0.35 }, { f: 261.63, d: 0.25 }, { f: 523.25, d: 0.55 },
    { f: 440.00, d: 0.55 }, { f: 349.23, d: 0.55 }, { f: 329.63, d: 0.55 },
    { f: 293.66, d: 0.9 },  { f: 466.16, d: 0.35 }, { f: 466.16, d: 0.25 },
    { f: 440.00, d: 0.55 }, { f: 349.23, d: 0.55 }, { f: 392.00, d: 0.55 },
    { f: 349.23, d: 1.2 }
  ];

  function playNote(freq, duration) {
    if (!audioCtx || !isPlaying) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.09, audioCtx.currentTime + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0008, audioCtx.currentTime + duration + 0.35);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration + 0.4);
  }

  function loopMelody(index = 0) {
    if (!isPlaying) return;
    const note = melody[index];
    playNote(note.f, note.d);
    timerId = setTimeout(() => {
      loopMelody((index + 1) % melody.length);
    }, note.d * 1000 + 80);
  }

  btn.addEventListener("click", () => {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (isPlaying) {
      isPlaying = false;
      clearTimeout(timerId);
      btn.classList.remove("playing");
      label.textContent = "Play Melody";
    } else {
      isPlaying = true;
      btn.classList.add("playing");
      label.textContent = "Pause Melody";
      loopMelody(0);
    }
  });
}

/* ==========================================================================
   🕵️‍♂️ VISITOR & INTERACTION TRACKER (Feeds into /track endpoint)
   ========================================================================== */
const VisitorTracker = {
  currentSessionId: null,
  sessionData: null,

  getDeviceDescription() {
    const ua = navigator.userAgent || "";
    let os = "Unknown OS";
    let device = "Desktop / Laptop";
    let browser = "Browser";

    // Detect OS & specific phone models where possible
    if (/iPhone/i.test(ua)) {
      os = "iOS (iPhone)";
      device = "📱 Apple iPhone";
    } else if (/iPad/i.test(ua)) {
      os = "iPadOS";
      device = "📱 Apple iPad";
    } else if (/Android/i.test(ua)) {
      os = "Android";
      const match = ua.match(/Android\s+([\d.]+);\s*([^;)]+)/i);
      if (match && match[2]) {
        device = `📱 Android (${match[2].trim()})`;
        os = `Android ${match[1]}`;
      } else {
        device = "📱 Android Phone";
      }
    } else if (/Windows NT/i.test(ua)) {
      os = "Windows";
      device = "💻 Windows PC";
    } else if (/Mac OS X/i.test(ua)) {
      os = "macOS";
      device = "💻 Mac";
    } else if (/Linux/i.test(ua)) {
      os = "Linux";
      device = "💻 Linux PC";
    }

    // Detect Browser
    if (/Instagram/i.test(ua)) browser = "Instagram In-App Browser";
    else if (/FBAN|FBAV/i.test(ua)) browser = "Facebook / Messenger Browser";
    else if (/WhatsApp/i.test(ua)) browser = "WhatsApp In-App Browser";
    else if (/Edg\//i.test(ua)) browser = "Microsoft Edge";
    else if (/OPR\//i.test(ua)) browser = "Opera";
    else if (/Chrome\//i.test(ua) && !/Edg\//i.test(ua)) browser = "Google Chrome";
    else if (/Safari\//i.test(ua) && !/Chrome\//i.test(ua)) browser = "Apple Safari";
    else if (/Firefox\//i.test(ua)) browser = "Mozilla Firefox";

    return {
      device,
      os,
      browser,
      screen: `${window.screen.width}x${window.screen.height}`,
      language: navigator.language || "en",
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "Unknown",
      userAgent: ua
    };
  },

  getVisitorId() {
    let vid = localStorage.getItem("bday_visitor_uid");
    if (!vid) {
      vid = "V-" + Math.random().toString(36).substring(2, 8).toUpperCase();
      localStorage.setItem("bday_visitor_uid", vid);
    }
    return vid;
  },

  getLocalLogs() {
    try {
      const key = (BIRTHDAY_CONFIG.tracking && BIRTHDAY_CONFIG.tracking.storageKey) || "bday_scrapbook_visitor_logs_v1";
      return JSON.parse(localStorage.getItem(key) || "[]");
    } catch (e) {
      return [];
    }
  },

  saveLocalLogs(logs) {
    try {
      const key = (BIRTHDAY_CONFIG.tracking && BIRTHDAY_CONFIG.tracking.storageKey) || "bday_scrapbook_visitor_logs_v1";
      localStorage.setItem(key, JSON.stringify(logs));
    } catch (e) {
      // ignore storage quota errors
    }
  },

  async fetchIpDetails() {
    // Try primary rich IP + Geolocation API (ipwho.is)
    try {
      const res = await fetch("https://ipwho.is/");
      if (res.ok) {
        const data = await res.json();
        if (data && data.ip) {
          return {
            ip: data.ip,
            city: data.city || "Unknown City",
            region: data.region || "",
            country: data.country || "Unknown Country",
            flag: (data.flag && data.flag.emoji) || "🌍",
            isp: (data.connection && (data.connection.isp || data.connection.org)) || "Unknown ISP"
          };
        }
      }
    } catch (e) {}

    // Fallback 1: ipapi.co
    try {
      const res2 = await fetch("https://ipapi.co/json/");
      if (res2.ok) {
        const d2 = await res2.json();
        if (d2 && d2.ip) {
          return {
            ip: d2.ip,
            city: d2.city || "Unknown City",
            region: d2.region || "",
            country: d2.country_name || "Unknown Country",
            flag: "🌍",
            isp: d2.org || "Unknown ISP"
          };
        }
      }
    } catch (e) {}

    // Fallback 2: ipify (IP only)
    try {
      const res3 = await fetch("https://api.ipify.org?format=json");
      if (res3.ok) {
        const d3 = await res3.json();
        return {
          ip: d3.ip || "Unknown IP",
          city: "Unknown",
          region: "",
          country: "",
          flag: "🌍",
          isp: "Unknown ISP"
        };
      }
    } catch (e) {}

    return {
      ip: "Offline / Local",
      city: "Local Device",
      region: "",
      country: "",
      flag: "🏠",
      isp: "Local Network"
    };
  },

  encodeRecordBase64(record) {
    try {
      const json = JSON.stringify(record);
      return btoa(unescape(encodeURIComponent(json)))
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
    } catch (e) {
      return "";
    }
  },

  cloudSlotIndex: null,

  async syncToCloud(record, isActionUpdate = false) {
    const cfg = BIRTHDAY_CONFIG.tracking || {};
    if (!cfg.enabled) return;

    const appKey = cfg.dbAppKey || "6o77ku48";
    const kvBase = `https://keyvalue.immanuel.co/api/KeyVal`;

    // 1. PERMANENT APPEND-ONLY CLOUD DATABASE (KeyValue DB)
    // Stores each visit in its own immutable slot (visit_1, visit_2, ...) so no data is ever lost or overwritten,
    // and both your PC and phone always show the exact same database records!
    try {
      const b64 = this.encodeRecordBase64(record);
      if (b64) {
        if (!isActionUpdate || !this.cloudSlotIndex) {
          // Read current total count from cloud DB
          const countRes = await fetch(`${kvBase}/GetValue/${appKey}/visit_count`);
          let currentCount = 0;
          if (countRes.ok) {
            const rawCount = await countRes.json();
            currentCount = parseInt(rawCount, 10) || 0;
          }
          const nextIndex = currentCount + 1;
          this.cloudSlotIndex = nextIndex;
          record.dbId = nextIndex;

          // Write immutable visit record to slot visit_<nextIndex>
          await fetch(`${kvBase}/UpdateValue/${appKey}/visit_${nextIndex}/${b64}`, {
            method: "POST"
          });
          // Increment master visit_count
          await fetch(`${kvBase}/UpdateValue/${appKey}/visit_count/${nextIndex}`, {
            method: "POST"
          });
        } else if (this.cloudSlotIndex) {
          // Update the same visit slot with newly clicked actions (never deletes anything)
          await fetch(`${kvBase}/UpdateValue/${appKey}/visit_${this.cloudSlotIndex}/${b64}`, {
            method: "POST"
          });
        }
      }
    } catch (e) {}

    // 2. SECONDARY REAL-TIME STREAM (ntfy.sh JSON pub/sub)
    if (cfg.liveSyncTopic) {
      try {
        await fetch(`https://ntfy.sh/${encodeURIComponent(cfg.liveSyncTopic)}`, {
          method: "POST",
          body: JSON.stringify(record)
        });
      } catch (e) {}
    }

    // 3. Optional Custom Webhook (Discord / Slack / Make)
    if (cfg.customWebhookUrl) {
      try {
        await fetch(cfg.customWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content: `💖 **New Birthday Page Visit!**\n**Visitor ID:** \`${record.visitorId}\` (Visit #${record.deviceVisitCount})\n**IP Address:** \`${record.ip}\`\n**Location:** ${record.flag} ${record.city}, ${record.region}, ${record.country}\n**ISP:** ${record.isp}\n**Device:** ${record.device} • ${record.os} • ${record.browser}\n**Screen:** ${record.screen} • **Timezone:** ${record.timezone}\n**Time:** ${new Date(record.timestamp).toLocaleString()}`,
            record
          })
        });
      } catch (e) {}
    }
  },

  async init() {
    if (BIRTHDAY_CONFIG.tracking && BIRTHDAY_CONFIG.tracking.enabled === false) return;

    const visitorId = this.getVisitorId();
    const prevCount = Number(localStorage.getItem("bday_device_visit_count") || "0") + 1;
    localStorage.setItem("bday_device_visit_count", String(prevCount));

    const devInfo = this.getDeviceDescription();
    this.currentSessionId = "S-" + Date.now() + "-" + Math.random().toString(36).substring(2, 6);

    const record = {
      sessionId: this.currentSessionId,
      visitorId,
      deviceVisitCount: prevCount,
      timestamp: new Date().toISOString(),
      ip: "Detecting...",
      city: "Detecting...",
      region: "",
      country: "",
      flag: "⏳",
      isp: "Detecting...",
      referrer: document.referrer || "Direct Link / Typed URL",
      pageUrl: window.location.href,
      actions: ["Opened Birthday Page"],
      ...devInfo
    };

    this.sessionData = record;

    // Save immediately to local logs
    const logs = this.getLocalLogs();
    logs.unshift(record);
    this.saveLocalLogs(logs);

    // Fetch IP & Geolocation asynchronously
    const ipData = await this.fetchIpDetails();
    Object.assign(record, ipData);

    // Update local logs with resolved IP
    const updatedLogs = this.getLocalLogs();
    const idx = updatedLogs.findIndex((l) => l.sessionId === this.currentSessionId);
    if (idx !== -1) {
      updatedLogs[idx] = record;
      this.saveLocalLogs(updatedLogs);
    }

    // Push visit to cloud stream so you can see it on /track from your own phone/computer
    await this.syncToCloud(record);
  },

  logAction(actionName) {
    if (!this.sessionData) return;
    if (!this.sessionData.actions.includes(actionName)) {
      this.sessionData.actions.push(actionName);
      const logs = this.getLocalLogs();
      const idx = logs.findIndex((l) => l.sessionId === this.currentSessionId);
      if (idx !== -1) {
        logs[idx] = this.sessionData;
        this.saveLocalLogs(logs);
      }
      // Sync updated actions to permanent database slot
      this.syncToCloud(
        {
          ...this.sessionData,
          eventUpdate: true,
          latestAction: actionName
        },
        true
      );
    }
  }
};

/* ==========================================================================
   BOOT EVERYTHING ON DOM READY
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initContent();
  setupEnvelope();
  setupPocketNotes();
  setupCanvas();
  setupMusicBox();
  VisitorTracker.init();

  // Track interactive milestones so you know what she clicked!
  const envEl = document.getElementById("envelope-wrapper");
  if (envEl) {
    envEl.addEventListener("click", () => VisitorTracker.logAction("Opened Love Letter 💌"));
  }
  const musicBtn = document.getElementById("music-toggle");
  if (musicBtn) {
    musicBtn.addEventListener("click", () => VisitorTracker.logAction("Played Birthday Melody ♪"));
  }
  const noteBtn = document.getElementById("next-note-btn");
  if (noteBtn) {
    noteBtn.addEventListener("click", () => VisitorTracker.logAction("Pulled Pocket Note 🏺"));
  }
  const gridEl = document.getElementById("polaroid-grid");
  if (gridEl) {
    gridEl.addEventListener("click", () => VisitorTracker.logAction("Flipped Polaroid Photo 📸"));
  }

  // Filter buttons for Polaroid Wall
  document.querySelectorAll(".filter-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".filter-pill").forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      renderPolaroids(pill.getAttribute("data-filter"));
    });
  });

  // Celebrate Confetti button
  document.getElementById("confetti-btn").addEventListener("click", () => {
    burstConfettiHearts(42);
    VisitorTracker.logAction("Clicked Celebrate Confetti ✨");
  });

  // Close Lightbox
  document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
  document.getElementById("lightbox-backdrop").addEventListener("click", closeLightbox);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
});
