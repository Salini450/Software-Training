const readings = [45, 80, 65, 92, 70];
const threshold = 75;

const lowReadings = readings.filter(
    reading => reading < threshold
);

console.log(lowReadings);