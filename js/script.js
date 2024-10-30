const images = document.querySelectorAll(".img");
const sliderOverlay = document.getElementById("sliderOverlay");
const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const closeSlider = document.getElementById("closeSlider");

let currentImageIndex = 0;
const imageArray = Array.from(images);
console.log(imageArray);

// Function to open the slider with the clicked image
function openSlider(index) {
    currentImageIndex = index;
    sliderImage.src = imageArray[currentImageIndex].src;
    sliderOverlay.style.display = "flex";
}

// Function to close the slider
closeSlider.addEventListener("click", () => {
    sliderOverlay.style.display = "none";
});

// Function to show the next image
nextBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % imageArray.length;
    sliderImage.src = imageArray[currentImageIndex].src;
});

// Function to show the previous image
prevBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + imageArray.length) % imageArray.length;
    sliderImage.src = imageArray[currentImageIndex].src;
});

// Add click event to each image to open the slider
images.forEach((image, index) => {
    image.addEventListener("click", () => {
        openSlider(index);
    });
});




