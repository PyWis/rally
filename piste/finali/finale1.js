// Rally 1976 · pista finale: Sydney
// Formato e campi: vedi piste/README.md
RallyPiste.add({
  id:"sydney",
  name:"Sydney",
  desc:"GP internazionale: il doppio di ogni altra pista, in città sulla baia",
  special:"sydney",
  world:[9600,7200],
  worldRes:0.375,
  seed:1788,
  forests:10,
  trees:450,
  waypoints:[[1200,6600],[3000,6750],[5000,6750],[7000,6650],[8400,6300],[9000,5600],[9100,4600],[8700,3900],[9100,3200],[9000,2200],[8600,1300],[9000,700],[8400,400],[7600,600],[7300,1500],[7400,2600],[6900,3200],[6400,2700],[6500,1500],[6200,700],[5500,500],[4900,900],[4700,2000],[5100,3000],[5000,4200],[4400,4700],[3800,4300],[3900,3000],[3600,2000],[3700,900],[3000,500],[2950,1500],[3150,2600],[2700,3250],[2050,3050],[1750,2300],[1850,1400],[1600,650],[1200,800],[700,1500],[600,2700],[1100,3500],[700,4400],[600,5400],[800,6200]],
  finish:[4000,6750],
  lakes:[{"x":7000,"y":4900,"rx":1100,"ry":600}],
  river:[[2500,-20],[2450,1500],[2650,3200],[2400,4800],[2550,7220]],
  zones:[["Curva della baia",8700,3900],["Ponte del porto",2650,3150],["Tornante nord",6400,2700],["Discesa ovest",650,4400],["Esse di Bondi",4700,2000]],
  colors:{"grass":"#948f86","greens":["#8f8a80","#9a958c","#8a857c","#a19c93","#918c83"],"flowers":["#a8a39a","#7e7970"],"sand":"#e6d3a0","water":["#1d6aa6","#2a82c0","#7ec4ea"],"dirt":["#cfc8ba","#c3bcae","#d9d2c4"],"trees":[["#3f6a34","#548444","#78a35e"],["#4d6b3c","#64844c","#87a868"]],"pines":[["#2e5a2a","#447a3a"]],"pineRatio":0.15,"mini":"#6f6a62","city":true,"tall":true,"roofs":["#b9c4cc","#93a6b3","#d8d2c4","#c9a27a","#6f7f8a","#a8b8a0","#e2ddd2"]},
  buildings:1900,
  engineFail:false,
  rain:{"normal":false,"countMin":0,"countMax":3,"lapsMin":3,"lapsMax":6},
  // Opera House sulla riva della baia: intorno niente alberi né palazzi
  clear:[{x:7000,y:4120,r:300}],
  decor(w){
    w.save(); w.translate(7000,4120);
    w.fillStyle='rgba(0,0,0,.25)'; w.fillRect(-150+12,-70+14,300,140);
    w.fillStyle='#d9c7a2'; w.fillRect(-150,-70,300,140);
    w.fillStyle='#c8b48c'; w.fillRect(-150,50,300,20);
    for(const [sx,sy,sz] of [[-95,-20,80],[-30,-20,92],[40,-20,80],[-70,35,60],[-10,35,70],[55,35,58]]){
      w.fillStyle='rgba(0,0,0,.18)'; w.beginPath(); w.moveTo(sx-sz/2+8,sy+sz*0.35+8); w.quadraticCurveTo(sx-sz*0.1+8,sy-sz*0.6+8,sx+sz/2+8,sy-sz*0.2+8); w.lineTo(sx+sz*0.2+8,sy+sz*0.35+8); w.closePath(); w.fill();
      w.fillStyle='#f6f4ee'; w.beginPath(); w.moveTo(sx-sz/2,sy+sz*0.35); w.quadraticCurveTo(sx-sz*0.1,sy-sz*0.6,sx+sz/2,sy-sz*0.2); w.lineTo(sx+sz*0.2,sy+sz*0.35); w.closePath(); w.fill();
      w.strokeStyle='#cfcabf'; w.lineWidth=3; w.stroke();
    }
    w.restore();
  }
});
