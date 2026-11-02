function processReadings(readings, callback) {
    return readings.map(callback);
}

function convertToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

const readings = [0, 20, 30];

const result = processReadings(
    readings,
    convertToFahrenheit
);

console.log(result);