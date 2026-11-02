
export async function getInspection() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        let data;

        try {
            data = await response.json();
        } catch {
            throw new Error("Invalid JSON received from server");
        }

        if (
            typeof data.title !== "string" ||
            data.title.trim() === ""
        ) {
            throw new Error("Invalid response data");
        }

        return data;

    } catch (error) {
        throw new Error(`API request failed: ${error.message}`);
    }
}
