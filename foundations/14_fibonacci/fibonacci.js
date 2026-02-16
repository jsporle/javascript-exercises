const fibonacci = (n) => {
    const num = Number(n);

    if (num === 0) return 0;
    if (num === 1) return 1;
    if (num < 0) return "OOPS";
    let seq = [1, 1];
    for (let i = 2; i < num; i++) {
        seq[i] = seq[i - 1] + seq[i -2];
    }
    return seq[num - 1]
};

console.log(fibonacci(10))

// Do not edit below this line
module.exports = fibonacci;
