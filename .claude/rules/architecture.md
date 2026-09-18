# Architettura

## I file

```
index.html            la pagina intera, sezioni delimitate da commenti in maiuscolo
assets/style.css      unico foglio di stile, 8 blocchi numerati
assets/tours.js       costruisce le schede di "Tour pubblicati"
assets/menu.js        apre e chiude il menu sugli schermi stretti
assets/schede.js      stato di partenza delle schede apribili
assets/tours.json     l'unico file di dati: la lista dei tour
img/                  immagini fisse; img/tour/ le anteprime dei tour
```

Nessun framework, nessun build step, nessuna dipendenza: ciò che sta nel
repository è esattamente ciò che viene pubblicato.

## index.html

Le sezioni sono delimitate da commenti in maiuscolo — `APERTURA`, `TRE NUMERI`,
`COS'È`, `PERCHÉ CONVIENE`, `DOVE SI USA`, `IL SERVIZIO`, `QUANTO TI IMPEGNA`,
`TOUR PUBBLICATI`, `CONTATTI`, `FONTI`, `BARRA FISSA`. Per modificare un testo
si cerca il commento. `ICONE` sta prima della testata e non è una sezione: è il
blocco di definizioni delle due icone dei contatti.

`FONTI`, la nota di trasparenza dentro `IL SERVIZIO` e le schede di
`PERCHÉ CONVIENE` e `DOVE SI USA` sono `<details>` con classe `.richiudibile`:
chiusi mostrano solo il titolo dentro `<summary>`.
`BARRA FISSA` sta fuori da `<main>`, subito prima degli script: è la pillola
sempre visibile a fondo schermo con i due contatti.

`COME SI REALIZZA` (id `#servizio`) e `QUANTO TI IMPEGNA` (id `#impegno`) sono due
elenchi `<ol class="passi">`: i numeri li disegna il CSS con un `counter`, non
l'elenco. La prima dice cosa faccio io, la seconda cosa serve al cliente.

Gli `id` delle sezioni (`#cos-e`, `#vantaggi`, `#settori`, `#servizio`,
`#impegno`, `#tour`, `#contatti`) sono i bersagli della nav in testata:
rinominandone uno va aggiornato anche il link. `#fonti` ha un id ma non è in
nav — ci si arriva solo dai rimandi dentro il testo.

## assets/style.css

File unico diviso in 8 blocchi numerati e commentati:

1. Variabili — 2. Impostazioni di base — 3. Blocchi riutilizzabili —
4. Testata — 5. Sezioni della pagina — 6. Piede — 7. Barra fissa —
8. Schermi stretti

Lo spazio che la barra fissa occuperebbe sul piede è il `padding-bottom` del
piede stesso: messo sul `body` sarebbe una striscia chiara sotto il piede scuro.

I colori stanno **solo** nelle variabili del blocco 1. Il tema scuro è una
seconda lista di variabili sotto `@media (prefers-color-scheme: dark)`: un
colore nuovo va definito in entrambe le liste.

## assets/menu.js

Poche righe: il bottone `.apri-menu` in testata fa da interruttore al proprio
`aria-expanded`, e il CSS mostra la nav quando vale `true`. Sopra gli 860px il
bottone è nascosto e la nav è sempre visibile, quindi lo script non ha bisogno
di sapere quanto è larga la finestra. Un clic su una voce richiude il menu.

## assets/schede.js e le schede apribili

Le schede di `PERCHÉ CONVIENE` e `DOVE SI USA` sono `<details class="scheda
richiudibile" open>` con il titolo dentro `<summary>`: aprirle e chiuderle lo fa
il browser, il CSS è quello già scritto per "Fonti" e la nota di trasparenza.

Lo script decide solo lo stato di partenza: sotto gli 860px — la soglia del
blocco 8 di `style.css` — toglie l'attributo `open`. Sta nell'HTML e non nel JS
perché senza JavaScript la pagina deve restare leggibile: aperte. Gira una volta
al caricamento, quindi allargando la finestra le schede non si riaprono da sole.

La griglia che le contiene ha la classe in più `apribili`, che vale
`align-items: start`: senza, chiudendo una scheda il riquadro resterebbe alto
quanto la scheda aperta accanto.

## assets/tours.js e il pattern `data-solo-con-tour`

`tours.js` legge `assets/tours.json` con `fetch` e genera le schede via template
string; `pulisci()` fa l'escape di `& < > "` perché i valori del JSON finiscono
dentro l'HTML.

Ogni elemento che rimanda ai tour — la sezione `#tour`, la voce di menu in
testata, il bottone "Guarda i tour pubblicati" in fondo a "Cos'è" — porta in HTML
`hidden data-solo-con-tour`. Il JS li scopre tutti insieme (`elemento.hidden =
false`) solo dopo aver disegnato almeno una scheda. Lista vuota, JSON mancante o
malformato → resta tutto nascosto, senza messaggi d'errore: meglio una sezione
in meno che un errore davanti a un potenziale cliente.

Un nuovo rimando alla sezione si aggancia marcandolo allo stesso modo, senza
toccare il JS.

## Contatti

Due canali, ripetuti nella sezione `CONTATTI`, nel piede e nella barra fissa:

- **mail** — `mailto:` con `subject` e `body` precompilati (traccia di domande
  da riempire: che spazio, dove, quanti ambienti, quando);
- **WhatsApp** — link `wa.me`, con `target="_blank" rel="noopener"`, ed è il
  canale preferito: nella sezione `CONTATTI` e nella barra fissa è il bottone
  pieno e sta per primo, la mail lo segue come bottone secondario. Porta la
  stessa traccia di domande della mail nel parametro `text`, che WhatsApp
  prevede solo per i link col numero (`wa.me/<numero>`), non per quelli `/qr/`.

Non c'è più un link `tel:`. I due recapiti compaiono ora in tre punti — sezione
`CONTATTI`, piede e barra fissa: cambiando indirizzo o numero vanno aggiornati
tutti.

Ognuno porta la propria icona. I disegni stanno in un solo posto, il blocco
`ICONE` in cima al `<body>`: uno `<svg hidden>` con due `<symbol>`
(`#icona-whatsapp`, `#icona-mail`), richiamati sei volte con
`<svg class="icona"><use href="#icona-..."></use></svg>`. Le icone non hanno un
colore proprio (`fill: currentColor`): prendono quello del bottone o del link
che le contiene, quindi seguono i due temi senza variabili nuove. Nella barra
fissa l'icona sta da sola, classe `.bottone.solo-icona`, e il nome del canale
resta nell'`aria-label`.

Il ritratto (`img/luca-pascucci.jpg`) accompagna il nome nei due punti in cui
compare, testata e piede: è tondo per via di `border-radius: 50%` e
`object-fit: cover` nel blocco 3.

## Deploy

GitHub Pages, branch `main`, cartella `/ (root)` →
`https://lucapascucci.github.io/virtual-tour/`. Nessuna pipeline: quello che
finisce su `main` è online.
