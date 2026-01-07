// Structure Builder - Recreated to match original design
// All other content is now pure HTML

const state = {
    baseId: null,
    layerId: null,
    overlayId: null
};

let builderConfig = null;

// Fetch builder config
async function init() {
    console.log('Builder initializing...');
    const mount = document.getElementById('builderMount');
    
    if (!mount) {
        console.error('builderMount element not found!');
        return;
    }
    
    console.log('builderMount found, fetching config...');
    
    try {
        const response = await fetch('data/structureBuilderConfig.json');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        builderConfig = await response.json();
        console.log('Config loaded successfully:', builderConfig);
        renderBuilder();
    } catch (error) {
        console.error('Failed to load builder config:', error);
        mount.innerHTML = '<div class="card center"><p>Failed to load builder. Please refresh the page.</p><p class="small text-muted">' + error.message + '</p></div>';
    }
}

function renderBuilder() {
    const mount = document.querySelector("#builderMount");
    if (!mount || !builderConfig) return;
    
    const baseStep = builderConfig.steps.step1Base;
    const layerStep = builderConfig.steps.step2Layer;
    const overlayStep = builderConfig.steps.step3Overlay;
    const allowedLayers = getAllowedLayerIds(state.baseId);
    
    if (state.layerId && !allowedLayers.includes(state.layerId)) {
        state.layerId = null;
    }
    
    const totals = calcTotals();
    
    mount.innerHTML = `
    <div class="builder">
      <div class="grid" style="gap:14px">
        ${renderStep("base", baseStep.title, baseStep.subtitle, baseStep.options, state.baseId)}
        ${renderLayerStep(layerStep, allowedLayers)}
        ${renderStep("overlay", overlayStep.title, overlayStep.subtitle, overlayStep.options, state.overlayId, true)}
      </div>
      <div class="card sticky">
        ${state.baseId ? `
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
        ` : `
        <div class="center" style="padding:40px 20px">
          <div style="font-size:48px;margin-bottom:16px">👈</div>
          <div style="font-weight:900;margin-bottom:8px">Build your structure</div>
          <div class="small text-muted">Select a base entity to get started</div>
        </div>
        `}
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
    // If no base is selected, return empty totals
    if (!state.baseId) {
        return {
            totalAnnual: 0,
            breakdown: [],
            timelines: { registrationReadiness: 0, tinReadiness: 0 }
        };
    }
    
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

// Helper functions
function escapeHtml(unsafe) {
    if (!unsafe) return '';
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function fmt(num) {
    return num.toLocaleString();
}

// Initialize on load
document.addEventListener('DOMContentLoaded', init);
