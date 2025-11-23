/* Basic reset */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
}

body {
  font-family: "Poppins", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: radial-gradient(circle at top, #1e1b4b 0, #050816 50%, #020617 100%);
  color: #f9fafb;
  line-height: 1.6;
}

/* Utility */
.container {
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.25rem;
}

.section {
  padding: 4rem 0;
}

.section-alt {
  background: radial-gradient(circle at top, #0b1120 0, #020617 60%, #000 100%);
}

.section-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.section-header h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.section-header p {
  color: #9ca3af;
}

/* HEADER */
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(2, 6, 23, 0.8);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(148, 163, 184, 0.15);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  letter-spacing: 0.04em;
}

.logo-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.1rem;
  height: 2.1rem;
  border-radius: 999px;
  background: linear-gradient(135deg, #f97316, #facc15);
  color: #020617;
  font-weight: 700;
  font-size: 0.9rem;
}

.logo-text {
  font-size: 0.95rem;
}

.main-nav {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.main-nav a {
  font-size: 0.9rem;
  text-decoration: none;
  color: #e5e7eb;
  transition: color 0.2s ease, transform 0.2s ease;
}

.main-nav a:hover {
  color: #f97316;
  transform: translateY(-1px);
}

.nav-cta {
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  border: 1px solid rgba(249, 115, 22, 0.6);
}

/* Mobile nav toggle */
.nav-toggle {
  display: none;
  flex-direction: column;
  width: 2rem;
  height: 2rem;
  justify-content: center;
  gap: 0.25rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.nav-toggle span {
  display: block;
  height: 2px;
  width: 100%;
  background: #e5e7eb;
  border-radius: 999px;
}

/* HERO */
.hero {
  padding: 4.5rem 0 3.5rem;
}

.hero-inner {
  display: grid;
  grid-template-columns: minmax(0, 1.6fr) minmax(0, 1.2fr);
  gap: 2.5rem;
  align-items: center;
}

.hero-text h1 {
  font-size: 2.4rem;
  line-height: 1.1;
  margin-bottom: 1rem;
}

.hero-text p {
  color: #d1d5db;
  margin-bottom: 1rem;
}

.hero-bullets {
  list-style: none;
  margin-bottom: 1.8rem;
}

.hero-bullets li {
  position: relative;
  padding-left: 1.3rem;
  margin-bottom: 0.35rem;
  font-size: 0.95rem;
}

.hero-bullets li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.45rem;
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 999px;
  background: linear-gradient(135deg, #f97316, #facc15);
}

.hero-cta-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1.3rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid transparent;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease,
    border-color 0.15s ease, color 0.15s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #f97316, #facc15);
  color: #111827;
  box-shadow: 0 14px 40px rgba(249, 115, 22, 0.4);
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 18px 48px rgba(249, 115, 22, 0.55);
}

.btn-ghost {
  border-color: rgba(148, 163, 184, 0.4);
  background: rgba(15, 23, 42, 0.7);
  color: #e5e7eb;
}

.btn-ghost:hover {
  border-color: rgba(249, 115, 22, 0.7);
  color: #f97316;
}

.btn-paypal {
  background: #ffc439;
  color: #111827;
  font-weight: 600;
}

.btn-paypal:hover {
  background: #ffb020;
  transform: translateY(-1px);
}

.hero-preview-card {
  background: radial-gradient(circle at top left, rgba(249, 115, 22, 0.25), rgba(15, 23, 42, 0.9));
  border-radius: 1.5rem;
  border: 1px solid rgba(148, 163, 184, 0.3);
  box-shadow: 0 24px 80px rgba(15, 23, 42, 0.9);
  padding: 1.25rem;
}

.hero-preview-media img {
  width: 100%;
  display: block;
  border-radius: 1rem;
}

.hero-preview-caption {
  margin-top: 0.9rem;
}

.hero-preview-caption .tag {
  display: inline-block;
  padding: 0.15rem 0.6rem;
  border-radius: 999px;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(249, 115, 22, 0.5);
  color: #fed7aa;
  margin-bottom: 0.4rem;
}

.hero-preview-caption p {
  font-size: 0.85rem;
  color: #e5e7eb;
}

/* MEDIA GRID */
.media-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1.7rem;
}

.media-card {
  background: rgba(15, 23, 42, 0.9);
  border-radius: 1.2rem;
  border: 1px solid rgba(148, 163, 184, 0.25);
  overflow: hidden;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.85);
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
  cursor: default;
}

.media-card img {
  width: 100%;
  display: block;
}

.media-card-body {
  padding: 1rem 1rem 1.1rem;
}

.media-card-body h3 {
  font-size: 1rem;
  margin-bottom: 0.3rem;
}

.media-card-body p {
  font-size: 0.9rem;
  color: #9ca3af;
}

/* Hover state for cards (clickable ones) */
.media-card[data-lightbox] {
  cursor: zoom-in;
}

.media-card[data-lightbox]:hover {
  transform: translateY(-3px);
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.9);
  border-color: rgba(249, 115, 22, 0.6);
}

/* VIDEO WRAPPER */
.video-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid rgba(30, 64, 175, 0.7);
}

.video-wrapper video {
  width: 100%;
  display: block;
  outline: none;
}

/* ABOUT LAYOUT */
.about-layout {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1.1fr);
  gap: 2rem;
  align-items: flex-start;
}

.about-text p {
  color: #d1d5db;
  margin-bottom: 1rem;
}

.feature-list {
  list-style: none;
  margin: 0 0 1.3rem;
}

.feature-list li {
  position: relative;
  padding-left: 1.4rem;
  margin-bottom: 0.35rem;
  font-size: 0.92rem;
  color: #e5e7eb;
}

.feature-list li::before {
  content: "›";
  position: absolute;
  left: 0;
  top: 0;
  color: #f97316;
}

.about-highlight {
  color: #fde68a;
  margin-bottom: 1.2rem;
}

.about-card {
  background: rgba(15, 23, 42, 0.95);
  border-radius: 1.1rem;
  padding: 1.3rem 1.4rem;
  border: 1px solid rgba(148, 163, 184, 0.3);
  box-shadow: 0 18px 50px rgba(15, 23, 42, 0.9);
  font-size: 0.9rem;
}

.about-card h3 {
  font-size: 0.98rem;
  margin-bottom: 0.4rem;
}

.about-card ul {
  list-style: none;
  margin-bottom: 0.8rem;
}

.about-card li {
  padding-left: 1rem;
  position: relative;
  margin-bottom: 0.25rem;
  color: #e5e7eb;
}

.about-card li::before {
  content: "•";
  position: absolute;
  left: 0;
  top: 0;
  color: #f97316;
}

/* BUY SECTION */
.buy-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.7fr) minmax(0, 1.1fr);
  gap: 2rem;
  align-items: flex-start;
}

.buy-text p {
  color: #d1d5db;
  margin-bottom: 0.75rem;
}

.price-line {
  display: flex;
  flex-direction: column;
  margin: 1.2rem 0;
}

.price-amount {
  font-size: 2rem;
  font-weight: 600;
  color: #facc15;
}

.price-note {
  font-size: 0.85rem;
  color: #9ca3af;
}

.paypal-box {
  margin-top: 0.5rem;
  padding: 1rem 1.1rem;
  border-radius: 1rem;
  background: rgba(15, 23, 42, 0.95);
  border: 1px solid rgba(148, 163, 184, 0.4);
}

.paypal-box p {
  margin-bottom: 0.6rem;
}

.paypal-note {
  font-size: 0.8rem;
  color: #9ca3af;
}

.buy-side-card {
  background: rgba(15, 23, 42, 0.95);
  border-radius: 1.1rem;
  padding: 1.2rem 1.3rem;
  border: 1px solid rgba(148, 163, 184, 0.3);
  font-size: 0.9rem;
}

.buy-side-card ol {
  padding-left: 1.25rem;
  margin-bottom: 0.7rem;
}

.buy-side-card li {
  margin-bottom: 0.35rem;
}

.small-text {
  font-size: 0.8rem;
  color: #9ca3af;
}

/* FAQ */
.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.faq-item {
  background: rgba(15, 23, 42, 0.95);
  border-radius: 1rem;
  border: 1px solid rgba(148, 163, 184, 0.3);
  padding: 1rem 1.1rem;
  font-size: 0.9rem;
}

.faq-item h3 {
  font-size: 0.98rem;
  margin-bottom: 0.4rem;
}

.faq-item p {
  color: #d1d5db;
}

/* FOOTER */
.site-footer {
  border-top: 1px solid rgba(148, 163, 184, 0.25);
  padding: 1.25rem 0 1.75rem;
  background: #020617;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: #9ca3af;
}

.back-to-top {
  text-decoration: none;
  color: #e5e7eb;
  font-size: 0.85rem;
}

.back-to-top:hover {
  color: #f97316;
}

/* LIGHTBOX */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 200;
}

.lightbox-inner {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
}

.lightbox img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 1rem;
  border: 1px solid rgba(148, 163, 184, 0.5);
}

.lightbox-close {
  position: absolute;
  top: -2rem;
  right: 0;
  background: none;
  border: none;
  color: #f9fafb;
  font-size: 2rem;
  cursor: pointer;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .hero-inner,
  .about-layout,
  .buy-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .hero-preview-card {
    order: -1;
  }
}

@media (max-width: 768px) {
  .main-nav {
    position: absolute;
    top: 58px;
    right: 0;
    left: 0;
    padding: 0.75rem 1.25rem 1rem;
    background: rgba(2, 6, 23, 0.98);
    flex-direction: column;
    gap: 0.75rem;
    border-bottom: 1px solid rgba(148, 163, 184, 0.25);
    display: none;
  }

  .main-nav.open {
    display: flex;
  }

  .nav-toggle {
    display: flex;
  }

  .hero {
    padding-top: 3.6rem;
  }
}

@media (max-width: 600px) {
  .hero-text h1 {
    font-size: 1.9rem;
  }

  .section {
    padding: 3rem 0;
  }
}
