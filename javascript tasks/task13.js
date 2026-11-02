
async function loadInspection() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        );

        // 1. Handle HTTP errors
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        // 2. Handle invalid JSON
        let data;

        try {
            data = await response.json();
        } catch {
            throw new Error("Invalid JSON received from server");
        }

        // 3. Validate the expected response fields
        if (
            typeof data.title !== "string" ||
            data.title.trim() === ""
        ) {
            throw new Error("Response is missing a valid title");
        }

        console.log("Title:", data.title);

    } catch (error) {
        // Network errors and the errors thrown above
        console.error("Request failed:", error.message);
    }
}

loadInspection();
