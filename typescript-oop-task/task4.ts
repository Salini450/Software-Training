interface Startable {
    start(): void;
}

class Pump1 implements Startable {
    start(): void {
        console.log("Pump is starting");
    }
}

class Compressor implements Startable {
    start(): void {
        console.log("Compressor is starting");
    }
}

const pump = new Pump1();
const compressor = new Compressor();

pump.start();
compressor.start();