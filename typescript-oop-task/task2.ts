class Sensors {
    readonly id: string;
    private calibrationOffset: number;

    constructor(id: string, calibrationOffset: number) {
        this.id = id;
        this.calibrationOffset = calibrationOffset;
    }

    read(value: number): number {
        return value + this.calibrationOffset;
    }
}

const sensor2 = new Sensors ("S-101", 2);

console.log("Sensor ID:", sensor2.id);
console.log("Corrected Reading:", sensor2.read(72));