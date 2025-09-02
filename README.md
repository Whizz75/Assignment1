Lesotho Hub — Farmer Marketplace (Student Project)

A simple, responsive web marketplace where farmers in Lesotho can advertise crops and livestock.
Built as a student assignment (Web Design BIWD2110) — portfolio-ready, accessible, and easy to extend.

Live demo: https://lesotho-hub.onrender.com/

Table of contents

Project overview

Features

Pages & user flow

Tech stack & libraries

Project structure

Run locally (quick start)

Deploy — recommended hosts

Customize the README live link

Accessibility & SEO checklist

Testing & validation checklist

Performance & optimization tips

Future improvements (portfolio ideas)

Contributing

License

Contact & submission notes

Project overview

Lesotho Hub is a static frontend web project that showcases farmers and their products in two main categories — Crops and Livestock. It was created to satisfy a university assignment requirement while also serving as a portfolio piece demonstrating responsive UI, semantic HTML, CSS theming, basic interactivity (JS), and deployment readiness.

Key design choices:

Light mint theme (#d1ffed) + green accents — consistent across pages.

Card-based product layout for clarity.

Simple JS interactions: Buy Now → Purchased and a Like button counter.

Google Maps embed on Contact page to make the site feel real.

Features

Home page with farmer introductions (short & detailed pages).

Products gateway page (Crops / Livestock).

crops.html and livestock.html each contain 12 product cards:

Image (centered)

Short description

Price (bottom-left)

Buy button (bottom-right) that toggles to Purchased (disabled) on click

Tips page: categorized, card-style tips (Crop, Livestock, Business, Sustainability).

About page: mission, purpose and vision sections.

Contact page: contact info, claims form, and Google Maps embed.

Responsive design with media queries for ≤ 767px.

Simple accessibility best-practices: semantic tags, form labels, alt text placeholders.

Pages & user flow

index.html — Home / Farmer highlights

products/products.html — Main products gateway (Crops & Livestock)

products/crops.html — Crops product listing (12 cards)

products/livestock.html — Livestock product listing (12 cards)

tips.html — Practical tips resource

about-us.html — About Lesotho Hub

contact-us.html — Contact & claim form (with map)

User journey example: Home → click a farmer → farmer detail → click Products → products.html → click View Crops → crops.html → click Buy Now → button becomes Purchased.

Tech stack & libraries

HTML5 (semantic markup)

CSS3 (single theme styles.css + page-specific CSS)

Vanilla JavaScript (interactivity)

Font Awesome (icons, optional)

Google Maps Embed (Contact page)

Optional deployment: Netlify, GitHub Pages, 000webhost

Project structure (suggested)

Update to match your repo — this is a suggested layout

lesotho-hub/
├─ index.html
├─ products/
│  ├─ products.html
│  ├─ crops.html
│  └─ livestock.html
├─ about-us.html
├─ tips.html
├─ contact-us.html
├─ styles/
│  ├─ style.css       <-- global theme, nav, header, footer
│  ├─ products.css    <-- product-cards (optional)
│  └─ about.css       <-- about page specifics (optional)
├─ scripts/
│  ├─ main.js         <-- buy button, like counter, nav toggle
│  └─ contact.js      <-- (optional) form handling
├─ images/
│  ├─ logo.png
│  ├─ crops.jpg
│  └─ tips/...
└─ README.md

Run locally (quick start)

Prerequisites: any modern browser, Git (optional), Python or Node (optional).

Clone the repo:

git clone https://github.com/Whizz75/Assignment1/
cd YOUR_REPO

VS Code: use Live Server extension — right click index.html → Open with Live Server.

Deploy — recommended hosts
GitHub Pages (static site)

Push your repository to GitHub.

In repo Settings → Pages → Source → choose main branch and / (root) or docs/ folder.

Save — your site will be at https://YOUR_USERNAME.github.io/YOUR_REPO/.

If you want a custom domain, add it in Pages settings and configure DNS.

Netlify

Sign in to Netlify → New site from Git → connect GitHub.

Select your repo → build settings: since this is static leave build command blank and publish directory /.

Deploy. Netlify provides continuous deploys on push.

000webhost

Create account → New Website → Upload files via their file manager or via FTP.

Set index.html as the default file.

000webhost gives a free domain (or use your own).

For assignment submission: host on 000webhost (as the brief suggested) and paste your live link into Google Classroom.

Customize the README live link

Replace the placeholder near the top:

LIVE DEMO: [INSERT_YOUR_LIVE_LINK_HERE]


with:

LIVE DEMO: https://your-live-link.example.com


Or edit this file on GitHub: click the pencil icon and update the link, then commit.

Important code snippets
Buy button JS (purchased toggle)
// scripts/main.js
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.buy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.textContent = "Purchased";
      btn.classList.add('purchased');
      btn.disabled = true;
    });
  });
});

Like counter increment
const likeBtn = document.getElementById("likeBtn");
const likeCounter = document.getElementById("likeCounter");

likeBtn.style.cursor = 'pointer';

likeBtn.addEventListener("click", () => {
  let current = parseInt(likeCounter.textContent || "0", 10);
  likeCounter.textContent = current + 1;
});

Accessibility & SEO checklist

 Use semantic HTML (header, nav, main, section, footer).

 Provide alt text for all images (replace placeholders).

 Label form inputs (<label for="...">).

 Ensure color contrast (test with tools).

 Add meta tags:

<meta name="description" content="Lesotho Hub — local farmer marketplace connecting producers with customers in Lesotho.">
<meta name="viewport" content="width=device-width, initial-scale=1.0">


 Add aria-* attributes where necessary (e.g., nav toggle).

Testing & validation checklist

Mobile responsiveness (≤ 767px) — inspect in Chrome DevTools.

Cross-browser check (Chrome, Firefox, Edge).

Form validation: required attributes & basic HTML validation.

Validate HTML/CSS: https://validator.w3.org/
 & https://jigsaw.w3.org/css-validator/

Test the Google Maps embed & external links.

Performance & optimization tips

Compress images (TinyPNG or Squoosh) and use appropriate sizes.

Use loading="lazy" on large images.

Minify CSS & JS for production.

Use SVGs for logos/icons when possible.

Future improvements (portfolio-worthy ideas)

Add a minimal backend (Node/Express, Firebase, or Supabase) to:

Persist likes & purchases

Add an admin dashboard for farmers

Implement authentication

Add search & filters (category, price range).

Add shopping cart with checkout flow (demo using Stripe sandbox).

Add farmer registration & product upload form.

Add pagination or infinite scroll for product pages.

Add animations and richer micro-interactions (but keep them accessible).

Contributing

You're the primary author for this assignment, but if you accept contributions:

Fork → create a feature branch: feature/your-change

Commit with meaningful messages: git commit -m "feat: add responsive navbar"

Open a PR, describe the change, reference issues.

Keep CSS modular and document new classes in this README.

License

Suggested: MIT License. Add a LICENSE file:

MIT License

Copyright (c) Traverra

Permission is hereby granted, free of charge, to any person obtaining a copy...


(Replace name & year as needed.)

Assets & credits

Placeholder images — replace with your own photos or credit Unsplash / Pexels.

Icons: Font Awesome (if used) — check license.

Fonts: Google Fonts (if used) — include <link> and credit.

Credit example:

Icons: Font Awesome

Known issues

This is a static frontend: buy button does not process payments — it only toggles UI state.

Likes are not persisted across reloads (no backend). Add a backend or localStorage if you want persistence.

Contact & submission notes

Author: Traverra
Email: tech.traverra@gmail.com (replace with your contact)

Submission (assignment):

Push your final work to GitHub.

Host live (000webhost or Netlify).

Submit: GitHub repository link + live site link to Google Classroom.
