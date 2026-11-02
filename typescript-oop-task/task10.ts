
export {};

interface Machine {
    id: string;
    name: string;
    temperature: number;
    status: string;
}

// Original machine data
const machine1: Machine = {
    id: "M-101",
    name: "Pump",
    temperature: 75,
    status: "Running"
};

// Partial<T> - update selected properties
function updateMachine(
    machine: Machine,
    updates: Partial<Machine>
): Machine {
    return { ...machine, ...updates };
}

const updatedMachine = updateMachine(machine1, {
    temperature: 85
});

console.log("Updated Machine:", updatedMachine);

// Pick<T, K> - select specific properties
type MachineSummary = Pick<Machine, "id" | "status">;

const summary: MachineSummary = {
    id: "M-101",
    status: "Running"
};

console.log("Machine Summary:", summary);
