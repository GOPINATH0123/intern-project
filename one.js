// Simple button interaction
document.querySelector(".cta-btn").addEventListener("click", function () {
    alert("Welcome! Let's explore Smart School Hub.");
});


// Dropdown toggle
const dropBtn = document.querySelector(".drop-btn");
const dropMenu = document.querySelector(".drop-menu");

dropBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dropMenu.classList.toggle("show");
});

// Close when clicking outside
document.addEventListener("click", (e) => {
    if (!dropBtn.contains(e.target) && !dropMenu.contains(e.target)) {
        dropMenu.classList.remove("show");
    }
});

//branch

