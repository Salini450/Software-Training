export {};

type State = "Running" | "Stopped" | "Maintenance";

const stateLabels: Record<State, string> = {
    Running: "Machine is operating",
    Stopped: "Machine is not operating",
    Maintenance: "Machine is under maintenance"
};

console.log(stateLabels.Running);
console.log(stateLabels.Stopped);
console.log(stateLabels.Maintenance);