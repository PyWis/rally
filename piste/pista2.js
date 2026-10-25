// Rally 1976 · pista: Costa
// Formato e campi: vedi piste/README.md
RallyPiste.add({
  id:"costa",
  name:"Costa",
  desc:"Veloce, vista mare",
  seed:2024,
  forests:9,
  trees:1000,
  waypoints:[[800,4250],[1900,4420],[3100,4420],[4300,4300],[5300,3950],[5950,3300],[6000,2500],[5600,1900],[4900,1750],[4400,2150],[3800,2350],[3200,2050],[3000,1400],[3400,800],[2900,450],[2000,500],[1200,700],[700,1300],[500,2200],[800,3000],[500,3700]],
  finish:[2300,4420],
  lakes:[{"x":3300,"y":3300,"rx":650,"ry":380},{"x":5700,"y":350,"rx":1100,"ry":550,"beach":90}],
  river:[],
  zones:[["Esse della baia",4400,2150],["Curva del faro",5950,2700],["Tornante nord",3300,800],["Discesa ovest",650,2600]],
  colors:{"grass":"#6a9a3c","greens":["#649234","#73a144","#5d8a32","#7ca94b","#6b983b"],"flowers":["#f3e6a0","#ffffff"],"sand":"#e2cf98","water":["#1f6fb0","#2c86c4","#7cc0e6"],"dirt":["#d4bd88","#c4ab76","#e2cf9e"],"trees":[["#3f6e2a","#548c38","#74ab50"]],"pines":[["#2b5c25","#41803a"]],"pineRatio":0.75,"mini":"#4f7a2e"}
});
