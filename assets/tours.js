/* Costruisce le schede della sezione "Tour pubblicati" leggendo tours.json.
   Per aggiungere o togliere un tour si modifica solo tours.json: qui non serve
   mettere le mani. */

const elenco = document.querySelector('#elenco-tour');
const messaggioVuoto = document.querySelector('#tour-vuoto');

fetch('assets/tours.json')
  .then((risposta) => risposta.json())
  .then(disegna)
  .catch(() => mostraMessaggio('Elenco dei tour non disponibile.'));

function disegna(tours) {
  if (!Array.isArray(tours) || tours.length === 0) {
    mostraMessaggio();
    return;
  }
  elenco.innerHTML = tours.map(scheda).join('');
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

function mostraMessaggio(testoAlternativo) {
  if (testoAlternativo) messaggioVuoto.textContent = testoAlternativo;
  messaggioVuoto.hidden = false;
}
