// Formula Rally · pista: Campagna
// Formato e campi: vedi piste/README.md
RallyPiste.add({
  id:"campagna",
  name:"Campagna",
  desc:"Rettilinei stretti e una piazza grandissima · ogni guasto neutralizza la gara",
  engineNeutralize:true,
  seed:1848,
  width:170,
  straightWidth:116,
  forests:16,
  trees:1300,
  squares:[{"x":3200,"y":2350,"w":1000,"h":700,"fountain":{"x":3200,"y":2520,"r":60}}],
  zones:[["Piazza grande",3200,2300],["Tornante del mulino",5750,750],["Curva del laghetto",5500,2350],["Discesa ovest",600,2200]],
  colors:{"grass":"#4f8a34","greens":["#4a8230","#58923a","#8aa04a","#b5a75a","#4c8632","#6c9a3e"],"flowers":["#f2e46a","#ffffff"],"sand":"#c9b27a","water":["#2b66a8","#3474b8","#6fa3d8"],"dirt":["#a58a5a","#94784a","#b89c6a"],"trees":[["#3a5e24","#4f7a30","#6e9a46"],["#4a6a2a","#5f8636","#82a85a"]],"pines":[["#1f3f1a","#2d5a26"]],"pineRatio":0.45,"mini":"#3f6e2a","cobble":["#a8987a","#b8a888","#9a8a6e"]},
  waypoints:[[700,4300],[1900,4420],[3100,4420],[4300,4350],[5300,4100],[5900,3500],[5950,2800],[5500,2350],[4700,2450],[4100,2450],[3650,2450],[3200,2200],[2750,2450],[2250,2500],[1800,2100],[1900,1500],[2600,1250],[3600,1300],[4600,1250],[5400,1100],[5750,750],[5300,450],[4200,450],[3000,500],[1800,500],[1000,600],[600,1200],[600,2200],[750,3000],[550,3700]],
  finish:[2000,4420],
  lakes:[{"x":4300,"y":3300,"rx":420,"ry":260}],
  river:[]
});
