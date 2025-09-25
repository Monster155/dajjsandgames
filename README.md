# Damir Games — Personal Website

Open `index.html` in your browser. No build needed.

Update content by editing `content/data.js`.

Add game example:
```js
{
  id: "my-game-id",
  title: "My Game",
  tagline: "One-line description",
  image: "https://.../cover.jpg",
  platforms: ["PC", "Web"],
  genres: ["Puzzle"],
  year: 2025,
  links: [
    { label: "Play", url: "https://...", variant: "primary" },
    { label: "Website", url: "https://..." }
  ]
}
```

Add contact example:
```js
{ id: "telegram", label: "Telegram", url: "https://t.me/dajjsand", display: "t.me/dajjsand" }
```

Files:
- `index.html` — structure
- `styles.css` — styles
- `content/data.js` — content
- `main.js` — rendering logic
