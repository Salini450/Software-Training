class Sensor {
    id: string;
    unit: string;

    constructor(id: string, unit: string) {
        this.id = id;
        this.unit = unit;
    }

    read(): void {
        console.log("Sensor ID:", this.id);
        console.log("Unit:", this.unit);
        console.log("Sensor reading: 75");
    }
}

const sensor1 = new Sensor("S-101", "°C");

sensor1.read();