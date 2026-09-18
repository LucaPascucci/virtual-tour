# CLAUDE.md

Guida per Claude Code (claude.ai/code) su questo repository.
Vedi @README.md per la panoramica del progetto.

## Cos'è

Sito vetrina statico (una pagina) per il servizio di virtual tour 360°:
`index.html`, `assets/style.css` e tre script brevi e indipendenti —
`assets/tours.js` (schede dei tour), `assets/menu.js` (menu sugli schermi
stretti), `assets/schede.js` (stato di partenza delle schede apribili). Il solo
file di dati è `assets/tours.json`.

## Comandi

```bash
python3 -m http.server 8000     # poi http://localhost:8000
```

Non esistono test, lint o build. La verifica è aprire la pagina e guardarla.

## Regole critiche

- IMPORTANT: **tutto è in italiano** — classi CSS, variabili, identificatori JS,
  commenti. Non introdurre nomi in inglese.
- IMPORTANT: **serve un server locale**: `tours.js` legge il JSON con `fetch`,
  che fallisce aprendo `index.html` con doppio clic (`file://`).
- IMPORTANT: **nessuna dipendenza, nessun build step**. Ciò che sta nel
  repository è esattamente ciò che viene pubblicato su GitHub Pages da `main`.
- IMPORTANT: **per aggiungere un tour si tocca solo `assets/tours.json`**.
  `tours.js` non va modificato.
- IMPORTANT: **ogni numero citato nella pagina ha la sua fonte** nella sezione
  `FONTI` di `index.html`. Se aggiungi o modifichi una cifra, aggiungi o
  verifica la fonte.
- IMPORTANT: **un colore nuovo va definito due volte** nel blocco 1 di
  `style.css`: nella lista chiara e in quella sotto
  `@media (prefers-color-scheme: dark)`.
- IMPORTANT: **percorsi relativi ovunque**. L'unico URL assoluto è `og:image`
  in `index.html`, da aggiornare a mano se il sito cambia dominio.
- IMPORTANT: **la pagina deve restare leggibile senza JavaScript**. Le schede
  apribili portano `open` nell'HTML e `schede.js` le chiude solo sotto gli
  860px; i rimandi ai tour sono l'eccezione voluta, nascosti finché il JSON
  non contiene un tour.

## Documentazione dettagliata

- Architettura e struttura dei file: @.claude/rules/architecture.md
- Convenzioni: @.claude/rules/conventions.md
- Gotchas e trappole: @.claude/rules/gotchas.md
- Workflow git e versionamento: @.claude/rules/git-workflow.md

Le modifiche sono tracciate in @CHANGELOG.md.
