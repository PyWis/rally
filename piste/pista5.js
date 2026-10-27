// Formula Rally · pista: Deserto
// Formato e campi: vedi piste/README.md
RallyPiste.add({
  id:"deserto",
  name:"Deserto",
  desc:"Veloce e asciutta: qui non piove mai",
  seed:1977,
  forests:10,
  trees:900,
  rain:{"none":true},
  zones:[["Tornante delle dune",5800,700],["Esse dell’oasi",2600,2600],["Curvone sud",5500,3800],["Canyon",900,1100]],
  colors:{"grass":"#d9b77a","greens":["#d2ae70","#e0c088","#cfa766","#e6c994","#d6b47c"],"flowers":["#b08a55","#f0dcae"],"sand":"#e8d2a0","water":["#2f7fa0","#3d93b4","#8cc8dc"],"dirt":["#c49a5e","#b38a52","#d4aa6e"],"trees":[["#3e6b2f","#56873e","#7aa85a"]],"pines":[["#8a7560","#a89078"]],"pineRatio":0.55,"mini":"#b8975e","desert":true},
  waypoints:[[700,4300],[2000,4430],[3300,4400],[4500,4200],[5500,3800],[6000,3100],[5900,2300],[5300,1900],[4500,2000],[3900,2600],[3200,2900],[2600,2600],[2700,1900],[3400,1500],[4200,1200],[5200,1100],[5800,700],[5300,350],[4000,400],[2700,500],[1600,600],[900,1100],[700,2000],[1200,2800],[800,3500],[550,3950]],
  finish:[2100,4430],
  lakes:[{"x":1900,"y":1700,"rx":300,"ry":200}],
  river:[]
});
