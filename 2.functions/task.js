function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  max = Math.max(...arr);
  min = Math.min(...arr);
  sum = (arr.reduce((acc, curr) => acc + curr))/arr.length;
  let avg = Number(sum.toFixed(2));
  return { min: min, max: max, avg: avg };
}
console.log(getArrayParams(-99, 99, 10))

function summElementsWorker(...arr) {
  let sum = 0;
  sum = arr.reduce((acc, curr) => acc + curr, sum);
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = 0;
  let max = 0;
  max = arr.length === 0 ? 0 : Math.max(...arr);
  min = arr.length === 0 ? 0 : Math.min(...arr);
  let diff = max - min;
  return (diff);
}

function differenceEvenOddWorker(...arr) {
  let sum1 = 0;
  let sum2 = 0;
  let evenNumbers = arr.filter(num => num % 2 === 0);
  sum1 = evenNumbers.reduce((acc, curr) => acc + curr, sum1);
  let oddNumbers = arr.filter(num => num % 2 != 0);
  sum2 = oddNumbers.reduce((acc, curr) => acc + curr, sum2);
  let diff = sum1 - sum2;
  return diff;
}

function averageEvenElementsWorker(...arr) {
  let sum = 0;
  let evenNumbers = arr.filter(num => num % 2 === 0);
  sum = evenNumbers.reduce((acc, curr) => acc + curr, sum)
  if(sum != 0){
    result = sum/evenNumbers.length;
  return result;
  } else{
    return sum;
  }
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = 0;
  for(i = arrOfArr[0]; i <= arrOfArr.length; i++){
    let arrElements = func(i);
    if(arrElements > maxWorkerResult){
    maxWorkerResult = arrElements; 
    }
    return maxWorkerResult;
  }
}
