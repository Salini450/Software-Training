
export {};

enum MachineStatus {
    Running = "Running",
    Stopped = "Stopped",
    Maintenance = "Maintenance"
}

let status: MachineStatus = MachineStatus.Running;

console.log("Enum Status:", status);

// Literal union alternative

type Status = "Running" | "Stopped" | "Maintenance";

let machineStatus: Status = "Maintenance";

console.log("Union Status:", machineStatus);
