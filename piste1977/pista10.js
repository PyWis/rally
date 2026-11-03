// Rally 1977 · pista: Oceano
// Formato e campi: vedi piste1977/README.md
RallyPiste.add({
  id:"oceano",
  name:"Oceano",
  desc:"Metà sull’isola e metà sul mare aperto: chi esce di strada sull’acqua affonda come nel fiume · se piove, piove per 4 giri",
  seed:1977,
  width:200,
  forests:2,
  trees:900,
  rain:{"dur":4},
  land:[{"x":1850,"y":2400,"rx":2000,"ry":2300,"beach":140},{"x":4650,"y":2350,"rx":420,"ry":330,"beach":90}],
  forestsAt:[[1400,2400,520],[2300,1500,380]],
  village:{"x":1900,"y":3150,"r":420,"n":26},
  waypoints:[[700,4000],[1700,4060],[2700,4000],[3700,3920],[4700,4120],[5600,3800],[5950,3000],[5450,2350],[5850,1650],[5550,900],[4600,700],[3700,980],[3000,720],[2100,600],[1200,800],[700,1500],[1100,2300],[700,3100]],
  finish:[1700,4060],
  lakes:[],
  river:[],
  zones:[["Ponte del largo",4700,4120],["Curva della boa",5950,3000],["Esse sul mare",5450,2350],["Rientro sull’isola",3050,740]],
  colors:{"grass":"#5e9a3a","greens":["#58923a","#66a244","#4f8a34","#72aa4c","#5c963c"],"flowers":["#f2e46a","#ffffff"],"sand":"#ecd9a2","water":["#13609e","#2479b8","#7ec4ea"],"dirt":["#a58a5a","#94784a","#b89c6a"],"trees":[["#2f6a24","#448a32","#66a84a"]],"pines":[["#1f4a1b","#2e6a28"]],"pineRatio":0.6,"mini":"#4f8a32","roofs":["#c4664a","#e8e4da","#b5523b","#d1a06a","#9fb4c4"]},
  // barche a vela al largo, lontano dalla pista
  decor(w){
    for(const [x,y,a] of [[4300,3200,0.3],[5000,1500,-0.6],[4100,1700,1.2],[6100,4500,0.1],[3300,4500,-0.2],[6150,400,0.8]]){
      w.save(); w.translate(x,y); w.rotate(a);
      w.fillStyle='rgba(255,255,255,.35)'; w.fillRect(-70,-3,40,6);
      w.fillStyle='#7a4a2a'; w.beginPath(); w.moveTo(-30,-14); w.lineTo(30,-10); w.lineTo(38,0); w.lineTo(30,10); w.lineTo(-30,14); w.closePath(); w.fill();
      w.fillStyle='#f4f4f0'; w.beginPath(); w.moveTo(-6,-2); w.lineTo(22,0); w.lineTo(-6,26); w.closePath(); w.fill();
      w.restore();
    }
  }
});
