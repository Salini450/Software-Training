const machine = {
    id: 101,
    name: "Pump",
    status: "Running"
};

const updatedMachine = {
    ...machine,
    status: "Stopped"
};

console.log(machine);
console.log(updatedMachine);