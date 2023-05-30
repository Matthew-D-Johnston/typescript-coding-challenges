const findOdd = (nums: number[]): number => {
  let numsCount: {[key: string]: number} = {};

  nums.forEach(num => {
    let stringNum: string = String(num);
    if (numsCount[stringNum]) {
      numsCount[stringNum] += 1;
    } else {
      numsCount[stringNum] = 1;
    }
  });

  let oddInt: any;

  Object.keys(numsCount).forEach(num => {
    if (numsCount[num] % 2 === 1) {
      oddInt = parseInt(num, 10);
    }
  });

  return oddInt;
}

console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));
console.log(findOdd([0,1,0,1,0]));
