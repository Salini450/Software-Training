
function getInspection() {
    return Promise.resolve({
        id: "M-102",
        temperature: 91,
        oilLevel: 65
    });
}

async function displayInspection() {
    try {
        const data = await getInspection();

        console.log("Machine:", data.id);
        console.log("Temperature:", data.temperature);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

displayInspection();
