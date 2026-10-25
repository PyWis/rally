// Rally 1976 · pista: Ghiacciaio
// Formato e campi: vedi piste/README.md
RallyPiste.add({
  id:"ghiacciaio",
  name:"Ghiacciaio",
  desc:"Ghiaccio del nord: aderenza da pioggia su tutto il giro, gomme da pioggia vietate",
  seed:1952,
  forests:16,
  trees:1400,
  ice:true,
  rain:{"none":true},
  waypoints:[[800,4250],[2000,4400],[3200,4350],[4200,4100],[4700,3500],[4400,2900],[3700,2700],[3300,2200],[3800,1700],[4700,1800],[5400,2300],[6000,1900],[6000,1100],[5400,500],[4300,500],[3300,700],[2500,1100],[2000,700],[1100,600],[600,1100],[800,1800],[1600,2200],[1700,2900],[900,3200],[550,3700]],
  finish:[1900,4390],
  lakes:[{"x":2600,"y":3300,"rx":450,"ry":300,"frozen":true},{"x":5600,"y":3600,"rx":380,"ry":260,"frozen":true}],
  river:[],
  zones:[["Lago gelato",3300,2300],["Tornante del fiordo",5400,500],["Discesa della morena",2000,700],["Curva della slitta",900,3200]],
  colors:{"grass":"#e6ecef","greens":["#dfe6ea","#f2f5f7","#d4dde3","#e9eef1","#cdd8df"],"flowers":["#ffffff","#bfcfd9"],"sand":"#c9d6de","water":["#a9cfe3","#c4e0ee","#eef8fc"],"dirt":["#b8c2c8","#a7b2b9","#c9d1d6"],"trees":[["#5a5048","#776a5e","#9a8d80"]],"pines":[["#2a4a3a","#e8f0f4"],["#335a44","#f4f8fa"]],"pineRatio":0.85,"mini":"#7f98a8"}
});
