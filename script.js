var menu = document.getElementById("slideMenu");
var menuToggle = document.getElementById("menuToggle");

// Function to toggle the menu
function toggleMenu() {
    if (menu.classList.contains("menu-open")) {
        menu.classList.remove("menu-open");
    } else {
        menu.classList.add("menu-open");
    }
}

// Listen for clicks on the menu button
menuToggle.addEventListener("click", function(event) {
    toggleMenu();
    event.stopPropagation(); // Prevent the event from propagating to the document
});

// Listen for clicks anywhere on the page
document.addEventListener("click", function() {
    if (menu.classList.contains("menu-open")) {
        menu.classList.remove("menu-open");
    }
});

// Prevent the menu itself from closing when it's clicked
menu.addEventListener("click", function(event) {
    event.stopPropagation();
});

