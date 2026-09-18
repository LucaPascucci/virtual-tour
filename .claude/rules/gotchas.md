# Gotchas e trappole

## Sviluppo locale

- **`file://` non funziona.** `tours.js` legge `tours.json` con `fetch`, che
  fallisce aprendo `index.html` con doppio clic. Serve un server:
  `python3 -m http.server 8000`.
- **Niente test, niente lint, niente build.** La verifica è aprire la pagina e
  guardarla — in tema chiaro e in tema scuro, a finestra larga e a ~380px.

## CSS

- **`[hidden] { display: none !important; }` serve davvero.** `.bottone` e la
  nav in testata dichiarano `display: inline-block` / `flex`, che
  sovrascriverebbero il `display: none` dell'attributo `hidden`: senza
  `!important` i rimandi ai tour resterebbero visibili.
- **`#tour[hidden] + .alternata { border-top: 0; }`.** Nascosta la sezione tour,
  "Il servizio" e "Contatti" diventano adiacenti e i loro due bordi si
  sommerebbero in una riga doppia.
- **`scroll-padding-top: 88px`** compensa la testata fissa; su schermi stretti
  la testata non è più sticky e il valore scende a `12px` (blocco 7).
- **Un colore nuovo va definito due volte**, nella lista chiara e in quella
  scura. Definirlo una sola volta rompe silenziosamente l'altro tema.

## JavaScript

- **Gli errori sono volutamente silenziosi.** JSON mancante o malformato →
  `ignora()`, la pagina resta com'è. Non aggiungere messaggi d'errore visibili:
  la pagina è una vetrina, non un'applicazione.
- **`pulisci()` non è decorativo.** I valori di `tours.json` finiscono dentro
  l'HTML via template string: ogni nuovo campo interpolato va passato da
  `pulisci()`.
- **`soloConTour` è catturato una volta sola** all'avvio, con
  `querySelectorAll`. Un rimando aggiunto al DOM dopo il caricamento non verrebbe
  scoperto.

## HTML

- **`&` va scritto `&amp;` negli attributi `href`.** I `mailto:` dei contatti
  hanno `subject` e `body`: la `&` che li separa è scritta `&amp;`. Copiandola
  come `&` il corpo della mail si perde.
- **`og:image` è l'unico URL assoluto** della pagina: cambiando dominio è
  l'unica riga da aggiornare a mano.
- **Rinominare l'`id` di una sezione** significa aggiornare anche il link
  corrispondente nella nav in testata.

## Contenuti

- **Ogni cifra vuole la sua fonte** nella sezione `FONTI`. Aggiungere un numero
  senza fonte è un difetto, non una svista.
- **Le fonti dei contenuti stanno fuori dal repository** (`docs/` e `Ricerche/`
  del progetto padre): non sono raggiungibili da una clone pulita.
