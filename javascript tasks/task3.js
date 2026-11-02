const readings = [45, 80, 65, 92, 70];

const results = readings.map(reading => ({
    value: reading,
    status: reading > 75 ? "High" : "Normal"
}));

console.log(results);