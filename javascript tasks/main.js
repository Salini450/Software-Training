
import { getInspection } from "./api.js";

async function main() {
    try {
        const data = await getInspection();
        console.log("Post title:", data.title);
    } catch (error) {
        console.error(error.message);
    }
}

main();
