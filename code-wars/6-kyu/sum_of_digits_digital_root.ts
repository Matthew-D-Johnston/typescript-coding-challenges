const digitalRoot = (n: number): number => {
  let strNum = String(n);

  while (strNum.length > 1) {
    let strDigits = strNum.split('');
    let sum = 0;
    strDigits.forEach(strDigit => {
      sum += parseInt(strDigit, 10);
    })
    strNum = String(sum);
  }

  return parseInt(strNum, 10);
}

console.log(digitalRoot(16));
console.log(digitalRoot(942));
console.log(digitalRoot(132189));
console.log(digitalRoot(493193));
