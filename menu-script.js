document.addEventListener("DOMContentLoaded", () => {
    // Dynamically build menu
    const navLinks = [
        { text: "Home", href: "../index.html" },
        { text: "Shop", href: "index.html" },
        { text: "About", href: "../about/index.html" },
        { text: "Contact", href: "../contact/index.html" }
    ];

    const menuContainer = document.getElementById("menu");
    if (menuContainer && navLinks.length > 0) {
        menuContainer.innerHTML = ""; // Clear any existing content
        navLinks.forEach(link => {
            const a = document.createElement("a");
            a.textContent = link.text;
            a.href = link.href;
            menuContainer.appendChild(a);
        });
    }

    // Toggle menu on smaller screens
    const menuButton = document.querySelector(".menu-button");
    const menu = document.querySelector(".menu");

    if (menuButton && menu) {
        menuButton.addEventListener("click", () => {
            menu.classList.toggle("menu-visible");
        });
    }
});
