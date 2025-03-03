//your JS code here. If required.

// Function to create a delay using a Promise
function delayMessage(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Main function to handle the form submission
async function showMessageAfterDelay() {
    const textInput = document.getElementById("text").value;
    const delayInput = document.getElementById("delay").value;
    const outputDiv = document.getElementById("output");

    // Validation: Ensure input fields are not empty and delay is a positive number
    if (!textInput || isNaN(delayInput) || delayInput < 0) {
        alert("Please enter a valid message and delay time.");
        return;
    }

    // Convert delayInput to a number
    const delay = Number(delayInput);

    // Wait for the specified delay before showing the message
    await delayMessage(delay);

    // Update the output div with the message
    outputDiv.textContent = textInput;
}
