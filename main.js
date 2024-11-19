function fibs(n) {
    fibsArray = [];
    for (i = 0; i <= n; i++) {
      if (i === 0 || i === 1) {
        fibsArray.push(i);
      } else fibsArray.push(fibsArray[i - 1] + fibsArray[i - 2]);
    }
    return fibsArray.slice(0, n);
  }

console.log("Fibs(8): " + fibs(8))

function fibsRec (n) {
    fibsArray = [];
    if (n < 2) fibsArray.push(n);
    else  fibsArray.push(fibsRec(n-1) + fibsRec(n-2))
    return fibsArray
  }

function fibonacci(n) {
  if (n < 2) return n;
  else return fibonacci(n - 1) + fibonacci(n - 2);
}
  
fibsArray = [0, 1];
let fiboNum;
function fibsRec(n) {
  if (n === 1) {
    return fibsArray;
  } else if(n === 0){
    fibsArray = [fibsArray[0]]
  } else {
    fiboNum = fibonacci(n);
    fibsArray.push(fiboNum);
    fibsArray.sort(function(a, b){return a-b}) 
    fibsRec(n - 1);
  }
  return fibsArray.slice(0, n)
}

console.log("fibsRec(8): " + fibsRec(8));