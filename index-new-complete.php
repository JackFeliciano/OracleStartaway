<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Startaway — Build your structure</title>
    <meta name="description"
        content="Build a compliant multi-entity structure across jurisdictions. Transparent annual cost and timelines. Includes free consulting with a Tax Planner." />
    
    <!-- Preconnect to Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <!-- Jost Font -->
    <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="assets/styles.css" />
</head>

<body>
    <header class="header" id="top">
        <div class="container header__inner">
            <!--<a class="logo" href="#top">Startaway</a>-->

            <nav class="nav">
                <a href="#builder">Product</a>
                <a href="#includes">What's included</a>
                <a href="#how-it-works">How it works</a>
                <a href="#blog">Blog</a>
                <a href="#contact">Contact</a>
            </nav>

            <div class="header__cta">
                <a class="link" href="/login">Sign in</a>
                <a class="btn btn--primary" href="#builder">Build my structure</a>
            </div>
        </div>
    </header>

    <main id="app">
        <!-- Section 1: Hero -->
        <section class="section section--hero section--image" id="hero">
            <video class="hero-video" autoplay muted loop playsinline>
                <source src="assets/videos/bg_business_i18n.mp4" type="video/mp4">
            </video>
            <div class="hero-video-fallback"></div>
            
            <div class="container hero-container">
                <div class="grid grid-2">
                    <div>
                        <h1 class="h1">Build a compliant multi-entity structure—across jurisdictions—in one platform.</h1>
                        <p class="subhead">Choose a base entity, add compatible layers and optional overlays, see total annual cost and estimated timelines instantly—within the law. Every plan includes free consulting with a Tax Planner.<br><br></p>
                        <div class="button-group">
                            <a href="#builder" class="btn btn--primary btn--large">Build my structure</a>
                            <a href="#how-it-works" class="btn btn--ghost btn--large">See how it works</a>
                        </div>
                    </div>
                    <div style="display:flex; align-items:center; justify-content:center;">
                        <a href="#builder" style="display:inline-block; transition: all 0.3s ease;">
                            <img src="assets/images/logo-startaway.png" alt="Startaway - Build your structure" 
                                 style="max-width:320px; width:100%; height:auto; display:block;" 
                                 onmouseover="this.style.transform='scale(1.1) translateY(-12px)'" 
                                 onmouseout="this.style.transform='scale(1) translateY(0)'">
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 2: Trust Band -->
        <section class="section section--trust-band" id="trustband">
            <div class="container">
                <div class="trust-band-grid">
                    <div class="trust-band-item">
                        <div class="trust-band-number" data-target="1436">0</div>
                        <div class="trust-band-label">Clients</div>
                    </div>
                    <div class="trust-band-item">
                        <div class="trust-band-number" data-target="112">0</div>
                        <div class="trust-band-label">Partners</div>
                    </div>
                    <div class="trust-band-item">
                        <div class="trust-band-number" data-target="28">0</div>
                        <div class="trust-band-label">Countries</div>
                    </div>
                    <div class="trust-band-item">
                        <div class="trust-band-number" data-target="36">0</div>
                        <div class="trust-band-label">Models</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 3: Overview -->
        <section class="section section--overview" id="overview">
            <div class="container">
                <div class="text-center" style="margin-bottom:32px">
                    <div class="small" style="text-transform:uppercase;letter-spacing:0.1em;font-weight:600;color:var(--secondary)">Trusted by founders worldwide</div>
                </div>
                
                <div class="grid grid-3" style="margin-bottom:48px;">
                    <div class="card card--reveal" style="animation-delay:0.1s;text-align:center;position:relative">
                        <div class="card-id">1</div>
                        <div class="icon-box" style="margin:0 auto 16px;width:48px;height:48px">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                <polyline points="22 4 12 14.01 9 11.01"/>
                            </svg>
                        </div>
                        <div style="font-weight:700;font-size:15px">We file for you (BOI/FBAR & similar where applicable)</div>
                    </div>
                    
                    <div class="card card--reveal" style="animation-delay:0.2s;text-align:center;position:relative">
                        <div class="card-id">2</div>
                        <div class="icon-box" style="margin:0 auto 16px;width:48px;height:48px">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                                <line x1="1" y1="10" x2="23" y2="10"></line>
                            </svg>
                        </div>
                        <div style="font-weight:700;font-size:15px">Government fees included (every jurisdiction)</div>
                    </div>
                    
                    <div class="card card--reveal" style="animation-delay:0.3s;text-align:center;position:relative">
                        <div class="card-id">3</div>
                        <div class="icon-box" style="margin:0 auto 16px;width:48px;height:48px">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <div style="font-weight:700;font-size:15px">Registered agents / secretaries</div>
                    </div>
                    
                    <div class="card card--reveal" style="animation-delay:0.4s;text-align:center;position:relative">
                        <div class="card-id">4</div>
                        <div class="icon-box" style="margin:0 auto 16px;width:48px;height:48px">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M9 11l3 3L22 4"></path>
                                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                            </svg>
                        </div>
                        <div style="font-weight:700;font-size:15px">Tax preparers + ongoing compliance</div>
                    </div>
                    
                    <div class="card card--reveal" style="animation-delay:0.5s;text-align:center;position:relative">
                        <div class="card-id">5</div>
                        <div class="icon-box" style="margin:0 auto 16px;width:48px;height:48px">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            </svg>
                        </div>
                        <div style="font-weight:700;font-size:15px">Support in your language</div>
                    </div>
                </div>
                
                <div class="text-center" style="margin-top:48px">
                    <div class="small" style="text-transform:uppercase;letter-spacing:0.1em;font-weight:600;color:var(--secondary);margin-bottom:24px">What We Offer</div>
                </div>
                
                <div class="grid grid-3" style="margin-top:24px">
                    <div class="card card--reveal" style="animation-delay:0.6s;text-align:center;position:relative">
                        <div class="card-id">6</div>
                        <div class="icon-box icon-box--primary" style="margin:0 auto 16px;width:48px;height:48px">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"/>
                                <path d="M12 6v6l4 2"/>
                            </svg>
                        </div>
                        <div style="font-weight:700;font-size:14px;line-height:1.4">Multi-jurisdiction: US, UK, Estonia, Hong Kong, Canada, Nevis</div>
                    </div>
                    
                    <div class="card card--reveal" style="animation-delay:0.7s;text-align:center;position:relative">
                        <div class="card-id">7</div>
                        <div class="icon-box icon-box--primary" style="margin:0 auto 16px;width:48px;height:48px">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"/>
                                <path d="M12 6v6l4 2"/>
                            </svg>
                        </div>
                        <div style="font-weight:700;font-size:14px;line-height:1.4">Formation + maintenance: filings, renewals, and tax preparation support</div>
                    </div>
                    
                    <div class="card card--reveal" style="animation-delay:0.8s;text-align:center;position:relative">
                        <div class="card-id">8</div>
                        <div class="icon-box icon-box--primary" style="margin:0 auto 16px;width:48px;height:48px">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"/>
                                <path d="M12 6v6l4 2"/>
                            </svg>
                        </div>
                        <div style="font-weight:700;font-size:14px;line-height:1.4">Clear outputs: price breakdown + registration/TIN readiness estimates</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 4: How It Works -->
        <section class="section" id="how-it-works">
            <div class="container">
                <div class="section-header">
                    <div class="accent-bar accent-bar--center"></div>
                    <h2 class="h2">From idea to operating structure—without guesswork.</h2>
                </div>
                <div class="grid grid-3" style="margin-top:48px">
                    <div class="card card--reveal" style="animation-delay:0.1s;text-align:center;position:relative">
                        <div class="step-number" style="margin:0 auto 20px">1</div>
                        <div style="font-weight:800;font-size:18px;margin-bottom:12px">Pick a base</div>
                        <div class="small">Start where your core business activity fits best.</div>
                    </div>
                    
                    <div class="card card--reveal" style="animation-delay:0.2s;text-align:center;position:relative">
                        <div class="step-number" style="margin:0 auto 20px">2</div>
                        <div style="font-weight:800;font-size:18px;margin-bottom:12px">Add a layer (optional)</div>
                        <div class="small">Only compatible jurisdictions appear—no invalid combinations.</div>
                    </div>
                    
                    <div class="card card--reveal" style="animation-delay:0.3s;text-align:center;position:relative">
                        <div class="step-number" style="margin:0 auto 20px">3</div>
                        <div style="font-weight:800;font-size:18px;margin-bottom:12px">Add an overlay (optional)</div>
                        <div class="small">Privacy-first or shared-investment overlays, when appropriate.</div>
                    </div>
                </div>
                <div style="margin-top:48px;text-align:center">
                    <a class="btn btn--primary btn--large" href="#builder">Build my structure</a>
                </div>
            </div>
        </section>

        <!-- Section 5: Structure Builder -->
        <section class="section section--orange" id="builder">
            <div class="container">
                <div class="section-header">
                    <div class="accent-bar accent-bar--center"></div>
                    <h2 class="h2">Structure Builder</h2>
                    <p class="p">Select your entities and instantly see total annual cost + timelines. Then confirm with a free consult with a Tax Planner.</p>
                </div>
                <div id="builderMount"></div>
            </div>
        </section>

        <!-- Section 6: Presets -->
        <section class="section" id="presets">
            <div class="container">
                <h2 class="h2">Popular starting points</h2>
                <p class="p">Start with a common pattern—then refine it in the Builder.</p>
                <div class="grid grid-3" style="margin-top:24px">
                    <div class="card" style="position:relative">
                        <div class="card-id">1</div>
                        <div style="font-weight:800;padding-left:32px">Lean global services</div>
                        <div class="small" style="margin-top:8px">Load this as a starting point.</div>
                        <div style="margin-top:12px">
                            <button class="btn" onclick="loadPreset('US-LLC-NM')">Load preset</button>
                        </div>
                    </div>
                    
                    <div class="card" style="position:relative">
                        <div class="card-id">2</div>
                        <div style="font-weight:800;padding-left:32px">EU-facing digital ops</div>
                        <div class="small" style="margin-top:8px">Load this as a starting point.</div>
                        <div style="margin-top:12px">
                            <button class="btn" onclick="loadPreset('EE-PLC-OU')">Load preset</button>
                        </div>
                    </div>
                    
                    <div class="card" style="position:relative">
                        <div class="card-id">3</div>
                        <div style="font-weight:800;padding-left:32px">Partnership-led operations</div>
                        <div class="small" style="margin-top:8px">Load this as a starting point.</div>
                        <div style="margin-top:12px">
                            <button class="btn" onclick="loadPreset('UK-LLP-EN')">Load preset</button>
                        </div>
                    </div>
                    
                    <div class="card" style="position:relative">
                        <div class="card-id">4</div>
                        <div style="font-weight:800;padding-left:32px">APAC trading baseline</div>
                        <div class="small" style="margin-top:8px">Load this as a starting point.</div>
                        <div style="margin-top:12px">
                            <button class="btn" onclick="loadPreset('HK-LTD-PT')">Load preset</button>
                        </div>
                    </div>
                    
                    <div class="card" style="position:relative">
                        <div class="card-id">5</div>
                        <div style="font-weight:800;padding-left:32px">MSB assessment path</div>
                        <div class="small" style="margin-top:8px">Load this as a starting point.</div>
                        <div style="margin-top:12px">
                            <button class="btn" onclick="loadPreset('US-MSB-MT')">Load preset</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 7: What's Included -->
        <section class="section section--navy section--image" id="includes" style="background-image:url('assets/images/pattern-wave.jpg')">
            <div class="container">
                <div class="section-header">
                    <div class="accent-bar accent-bar--center"></div>
                    <h2 class="h2">What's included (formation + ongoing compliance)</h2>
                    <p class="p">Clear deliverables for formation and maintenance—handled end-to-end, within the law.</p>
                    <div class="small">Scope depends on jurisdiction and activity; your Structure Summary shows exactly what applies.</div>
                </div>
                <div id="includesMount" style="margin-top:48px"></div>
                <div style="margin-top:48px;text-align:center">
                    <a class="btn btn--primary btn--large" href="#builder">Build my structure</a>
                </div>
            </div>
        </section>

        <!-- Section 8: Why Startaway -->
        <section class="section" id="why">
            <div class="container">
                <div class="section-header">
                    <div class="accent-bar accent-bar--center"></div>
                    <h2 class="h2">A software-led way to manage multi-entity structures.</h2>
                </div>
                <div class="grid grid-2" style="margin-top:48px">
                    <div class="card card--reveal" style="animation-delay:0.1s;position:relative">
                        <div class="card-id">1</div>
                        <div class="icon-box icon-box--primary" style="width:56px;height:56px;margin-bottom:20px">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                <polyline points="22 4 12 14.01 9 11.01"/>
                            </svg>
                        </div>
                        <div style="font-weight:800;font-size:20px;margin-bottom:12px">Built for multi-entity reality</div>
                        <div class="small">Base + layers + overlays—managed in one place.</div>
                    </div>
                    
                    <div class="card card--reveal" style="animation-delay:0.2s;position:relative">
                        <div class="card-id">2</div>
                        <div class="icon-box icon-box--primary" style="width:56px;height:56px;margin-bottom:20px">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                <polyline points="22 4 12 14.01 9 11.01"/>
                            </svg>
                        </div>
                        <div style="font-weight:800;font-size:20px;margin-bottom:12px">Transparent cost & timelines</div>
                        <div class="small">See breakdowns and readiness estimates before you commit.</div>
                    </div>
                    
                    <div class="card card--reveal" style="animation-delay:0.3s;position:relative">
                        <div class="card-id">3</div>
                        <div class="icon-box icon-box--primary" style="width:56px;height:56px;margin-bottom:20px">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                <polyline points="22 4 12 14.01 9 11.01"/>
                            </svg>
                        </div>
                        <div style="font-weight:800;font-size:20px;margin-bottom:12px">Compliance-first, within the law</div>
                        <div class="small">We prioritize filings, documentation, and ongoing obligations.</div>
                    </div>
                    
                    <div class="card card--reveal" style="animation-delay:0.4s;position:relative">
                        <div class="card-id">4</div>
                        <div class="icon-box icon-box--primary" style="width:56px;height:56px;margin-bottom:20px">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                <polyline points="22 4 12 14.01 9 11.01"/>
                            </svg>
                        </div>
                        <div style="font-weight:800;font-size:20px;margin-bottom:12px">Ongoing maintenance</div>
                        <div class="small">Renewals, tax prep support, and admin handled systematically.</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 9: FAQ -->
        <section class="section section--orange" id="faq">
            <div class="container">
                <div class="section-header">
                    <div class="accent-bar accent-bar--center"></div>
                    <h2 class="h2">FAQs</h2>
                </div>
                <div class="grid" style="margin-top:48px;max-width:900px;margin-left:auto;margin-right:auto">
                    <div class="card card--reveal" style="animation-delay:0.1s;position:relative">
                        <div class="card-id">Q1</div>
                        <div style="font-weight:800;font-size:18px;margin-bottom:12px;color:var(--primary);padding-left:32px">Is this legal?</div>
                        <div class="small">Yes. We support compliant structuring within the law. Fit depends on your facts, jurisdictions, and activity.</div>
                    </div>
                    
                    <div class="card card--reveal" style="animation-delay:0.15s;position:relative">
                        <div class="card-id">Q2</div>
                        <div style="font-weight:800;font-size:18px;margin-bottom:12px;color:var(--primary);padding-left:32px">Do you guarantee bank account approval?</div>
                        <div class="small">No—banks decide. We provide end-to-end support and documentation guidance.</div>
                    </div>
                    
                    <div class="card card--reveal" style="animation-delay:0.2s;position:relative">
                        <div class="card-id">Q3</div>
                        <div style="font-weight:800;font-size:18px;margin-bottom:12px;color:var(--primary);padding-left:32px">How long does it take?</div>
                        <div class="small">Your Builder shows estimates in business days. We also show two checkpoints: registration readiness and TIN readiness.</div>
                    </div>
                    
                    <div class="card card--reveal" style="animation-delay:0.25s;position:relative">
                        <div class="card-id">Q4</div>
                        <div style="font-weight:800;font-size:18px;margin-bottom:12px;color:var(--primary);padding-left:32px">What do I need to start?</div>
                        <div class="small">A short intake, KYC documents, and clarity on your business activity and counterparties.</div>
                    </div>
                    
                    <div class="card card--reveal" style="animation-delay:0.3s;position:relative">
                        <div class="card-id">Q5</div>
                        <div style="font-weight:800;font-size:18px;margin-bottom:12px;color:var(--primary);padding-left:32px">Do you file compliance reports?</div>
                        <div class="small">Yes—we file for you where applicable (e.g., FinCEN BOI, FBAR and similar).</div>
                    </div>
                </div>
                <div style="margin-top:48px;text-align:center">
                    <a class="btn btn--primary btn--large" href="#builder">Build my structure</a>
                    <div class="small" style="margin-top:16px">Includes free consulting with a Tax Planner</div>
                </div>
            </div>
        </section>

        <!-- Section 10: Blog -->
        <section class="section" id="blog">
            <div class="container">
                <h2 class="h2">From the blog</h2>
                <div class="grid grid-3" style="margin-top:24px">
                    <a class="card" href="/blog/post-1" style="position:relative">
                        <div class="card-id">1</div>
                        <div class="small" style="margin-bottom:8px;padding-left:32px">Structures</div>
                        <div style="font-weight:800">Post title #1</div>
                        <div class="small" style="margin-top:8px">One sentence teaser that stays compliance-first.</div>
                    </a>
                    
                    <a class="card" href="/blog/post-2" style="position:relative">
                        <div class="card-id">2</div>
                        <div class="small" style="margin-bottom:8px;padding-left:32px">Compliance</div>
                        <div style="font-weight:800">Post title #2</div>
                        <div class="small" style="margin-top:8px">One sentence teaser focused on timelines and process.</div>
                    </a>
                    
                    <a class="card" href="/blog/post-3" style="position:relative">
                        <div class="card-id">3</div>
                        <div class="small" style="margin-bottom:8px;padding-left:32px">Accounting</div>
                        <div style="font-weight:800">Post title #3</div>
                        <div class="small" style="margin-top:8px">One sentence teaser about maintaining multi-entity operations.</div>
                    </a>
                </div>
                <div style="margin-top:24px">
                    <a class="btn" href="/blog">View all posts</a>
                </div>
            </div>
        </section>

        <!-- Section 11: Contact -->
        <section class="section section--navy section--image" id="contact" style="position:relative;background-image:url('assets/images/contact-bg.jpg')">
            <div class="container">
                <div class="grid grid-2">
                    <div>
                        <h2 class="h2">Contact</h2>
                        <p class="p">Send a message—reply within 1–2 business days.</p>
                        <div class="small">Prefer to start with a plan? Use the Builder and we'll schedule your free consult with a Tax Planner.</div>
                    </div>
                    <div class="card">
                        <div id="contactMount"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 12: About -->
        <section class="section" id="about">
            <div class="container">
                <h2 class="h2">About Startaway</h2>
                <p class="p">Startaway was built for founders and operators running across borders—who need clear structures, transparent costs, and a compliance-first way to stay on track. We combine a software-led platform with hands-on support, so your structure is formed correctly and maintained responsibly.</p>
                <a class="btn btn--primary" href="#builder">Build my structure</a>
                <div class="small" style="margin-top:8px">Includes free consulting with a Tax Planner</div>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container footer__inner">
            <div class="footer__col">
                <div class="footer__brand">
                    <img src="assets/images/logo-startaway.png" alt="Startaway" class="footer__logo">
                    <div class="footer__tagline">Build your global business structure</div>
                </div>
            </div>
            <div class="footer__col">
                <div class="footer__title">Product</div>
                <a href="#builder">Structure Builder</a>
                <a href="#includes">What's included</a>
                <a href="#how-it-works">How it works</a>
            </div>
            <div class="footer__col">
                <div class="footer__title">Company</div>
                <a href="#about">About</a>
                <a href="#blog">Blog</a>
                <a href="#contact">Contact</a>
            </div>
            <div class="footer__col">
                <div class="footer__title">Legal</div>
                <a href="/terms">Terms</a>
                <a href="/privacy">Privacy</a>
                <a href="/disclosures">Disclosures</a>
            </div>
        </div>
    </footer>

    <!-- Only load builder script for the interactive structure builder -->
    <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
    <script type="module" src="assets/builder.js"></script>
    
    <!-- Rolling numbers animation -->
    <script>
        // Intersection Observer for rolling numbers animation
        const animateNumber = (element, target, duration = 2000) => {
            const start = 0;
            const increment = target / (duration / 16);
            let current = start;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    element.textContent = target.toLocaleString();
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(current).toLocaleString();
                }
            }, 16);
        };
        
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px'
        };
        
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const numbers = entry.target.querySelectorAll('.trust-band-number');
                    numbers.forEach(num => {
                        const target = parseInt(num.getAttribute('data-target'));
                        animateNumber(num, target);
                    });
                    observer.unobserve(entry.target);
                }
            });
        };
        
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                const trustBandSection = document.getElementById('trustband');
                if (trustBandSection) {
                    observer.observe(trustBandSection);
                }
            });
        } else {
            const trustBandSection = document.getElementById('trustband');
            if (trustBandSection) {
                observer.observe(trustBandSection);
            }
        }
        
        // Preset loader stub
        function loadPreset(presetId) {
            // This would be handled by builder.js
            document.getElementById('builder').scrollIntoView({ behavior: 'smooth' });
        }
    </script>
</body>

</html>
