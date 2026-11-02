
const jsonData = '{"id":"M-101","temperature":68,"oilLevel":70}';

try {
    const inspection = JSON.parse(jsonData);

    console.log("Machine ID:", inspection.id);
    console.log("Temperature:", inspection.temperature);
    console.log("Oil level:", inspection.oilLevel);
} catch (error) {
    console.log("Invalid JSON:", error.message);
}
