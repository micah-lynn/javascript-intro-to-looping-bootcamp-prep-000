function forLoop(array) {
  for (i=1; i<25; i++) {
    if (i===1){
      return `I am ${i} strange loop.`
    } else {
      return `I am ${i} strange loops.`
    }
  }
}

function whileLoop(n) {
  let countdown = n;
  while (countdown>0) {
    console.log(--countdown);
  } if (countdown === 0) {
    return "done"
  }
}