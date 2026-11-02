var MachineStatus;
(function (MachineStatus) {
    MachineStatus["Running"] = "Running";
    MachineStatus["Stopped"] = "Stopped";
    MachineStatus["Maintenance"] = "Maintenance";
})(MachineStatus || (MachineStatus = {}));
let status = MachineStatus.Running;
console.log("Enum Status:", status);
let machineStatus = "Maintenance";
console.log("Union Status:", machineStatus);
export {};
