/* Apre e chiude il menu di navigazione sugli schermi stretti.
   Sopra gli 860px il bottone è nascosto dal CSS e la nav resta sempre visibile:
   qui non serve sapere quanto è larga la finestra. */

const bottoneMenu = document.querySelector('.apri-menu');
const menu = document.querySelector('#menu');

bottoneMenu.addEventListener('click', () => {
  const aperto = bottoneMenu.getAttribute('aria-expanded') === 'true';
  bottoneMenu.setAttribute('aria-expanded', String(!aperto));
});

/* Scelta una voce il menu si richiude: aperto coprirebbe la sezione
   appena raggiunta. */
menu.addEventListener('click', (evento) => {
  if (evento.target.closest('a')) bottoneMenu.setAttribute('aria-expanded', 'false');
});
