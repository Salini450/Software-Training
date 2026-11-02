
const inspectionPromise = new Promise((resolve, reject) => {
    const inspection = {
        id: "M-101",
        temperature: 68,
        oilLevel: 70,
        status: "Normal"
    };

    resolve(inspection);
});

inspectionPromise.then((data) => {
    console.log(data);
});
