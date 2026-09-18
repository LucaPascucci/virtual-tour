# Architettura

## I file

```
index.html            la pagina intera, sezioni delimitate da commenti in maiuscolo
assets/style.css      unico foglio di stile, 7 blocchi numerati
assets/tours.js       costruisce le schede di "Tour pubblicati"
assets/tours.json     l'unico file di dati: la lista dei tour
img/                  immagini fisse; img/tour/ le anteprime dei tour
```

Nessun framework, nessun build step, nessuna dipendenza: ciò che sta nel
repository è esattamente ciò che viene pubblicato.

## index.html

Le sezioni sono delimitate da commenti in maiuscolo — `APERTURA`, `TRE NUMERI`,
`COS'È`, `PERCHÉ CONVIENE`, `DOVE SI USA`, `IL SERVIZIO`, `TOUR PUBBLICATI`,
`CONTATTI`, `FONTI`. Per modificare un testo si cerca il commento.

Gli `id` delle sezioni (`#cos-e`, `#vantaggi`, `#settori`, `#servizio`, `#tour`,
`#contatti`) sono i bersagli della nav in testata: rinominandone uno va
aggiornato anche il link. `#fonti` ha un id ma non è in nav — ci si arriva solo
dai rimandi dentro il testo.

## assets/style.css

File unico diviso in 7 blocchi numerati e commentati:

1. Variabili — 2. Impostazioni di base — 3. Blocchi riutilizzabili —
4. Testata — 5. Sezioni della pagina — 6. Piede — 7. Schermi stretti

I colori stanno **solo** nelle variabili del blocco 1. Il tema scuro è una
seconda lista di variabili sotto `@media (prefers-color-scheme: dark)`: un
colore nuovo va definito in entrambe le liste.

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

Due canali, ripetuti nella sezione `CONTATTI` e nel piede:

- **mail** — `mailto:` con `subject` e `body` precompilati (traccia di domande
  da riempire: che spazio, dove, quanti ambienti, quando);
- **WhatsApp** — link `wa.me`, con `target="_blank" rel="noopener"`.

Non c'è più un link `tel:`.

## Deploy

GitHub Pages, branch `main`, cartella `/ (root)` →
`https://lucapascucci.github.io/virtual-tour/`. Nessuna pipeline: quello che
finisce su `main` è online.
