/* Costruisce le schede della sezione "Tour pubblicati" leggendo tours.json.
   Tutto ciò che rimanda alla sezione — la sezione stessa, la voce di menu, il
   bottone in fondo a "Cos'è" — è marcato data-solo-con-tour nell'HTML e resta nascosto
   finché il JSON non contiene almeno un tour: per pubblicare si modifica solo
   tours.json, qui non serve mettere le mani. */

const elenco = document.querySelector('#elenco-tour');
const soloConTour = document.querySelectorAll('[data-solo-con-tour]');

fetch('assets/tours.json')
  .then((risposta) => risposta.json())
  .then(disegna)
  .catch(ignora);

function disegna(tours) {
  if (!Array.isArray(tours) || tours.length === 0) return;
  elenco.innerHTML = tours.map(scheda).join('');
  soloConTour.forEach((elemento) => { elemento.hidden = false; });
}

function scheda(tour) {
  const titolo = pulisci(tour.titolo);
  return `
    <article class="scheda tour">
      <img src="${pulisci(tour.immagine)}" alt="Anteprima del virtual tour: ${titolo}" loading="lazy">
      <div class="testo">
        <h3>${titolo}</h3>
        <p class="luogo">${pulisci(tour.luogo)}</p>
        <p>${pulisci(tour.descrizione)}</p>
        <a class="apri" href="${pulisci(tour.link)}" target="_blank" rel="noopener"
           aria-label="Apri il virtual tour: ${titolo}">Apri il tour</a>
      </div>
    </article>`;
}

/* I valori del JSON finiscono dentro l'HTML: vanno neutralizzati. */
function pulisci(valore) {
  const sostituzioni = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };
  return String(valore ?? '').replace(/[&<>"]/g, (carattere) => sostituzioni[carattere]);
}

/* JSON mancante o malformato: resta tutto nascosto, la pagina non cambia.
   Meglio una sezione in meno che un messaggio d'errore a un potenziale cliente. */
function ignora() {}
