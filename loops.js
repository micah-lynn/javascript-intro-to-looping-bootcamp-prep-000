function forLoop(array) {
  for (i=0; i<25; i++) {
    array.push (`I am ${i} strange loop${i===0 ? '' : 's'}.`)
  } 
  return array;
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
  } while (incrementVariable() < 10);
}