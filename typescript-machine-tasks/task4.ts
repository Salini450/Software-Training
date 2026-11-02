
function findHighest(numbers: number[]): number {

    if (numbers.length === 0) {
        throw new Error("Array cannot be empty");
    }

    return Math.max(...numbers);
}

const values: number[] = [45, 78, 23, 90, 56];

const highestValue = findHighest(values);

console.log("Highest Value:", highestValue);
