function Utils() {}

Utils.irandom = function(x) {
    return Math.random() * x >> 0;
};