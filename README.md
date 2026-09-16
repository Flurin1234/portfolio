# Portfolio (React + Vite)

Dynamische Portfolio-Website mit React, Vite und Framer Motion für Animationen.
Weißes Design mit Pastellfarben.

## Struktur

```
src/
├── data/content.js      Alle Inhalte: Name, Bio, Skills, Projekte
├── components/          Eine Komponente pro Section (Hero, About, Skills, ...)
├── App.jsx              Setzt die Sections zusammen
├── App.css              Design (Farben, Layout, Responsive)
└── index.css            Globale Basis-Styles + Farbvariablen
```

## Anpassen

- **Alle Texte, Skills & Projekte**: nur [src/data/content.js](src/data/content.js) bearbeiten —
  der Rest der Seite aktualisiert sich automatisch.
- **Projekt-Bild hinzufügen**: Datei in `src/assets/projects/` ablegen, im
  jeweiligen Projekt-Objekt bei `image` z.B. `"/src/assets/projects/mein-bild.png"`
  eintragen (oder `import bild from "../assets/projects/mein-bild.png"` oben in
  `content.js` und den Import verwenden).
- **Farben**: in `src/index.css` im `:root`-Block (`--pastel-purple`, `--pastel-pink`, ...).
- **Social Links / E-Mail**: in `src/data/content.js` im `profile`-Objekt.

## Lokal starten

```bash
npm install
npm run dev
```

Seite läuft dann unter `http://localhost:5173` (oder dem nächsten freien Port).

## Hosten (kostenlos)

**Vercel** (empfohlen für Vite/React):
1. Projekt auf GitHub pushen
2. Auf [vercel.com](https://vercel.com) einloggen → Repo importieren → Deploy
   (Vercel erkennt Vite automatisch, keine Konfiguration nötig)

**Netlify**:
1. `npm run build` ausführen → erzeugt Ordner `dist/`
2. Auf [netlify.com](https://netlify.com) den `dist`-Ordner per Drag & Drop hochladen

Beide Optionen sind kostenlos.
