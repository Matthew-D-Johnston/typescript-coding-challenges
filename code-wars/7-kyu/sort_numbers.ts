function solution(nums: number[]): number[] {
  if (nums.length === 0) {
    return [];
  }

  return nums.sort((a: number, b: number) => {
    return a - b;
  });
}

console.log(solution([1, 2, 10, 50, 5]));
