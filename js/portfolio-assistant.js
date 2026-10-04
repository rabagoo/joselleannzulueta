/* Joselle AI: local answers come only from data on the page. No backend required. */
(() => {
  const FALLBACK =
    "I don’t have that information yet, but you can contact Joselle directly.";
  const OPEN =
    "Hi! 👋 I’m Joselle’s AI portfolio assistant. I can help you explore Joselle’s skills, projects, services, and experience. What would you like to know?";
  const SV = [
    "Website Design & Development",
    "UI/UX Design & Prototyping",
    "Social Media Graphics",
    "Digital Content Design",
  ];
  const link = (u, t) =>
    `<a href="${u}" ${u[0] == "#" ? "" : 'target="_blank" rel="noopener noreferrer"'}>${t}</a>`;
  const contact = () =>
    `You can reach Joselle at ${link("mailto:" + EMAIL, EMAIL)} or +63 912 791 4969, or use the ${link("#wizard", "Work With Me")} questions and the ${link("#contact", "contact form")}.`;
  const KB = {
    about: () =>
      $$("#about .sc")
        .slice(0, 2)
        .concat($$("#about .sc").slice(3))
        .map(
          (e) =>
            e.querySelector("h3").textContent +
            ": " +
            e.querySelector("p").textContent,
        )
        .join("\n"),
    skills: () =>
      Object.values(CATS)
        .map(
          (c, i) =>
            `• ${c[0]}: ${TOOLS.filter((t) => t.c == Object.keys(CATS)[i])
              .map((t) => t.n + (t.l ? " (learning)" : ""))
              .join(", ")}`,
        )
        .join("\n"),
    projects: () =>
      PJ.map((p) => `• ${p.n} (${p.t}): ${p.d} ` + link(p.u, "View")).join(
        "\n",
      ),
    services: () =>
      SV.map((s) => "• " + s).join("\n") +
      "\nPricing isn’t listed on the portfolio, so please ask Joselle directly.",
    work: () => "Joselle is open to freelance projects. " + contact(),
  };
  function local(q) {
    q = q.toLowerCase();
    const pj = PJ.find((p) => q.includes(p.n.toLowerCase()));
    if (pj)
      return (
        `${pj.n} is a ${pj.t.toLowerCase()}. ${pj.d} ` +
        link(pj.u, "Open project")
      );
    const tl = TOOLS.find((t) =>
      new RegExp(
        "\\b" + t.n.toLowerCase().replace(/[.+*]/g, "\\$&") + "\\b",
      ).test(q),
    );
    if (tl)
      return `${tl.n} is listed under ${CATS[tl.c][0]} (${tl.l ? "currently learning" : "currently using"}). ${CATS[tl.c][4]}`;
    if (
      /price|pricing|cost|rate|how much|certif|award|client|testimon|degree|school|salary/.test(
        q,
      )
    )
      return FALLBACK;
    if (/about|who|joselle/.test(q)) return KB.about();
    if (/skill|tool|tech|stack|know/.test(q)) return KB.skills();
    if (
      /project|work|portfolio|made|built|case/.test(q) &&
      !/hire|together|freelance/.test(q)
    )
      return KB.projects();
    if (/service|offer|help|do you do/.test(q)) return KB.services();
    if (
      /hire|together|contact|email|reach|freelance|available|collab|inquir/.test(
        q,
      )
    )
      return KB.work();
    if (/experience/.test(q))
      return "Joselle describes herself as a creative and technology-oriented professional growing in web development, UI/UX and AI tools, and enjoys supporting businesses with virtual assistance, e-commerce and digital marketing. Detailed work history isn’t listed here, so please contact Joselle directly.";
    return FALLBACK;
  }
  async function answer(q) {
    return local(q);
  }
  const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const M = $("#cbMsgs"),
    win = $("#cbWin"),
    op = $("#cbOpen");
  const add = (h, c) => {
    const d = document.createElement("div");
    d.className = "m " + c;
    d.innerHTML = h;
    M.append(d);
    M.scrollTop = M.scrollHeight;
    return d;
  };
  const QA = [
    ["👩‍💻 About Joselle", "about"],
    ["🛠️ Skills & Tools", "skills"],
    ["🎨 Explore Projects", "projects"],
    ["💼 Services", "services"],
    ["🤝 Work With Joselle", "work"],
  ];
  $("#cbQ").innerHTML = QA.map(
    (x) =>
      `<button type="button" class="chip" data-k="${x[1]}">${x[0]}</button>`,
  ).join("");
  async function ask(q, k) {
    add(esc(q), "u");
    const t = add(
      '<span class="dots" aria-label="Joselle AI is typing"><span></span><span></span><span></span></span>',
      "b",
    );
    await new Promise((r) => setTimeout(r, RM ? 0 : 600));
    const a = k ? KB[k]() : await answer(q);
    t.innerHTML = a.includes("<a") || k ? a.replace(/\n/g, "\n") : a;
  }
  function toggle(o) {
    win.classList.toggle("o", o);
    op.setAttribute("aria-expanded", o);
    if (o) {
      if (!M.children.length) add(OPEN, "b");
      $("#cbI").focus();
    } else op.focus();
  }
  op.onclick = () => toggle(!win.classList.contains("o"));
  $("#cbX").onclick = () => toggle(false);
  win.addEventListener("keydown", (e) => {
    if (e.key == "Escape") toggle(false);
  });
  $$("#cbQ .chip").forEach(
    (b) => (b.onclick = () => ask(b.textContent, b.dataset.k)),
  );
  $("#cbF").onsubmit = (e) => {
    e.preventDefault();
    const i = $("#cbI"),
      v = i.value.trim();
    if (v) {
      i.value = "";
      ask(v);
    }
  };
})();
