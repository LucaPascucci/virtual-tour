# Virtual tour 360° — sito vetrina

Sito statico che presenta il servizio di realizzazione e pubblicazione di
virtual tour 360°. Nessun framework, nessun passo di build: i file che stanno
nel repository sono esattamente quelli che vengono pubblicati.

## Struttura

```
index.html            la pagina, divisa in sezioni commentate
assets/style.css      unico foglio di stile, con la palette in cima
assets/tours.js       costruisce le schede della sezione "Tour pubblicati"
assets/tours.json     l'elenco dei tour: è l'unico file da aggiornare nel tempo
img/                  immagini e favicon
img/tour/             le anteprime dei tour pubblicati
CHANGELOG.md          cosa è cambiato, versione per versione
CLAUDE.md             istruzioni per Claude Code, collegate a .claude/rules/
```

I contenuti e i dati citati nella pagina vengono da `docs/` e `Ricerche/` del
progetto. Ogni numero ha la sua fonte, elencata in fondo alla pagina: è una
scelta deliberata, non un dettaglio di stile.

## Aggiungere un tour pubblicato

Si modifica solo `assets/tours.json`, che contiene una lista di oggetti. Finché
la lista è vuota (`[]`) dei tour non c'è traccia nella pagina: spariscono insieme la
sezione "Tour pubblicati", la voce nel menu in testata e il bottone "Guarda i tour
pubblicati" in apertura. Compaiono da soli appena il JSON contiene almeno un tour.

```json
[
  {
    "titolo": "Agriturismo Le Querce",
    "luogo": "Spoleto (PG)",
    "descrizione": "Camere, sala colazioni e uliveto, collegati tra loro e pubblicati su Google Maps.",
    "immagine": "img/tour/le-querce.jpg",
    "link": "https://maps.app.goo.gl/esempio"
  }
]
```

| campo         | a cosa serve                                                        |
|---------------|---------------------------------------------------------------------|
| `titolo`      | nome dello spazio, usato anche nell'alt dell'immagine                |
| `luogo`       | città o indirizzo, riga piccola sotto il titolo                      |
| `descrizione` | una o due frasi                                                      |
| `immagine`    | percorso relativo dell'anteprima; formato consigliato 16:9, 800×450  |
| `link`        | indirizzo del tour (Google Maps, Street View o hosting proprio)      |

Le anteprime vanno messe in `img/tour/`. I valori del JSON finiscono dentro
l'HTML e vengono neutralizzati da `tours.js`, quindi apici e caratteri speciali
non rompono la pagina.

## Vedere il sito in locale

`tours.js` legge il JSON con `fetch`, che non funziona aprendo il file con un
doppio clic (`file://`). Serve un server locale, una riga:

```bash
python3 -m http.server 8000
```

poi `http://localhost:8000`.

## Pubblicare su GitHub Pages

Su GitHub: **Settings → Pages → Source: Deploy from a branch**, branch `main`,
cartella `/ (root)`. Il sito esce su
`https://lucapascucci.github.io/virtual-tour/`.

Tutti i percorsi nella pagina sono relativi, quindi funzionano anche in una
sottocartella. L'unico indirizzo assoluto è quello dell'immagine di anteprima
Open Graph in `index.html` (`og:image`): va aggiornato a mano se il sito si
sposta su un dominio proprio.

## Contatti sulla pagina

Due canali, ripetuti nella sezione "Contatti" e nel piede di `index.html`:

- una mail con oggetto e corpo già precompilati (`mailto:` con `subject` e
  `body`), così chi scrive trova la traccia delle domande utili;
- un link a WhatsApp (`wa.me`), che si apre in una scheda nuova.

Cambiando indirizzo o numero vanno aggiornate entrambe le occorrenze. Negli
`href` la `&` che separa `subject` e `body` va scritta `&amp;`: scritta come `&`
il corpo della mail si perde.

## Versioni

Le modifiche sono elencate in [`CHANGELOG.md`](CHANGELOG.md), nel formato
[Keep a Changelog](https://keepachangelog.com/it/1.1.0/). I tag git sono numeri
nudi, senza prefisso `v` (`0.0.1`, `0.1.0`): il tag si mette sul commit che
rappresenta la versione e la stessa versione va chiusa nel changelog con la
sua data.

```bash
git tag 0.1.0 && git push --tags
```

## Modificare i testi

Le sezioni di `index.html` sono separate da commenti in maiuscolo
(`APERTURA`, `COS'È`, `PERCHÉ CONVIENE`, …): si cerca il commento e si modifica
il testo sotto. I colori stanno tutti nelle variabili in cima a
`assets/style.css`, sotto `1. Variabili`; il tema scuro è la seconda lista di
variabili e segue le impostazioni del sistema operativo di chi visita.

## Documentazione per Claude Code

`CLAUDE.md` resta compatto e richiama i file sotto `.claude/rules/`:

| file | contenuto |
|------|-----------|
| `architecture.md` | i file del progetto, le sezioni di `index.html`, i blocchi di `style.css`, il pattern `data-solo-con-tour` |
| `conventions.md`  | l'italiano ovunque, i percorsi relativi, i colori solo nelle variabili, le fonti |
| `gotchas.md`      | le trappole: `file://`, `[hidden]`, il bordo doppio, la `&` negli `href` |
| `git-workflow.md` | `main` è il sito pubblicato, tag e versioni, cosa fare prima di taggare |
