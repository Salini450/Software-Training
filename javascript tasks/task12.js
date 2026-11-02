
async function sendInspection() {
    const inspection = {
        machineId: "M-101",
        temperature: 68,
        oilLevel: 70,
        status: "Normal"
    };

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(inspection)
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const result = await response.json();
        console.log("Server response:", result);
    } catch (error) {
        console.log("Request failed:", error.message);
    }
}

sendInspection();
