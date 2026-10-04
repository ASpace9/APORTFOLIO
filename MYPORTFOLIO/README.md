# Aureum Creative Portfolio

An original black, gold, and white portfolio starter inspired by the interaction pattern of modern full-screen creative portfolios. Built with plain HTML, CSS, and JavaScript, so it can be published directly on GitHub Pages.

## Included

- Full-screen hash-based page navigation
- Gold curtain transition between sections
- Responsive desktop and mobile navigation
- Interactive canvas particle background
- Animated hero and scrolling marquee
- About/services/experience sections
- Filterable 3D-style project carousel
- Keyboard and swipe controls
- Fullscreen project preview modal
- Contact form that prepares an email
- Reduced-motion accessibility support

## Files

- `index.html` — page structure and editable copy
- `style.css` — all visual styles and responsive rules
- `script.js` — navigation, transitions, project carousel, modal, form, and particles
- `assets/projects/` — sample project artwork; replace these with your real images

## Customize it

1. Open `index.html` and replace `AUREUM`, the headline, biography, experience, contact details, and social links.
2. Replace the SVG files in `assets/projects/` with your own JPG, PNG, WebP, or SVG project images.
3. In `script.js`, edit the `PROJECTS` array so the titles, categories, descriptions, years, and image paths match your work.
4. Change `CONTACT_EMAIL` in `script.js` from `hello@yourdomain.com` to your real email address.
5. Optional: replace the `YOUR PHOTO HERE` block in the About section with an `<img>` tag.

Example:

```html
<div class="portrait-frame">
  <img src="assets/your-photo.webp" alt="Your name">
</div>
```

Then add this CSS:

```css
.portrait-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

## Run locally

Double-click `index.html`, or start a small local server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a new GitHub repository.
2. Upload all files and folders from this project.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/root`, then save.
6. GitHub will provide the public website URL.

## Contact form note

The starter uses `mailto:` and opens the visitor's email application. For direct website submissions, connect the form to Formspree, Web3Forms, EmailJS, or your own backend.
