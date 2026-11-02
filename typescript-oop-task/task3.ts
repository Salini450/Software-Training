class Machine {
    id: string;

    constructor(id: string) {
        this.id = id;
    }

    start(): void {
        console.log("Machine is starting");
    }
}

class Pump extends Machine {

    override start(): void {
        console.log("Pump", this.id, "is starting");
    }
}

const pump1 = new Pump("P-101");

pump1.start();