// Formula Rally · pista: Spiaggia
// Formato e campi: vedi piste/README.md
RallyPiste.add({
  id:"spiaggia",
  name:"Spiaggia",
  desc:"Tre isole unite da ponti lunghi e dritti · pioggia dal 5° al 14° giro, doppia dal 7° al 13°, e in Q3 · safety car al 10° giro, per un giro",
  seed:1969,
  forests:8,
  trees:650,
  engineNeutralize:true,
  neutral:{"lap":10},
  scLaps:1,
  rain:{"normal":false,"fixed":[[5,14],[7,13]],"q3":true},
  land:[{"x":1700,"y":2700,"rx":1350,"ry":1700,"beach":120},{"x":5200,"y":3900,"rx":900,"ry":650,"beach":110},{"x":5200,"y":1100,"rx":900,"ry":700,"beach":110}],
  squares:[{"x":1600,"y":2620,"w":900,"h":500,"statues":[{"x":1500,"y":2455,"r":34},{"x":1720,"y":2790,"r":34}]}],
  waypoints:[[900,3800],[1600,3800],[2400,3800],[3200,3800],[4000,3800],[4700,3800],[5200,4150],[5750,4050],[5650,3600],[5600,3200],[5600,2600],[5600,2000],[5600,1650],[5850,1150],[5600,600],[4900,550],[4650,850],[4500,1200],[4250,1300],[3500,1300],[2700,1300],[2300,1300],[1500,1350],[1000,1750],[850,2300],[1250,2650],[1950,2600],[2550,2750],[2650,3200],[2100,3250],[1300,3200],[750,3450]],
  finish:[1600,3800],
  lakes:[],
  river:[],
  zones:[["Ponte lungo",3500,3800],["Ponte nord",5600,2500],["Ponte del ritorno",3400,1300],["Piazza delle statue",1600,2620]],
  colors:{"grass":"#8fb35a","greens":["#87ab52","#97bb62","#7fa34a","#a3c26e","#8cb057"],"flowers":["#ffe680","#ffffff"],"sand":"#ecd9a0","water":["#1f78b4","#3a93cc","#8fd3f0"],"dirt":["#d8c38e","#cbb47c","#e2cf9e"],"trees":[["#3f7a2a","#58993a","#7fbf55"]],"pines":[["#2f6a2a","#4a8c3a"]],"pineRatio":0.2,"mini":"#8fb35a","cobble":["#e3d3a8","#efe2bd","#d5c393"]}
});
