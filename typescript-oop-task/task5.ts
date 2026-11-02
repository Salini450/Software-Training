abstract class Machine {

    abstract operate(): void;

    showStatus(): void {
        console.log("Machine is operational");
    }
}

class Pump extends Machine {

    operate(): void {
        console.log("Pump is pumping liquid");
    }
}

const pump = new Pump();

pump.operate();
pump.showStatus();