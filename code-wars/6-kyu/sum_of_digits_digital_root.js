var digitalRoot = function (n) {
    var strNum = String(n);
    var _loop_1 = function () {
        var strDigits = strNum.split('');
        var sum = 0;
        strDigits.forEach(function (strDigit) {
            sum += parseInt(strDigit, 10);
        });
        strNum = String(sum);
    };
    while (strNum.length > 1) {
        _loop_1();
    }
    return parseInt(strNum, 10);
};
console.log(digitalRoot(16));
console.log(digitalRoot(942));
console.log(digitalRoot(132189));
console.log(digitalRoot(493193));
