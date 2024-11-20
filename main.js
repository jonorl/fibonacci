

function mergeSort(arr) {
  let sortedArray = [];
  if (arr.length === 1) {
    return arr;
  }
  else {
    let firstHalf = mergeSort(arr.slice(0, arr.length / 2));
    let secondHalf = mergeSort(arr.slice(arr.length / 2, arr.length));

    while (firstHalf.length > 0 && secondHalf.length > 0) {
      if (firstHalf[0] < secondHalf[0]) {
        sortedArray.push(firstHalf[0]);
        firstHalf.splice(0, 1);
      } else {
        sortedArray.push(secondHalf[0]);
        secondHalf.splice(0, 1);
      }
    }
    return sortedArray.concat(firstHalf).concat(secondHalf);
  }
}

console.log("This was printed recursively (mergeSort): " + mergeSort([105, 79, 100, 110] ));

function fibs(n) {
  fibsArray = [];
  for (i = 0; i <= n; i++) {
    if (i === 0 || i === 1) {
      fibsArray.push(i);
    } else fibsArray.push(fibsArray[i - 1] + fibsArray[i - 2]);
  }
  return fibsArray.slice(0, n);
}

console.log("This was printed iteratively using Fibs(8): " + fibs(8))

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
  fibsArray = mergeSort(fibsArray)
  fibsRec(n - 1);
}
return fibsArray.slice(0, n)
}

console.log("This was printed recursively using fibsRec(8): " + fibsRec(8));