function solution(num) {
    if (num < 0) {
        return 0;
    }
    var sum = 0;
    for (var i = 1; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(solution(10));
