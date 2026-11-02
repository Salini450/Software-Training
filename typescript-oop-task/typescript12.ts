export {};

function calculateTemperature(
    temperature: number,
    offset: number
): number {
    return temperature + offset;
}

// Get the function return type
type Result = ReturnType<typeof calculateTemperature>;

// Get the function parameter types
type Inputs = Parameters<typeof calculateTemperature>;

const result: Result = calculateTemperature(75, 2);

const inputs: Inputs = [80, 5];

console.log("Calculated Temperature:", result);
console.log("Input Parameters:", inputs);