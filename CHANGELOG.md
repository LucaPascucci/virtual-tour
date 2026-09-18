# Changelog

Tutte le modifiche degne di nota a questo progetto sono documentate in questo file.

Il formato segue [Keep a Changelog](https://keepachangelog.com/it/1.1.0/) e il
progetto adotta il [Semantic Versioning](https://semver.org/lang/it/). I tag git
sono numeri nudi, senza prefisso `v`.

## [Unreleased]

## [0.0.2] - 2026-09-18

### Added

- Nuova sezione "Cosa serve da te", tra "Come si realizza" e i tour pubblicati:
  quattro passi che dicono al cliente quanto tempo e quale preparazione gli
  costa il virtual tour dopo l'ordine, e una riga di chiusura — nessun canone,
  nessun aggiornamento, niente da gestire. La voce è anche nel menu in testata.
- I due contatti hanno la loro icona — il segno di WhatsApp e una busta — in
  tutti e tre i punti in cui compaiono: la sezione "Parliamone", il piede e la
  barra fissa. Nella barra l'icona ha preso il posto della scritta, così la
  pillola entra comoda anche sugli schermi da 320px.
- Una barra sempre presente a fondo schermo, "Contattami" e i due recapiti con
  WhatsApp in evidenza: una pillola centrata, staccata dai bordi e in rilievo
  sulla pagina.
- Il ritratto accanto al nome, in testata e nel piede.
- `assets/menu.js`, le poche righe che aprono e chiudono il menu sugli schermi
  stretti, e `assets/schede.js`, quelle che decidono se le schede apribili
  partono aperte o chiuse.
- `CHANGELOG.md`, questo file.
- `.claude/rules/` con architettura, convenzioni, gotchas e workflow git.
- Sezioni "Contatti sulla pagina", "Come si comporta da telefono", "Versioni" e
  "Documentazione per Claude Code" nel `README.md`.

### Changed

- Le schede di "Perché conviene" e "Dove si usa" si aprono e si chiudono una per
  una, con lo stesso blocco `.richiudibile` di "Fonti" e della nota di
  trasparenza. Su schermo largo arrivano aperte; da telefono partono chiuse, così
  le due sezioni si leggono a colpo d'occhio invece di essere un muro di testo.
  Lo stato di partenza lo decide `assets/schede.js`: senza JavaScript restano
  tutte aperte, come prima.
- Su schermi stretti il menu delle sezioni si raccoglie in un bottone a tre
  tratti e si apre in colonna sotto il marchio; aperto, il bottone diventa una
  X. La testata torna a restare in alto anche da telefono, così il menu è
  raggiungibile da qualsiasi punto della pagina.
- Contatti: WhatsApp è ora il bottone pieno e sta per primo, "Scrivimi una
  mail" lo segue come bottone secondario.
- Anche WhatsApp arriva con il messaggio già scritto, la stessa traccia di
  domande della mail: il link usa il numero (`wa.me/393398469039`) invece del
  codice QR, l'unico formato in cui il testo precompilato è previsto.
- In testata la voce di menu "Contatti" è diventata "Contattami"; nel piede il
  link a WhatsApp si chiama solo "WhatsApp".
- "Fonti" e "Una nota di trasparenza" si aprono e si chiudono: da chiuse
  mostrano solo il titolo, il testo resta a un clic di distanza. Entrambe usano
  la stessa classe `.richiudibile`.
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

[Unreleased]: https://github.com/LucaPascucci/virtual-tour/compare/0.0.2...HEAD
[0.0.2]: https://github.com/LucaPascucci/virtual-tour/compare/0.0.1...0.0.2
[0.0.1]: https://github.com/LucaPascucci/virtual-tour/releases/tag/0.0.1
