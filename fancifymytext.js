document.addEventListener("DOMContentLoaded", function() {
    // Reference "Bigger" button
    var biggerBtn = document.getElementById("biggerBtn");

    // Reference radio buttons
    var addFancyStylesBtn = document.getElementById("fancyShmancy");
    var removeFancyStylesBtn = document.getElementById("boringBetty");

    // Click event listener to the "Bigger" button
    biggerBtn.addEventListener("click", function() {
        // Display the alert message when bigger button is clicked
        alert("Hello, world!");
        increaseFontSize();
    });

    // Click event listener for "FancyShmancy" radio button
    addFancyStylesBtn.addEventListener("click", function() {
        addFancyStyles();
    });

    // Click event listener for "BoringBetty" radio button
    removeFancyStylesBtn.addEventListener("click", function() {
        alert("Styles removed.");
        removeFancyStyles();

    });
});

function increaseFontSize() {
    // Reference to the text area
    var textArea = document.getElementById("textBox");
    
    // Change the font size of the text area to 24pt
    textArea.style.fontSize = "24pt";
}

function addFancyStyles() {
    // Reference to the text area
    var textArea = document.getElementById("textBox");

    // Add styles for FancyShmancy
    textArea.style.fontFamily = "Comic Sans MS";
    textArea.style.color = "blue";
    textArea.style.backgroundColor = "lightGrey";
    textArea.style.fontWeight = "bold";
    textArea.style.textDecoration = "underline";
}

function removeFancyStyles() {
    // Reference to the text area
    var textArea = document.getElementById("textBox");

    // Remove styles for BoringBetty
    textArea.style.fontFamily = "";
    textArea.style.color = "";
    textArea.style.backgroundColor = "";
    textArea.style.fontWeight = "";
    textArea.style.textDecoration = "";
}

function uppercaseText() {
    // Get a reference text box
    var textArea = document.getElementById("textBox");
    // Get the text in text area
    var text = textArea.value;

    // Uppercase the text in the text area
    textArea.value = textArea.value.toUpperCase();

    // Split text into sentences with "."
    var sentences = text.split(".");

    for (var i = 0; i < sentences.length; i++) {
        // Trim whitespace
        var trimmedSentence = sentences[i].trim();

        // If the sentence is not empty
        if (trimmedSentence !== "") {
            // Split the sentence into words
            var words = trimmedSentence.split(" ");

            // Add the "-Moo" to the last word of the sentence
            if (words.length > 1) {
                words[words.length - 1] += "-Moo";
            }
            // Join the words back together
            sentences[i] = words.join(" ");
        }
    }

    // Add sentences back
    var modifiedText = sentences.join(".");

    // Update the text area with the modified text
    textArea.value = modifiedText;

}
