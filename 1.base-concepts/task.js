"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4*a*c;
  if (d > 0) {
    let root1 = (-b + Math.sqrt(d) )/(2*a);
    let root2 = (-b - Math.sqrt(d) )/(2*a);
    arr.push(root1, root2)
  } else if(d == 0) {
    let root = -b/(2*a);
    arr.push(root);
  }
  return arr;
}

console.log(solveEquation(2,3,4))

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let rate = (percent/100)/12;
  let loanBody = amount - contribution;
  let monPayment = loanBody*(rate + (rate / (((1 + rate)**countMonths) - 1)));
  let totalAmount = monPayment*countMonths;
  let roundedTotalAmount = totalAmount.toFixed(2);
  return (Number(roundedTotalAmount));
}
console.log(calculateTotalMortgage(10,0,50000,12))
console.log(calculateTotalMortgage(10,1000,50000,12))
console.log(calculateTotalMortgage(10,20000,20000,48))
console.log(calculateTotalMortgage(10,0,10000,36))
console.log(calculateTotalMortgage(15,0,10000,36))
