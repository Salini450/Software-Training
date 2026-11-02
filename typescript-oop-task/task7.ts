export {};

function displayValue(value: string | number): void {

    if (typeof value === "string") {
        console.log("String value:", value.toUpperCase());
    }
    else {
        console.log("Number value:", value.toFixed(2));
    }
}

displayValue("machine");
displayValue(75.567);