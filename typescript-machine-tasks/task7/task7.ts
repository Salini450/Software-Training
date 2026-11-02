
type Machine = {
    id: string;
    temperature: number;
};

const machines: Machine[] = [
    { id: "M-101", temperature: 75 },
    { id: "M-102", temperature: 90 },
    { id: "M-103", temperature: 65 }
];

// Lookup function

function findTemperature(id: string): number | undefined {

    const machine = machines.find((item) => item.id === id);

    return machine?.temperature;
}


// Case 1: Machine found

const result1 = findTemperature("M-101");

if (result1 !== undefined) {

    console.log("Machine Temperature:", result1);

} else {

    console.log("Machine not found");

}


// Case 2: Machine not found

const result2 = findTemperature("M-105");

if (result2 !== undefined) {

    console.log("Machine Temperature:", result2);

} else {

    console.log("Machine not found");

}
