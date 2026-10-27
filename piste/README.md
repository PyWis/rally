# Piste di Formula Rally

Ogni pista è un file JavaScript a sé. Il gioco Formula Rally (`Rally 1976.html`) all'avvio carica in ordine
`piste/pista1.js`, `piste/pista2.js`, `piste/pista3.js`, … e si ferma al primo numero che non trova.
Le piste finali (come Sydney) stanno a parte, in `piste/finali/finale1.js`, `finale2.js`, …

- Servono **almeno 9 piste normali**, altrimenti il gioco mostra un avviso e non parte.
- I numeri devono essere **consecutivi**: se manca `pista7.js`, `pista8.js` e le successive non vengono caricate.
- Per aggiungere una pista basta creare il file con il numero successivo (es. `pista10.js`).
- Con più di 9 piste il campionato da 9 gare e il campionato FIA estraggono 9 piste a sorte.
  Il campionato si sblocca correndo su 9 piste diverse.
- Le piste finali non compaiono nell'elenco delle piste. Quella con `special:"sydney"`
  (o, se manca, la prima finale) è il GP di Sydney.

Il gioco va aperto dalla cartella che contiene anche `piste/`. Funziona sia aprendo il file dal disco sia da un server web.

## Formato

```js
RallyPiste.add({
  id:"valle",               // identificativo unico (record, fantasma e campionati salvati lo usano: non cambiarlo)
  name:"Valle",             // nome nel menu
  desc:"…",                 // descrizione nel menu
  seed:1983,                // seme del generatore casuale (alberi, case, dettagli)
  waypoints:[[x,y],…],      // punti di controllo del tracciato (anello chiuso), mondo 6400×4800
  finish:[x,y],             // punto più vicino al traguardo
  // facoltativi
  width:170, straightWidth:116,      // larghezza della pista e dei rettilinei
  forests:14, trees:1500, forestsAt:[[x,y,r],…],
  lakes:[{x,y,rx,ry,beach,frozen}], river:[[x,y],…], land:[{x,y,rx,ry,beach}],   // land: isole nel mare
  squares:[{x,y,w,h,fountain:{x,y,r},statues:[{x,y,r}]}], village:{x,y,r,n}, dunes:[{x,y,rx,ry}],
  walls:true, buildings:750, ice:true, engineNeutralize:true, engineFail:false,
  neutral:{lap:10}, scLaps:1,
  rain:{none:true} | {fixedLaps:3} | {normal:false,chance:0.5,times:2,laps:9} | {normal:false,fixed:[[5,14]],q3:true} | {normal:false,countMin:0,countMax:3,lapsMin:3,lapsMax:6},
  zones:[["Nome",x,y],…],            // zone dove i guasti portano safety car o bandiera rossa
  colors:{grass,greens,flowers,sand,water,dirt,trees,pines,pineRatio,mini,…},
  world:[9600,7200], worldRes:0.375, // mondo più grande (solo piste speciali)
  special:"sydney",                  // solo per la finale di Sydney

  // funzioni della pista
  obstacles:[{x,y,r}],               // ostacoli circolari in più (es. il faro)
  clear:[{x,y,r}],                   // zone dove non si mettono alberi né case
  decor(w,api){ … }                  // disegni propri, sul canvas del mondo (coordinate del mondo);
                                     // api = {R: generatore casuale della pista, colors, map}
});
```
