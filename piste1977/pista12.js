// Rally 1977 · pista: Matrix
// Formato e campi: vedi piste1977/README.md
RallyPiste.add({
  id:"matrix",
  name:"Matrix",
  desc:"Mondo cibernetico: un teleporter collega i due lati opposti della pista ed è parte obbligatoria del giro · non piove · niente safety car, solo bandiera rossa",
  seed:1999,
  width:180,
  forests:6,
  trees:500,
  buildings:420,
  rain:{"none":true},
  noSC:true,
  // waypoint 17 = portale d’entrata, 20 = portale d’uscita; 18 e 19 sono il tratto nascosto (fuori mappa)
  teleport:[17,20],
  waypoints:[[5000,2420],[4500,1900],[4650,1200],[4300,750],[3500,700],[2600,700],[1800,720],[1250,1150],[1500,1850],[2400,2000],[3000,2650],[2900,3500],[2200,4000],[1300,3950],[850,3350],[1150,2800],[850,2420],[400,2400],[-200,2400],[6600,2400],[5900,2400]],
  finish:[3100,700],
  lakes:[],
  river:[],
  zones:[["Portale d’ingresso",700,2420],["Portale d’uscita",5500,2410],["Nodo nord",4600,1200],["Ciclo sud",2900,3500]],
  colors:{"grass":"#06140c","greens":["#081a0f","#0a2214","#051109","#0c2617","#071a0e"],"flowers":["#39ff88","#1bd46c"],"sand":"#0d2a1a","water":["#0b2a3a","#12405a","#3fd0ff"],
    "dirt":["#0f3a24","#0b2c1b","#14492d"],"trees":[["#0b3d22","#14663a","#39ff88"]],"pines":[["#062514","#0f4a2a"]],"pineRatio":0.5,"mini":"#0a2414",
    "city":true,"tall":true,"roofs":["#0d1f16","#11291d","#0a1912","#152f22"],"kerb":["#39ff88","#062514"],"road":"#1b2324"},
  // sotto la pista: griglia al neon e colonne di caratteri verdi
  ground(w,api){
    const R=api.R;
    w.strokeStyle='rgba(57,255,136,.10)'; w.lineWidth=2;
    for(let x=0;x<=api.W;x+=160){w.beginPath(); w.moveTo(x,0); w.lineTo(x,api.H); w.stroke();}
    for(let y=0;y<=api.H;y+=160){w.beginPath(); w.moveTo(0,y); w.lineTo(api.W,y); w.stroke();}
    w.font='bold 18px monospace'; w.textAlign='center';
    const glyphs='01アイウエオカキクケコサシスセソ<>/\\=+*';
    for(let c=0;c<70;c++){
      const x=R()*api.W, y0=R()*api.H, n=6+((R()*14)|0);
      for(let k=0;k<n;k++){ w.fillStyle=k===n-1?'rgba(200,255,220,.55)':'rgba(57,255,136,'+(0.08+0.3*k/n).toFixed(2)+')';
        w.fillText(glyphs[(R()*glyphs.length)|0],x,y0+k*22); }
    }
  }
});
