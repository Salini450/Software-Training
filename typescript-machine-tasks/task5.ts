
type NumberFormatter = (value: number) => string;

function formatNumber(
    value: number,
    callback: NumberFormatter
): string {

    return callback(value);
}

const result = formatNumber(75, (value) => {
    return value.toFixed(2) + " °C";
});

console.log("Formatted Value:", result);
