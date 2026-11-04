// Rally 1977 · pista: Circuito 8
// Formato e campi: vedi piste1977/README.md
RallyPiste.add({
  id:"otto",
  name:"Circuito 8",
  desc:"Laghi, boschi e fiume come in Valle, ma la pista si incrocia a raso: all’incrocio ci si può scontrare · niente safety car: ogni neutralizzazione è bandiera rossa",
  seed:1978,
  forests:14,
  trees:1500,
  cross:true,
  noSC:true,
  waypoints:[[3200,2400],[3900,3050],[4700,3700],[5500,3850],[6000,3400],[6050,2400],[6000,1400],[5500,950],[4700,1100],[3900,1750],[3200,2400],[2500,3050],[1700,3700],[900,3850],[450,3300],[400,2400],[450,1500],[900,950],[1700,1100],[2500,1750]],
  finish:[6050,2550],
  lakes:[{"x":1450,"y":2400,"rx":420,"ry":300},{"x":4850,"y":2400,"rx":360,"ry":260},{"x":3200,"y":4350,"rx":420,"ry":230}],
  river:[[-20,380],[1200,260],[2400,430],[3600,300],[4800,440],[6420,320]],
  zones:[["Incrocio",3200,2400],["Tornante del lago",450,3300],["Curva del fiume",3600,1950],["Esse sud",4700,3700],["Curva nord",900,950]],
  colors:{"grass":"#3f7a2a","greens":["#3a7226","#447f2d","#356a24","#4c8a33","#3d7529"],"flowers":["#e8e07a","#f2f2f2"],"sand":"#c9b27a","water":["#2b66a8","#3474b8","#6fa3d8"],"dirt":["#a58a5a","#94784a","#b89c6a"],"trees":[["#295a1e","#3a7c2b","#5a9b3c"]],"pines":[["#1f4a1b","#2e6a28"]],"pineRatio":0.35,"mini":"#2b5a20"},
  clear:[{x:3200,y:2400,r:420}]
});
