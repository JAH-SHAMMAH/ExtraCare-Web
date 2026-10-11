# ExtraCare Web

The company website for **ExtraCare**, a software studio in Abuja, Nigeria.
Plain HTML, CSS and a little JavaScript. There is no build step and nothing to install.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home |
| `services.html` | All services (hub) |
| `websites.html` | Websites |
| `web-apps.html` | Web apps |
| `mobile-apps.html` | Mobile apps |
| `seo.html` | Search optimisation ("Built to be found") |
| `hosting-and-care.html` | Hosting, maintenance and scaling ("Built to last") |
| `how-we-work.html` | Design approach and process ("Built to your taste") |
| `school-system.html` | The school platform |
| `work.html` | Our work: the school system as a case study |
| `schools.html` | Software for schools |
| `businesses.html` | Software for businesses |
| `hospitals.html` | Software for hospitals and clinics |
| `technology.html` | What we build with |
| `about.html` | About ExtraCare |
| `contact.html` | Contact form (opens WhatsApp with the message ready) |
| `404.html` | Page not found |

Shared files: `assets/css/style.css`, `assets/js/main.js`, `favicon.svg`, and images in `assets/img/`:

- `screens/`: real phone screenshots of the school portal, each saved at 400 and 800 pixels wide as WebP and JPEG
- `built-to-last.svg` and `built-to-be-found.svg`: the illustrations on the hosting and SEO pages
- `social-card.jpg`: the 1200 x 630 picture shown when a page is shared on WhatsApp, Facebook, LinkedIn or X
- `dashboard.jpg`: the desktop dashboard screenshot

## Icons

Feature icons come from Lucide (ISC licence, see `assets/img/ICONS-LICENSE.txt`). Each page carries only the icons it uses, in a hidden `<svg>` right after `<body>`. To add one, copy its file from lucide.dev into a new `<symbol id="i-NAME" viewBox="0 0 24 24">` there, then use `<span class="ico-chip" aria-hidden="true"><svg class="ico"><use href="#i-NAME"/></svg></span>` before a heading.

After changing `style.css`, raise the `?v=` number on its link in every page so phones fetch the new copy.

## Run it on your computer

Open `index.html` in a browser, or from this folder run:

```
python -m http.server 8000
```

then visit http://localhost:8000.

## Things to edit

- **WhatsApp number:** search every file for `2348036745916` (links) and `08036745916` (displayed text) and replace them.
- **Wording:** all copy is in the `.html` files.
- **Colours:** the variables at the top of `assets/css/style.css`.
- **Dashboard screenshot:** replace `assets/img/dashboard.jpg` with another image of the same shape (936 x 396). It currently shows demo data only.

## Domain and search

Every page, the sitemap and `robots.txt` point to `https://extracare.ng`. If the domain changes, search all files for `extracare.ng` and replace it.

After the site is live on the domain, add it to Google Search Console and submit `https://extracare.ng/sitemap.xml`.

## Adding a new phone screenshot

Crop off the phone's status bar, blur any names or email addresses, then save it at 400 and 800 pixels wide as both `.webp` and `.jpg` in `assets/img/screens/`. Copy one of the existing `<li>` blocks in `school-system.html` and change the file names, heading, text and `alt`.

## Deploy for free

**GitHub Pages:** repository Settings, then Pages, then deploy from the `main` branch and the `/ (root)` folder.

**Netlify or Cloudflare Pages:** connect this repository. No build command, and the publish folder is the repository root.

**Netlify Drop:** drag the whole folder onto app.netlify.com/drop.

## Publish this repository to GitHub

With the GitHub CLI (`gh`) signed in on your computer:

```
git init -b main
git add .
git commit -m "Initial ExtraCare website"
gh repo create ExtraCare-Web --public --source=. --remote=origin --push
```

Without it: create an empty repository named `ExtraCare-Web` on github.com (no README, no .gitignore), then:

```
git init -b main
git add .
git commit -m "Initial ExtraCare website"
git remote add origin https://github.com/YOUR-USERNAME/ExtraCare-Web.git
git push -u origin main
```

GitHub turns spaces in repository names into hyphens, so "ExtraCare Web" becomes `ExtraCare-Web`.
