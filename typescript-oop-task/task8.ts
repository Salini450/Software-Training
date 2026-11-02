export {};

type ApiResponse =
    | { status: "success"; data: string }
    | { status: "failure"; error: string };

function handleResponse(response: ApiResponse): void {

    if (response.status === "success") {
        console.log("API Data:", response.data);
    }
    else {
        console.log("API Error:", response.error);
    }
}

handleResponse({
    status: "success",
    data: "Machine data loaded"
});

handleResponse({
    status: "failure",
    error: "Server connection failed"
});