
export function maskAadhaar(aadhaarNumber) {

    if (typeof aadhaarNumber !== "string") {
        return "INVALID";
    }

    if (aadhaarNumber.length !== 12) {
        return "INVALID";
    }

    const digitRegex = /^\d{12}$/;
    if (!digitRegex.test(aadhaarNumber)) {
        return "INVALID";
    }


    const lastFour = aadhaarNumber.slice(-4);

    return `XXXX-XXXX-${lastFour}`;
}