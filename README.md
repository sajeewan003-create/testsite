# Saffron & Sage — Sample Restaurant Site

A simple, static **HTML + CSS** sample of a restaurant website with a matching admin panel. No JavaScript, no build tools — just open it in a browser.

## Pages

| Page | File | What's inside |
|------|------|---------------|
| 🍽️ Landing page | `index.html` | Hero, about, menu cards, gallery, testimonials, reservation form, footer |
| ⚙️ Admin panel | `admin.html` | Sidebar navigation, dashboard stats, menu table, reservations table, settings form |

## Project structure

```
├── index.html        # public landing page
├── admin.html        # admin panel sample
├── css/
│   ├── styles.css    # landing page styles
│   └── admin.css     # admin panel styles
└── images/           # generated photos & illustrations
```

## Running it

Just double-click `index.html` — or serve it locally:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

The **Admin Panel →** link in the footer (and the **View website** link in the sidebar) connect the two pages.

> ℹ️ This is a static sample: forms and admin actions are visual mockups and don't store any data.
