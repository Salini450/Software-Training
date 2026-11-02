function findMaximum(readings) {
    if (readings.length === 0) return null;

    return Math.max(...readings);
}

console.log(findMaximum([45, 80, 65, 92, 70]));