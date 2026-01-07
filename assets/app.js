const DATA = {
    builderConfigUrl: "data/structureBuilderConfig.json",
    homepageUrl: "data/homepageContent.json",

    // For static sites: set your form endpoint here if you have one.
    // If empty, we fall back to mailto.
    contactPostUrl: "" // e.g. "https://formspree.io/f/xxxx" or your own endpoint
};

let builderConfig = null;
let homepage = null;

const state = {
    baseId: null,
    layerId: null,
    overlayId: null,
    includesTab: "tab-formation"
};

init();

async function init() {
    [builderConfig, homepage] = await Promise.all([
        fetchJson(DATA.builderConfigUrl),
        fetchJson(DATA.homepageUrl)
    ]);

    renderHomepage(homepage);
    wireGlobalCtas();

    // Initialize builder with first base option
    const base0 = builderConfig.steps.step1Base.options[0];
    state.baseId = base0.id;
    state.layerId = null;
    state.overlayId = null;

    renderBuilder();
    renderIncludes();
    renderContact();
}

async function fetchJson(url) {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`Failed to load ${url}`);
    return await res.json();
}

function renderHomepage(homepage) {
    const app = document.querySelector("#app");
    app.innerHTML = "";

    for (const s of homepage.sections) {
        if (s.type === "hero") app.appendChild(sectionHero(s));
        else if (s.type === "trustbar") app.appendChild(sectionTrustbar(s));
        else if (s.type === "steps") app.appendChild(sectionHowItWorks(s));
        else if (s.type === "product_builder") app.appendChild(sectionBuilderShell(s));
        else if (s.type === "presets") app.appendChild(sectionPresets(s));
        else if (s.type === "tabs") app.appendChild(sectionIncludesShell(s));
        else if (s.type === "tiles") app.appendChild(sectionTiles(s));
        else if (s.type === "faq") app.appendChild(sectionFaq(s));
        else if (s.type === "blog_teaser") app.appendChild(sectionBlog(s));
        else if (s.type === "contact_form") app.appendChild(sectionContactShell(s));
        else if (s.type === "about_story") app.appendChild(sectionAbout(s));
        // footer is in index.html
    }
}

function wireGlobalCtas() {
    // nothing required; anchor links already work
}

/* -------------------- Sections -------------------- */

function sectionHero(s) {
    const el = wrapSection("hero", "section section--hero section--image");
    
    // Create video background element
    const videoHTML = `
      <video autoplay loop muted playsinline class="hero-video">
        <source src="assets/videos/bg_business_i18n.mp4" type="video/mp4">
      </video>
      <div class="hero-video-fallback"></div>
    `;
    
    el.innerHTML = `
    <div class="section-id">Section 1: Hero</div>
    ${videoHTML}
    <div class="container" style="position:relative;z-index:2">
      <div class="grid grid-2" style="align-items:center;gap:48px">
        <div class="reveal">
          <div class="accent-bar"></div>
          <h1 class="h1" style="color:white">${escapeHtml(s.h1)}</h1>
          <p class="p" style="color:rgba(255,255,255,0.9)">${escapeHtml(s.subhead)}</p>
          <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;margin-top:32px">
            <a class="btn btn--primary btn--large" href="${s.ctaPrimary.href}">${escapeHtml(s.ctaPrimary.label)}</a>
            <a class="btn btn--ghost" style="border-color:white;color:white" href="${s.ctaSecondary.href}">${escapeHtml(s.ctaSecondary.label)}</a>
          </div>
          <div class="small" style="margin-top:12px;color:rgba(255,255,255,0.8)">${escapeHtml(s.ctaPrimary.helper || "")}</div>
          <div class="small" style="margin-top:16px;color:rgba(255,255,255,0.7)">${escapeHtml(s.finePrint || "")}</div>
        </div>
        <div class="reveal" style="animation-delay:0.2s">
          <div style="padding:60px 40px;display:flex;align-items:center;justify-content:center">
            <a href="#builder" style="display:block;text-align:center">
              <img src="assets/images/logo-startaway.png" alt="Startaway - Build your structure" style="width:100%;max-width:280px;height:auto;transition:transform 0.3s ease;filter:drop-shadow(0 8px 24px rgba(255, 153, 0, 0.6))" onmouseover="this.style.transform='scale(1.1) translateY(-12px)';this.style.filter='drop-shadow(0 12px 32px rgba(255, 153, 0, 0.8))'" onmouseout="this.style.transform='scale(1) translateY(0)';this.style.filter='drop-shadow(0 8px 24px rgba(255, 153, 0, 0.6))'">
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
    return el;
}

function sectionTrustbar(s) {
    const el = wrapSection("trustbar", "section section--navy section--pattern");
    
    // Get hero bullets from homepage data
    const heroBullets = homepage?.sections?.find(sec => sec.type === "hero")?.bullets || [
        "Multi-jurisdiction: US, UK, Estonia, Hong Kong, Canada, Nevis",
        "Formation + maintenance: filings, renewals, and tax preparation support",
        "Clear outputs: price breakdown + registration/TIN readiness estimates"
    ];
    
    el.innerHTML = `
    <div class="section-id">Section 2: Trust Bar</div>
    <div class="container">
      <div class="text-center" style="margin-bottom:32px">
        <div class="small" style="text-transform:uppercase;letter-spacing:0.1em;font-weight:600;color:var(--secondary)">Trusted by founders worldwide</div>
      </div>
      <div class="grid grid-3">
        ${s.items.map((t, i) => `
          <div class="card reveal" style="animation-delay:${0.1 + i * 0.1}s;text-align:center;position:relative">
            <div class="card-id">${i + 1}</div>
            <div class="icon-box" style="margin:0 auto 16px;width:48px;height:48px">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <div style="font-weight:700;font-size:15px;color:white">${escapeHtml(t)}</div>
          </div>
        `).join("")}
      </div>
      <div class="text-center" style="margin-top:48px">
        <div class="small" style="text-transform:uppercase;letter-spacing:0.1em;font-weight:600;color:var(--secondary);margin-bottom:24px">What We Offer</div>
      </div>
      <div class="grid grid-3" style="margin-top:24px">
        ${heroBullets.map((bullet, i) => `
          <div class="card reveal" style="animation-delay:${0.1 + (s.items.length + i) * 0.1}s;text-align:center;position:relative">
            <div class="card-id">${s.items.length + i + 1}</div>
            <div class="icon-box icon-box--primary" style="margin:0 auto 16px;width:48px;height:48px">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <div style="font-weight:700;font-size:14px;color:white;line-height:1.4">${escapeHtml(bullet)}</div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
    return el;
}

function sectionHowItWorks(s) {
    const el = wrapSection("how-it-works", "section");
    el.innerHTML = `
    <div class="section-id">Section 3: How It Works</div>
    <div class="container">
      <div class="section-header">
        <div class="accent-bar accent-bar--center"></div>
        <h2 class="h2">${escapeHtml(s.title)}</h2>
      </div>
      <div class="grid grid-3" style="margin-top:48px">
        ${s.steps.map((st, i) => `
          <div class="card reveal" style="animation-delay:${0.1 + i * 0.1}s;text-align:center;position:relative">
            <div class="step-number" style="margin:0 auto 20px">${i + 1}</div>
            <div style="font-weight:800;font-size:18px;margin-bottom:12px">${escapeHtml(st.title)}</div>
            <div class="small">${escapeHtml(st.text)}</div>
          </div>
        `).join("")}
      </div>
      <div style="margin-top:48px;text-align:center">
        <a class="btn btn--primary btn--large" href="${s.cta.href}">${escapeHtml(s.cta.label)}</a>
      </div>
    </div>
  `;
    return el;
}

function sectionBuilderShell(s) {
    const el = wrapSection("builder", "section section--orange");
    el.innerHTML = `
    <div class="section-id">Section 4: Builder</div>
    <div class="container">
      <div class="section-header">
        <div class="accent-bar accent-bar--center"></div>
        <h2 class="h2">${escapeHtml(s.title)}</h2>
        <p class="p">${escapeHtml(s.subtitle)}</p>
      </div>
      <div id="builderMount"></div>
    </div>
  `;
    return el;
}

function sectionPresets(s) {
    const el = wrapSection("presets", "section");
    el.innerHTML = `
    <div class="section-id">Section 5: Presets</div>
    <div class="container">
      <h2 class="h2">${escapeHtml(s.title)}</h2>
      <p class="p">${escapeHtml(s.subtitle)}</p>
      <div class="grid grid-3" style="margin-top:14px">
        ${s.items.map((item, i) => `
          <div class="card" style="position:relative">
            <div class="card-id">${i + 1}</div>
            <div style="font-weight:800;padding-left:32px">${escapeHtml(item.title)}</div>
            <div class="small" style="margin-top:8px">Load this as a starting point.</div>
            <div style="margin-top:12px">
              <button class="btn" data-preset='${escapeHtml(JSON.stringify(item.prefill))}'>Load preset</button>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
    // wire clicks after insert
    setTimeout(() => {
        el.querySelectorAll("button[data-preset]").forEach(btn => {
            btn.addEventListener("click", () => {
                const prefill = JSON.parse(btn.getAttribute("data-preset"));
                state.baseId = prefill.base || state.baseId;
                state.layerId = prefill.layer || null;
                state.overlayId = prefill.overlay || null;
                renderBuilder();
                document.querySelector("#builder").scrollIntoView({ behavior: "smooth", block: "start" });
            });
        });
    }, 0);
    return el;
}

function sectionIncludesShell(s) {
    const el = wrapSection("includes", "section section--navy section--image");
    // Add subtle pattern background
    el.style.backgroundImage = "url('assets/images/pattern-wave.jpg')";
    el.innerHTML = `
    <div class="section-id">Section 6: What's Included</div>
    <div class="container">
      <div class="section-header">
        <div class="accent-bar accent-bar--center"></div>
        <h2 class="h2">${escapeHtml(s.title)}</h2>
        <p class="p">${escapeHtml(s.subtitle)}</p>
        <div class="small">${escapeHtml(s.helper || "")}</div>
      </div>
      <div id="includesMount" style="margin-top:48px"></div>
      <div style="margin-top:48px;text-align:center">
        <a class="btn btn--primary btn--large" href="${s.cta.href}">${escapeHtml(s.cta.label)}</a>
      </div>
    </div>
  `;
    return el;
}

function sectionTiles(s) {
    const el = wrapSection("why", "section");
    el.innerHTML = `
    <div class="section-id">Section 7: Why Startaway</div>
    <div class="container">
      <div class="section-header">
        <div class="accent-bar accent-bar--center"></div>
        <h2 class="h2">${escapeHtml(s.title)}</h2>
      </div>
      <div class="grid grid-2" style="margin-top:48px">
        ${s.tiles.map((t, i) => `
          <div class="card reveal" style="animation-delay:${0.1 + i * 0.1}s;position:relative">
            <div class="card-id">${i + 1}</div>
            <div class="icon-box icon-box--primary" style="width:56px;height:56px;margin-bottom:20px">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <div style="font-weight:800;font-size:20px;margin-bottom:12px">${escapeHtml(t.title)}</div>
            <div class="small">${escapeHtml(t.text)}</div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
    return el;
}

function sectionFaq(s) {
    const el = wrapSection("faq", "section section--orange");
    el.innerHTML = `
    <div class="section-id">Section 8: FAQ</div>
    <div class="container">
      <div class="section-header">
        <div class="accent-bar accent-bar--center"></div>
        <h2 class="h2">${escapeHtml(s.title)}</h2>
      </div>
      <div class="grid" style="margin-top:48px;max-width:900px;margin-left:auto;margin-right:auto">
        ${s.items.map((item, i) => `
          <div class="card reveal" style="animation-delay:${0.1 + i * 0.05}s;position:relative">
            <div class="card-id">Q${i + 1}</div>
            <div style="font-weight:800;font-size:18px;margin-bottom:12px;color:var(--primary);padding-left:32px">${escapeHtml(item.q)}</div>
            <div class="small">${escapeHtml(item.a)}</div>
          </div>
        `).join("")}
      </div>
      <div style="margin-top:48px;text-align:center">
        <a class="btn btn--primary btn--large" href="${s.cta.href}">${escapeHtml(s.cta.label)}</a>
        <div class="small" style="margin-top:16px">${escapeHtml(s.cta.helper || "")}</div>
      </div>
    </div>
  `;
    return el;
}

function sectionBlog(s) {
    const el = wrapSection("blog", "section");
    el.innerHTML = `
    <div class="section-id">Section 9: Blog</div>
    <div class="container">
      <h2 class="h2">${escapeHtml(s.title)}</h2>
      <div class="grid grid-3" style="margin-top:16px">
        ${s.posts.map((p, i) => `
          <a class="card" href="${p.href}" style="position:relative">
            <div class="card-id">${i + 1}</div>
            <div class="small" style="margin-bottom:8px;padding-left:32px">${escapeHtml(p.tag)}</div>
            <div style="font-weight:800">${escapeHtml(p.title)}</div>
            <div class="small" style="margin-top:8px">${escapeHtml(p.excerpt)}</div>
          </a>
        `).join("")}
      </div>
      <div style="margin-top:16px">
        <a class="btn" href="${s.cta.href}">${escapeHtml(s.cta.label)}</a>
      </div>
    </div>
  `;
    return el;
}

function sectionContactShell(s) {
    const el = wrapSection("contact", "section section--navy section--image");
    // Add background image for contact section
    el.style.backgroundImage = "url('assets/images/contact-bg.jpg')";
    el.innerHTML = `
    <div class="section-id">Section 10: Contact</div>
    <div class="container">
      <div class="grid grid-2">
        <div>
          <h2 class="h2">${escapeHtml(s.title)}</h2>
          <p class="p">${escapeHtml(s.subtitle)}</p>
          <div class="small">Prefer to start with a plan? Use the Builder and we’ll schedule your free consult with a Tax Planner.</div>
        </div>
        <div class="card">
          <div id="contactMount"></div>
        </div>
      </div>
    </div>
  `;
    return el;
}

function sectionAbout(s) {
    const el = wrapSection("about", "section");
    el.innerHTML = `
    <div class="section-id">Section 11: About</div>
    <div class="container">
      <h2 class="h2">${escapeHtml(s.title)}</h2>
      <p class="p">${escapeHtml(s.story)}</p>
      <a class="btn btn--primary" href="${s.cta.href}">${escapeHtml(s.cta.label)}</a>
      <div class="small" style="margin-top:8px">${escapeHtml(s.cta.helper || "")}</div>
    </div>
  `;
    return el;
}

function wrapSection(id, className) {
    const el = document.createElement("section");
    el.className = className || "section";
    el.id = id;
    return el;
}

/* -------------------- Builder render -------------------- */

function renderBuilder() {
    const mount = document.querySelector("#builderMount");
    if (!mount) return;

    const baseStep = builderConfig.steps.step1Base;
    const layerStep = builderConfig.steps.step2Layer;
    const overlayStep = builderConfig.steps.step3Overlay;

    const allowedLayers = getAllowedLayerIds(state.baseId);
    if (state.layerId && !allowedLayers.includes(state.layerId)) state.layerId = null;

    const totals = calcTotals();

    mount.innerHTML = `
    <div class="builder">
      <div class="grid" style="gap:14px">
        ${renderStep("base", baseStep.title, baseStep.subtitle, baseStep.options, state.baseId)}
        ${renderLayerStep(layerStep, allowedLayers)}
        ${renderStep("overlay", overlayStep.title, overlayStep.subtitle, overlayStep.options, state.overlayId, true)}
      </div>

      <div class="card sticky">
        <div class="small">Your structure</div>
        <div style="font-size:22px;font-weight:900;margin-top:6px">$${fmt(totals.totalAnnual)} <span class="small">/ year</span></div>

        <div class="small" style="margin-top:10px">Breakdown</div>
        <div class="kv">
          ${totals.breakdown.map(b => `<div><b>${escapeHtml(b.type)}</b>: ${escapeHtml(b.name)} — $${fmt(b.priceAnnual)}</div>`).join("")}
        </div>

        <hr class="sep" />

        <div class="small">Estimated timelines</div>
        <div class="kv" style="margin-top:8px">
          <div><b>Registration readiness</b>: ~${totals.timelines.registrationReadiness} business days</div>
          <div><b>TIN readiness</b>: ~${totals.timelines.tinReadiness} business days</div>
        </div>

        <div class="small" style="margin-top:10px">${escapeHtml(builderConfig.calculation.timelines.note)}</div>

        <hr class="sep" />

        <a class="btn btn--primary" style="width:100%" href="#contact">Build my structure</a>
        <div class="small" style="margin-top:10px">${escapeHtml(builderConfig.primaryCta.helper)}</div>

        <div class="small" style="margin-top:12px">${escapeHtml(builderConfig.complianceTone?.bankingDisclaimer || "")}</div>
      </div>
    </div>
  `;

    mount.querySelectorAll("[data-pick]").forEach(btn => {
        btn.addEventListener("click", () => {
            const type = btn.getAttribute("data-type");
            const id = btn.getAttribute("data-id");

            if (type === "base") {
                state.baseId = id;
                state.layerId = null;
            } else if (type === "layer") {
                state.layerId = (state.layerId === id) ? null : id;
            } else if (type === "overlay") {
                state.overlayId = (state.overlayId === id) ? null : id;
            }
            renderBuilder();
        });
    });
}

function renderStep(type, title, subtitle, options, selectedId, allowDeselect = false) {
    return `
    <div class="card">
      <div style="font-weight:900">${escapeHtml(title)}</div>
      <div class="small" style="margin-top:6px">${escapeHtml(subtitle || "")}</div>
      <div class="grid" style="margin-top:12px">
        ${options.map(o => optionCard(type, o, selectedId, { enabled: true, allowDeselect })).join("")}
      </div>
    </div>
  `;
}

function renderLayerStep(step, allowedIds) {
    const options = step.options;
    return `
    <div class="card">
      <div style="font-weight:900">${escapeHtml(step.title)}</div>
      <div class="small" style="margin-top:6px">${escapeHtml(step.subtitle || "")}</div>
      <div class="grid" style="margin-top:12px">
        ${options.map(o => {
        const enabled = allowedIds.includes(o.id);
        return optionCard("layer", o, state.layerId, { enabled, allowDeselect: true });
    }).join("")}
      </div>
      <div class="small" style="margin-top:10px">Only compatible layer options are selectable for your chosen base.</div>
    </div>
  `;
}

function optionCard(type, o, selectedId, { enabled, allowDeselect }) {
    const selected = (o.id === selectedId);
    const classes = ["card", "option", selected ? "option--selected" : ""].join(" ");
    const disabledStyle = enabled ? "" : "opacity:.45;cursor:not-allowed";

    const reg = o.timeline.registrationMax;
    const tin = o.timeline.tinMax;

    const match = (o.matchFor || []).slice(0, 2).join(" • ");

    const notice = (o.notices && o.notices.length) ? `<div class="small" style="margin-top:8px">${escapeHtml(o.notices[0])}</div>` : "";

    return `
    <div class="${classes}" style="${disabledStyle}"
         ${enabled ? `data-pick="1" data-type="${type}" data-id="${o.id}"` : ""}>
      <div class="option__top">
        <div>
          <div style="font-weight:900">${escapeHtml(o.publicName)}</div>
          <div class="small" style="margin-top:6px"><b>A match for:</b> ${escapeHtml(match || "—")}</div>
        </div>
        <div class="badge">$${fmt(o.priceAnnual)}/yr</div>
      </div>
      <div class="kv">
        <div><b>Registration</b>: ~${reg} business days</div>
        <div><b>TIN</b>: ~${tin} business days</div>
      </div>
      ${o.whyUsed ? `<div class="small" style="margin-top:10px">${escapeHtml(o.whyUsed)}</div>` : ""}
      ${notice}
      ${selected && allowDeselect ? `<div class="small" style="margin-top:10px">Selected (click again to remove)</div>` : ""}
    </div>
  `;
}

function getAllowedLayerIds(baseId) {
    const rules = builderConfig.steps.step2Layer.availabilityRules || [];
    const r = rules.find(x => (x.ifBaseIn || []).includes(baseId));
    return r ? r.allowLayerIn : [];
}

function calcTotals() {
    const base = find(builderConfig.steps.step1Base.options, state.baseId);
    const layer = state.layerId ? find(builderConfig.steps.step2Layer.options, state.layerId) : null;
    const overlay = state.overlayId ? find(builderConfig.steps.step3Overlay.options, state.overlayId) : null;

    const chosen = [base, layer, overlay].filter(Boolean);
    const totalAnnual = chosen.reduce((sum, x) => sum + x.priceAnnual, 0);

    const registrationReadiness = Math.max(...chosen.map(x => x.timeline.registrationMax));
    const tinReadiness = Math.max(...chosen.map(x => x.timeline.tinMax));

    return {
        totalAnnual,
        breakdown: chosen.map(x => ({ id: x.id, name: x.publicName, type: x.type, priceAnnual: x.priceAnnual })),
        timelines: { registrationReadiness, tinReadiness }
    };
}

function find(arr, id) {
    const x = arr.find(o => o.id === id);
    if (!x) throw new Error(`Missing id: ${id}`);
    return x;
}

/* -------------------- Includes + Contact -------------------- */

function renderIncludes() {
    const includes = homepage.sections.find(s => s.id === "includes");
    const mount = document.querySelector("#includesMount");
    if (!includes || !mount) return;

    const tabs = includes.tabs;
    const active = tabs.find(t => t.id === state.includesTab) || tabs[0];

    mount.innerHTML = `
    <div class="card">
      <div class="tabs">
        ${tabs.map(t => `
          <button class="tab ${t.id === active.id ? "tab--active" : ""}" data-tab="${t.id}">
            ${escapeHtml(t.label)}
          </button>
        `).join("")}
      </div>
      ${active.note ? `<div class="small" style="margin-bottom:10px">${escapeHtml(active.note)}</div>` : ""}
      <ul class="list">
        ${active.items.map(it => `<li>${escapeHtml(it)}</li>`).join("")}
      </ul>
    </div>
  `;

    mount.querySelectorAll("button[data-tab]").forEach(btn => {
        btn.addEventListener("click", () => {
            state.includesTab = btn.getAttribute("data-tab");
            renderIncludes();
        });
    });
}

function renderContact() {
    const s = homepage.sections.find(x => x.id === "contact");
    const mount = document.querySelector("#contactMount");
    if (!s || !mount) return;

    mount.innerHTML = `
    <form id="contactForm">
      <div class="grid" style="gap:10px">
        <input class="card" style="padding:12px" name="fullName" placeholder="Full name" required />
        <input class="card" style="padding:12px" name="email" type="email" placeholder="Email" required />
        <select class="card" style="padding:12px" name="buildSize" required>
          <option value="" selected disabled>What are you building?</option>
          <option>Single entity</option>
          <option>2–3 entities</option>
          <option>4–5 entities</option>
          <option>Not sure</option>
        </select>
        <input class="card" style="padding:12px" name="jurisdictions" placeholder="Jurisdictions of interest (optional)" />
        <textarea class="card" style="padding:12px;min-height:110px" name="message" placeholder="Message" required></textarea>

        <label class="small" style="display:flex;gap:10px;align-items:flex-start">
          <input type="checkbox" name="wantTaxPlanner" />
          <span>I want the free consult with a Tax Planner</span>
        </label>

        <button class="btn btn--primary" type="submit">Send message</button>
        <div id="contactStatus" class="small"></div>
      </div>
    </form>
  `;

    const form = mount.querySelector("#contactForm");
    const status = mount.querySelector("#contactStatus");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        status.textContent = "Sending…";

        const payload = Object.fromEntries(new FormData(form).entries());

        // Static-site mode:
        // 1) If contactPostUrl is set, POST JSON there.
        // 2) Otherwise fall back to mailto.
        try {
            if (DATA.contactPostUrl) {
                const res = await fetch(DATA.contactPostUrl, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload)
                });
                if (!res.ok) throw new Error("Form endpoint returned an error.");
                status.textContent = "Thanks—your message is in. We’ll reply within 1–2 business days.";
                form.reset();
            } else {
                const subject = encodeURIComponent("Startaway — Contact request");
                const body = encodeURIComponent(JSON.stringify(payload, null, 2));
                window.location.href = `mailto:hello@startaway.app?subject=${subject}&body=${body}`;
                status.textContent = "Opening your email client…";
            }
        } catch (err) {
            status.textContent = "Something went wrong sending your message. Please try again or email hello@startaway.app.";
        }
    });
}

/* -------------------- utils -------------------- */

function fmt(n) {
    return new Intl.NumberFormat("en-US").format(n);
}

function escapeHtml(s) {
    return String(s ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}