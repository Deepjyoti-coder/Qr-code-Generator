// Select Elements
const btn = document.querySelector(".btn");
const imgEle = document.querySelector("#qr-image");
const boxEle = document.querySelector("#img-box");
const inputEle = document.querySelector("#qr-text");

// Event Listener for Button Click
btn.addEventListener("click", () => {
    let inputValue = inputEle.value.trim(); // Remove leading/trailing spaces

    if (inputValue.length > 0) {
        // Generate QR Code
        imgEle.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(inputValue)}`;
        boxEle.classList.add("show-img"); // Show the image box
    } else {
        alert("Please enter text or a URL to generate a QR code!");
        boxEle.classList.remove("show-img"); // Hide the image box
    }
});
