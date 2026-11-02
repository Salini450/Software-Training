export {};

function getLastItem<T>(items: T[]): T | undefined {
    return items[items.length - 1];
}

const numbers = [10, 20, 30, 40, 50];
const machines = ["Pump", "Compressor", "Motor"];

console.log("Last Number:", getLastItem(numbers));
console.log("Last Machine:", getLastItem(machines));