export {};

type SelectProps<T> = {
    options: T[];
    selectedValue: T;
    onChange: (value: T) => void;
};

const machineSelect: SelectProps<string> = {
    options: ["Pump", "Motor", "Compressor"],
    selectedValue: "Pump",

    onChange: (value) => {
        console.log("Selected Machine:", value);
    }
};

console.log("Available Machines:", machineSelect.options);
console.log("Current Selection:", machineSelect.selectedValue);

machineSelect.onChange("Motor");