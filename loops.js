function forLoop(array) {
  for (i=1; i<26; i++) {
    if (i===1){
      console.log (`I am ${i} strange loop.`)
    } else {
      console.log (`I am ${i} strange loops.`)
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

function doWhileLoop(num) {
  var i = 0;
 
  function incrementVariable() {
    i = i + 1;
    return i;
  }
  
  do {
    console.log ("I run once regardless.");
  } while (incrementVariable() < 11);
}