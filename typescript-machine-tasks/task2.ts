
type MachineStatus = "Running" | "Stopped" | "Maintenance";

let Status: MachineStatus = "Running";

console.log("Machine Status:", Status);

// You can also assign:
Status = "Stopped";

console.log("Updated Status:", Status);
