
async function loadPost() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        );

        const post = await response.json();

        console.log("Title:", post.title);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

loadPost();
