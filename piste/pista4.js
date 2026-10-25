// Rally 1976 · pista: Capitol
// Formato e campi: vedi piste/README.md
RallyPiste.add({
  id:"capitol",
  name:"Capitol",
  desc:"Città, barriere e strade larghe · 2 possibili piogge da 9 giri (50% ciascuna)",
  seed:753,
  width:230,
  walls:true,
  forests:6,
  trees:220,
  buildings:750,
  rain:{"normal":false,"chance":0.5,"times":2,"laps":9},
  zones:[["Curva del Campidoglio",3700,3300],["Ponte nord",4850,700],["Lungotevere",4850,3000],["Viale ovest",700,2000]],
  colors:{"grass":"#8f8a80","greens":["#8a857b","#96918a","#858077","#9c968c","#8c877e"],"flowers":["#a39e94","#7d786f"],"sand":"#c9c2b4","water":["#3d6f8c","#4a7f9c","#86b0c8"],"dirt":["#c8c1b3","#bdb6a8","#d3ccbe"],"trees":[["#2f5a28","#437a35","#62994a"]],"pines":[["#24461f","#35632c"]],"pineRatio":0.2,"mini":"#6f6a62","city":true,"roofs":["#b5523b","#c4664a","#a3483a","#8e8a84","#c98a5a","#d1a06a"]},
  waypoints:[[1000,4350],[2000,4350],[3200,4350],[3600,4250],[3700,3900],[3700,3300],[3850,3050],[4200,3000],[5000,3000],[5350,2900],[5450,2600],[5450,1900],[5600,1600],[5900,1500],[6000,1200],[5900,900],[5400,700],[4600,700],[4300,800],[4200,1100],[4200,1800],[4050,2050],[3700,2100],[2900,2100],[2600,1950],[2500,1600],[2500,900],[2350,600],[2000,550],[1200,550],[850,700],[700,1000],[700,2500],[750,3200],[1000,3500],[740,3900],[720,4180]],
  finish:[1900,4350],
  lakes:[],
  river:[[4900,-20],[4850,800],[4950,1600],[4800,2400],[4900,3200],[4800,4000],[4900,4820]]
});
