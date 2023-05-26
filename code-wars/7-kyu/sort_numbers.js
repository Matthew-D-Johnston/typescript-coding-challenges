function solution(nums) {
    if (nums.length === 0) {
        return [];
    }
    return nums.sort(function (a, b) {
        return a - b;
    });
}
console.log(solution([1, 2, 10, 50, 5]));
