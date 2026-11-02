export {};

interface ApiResult<T> {
    data: T;
    success: boolean;
    message?: string;
}

const machineResponse: ApiResult<string> = {
    data: "Pump M-101",
    success: true,
    message: "Machine data loaded successfully"
};

const temperatureResponse: ApiResult<number> = {
    data: 85,
    success: true
};

console.log("Machine Response:", machineResponse);
console.log("Temperature Response:", temperatureResponse);