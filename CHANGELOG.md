# Changelog

Tutte le modifiche degne di nota a questo progetto sono documentate in questo file.

Il formato segue [Keep a Changelog](https://keepachangelog.com/it/1.1.0/) e il
progetto adotta il [Semantic Versioning](https://semver.org/lang/it/). I tag git
sono numeri nudi, senza prefisso `v`.

## [Unreleased]

### Changed

- L'apertura si presenta con una domanda invece che con una descrizione: "Chi
  ti cerca online, cosa vede del tuo spazio?", e la riga sotto risponde
  raccontando in una frase cos'è un virtual tour. Un solo invito, "Scopri cos'è
  un virtual tour", che porta alla spiegazione poco più giù: l'apertura spiega
  prima di chiedere. L'invito a farsi fare un preventivo resta in testata e
  nella sezione "Parliamone".
- Il bottone "Guarda i tour pubblicati" si è spostato dall'apertura alla fine di
  "Cos'è un virtual tour", dove la curiosità di vederne uno nasce davvero.
- I tour compaiono da soli: la sezione "Tour pubblicati", la voce nel menu in
  testata e il bottone "Guarda i tour pubblicati" restano nascosti finché
  `assets/tours.json` non contiene almeno un tour. Ogni rimando è marcato
  `hidden data-solo-con-tour` in HTML e viene scoperto da `assets/tours.js`.
- Contatti: al posto del numero di telefono (`tel:`) c'è un link a WhatsApp, e
  la mail arriva con oggetto e corpo già precompilati — una traccia di domande
  su spazio, luogo, numero di ambienti e tempi. Vale sia nella sezione
  "Contatti" sia nel piede della pagina.
- Un JSON dei tour mancante o malformato non produce più alcun messaggio: la
  pagina resta com'è, senza errori davanti a un potenziale cliente.
- Documentazione riorganizzata: `CLAUDE.md` è tornato compatto e richiama via
  `@` i file specializzati sotto `.claude/rules/` (architettura, convenzioni,
  gotchas, workflow git).

### Added

- `CHANGELOG.md`, questo file.
- `.claude/rules/` con architettura, convenzioni, gotchas e workflow git.
- Sezioni "Contatti sulla pagina", "Versioni" e "Documentazione per Claude Code"
  nel `README.md`.

### Removed

- Il messaggio "I primi tour pubblicati compariranno qui" e la classe `.vuoto`
  che lo disegnava: a lista vuota della sezione non resta traccia.

### Fixed

- Nascosta la sezione dei tour, "Il servizio" e "Contatti" diventavano adiacenti
  e i loro bordi si sommavano in una riga doppia.
- I rimandi ai tour restavano visibili nonostante `hidden`, perché `.bottone` e
  la nav in testata dichiarano un proprio `display`: ora `[hidden]` vince.

## [0.0.1] - 2026-09-18

### Added

- Prima versione del sito vetrina: pagina unica con apertura, tre numeri,
  "Cos'è", "Perché conviene", "Dove si usa", "Il servizio", "Tour pubblicati",
  "Contatti" e le fonti di ogni cifra citata.
- Sezione "Tour pubblicati" generata da `assets/tours.json`: per pubblicare un
  tour si modifica solo il JSON.
- Tema chiaro e tema scuro che seguono le impostazioni del sistema operativo.
- Pubblicazione su GitHub Pages dal branch `main`, cartella `/ (root)`.

[Unreleased]: https://github.com/LucaPascucci/virtual-tour/compare/0.0.1...HEAD
[0.0.1]: https://github.com/LucaPascucci/virtual-tour/releases/tag/0.0.1
