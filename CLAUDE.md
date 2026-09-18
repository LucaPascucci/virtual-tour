# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Cos'è

Sito vetrina statico (una pagina) per il servizio di virtual tour 360°. Tre file
sorgente: `index.html`, `assets/style.css`, `assets/tours.js` — più `assets/tours.json`
come unico file di dati. Nessun framework, nessun build step, nessuna dipendenza:
ciò che sta nel repository è esattamente ciò che viene pubblicato.

## Comandi

```bash
python3 -m http.server 8000     # poi http://localhost:8000
```

Serve un server locale: `tours.js` legge `tours.json` con `fetch`, che fallisce
aprendo `index.html` con doppio clic (`file://`). Non esistono test, lint o build.

Deploy: GitHub Pages, branch `main`, cartella `/ (root)` →
`https://lucapascucci.github.io/virtual-tour/`.

## Convenzioni

**Tutto è in italiano**: contenuti, classi CSS (`.riga`, `.scheda`, `.apertura`,
`.alternata`), variabili CSS (`--verde-600`, `--testo-tenue`, `--anello-focus`),
identificatori JS (`disegna`, `pulisci`, `mostraMessaggio`), commenti. Mantieni
questa scelta: non introdurre nomi in inglese.

**Percorsi relativi.** L'unico URL assoluto è `og:image` in `index.html`: va
aggiornato a mano se il sito cambia dominio.

## Struttura

`index.html` — le sezioni sono delimitate da commenti in maiuscolo
(`<!-- ===== APERTURA ===== -->`, `COS'È`, `PERCHÉ CONVIENE`, `DOVE SI USA`,
`IL SERVIZIO`, `TOUR PUBBLICATI`, `CONTATTI`, `FONTI`). Per modificare un testo
si cerca il commento. Gli `id` delle sezioni (`#cos-e`, `#vantaggi`, `#settori`,
`#servizio`, `#tour`, `#contatti`) sono i bersagli della nav in testata:
rinominandone uno va aggiornato anche il link.

`assets/style.css` — file unico, diviso in 7 blocchi numerati e commentati
(1. Variabili → 7. Schermi stretti). I colori stanno **solo** nelle variabili del
blocco 1; il tema scuro è una seconda lista di variabili sotto
`@media (prefers-color-scheme: dark)` — un colore nuovo va definito in entrambe.
`html { scroll-padding-top: 88px }` compensa la testata fissa.

`assets/tours.js` — genera le schede di "Tour pubblicati" da `tours.json` via
template string; `pulisci()` fa l'escape di `& < > "` perché i valori del JSON
finiscono dentro l'HTML. Lista vuota o fetch fallito → mostra `#tour-vuoto`.

## Aggiungere un tour

Si modifica **solo** `assets/tours.json` (lista di oggetti con
`titolo`, `luogo`, `descrizione`, `immagine`, `link`). Anteprime in `img/tour/`,
16:9, 800×450. `tours.js` non va toccato.

## Dati e fonti

Ogni numero citato nella pagina ha la sua fonte elencata nella sezione `FONTI`
in fondo a `index.html`. È una scelta deliberata: se aggiungi o modifichi una
cifra, aggiungi o verifica la fonte corrispondente. I contenuti provengono da
`docs/` e `Ricerche/` del progetto padre (`../../`), fuori da questo repository.
