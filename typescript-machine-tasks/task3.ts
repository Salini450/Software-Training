
type MachineStatus = "Running" | "Stopped" | "Maintenance";

type Machine = {
    id: string;
    temperature: number;
    status: MachineStatus;
    location?: string;
    lastInspection?: Date;
};

const machine1: Machine = {
    id: "M-101",
    temperature: 75,
    status: "Running",
    location: "Chennai",
    lastInspection: new Date()
};

const machine2: Machine = {
    id: "M-102",
    temperature: 90,
    status: "Maintenance"
};

console.log(machine1);
console.log(machine2);
