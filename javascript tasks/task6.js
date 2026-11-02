const readingsA = [10, 20, 30, 40];
const readingsB = [30, 40, 50, 60];

const combined = [...readingsA, ...readingsB];

const uniqueReadings = [...new Set(combined)];

console.log(uniqueReadings);