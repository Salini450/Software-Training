export {};

interface Identifiable {
    id: string;
}

interface Timestamped {
    createdAt: Date;
}

type Machine = Identifiable & Timestamped & {
    name: string;
};

const machine1: Machine = {
    id: "M-101",
    name: "Centrifugal Pump",
    createdAt: new Date()
};

console.log("Machine ID:", machine1.id);
console.log("Machine Name:", machine1.name);
console.log("Created At:", machine1.createdAt);