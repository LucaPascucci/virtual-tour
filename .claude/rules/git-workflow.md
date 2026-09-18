# Workflow git

## `main` è il sito pubblicato

GitHub Pages serve il branch `main` dalla root: non c'è staging, non c'è
pipeline. Quello che finisce su `main` è online in un minuto. Prima di
pubblicare, guardare la pagina in locale.

## Tag e versioni

I tag sono numeri nudi, **senza prefisso `v`**: `0.0.1`, `0.1.0`, `1.0.0`. Il
tag si mette sul commit che rappresenta la versione, e la stessa versione va
chiusa in `CHANGELOG.md` con la sua data.

Semantica, per un sito vetrina:

- **patch** (`0.0.x`) — correzioni di testo, ritocchi di stile, nuovi tour;
- **minor** (`0.x.0`) — nuove sezioni, comportamenti nuovi, cambi ai contatti;
- **major** (`x.0.0`) — riscrittura o cambio di dominio.

## Commit

Messaggi in italiano, imperativi e brevi, che dicono *cosa cambia per chi
guarda la pagina* — non quale riga di CSS è stata toccata.

## Prima di taggare

1. La pagina si apre e si legge bene nei due temi e a schermo stretto.
2. Ogni cifra nuova ha la sua fonte in `FONTI`.
3. `CHANGELOG.md`: le voci sotto `[Unreleased]` passano sotto la nuova versione,
   con la data del giorno.
4. Tag, push, e `git push --tags`.
