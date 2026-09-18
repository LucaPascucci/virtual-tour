/* Apre e chiude le schede di "Perché conviene" e "Dove si usa".
   L'apertura e la chiusura le fa <details> da solo: qui si decide solo lo stato
   di partenza. Le schede arrivano aperte dall'HTML e restano tali su schermo
   largo; sotto gli 860px — la soglia del blocco 8 di style.css — partono chiuse,
   perché aperte le due sezioni diventerebbero un muro di testo da scorrere.
   Senza JS la pagina resta com'è sempre stata, con tutte le schede aperte. */

if (window.matchMedia('(max-width: 860px)').matches) {
  document.querySelectorAll('.scheda.richiudibile').forEach((scheda) => {
    scheda.open = false;
  });
}
