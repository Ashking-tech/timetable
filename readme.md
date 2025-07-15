```markdown
# Timetable PWA App

A simple, lightweight Timetable web application built using HTML, CSS, and JavaScript. This app supports multiple batches (S1, S2, S3) and works offline using Progressive Web App (PWA) features like `manifest.json` and `service-worker.js`.

---

## Features

- View timetable for S1, S2, and S3 batches
- Responsive design – works on PC and mobile
- Offline support with service worker
- Installable on Android & Desktop as an app shortcut

---

## Live Site

Hosted using GitHub Pages  
https://ashking-tech.github.io/timetable/



---

## Folder Structure


root/
├── index.html
├── style.css
├── script.js
├── manifest.json
├── service-worker.js
├── icon-192.png
└── icon-512.png

````

---

## How to Use

### 1. Clone the Repo

```bash
git clone https://github.com/<your-username>/<repo-name>.git
````

### 2. Edit Timetable Data

Inside `script.js`, update the `timetable` object with subjects, rooms, and timing for all batches.

### 3. Host with GitHub Pages

* Push your project to a GitHub repository
* Go to `Settings` > `Pages`
* Set source to `/ (root)` or `/docs`
* Visit the provided GitHub Pages URL

---

## PWA Offline Support

* `manifest.json` provides metadata like app name, icons, and theme.
* `service-worker.js` caches site assets (`HTML`, `CSS`, `JS`, icons) for offline use.
* Site becomes installable on supported browsers (Chrome, Edge, etc).

### What Works Offline

* The app opens and loads data without internet (once visited online at least once).
* Switching batches and viewing schedules.

---

## How to Install (Mobile/Desktop)

1. Open your site in Google Chrome
2. Wait for it to load completely
3. Click the Install App prompt (or use the menu > "Add to Home screen")
4. The app installs like a native app on your device

---

## Required Icons

You should include two app icons in the root directory:

* `icon-192.png`
* `icon-512.png`

> Make sure they are square and in PNG format.

---

## Testing Offline

1. Visit your site online
2. Then turn off the internet
3. Refresh the tab – the app should still work

---

## Tips

* Always test on `https://` (GitHub Pages provides that)
* Use Lighthouse in Chrome DevTools to verify PWA support
* Clear cache or unregister service worker if you update `service-worker.js`

---

## License

MIT License. Use freely with credit appreciated.

```


