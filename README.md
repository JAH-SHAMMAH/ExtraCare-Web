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

Shared files: `assets/css/style.css`, `assets/js/main.js`, `assets/img/dashboard.jpg`, `favicon.svg`.

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

## Before you go live with a domain

1. In `sitemap.xml`, replace `YOUR-DOMAIN` with your real domain (for example `extracare.ng`).
2. Add this line to `robots.txt`: `Sitemap: https://YOUR-DOMAIN/sitemap.xml`
3. Submit the sitemap in Google Search Console.

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
