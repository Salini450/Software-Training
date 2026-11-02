export {};

function getId<T extends { id: string }>(item: T): string {
    return item.id;
}

const machine = {
    id: "M-101",
    name: "Pump",
    temperature: 75
};

const sensor = {
    id: "S-101",
    unit: "Celsius"
};

console.log("Machine ID:", getId(machine));
console.log("Sensor ID:", getId(sensor));