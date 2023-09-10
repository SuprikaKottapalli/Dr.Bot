document.addEventListener("DOMContentLoaded", function () {
    const ageSlider = document.getElementById("ageSlider");
    const selectedAge = document.getElementById("selectedAge");
    const continueButton = document.querySelector(".continue-button");
    const maleOption = document.getElementById("male-option"); // Male radio button

    // Initialize the displayed age value
    selectedAge.textContent = "Age: " + ageSlider.value;

    // Update the displayed age value when the slider value changes
    ageSlider.addEventListener("input", function () {
        selectedAge.textContent = "Age: " + ageSlider.value;
    });

    // Check if the Male option has been selected before navigating to the age page
    continueButton.addEventListener("click", function () {
        if (!maleOption.querySelector("input[type='radio']").checked) {
            alert("Please select your gender.");
        } else {
            // Redirect to the Male Age page or other appropriate page
            if (parseInt(ageSlider.value) >= 18) {
                // Redirect to the Male Age page for adults
                window.location.href = "male-age.html";
            } else {
                // Redirect to the page for minors
                window.location.href = "next-page-for-minors.html";
            }
        }
    });
});
