# Convenzioni

## Tutto è in italiano

Contenuti, classi CSS, variabili CSS, identificatori JS, commenti. Non
introdurre nomi in inglese.

| dove | esempi |
|------|--------|
| classi CSS | `.riga`, `.scheda`, `.apertura`, `.alternata`, `.richiudibile`, `.apribili`, `.passi`, `.solo-icona` |
| variabili CSS | `--verde-600`, `--testo-tenue`, `--anello-focus`, `--superficie` |
| identificatori JS | `disegna`, `pulisci`, `scheda`, `elenco`, `soloConTour`, `bottoneMenu`, `aperto` |
| attributi dati | `data-solo-con-tour` |
| campi JSON | `titolo`, `luogo`, `descrizione`, `immagine`, `link` |

Le uniche parole inglesi ammesse sono quelle del linguaggio (`hidden`, `href`,
`fetch`) e i nomi di prodotto (Google Maps, Street View, WhatsApp).

## Percorsi relativi

Ogni percorso nella pagina è relativo, così il sito funziona anche in una
sottocartella (come su GitHub Pages). **L'unico URL assoluto è `og:image` in
`index.html`**: va aggiornato a mano se il sito cambia dominio.

## Colori solo nelle variabili

Nessun valore di colore scritto a mano nelle regole: si usa `var(--nome)`. Un
colore nuovo si definisce due volte nel blocco 1 di `style.css` — nella lista
chiara e in quella sotto `@media (prefers-color-scheme: dark)`.

## Niente dipendenze

Nessun framework, nessun bundler, nessun `package.json`, nessun passo di build.
Se serve una funzione, si scrive. Non aggiungere librerie.

## CSS: un file, blocchi numerati

Una regola nuova va nel blocco che le compete (vedi
@.claude/rules/architecture.md), non in fondo al file. I commenti spiegano
il *perché* di una regola non ovvia, non ciò che la regola già dice.

## Dati e fonti

Ogni numero citato nella pagina ha la sua fonte elencata nella sezione `FONTI`
in fondo a `index.html`. È una scelta deliberata: se aggiungi o modifichi una
cifra, aggiungi o verifica la fonte corrispondente.

I contenuti provengono da `docs/` e `Ricerche/` del progetto padre (`../../`),
fuori da questo repository.

## Aggiungere un tour

Si modifica **solo** `assets/tours.json` — una lista di oggetti con `titolo`,
`luogo`, `descrizione`, `immagine`, `link`. Le anteprime vanno in `img/tour/`,
16:9, 800×450. `tours.js` non va toccato.
