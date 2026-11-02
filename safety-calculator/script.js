
function checkSafety(temperature, oilLevel, pressure) {

    if (temperature > 90) {
        return "CRITICAL — Stop and inspect";
    }

    else if (
        temperature > 80 ||
        oilLevel < 25 ||
        pressure > 100
    ) {
        return "SAFETY ALERT";
    }

    else {
        return "Operating within safe limits";
    }
}

function calculateSafety() {

    const temperature = Number(document.getElementById("temperature").value);
    const oilLevel = Number(document.getElementById("oilLevel").value);
    const pressure = Number(document.getElementById("pressure").value);

    const result = document.getElementById("result");

    if (
        document.getElementById("temperature").value === "" ||
        document.getElementById("oilLevel").value === "" ||
        document.getElementById("pressure").value === ""
    ) {
        result.innerHTML = "Please enter all values";
        result.style.color = "orange";
        return;
    }

    const status = checkSafety(temperature, oilLevel, pressure);

    result.innerHTML = status;

    if (status === "CRITICAL — Stop and inspect") {
        result.style.color = "red";
    }
    else if (status === "SAFETY ALERT") {
        result.style.color = "orange";
    }
    else {
        result.style.color = "green";
    }
}
