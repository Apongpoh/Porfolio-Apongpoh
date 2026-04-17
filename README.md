# Portfolio - Apongpoh

A polished static portfolio for Apongpoh, a cybersecurity-focused full-stack developer.

## What Is Included

- Image-led hero with clear positioning and proof points
- Sticky responsive navigation with mobile menu support
- Dark/white mode toggle with saved visitor preference
- About, skills, experience, projects, roadmap, and contact sections
- Dynamic skills and project cards managed from `script.js`
- Certification cards with Security+, Google Cybersecurity, and Meta credential links
- Scalable project cards with detailed notes kept inside case-study modals
- Featured SOC case-study modal with Azure/Sentinel lab screenshots
- Project case-study modals with evidence notes for demos, security reviews, and future builds
- Staggered reveal animation, modal entrance motion, and reduced-motion support
- Accessible focus states, skip link, reduced-motion support, and responsive layouts

## Run Locally

Open `index.html` in your browser.

## Deploy Free

This portfolio is configured for GitHub Pages through `.github/workflows/pages.yml`.

The expected free live URL is:

`https://apongpoh.github.io/Porfolio-Apongpoh/`

If the first deployment does not start, open the repository on GitHub, go to
Settings, then Pages, and set the source to GitHub Actions.

## Customize

- Update project data in `script.js`.
- Update skill data in `script.js`.
- Replace pending project demo links, security notes, and evidence notes in `script.js`.
- Replace certification links and text in `index.html`.
- Replace downloadable certificate PDFs in `assets/`.
- Add or replace SOC lab screenshots in `assets/test_logs/`.
- Replace contact links in `index.html`.
- Adjust dark and white theme colors in `styles.css`.
- Replace the local profile photo at `assets/profile-apongpoh-gilbert.jpg`.
- Replace the downloadable resume at `assets/apongpoh-gilbert-resume.pdf`.
- Adjust the hero image URL in `styles.css`.
- Replace pending project links with GitHub repos, live demos, or case studies.

## Notes

The hero background is loaded from Unsplash and the profile photo is stored locally in `assets/profile-apongpoh-gilbert.jpg`. If you need the site to work fully offline, download a licensed hero image, place it in the `assets` folder, and update the image URL in `styles.css`.
