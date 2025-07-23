
    document.getElementById("bpCheckerForm").addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent form from submitting

        const systolic = parseInt(document.getElementById("systolic").value);
        const diastolic = parseInt(document.getElementById("diastolic").value);
        const resultMessage = document.getElementById("resultMessage");

        let status = "";

        if (isNaN(systolic) || isNaN(diastolic)) {
            status = "Please enter valid numbers for both readings.";
        } else {
            if (systolic < 90 || diastolic < 60) {
                status = "Low Blood Pressure (Hypotension)";
            } else if (systolic < 120 && diastolic < 80) {
                status = "Normal Blood Pressure";
            } else if (systolic >= 120 && systolic < 130 && diastolic < 80) {
                status = "Elevated Blood Pressure";
            } else if ((systolic >= 130 && systolic < 140) || (diastolic >= 80 && diastolic < 90)) {
                status = "High Blood Pressure (Stage 1)";
            } else if (systolic >= 140 || diastolic >= 90) {
                status = "High Blood Pressure (Stage 2)";
            } else if (systolic > 180 || diastolic > 120) {
                status = "Hypertensive Crisis – Seek medical attention!";
            } else {
                status = "Unable to determine BP status.";
            }
        }

        resultMessage.textContent = status;
    });

