# Piste di Rally 1977

Ogni pista è un file JavaScript a sé. Il gioco (`Rally 1977.html`) all'avvio carica in ordine
`piste1977/pista1.js`, `piste1977/pista2.js`, `piste1977/pista3.js`, … e si ferma al primo numero che non trova.
Le piste finali (come Sydney) stanno a parte, in `piste1977/finali/finale1.js`, `finale2.js`, …

- Servono **almeno 12 piste normali**, altrimenti il gioco mostra un avviso e non parte.
- I numeri devono essere **consecutivi**: se manca `pista7.js`, `pista8.js` e le successive non vengono caricate.
- Per aggiungere una pista basta creare il file con il numero successivo (es. `pista13.js`).
- I campionati (Classic, Gran Premio, Endurance) si corrono su tutte le piste.
- Le piste finali non compaiono nell'elenco delle piste. Quella con `special:"sydney"`
  (o, se manca, la prima finale) è il GP di Sydney.

Il gioco va aperto dalla cartella che contiene anche `piste1977/`. La versione 1976 usa ancora la cartella `piste/`. Funziona sia aprendo il file dal disco sia da un server web.

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
  rain:{none:true} | {dur:4} | {fixedLaps:3} | {normal:false,chance:0.5,times:2,laps:9} | {normal:false,fixed:[[5,14]],q3:true} | {normal:false,countMin:0,countMax:3,lapsMin:3,lapsMax:6},
  zones:[["Nome",x,y],…],            // zone dove i guasti portano safety car o bandiera rossa
  noSC:true,                         // niente safety car: ogni neutralizzazione diventa bandiera rossa
  cross:true,                        // la pista si incrocia a raso (le auto restano sul ramo che stanno percorrendo)
  teleport:[a,b],                    // waypoint a = portale d’entrata, b = portale d’uscita (a<b): il tratto tra i due
                                     // non si disegna e non si guida; conviene che prosegua dritto oltre i portali
  colors:{grass,greens,flowers,sand,water,dirt,trees,pines,pineRatio,mini,kerb:[c1,c2],road,…},
  world:[9600,7200], worldRes:0.375, // mondo più grande (solo piste speciali)
  special:"sydney",                  // solo per la finale di Sydney

  // funzioni della pista
  obstacles:[{x,y,r}],               // ostacoli circolari in più (es. il faro)
  clear:[{x,y,r}],                   // zone dove non si mettono alberi né case
  ground(w,api){ … }                 // disegni sotto la pista (api = {R, colors, map, W, H})
  decor(w,api){ … }                  // disegni propri, sul canvas del mondo (coordinate del mondo);
                                     // api = {R: generatore casuale della pista, colors, map}
});
```
