let p1 = [4, 6, 8, 10, 12];
let p2 = [4, 6, 8, 10, 12];
let p3 = [4, 6, 8, 10, 12];
let p4 = [4, 6, 8, 10, 12];
let p5 = [0];
let p6 = [0];

for(let a of p1) {
  for(let b of p2) {
    for(let c of p3) {
      for(let d of p4) {
        for(let e of p5) {
          for(let f of p6) {
            console.log(`${a}, ${b}, ${c}, ${d}, ${e}, ${f}`)
          }
        }
      }
    }
  }
};
