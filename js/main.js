// ✏️ UPDATE YOUR AVAILABILITY HERE: set open to false when you are fully booked.
const AVAILABILITY = {
  open: true,
  openText: "Open to Freelance Projects",
  closedText: "Fully booked — message me for later dates",
};
const IC = {
    "Web Development": "images/icons/web-development.webp",
    "Website Design": "images/icons/website-design.webp",
    "Mobile Apps": "images/icons/mobile-apps.webp",
    "UI/UX Design": "images/icons/ui-ux-design.webp",
    "Graphic Design": "images/icons/graphic-design.webp",
    Portfolio: "images/icons/portfolio.webp",
    "Creative Ideas": "images/icons/creative-ideas.webp",
    Java: "images/icons/java.webp",
    Python: "images/icons/python.webp",
    HTML: "images/icons/html.webp",
    CSS: "images/icons/css.webp",
    JavaScript: "images/icons/javascript.webp",
    "C++": "images/icons/c.webp",
    MySQL: "images/icons/mysql.webp",
    Database: "images/icons/database.webp",
    React: "images/icons/react.webp",
    "Next.js": "images/icons/next-js.webp",
    Laravel: "images/icons/laravel.webp",
    Git: "images/icons/git.webp",
    GitHub: "images/icons/github.webp",
    "VS Code": "images/icons/vs-code.webp",
    Figma: "images/icons/figma.webp",
    Canva: "images/icons/canva.webp",
    Salesforce: "images/icons/salesforce.webp",
    HubSpot: "images/icons/hubspot.webp",
    "Zoho CRM": "images/icons/zoho-crm.webp",
    Mailchimp: "images/icons/mailchimp.webp",
    "Google Ads": "images/icons/google-ads.webp",
    "Meta Ads": "images/icons/meta-ads.webp",
    "Google Analytics": "images/icons/google-analytics.webp",
    Hootsuite: "images/icons/hootsuite.webp",
    ChatGPT: "images/icons/chatgpt.webp",
    Claude: "images/icons/claude.webp",
    Gemini: "images/icons/gemini.webp",
    Copilot: "images/icons/copilot.webp",
    Midjourney: "images/icons/midjourney.webp",
    Perplexity: "images/icons/perplexity.webp",
    Notion: "images/icons/notion.webp",
    "Leonardo.Ai": "images/icons/leonardo-ai.webp",
    Windows: "images/icons/windows.webp",
    Word: "images/icons/word.webp",
    Excel: "images/icons/excel.webp",
    PowerPoint: "images/icons/powerpoint.webp",
    Outlook: "images/icons/outlook.webp",
    Teams: "images/icons/teams.webp",
    OneDrive: "images/icons/onedrive.webp",
    SharePoint: "images/icons/sharepoint.webp",
    Trello: "images/icons/trello.webp",
    Slack: "images/icons/slack.webp",
    Zoom: "images/icons/zoom.webp",
    "Google Drive": "images/icons/google-drive.webp",
    "Adobe XD": "images/icons/adobe-xd.webp",
    Photoshop: "images/icons/photoshop.webp",
    Illustrator: "images/icons/illustrator.webp",
    "Premiere Pro": "images/icons/premiere-pro.webp",
    "Social Media": "images/icons/social-media.webp",
    "Content Creation": "images/icons/content-creation.webp",
    Cloud: "images/icons/cloud.webp",
    Cybersecurity: "images/icons/cybersecurity.webp",
    "IT Support": "images/icons/it-support.webp",
    Coding: "images/icons/coding.webp",
    "Project Management": "images/icons/project-management.webp",
    "Business & Sales": "images/icons/business-sales.webp",
  },
  EMAIL = "joselle77zulueta@gmail.com",
  $ = (s) => document.querySelector(s),
  $$ = (s) => [...document.querySelectorAll(s)];
const ic = (n) => `<img class="ic" src="${IC[n]}" alt="">`,
  RM = matchMedia("(prefers-reduced-motion:reduce)").matches;
const toast = (m) => {
  const t = $("#toast");
  t.textContent = m;
  t.classList.add("s");
  setTimeout(() => t.classList.remove("s"), 2200);
};
const NAV = [
  ["Home", "home", "Web Development"],
  ["About", "about", "Creative Ideas"],
  ["Services", "services", "Content Creation"],
  ["Projects", "projects", "Portfolio"],
  ["Skills", "skills", "Coding"],
  ["Toolbox", "toolbox", "Cloud"],
  ["Contact", "contact", "Social Media"],
];
$("nav").insertAdjacentHTML(
  "beforeend",
  NAV.map((n) => `<a class="l" href="#${n[1]}">${ic(n[2])}${n[0]}</a>`).join(
    "",
  ),
);
$("#h1").innerHTML = $("#h1")
  .textContent.split(" ")
  .map(
    (w, i) =>
      `<span class="${w.startsWith("Joselle") ? "hl" : ""}" style="--i:${i}">${w}</span>`,
  )
  .join(" ");
$("#int").innerHTML = [
  ["Coding", "Coding"],
  ["Design", "UI/UX Design"],
  ["Technology", "Cloud"],
]
  .map((x) => `<div>${ic(x[1])}${x[0]}</div>`)
  .join("");
$("#top").innerHTML =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
// projects (real links)
const PJ = [
  {
    n: "Aurelia Lens",
    c: ["UI/UX", "Prototypes"],
    t: "Figma Website Prototype",
    d: "A website prototype exploring visual presentation, layout, and digital design.",
    u: "https://www.figma.com/proto/CjyEPNQVPxCC655H5ExOzX/Aurelia-Lens",
    b: "Explore Project",
    i: "Website Design",
  },
  {
    n: "StudyHub",
    c: ["Website Design"],
    t: "Website Project",
    d: "A study-focused web project designed to provide a digital learning experience.",
    u: "https://rabagoo.github.io",
    b: "Visit Website",
    i: "Web Development",
  },
  {
    n: "StudyNest",
    c: ["UI/UX", "Prototypes"],
    t: "Figma Website Prototype",
    d: "A website prototype focused on a clean, organized study experience.",
    u: "https://www.figma.com/design/5BcNLzJA8GeYGnuIJwhqbW/StudyNest-Website-Prototype?node-id=0-1&t=rPhughQR7q0O9mCf-1",
    b: "Explore Project",
    i: "UI/UX Design",
  },
  {
    n: "StudyNori",
    c: ["UI/UX", "Prototypes"],
    t: "Figma Website Prototype",
    d: "A language-learning website concept featuring a friendly, engaging digital learning experience.",
    u: "https://www.figma.com/proto/dYoEuTg9Cyz8YHZeV4lQ00/StudyNori-%E2%80%94-Natural-Website-Prototype%E2%80%935-Pages-?node-id=1-27&t=I6xQAezeRx3ZP9OX-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    b: "Explore Project",
    i: "Creative Ideas",
  },
];
let pcat = "All";
const chipset = (el, list, cur, fn) => {
  el.innerHTML = list
    .map(
      ([v, l]) =>
        `<button class="chip" aria-pressed="${v == cur}" data-v="${v}">${l}</button>`,
    )
    .join("");
  $$("#" + el.id + " .chip").forEach(
    (b) => (b.onclick = () => fn(b.dataset.v)),
  );
};
function drawP() {
  $("#gal").innerHTML = PJ.filter((p) => pcat == "All" || p.c.includes(pcat))
    .map(
      (p) =>
        `<a class="pj" href="${p.u.replace(/&/g, "&amp;")}" target="_blank" rel="noopener noreferrer"><span class="stk">${p.t.startsWith("Figma") ? "Figma" : "Live site"}</span><div class="im">${ic(p.i)}</div><b>${p.n}</b><small>${p.t}</small><p>${p.d}</p><span class="go">${p.b} <span aria-hidden="true">↗</span><span class="sr">: ${p.n} (opens in a new tab)</span></span></a>`,
    )
    .join("");
}
function setP(c) {
  pcat = c;
  chipset(
    $("#pc"),
    ["All", "Website Design", "UI/UX", "Prototypes"].map((x) => [x, x]),
    c,
    setP,
  );
  $("#gal").classList.add("o");
  setTimeout(
    () => {
      drawP();
      $("#gal").classList.remove("o");
    },
    RM ? 0 : 180,
  );
}
// services
$("#svc").innerHTML = [
  [
    "Website Design & Development",
    "Website Design",
    "Modern, responsive websites designed to present a brand, service, or business online.",
  ],
  [
    "UI/UX Design & Prototyping",
    "UI/UX Design",
    "User-friendly interfaces, wireframes, website layouts, and interactive prototypes.",
  ],
  [
    "Social Media Graphics",
    "Social Media",
    "Creative visual content for social media pages, promotions, and brand presence.",
  ],
  [
    "Digital Content Design",
    "Content Creation",
    "Digital graphics and visual assets that help businesses communicate their ideas.",
  ],
]
  .map(
    (x) =>
      `<div class="sc svc">${ic(x[1])}<h3>${x[0].replace("&", "&amp;")}</h3><p>${x[2]}</p></div>`,
  )
  .join("");
// skills + toolbox ("*" = learning)
const CATS = {
  dev: [
    "Programming & Web Dev",
    "Coding",
    "#EE91AA",
    "Where ideas become working pages.",
    "Used to structure, style and build web pages and the logic behind them.",
  ],
  design: [
    "UI/UX & Creative Design",
    "UI/UX Design",
    "#FDEAF0",
    "Layouts, flows and pretty details.",
    "Used to sketch interfaces, prototype flows and make visuals.",
  ],
  ai: [
    "AI Tools",
    "Claude",
    "#FFF1F4",
    "Helpers for thinking and research.",
    "Assistants for brainstorming, research and speeding up routine work.",
  ],
  ms: [
    "Microsoft Workspace",
    "Word",
    "#F8C9D4",
    "Docs, sheets and decks.",
    "Documents, spreadsheets, presentations and team communication.",
  ],
  crm: [
    "CRM & Digital Marketing",
    "Business & Sales",
    "#FDEAF0",
    "Leads, customers and audiences.",
    "Organizing leads and customers and reading online audience data.",
  ],
  prod: [
    "Developer & Productivity",
    "Project Management",
    "#FFF1F4",
    "Keeping everything tidy.",
    "Keeping code, tasks, notes and files organized.",
  ],
};
const T = {
  dev: "HTML,CSS,JavaScript,Java,Python,C++*,PHP*,SQL,MySQL",
  design: "Figma,Canva,Wireframing,Prototyping,Responsive Design",
  ai: "ChatGPT,Claude,Gemini,Copilot,Perplexity",
  ms: "Word,Excel,PowerPoint,Outlook,Teams,OneDrive",
  crm: "HubSpot,Salesforce*,Zoho CRM*,Mailchimp,Google Analytics*,Meta Business Suite*",
  prod: "VS Code,Git,GitHub,Notion,Trello,Slack,Google Drive",
};
const ALT = {
  PHP: "Coding",
  SQL: "Database",
  Wireframing: "UI/UX Design",
  Prototyping: "Website Design",
  "Responsive Design": "Mobile Apps",
  "Meta Business Suite": "Meta Ads",
};
const TOOLS = Object.entries(T).flatMap(([c, s]) =>
  s.split(",").map((n) => ({ n: n.replace("*", ""), c, l: n.endsWith("*") })),
);
$("#gar").innerHTML = Object.entries(CATS)
  .map(
    ([k, v]) =>
      `<div class="fw">${ic(v[1])}<h3>${v[0]}</h3><p>${v[3]}</p><div class="tg">${TOOLS.filter(
        (t) => t.c == k,
      )
        .slice(0, 4)
        .map((t) => `<span>${t.n}</span>`)
        .join(
          "",
        )}</div><button class="btn g" data-k="${k}">See all ${TOOLS.filter((t) => t.c == k).length} tools</button></div>`,
  )
  .join("");
$$(".fw button").forEach(
  (b) =>
    (b.onclick = () => {
      setT(b.dataset.k);
      $("#toolbox").scrollIntoView();
    }),
);
let tcat = "all",
  sel = "";
function drawT() {
  const q = $("#q").value.toLowerCase();
  const r = TOOLS.filter(
    (t) => (tcat == "all" || t.c == tcat) && t.n.toLowerCase().includes(q),
  );
  $("#tools").innerHTML =
    r
      .map(
        (t) =>
          `<button class="tl" aria-pressed="${t.n == sel}" data-n="${t.n}">${ic(IC[t.n] ? t.n : ALT[t.n])}${t.n}<i class="${t.l ? "" : "u"}">${t.l ? "Learning" : "Using"}</i></button>`,
      )
      .join("") || "<p>No tools match that search.</p>";
  $$(".tl").forEach(
    (b) =>
      (b.onclick = () => {
        sel = b.dataset.n;
        const t = TOOLS.find((x) => x.n == sel);
        $("#det").innerHTML =
          `<b>${t.n}</b> · ${CATS[t.c][0]} · ${t.l ? "Learning" : "Using"}<br>${CATS[t.c][4]}`;
        drawT();
      }),
  );
}
function setT(c) {
  tcat = c;
  chipset(
    $("#tc"),
    [["all", "All"], ...Object.entries(CATS).map(([k, v]) => [k, v[0]])],
    c,
    setT,
  );
  $("#tools").classList.add("o");
  setTimeout(() => {
    drawT();
    $("#tools").classList.remove("o");
  }, 160);
}
$("#q").oninput = drawT;
setP("All");
setT("all");
// contact
const FB =
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1z"/></svg>',
  LI =
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.5 9.5H3.7V20h2.8V9.5zM5.1 4.5a1.6 1.6 0 100 3.2 1.6 1.6 0 000-3.2zM20.3 13.6c0-3.1-1.6-4.3-3.8-4.3-1.7 0-2.5.9-2.9 1.6V9.5h-2.8V20h2.8v-5.9c0-.3 0-.6.1-.8.3-.6.8-1.3 1.8-1.3 1.3 0 1.8 1 1.8 2.5V20h2.8v-6.4z"/></svg>';
const SOC = [
  [
    "Facebook",
    "https://www.facebook.com/joselleann.zulueta.1",
    "Visit my Facebook profile",
    FB,
  ],
  [
    "LinkedIn",
    "https://www.linkedin.com/in/joselle-ann-zulueta-07a01b363/",
    "Visit my LinkedIn profile",
    LI,
  ],
];
$("#links").innerHTML =
  `<a class="ln" href="mailto:${EMAIL}">${ic("Social Media")}${EMAIL}</a><a class="ln" href="tel:+639127914969">${ic("IT Support")}+63 912 791 4969</a>` +
  SOC.map(
    (x) =>
      `<a class="ln" href="${x[1]}" target="_blank" rel="noopener noreferrer" aria-label="${x[2]} (opens in a new tab)">${x[3]}${x[0]}</a>`,
  ).join("") +
  `<button class="btn g" id="cp" type="button">Copy email</button>`;
$("#fsoc").innerHTML = SOC.map(
  (x) =>
    `<a href="${x[1]}" target="_blank" rel="noopener noreferrer" aria-label="${x[2]} (opens in a new tab)" title="${x[0]}">${x[3]}</a>`,
).join("");
$("#cp").onclick = async () => {
  try {
    await navigator.clipboard.writeText(EMAIL);
    toast("Email copied");
  } catch (e) {
    toast(EMAIL);
  }
};
$("#fm").onsubmit = (e) => {
  e.preventDefault();
  const f = e.target;
  let ok = true;
  [
    ["name", (v) => v.trim().length > 1, "Please enter your name"],
    ["email", (v) => /^\S+@\S+\.\S+$/.test(v), "Enter a valid email"],
    ["msg", (v) => v.trim().length > 9, "Add a few more words"],
  ].forEach(([n, t, m]) => {
    const g = t(f[n].value);
    f[n].nextElementSibling.textContent = g ? "" : m;
    if (!g) ok = false;
  });
  if (!ok) return;
  toast("Opening your email app…");
  const fo = $("#fok");
  fo.hidden = false;
  fo.textContent =
    "Thanks, " +
    f.name.value.trim() +
    "! Your email app should now open with your inquiry ready. Please press send there to deliver it.";
  location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Portfolio inquiry: " + f.ptype.value + " (" + f.svc.value + ")")}&body=${encodeURIComponent("Project type: " + f.ptype.value + "\nStage: " + f.stage.value + "\n\n" + f.msg.value + "\n\n— " + f.name.value + " (" + f.email.value + ")")}`;
};
// motion + nav state
const io = new IntersectionObserver(
  (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
  { threshold: 0.08 },
);
$$(".rv").forEach((x) => io.observe(x));
const so = new IntersectionObserver(
  (es) =>
    es.forEach(
      (e) =>
        e.isIntersecting &&
        $$("nav .l").forEach((a) => {
          const m = a.getAttribute("href") == "#" + e.target.id;
          a.classList.toggle("on", m);
          m
            ? a.setAttribute("aria-current", "true")
            : a.removeAttribute("aria-current");
        }),
    ),
  { rootMargin: "-45% 0px -50% 0px" },
);
$$("main section").forEach((s) => so.observe(s));
addEventListener(
  "scroll",
  () => {
    const h = document.documentElement;
    $("#top").classList.toggle("s", scrollY > 600);
  },
  { passive: true },
);
$("#top").onclick = () =>
  scrollTo({ top: 0, behavior: RM ? "auto" : "smooth" });
// availability label
(() => {
  $("#avail").classList.toggle("off", !AVAILABILITY.open);
  $("#availTxt").textContent = AVAILABILITY.open
    ? AVAILABILITY.openText
    : AVAILABILITY.closedText;
})();
// light / dark theme (remembered when the browser allows it)
const SUN =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  MOON =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"/></svg>';
function setTheme(t, save) {
  document.documentElement.dataset.theme = t;
  const b = $("#theme");
  b.setAttribute("aria-pressed", t == "dark");
  b.setAttribute(
    "aria-label",
    t == "dark" ? "Switch to light mode" : "Switch to dark mode",
  );
  b.innerHTML = t == "dark" ? SUN : MOON;
  if (save) {
    try {
      localStorage.setItem("theme", t);
    } catch (e) {}
  }
}
setTheme(document.documentElement.dataset.theme == "dark" ? "dark" : "light");
$("#theme").onclick = () =>
  setTheme(
    document.documentElement.dataset.theme == "dark" ? "light" : "dark",
    true,
  );
