// Formula Rally · pista: Isola
// Formato e campi: vedi piste/README.md
RallyPiste.add({
  id:"isola",
  name:"Isola",
  desc:"Ovale con 4 curve a 90°: laguna, bosco, villaggio e faro · 3 piogge possibili (20% ciascuna, 2-5 giri) e con la pioggia entra la safety car",
  seed:1931,
  width:238,
  forests:1,
  trees:1300,
  rain:{"normal":false,"chance":0.2,"times":3,"lapsMin":2,"lapsMax":5,"scOnRain":true},
  land:[{"x":3200,"y":2400,"rx":3000,"ry":2100,"beach":120},{"x":1400,"y":1100,"rx":900,"ry":800,"beach":120},{"x":5000,"y":1100,"rx":900,"ry":800,"beach":120},{"x":1400,"y":3700,"rx":900,"ry":800,"beach":120},{"x":5000,"y":3700,"rx":900,"ry":800,"beach":120}],
  forestsAt:[[1500,1350,420],[650,650,380],[2000,600,300]],
  village:{"x":4550,"y":1350,"r":520,"n":34},
  dunes:[{"x":4500,"y":3250,"rx":330,"ry":180},{"x":4050,"y":3500,"rx":220,"ry":130}],
  waypoints:[[1450,4000],[2200,4000],[3000,4000],[3800,4000],[4950,4000],[5268,3868],[5400,3550],[5400,2950],[5400,2400],[5400,1850],[5400,1250],[5268,932],[4950,800],[4200,800],[3200,800],[2200,800],[1450,800],[1132,932],[1000,1250],[1000,1850],[1000,2400],[1000,2950],[1000,3550],[1132,3868]],
  finish:[2600,4000],
  lakes:[{"x":1700,"y":3300,"rx":300,"ry":200}],
  river:[],
  zones:[["Curva della laguna",1132,3868],["Curva del bosco",1132,932],["Curva del villaggio",5268,932],["Curva del faro",5268,3868]],
  colors:{"grass":"#5e9a3a","greens":["#58923a","#66a244","#4f8a34","#72aa4c","#5c963c"],"flowers":["#f2e46a","#ffffff"],"sand":"#e8d49a","water":["#1b6fa8","#2f88c2","#86c9ec"],"dirt":["#a58a5a","#94784a","#b89c6a"],"trees":[["#2f6a24","#448a32","#66a84a"]],"pines":[["#1f4a1b","#2e6a28"]],"pineRatio":0.5,"mini":"#4f8a32","roofs":["#c4664a","#e8e4da","#b5523b","#d1a06a","#9fb4c4"]},
  // faro a strisce, visto dall’alto: è anche un ostacolo e intorno non crescono alberi
  obstacles:[{x:5600,y:4200,r:42}],
  clear:[{x:5600,y:4200,r:140}],
  decor(w){
    const o={x:5600,y:4200};
    w.fillStyle='rgba(0,0,0,.3)'; w.beginPath(); w.arc(o.x+16,o.y+20,46,0,Math.PI*2); w.fill();
    for(const [r,c] of [[46,'#d8312c'],[38,'#f4f4f0'],[29,'#d8312c'],[20,'#2b2f36'],[13,'#ffe680']]){w.fillStyle=c; w.beginPath(); w.arc(o.x,o.y,r,0,Math.PI*2); w.fill();}
    w.fillStyle='rgba(255,236,140,.35)'; w.beginPath(); w.moveTo(o.x,o.y); w.arc(o.x,o.y,260,-2.4,-1.9); w.closePath(); w.fill();
  }
});
