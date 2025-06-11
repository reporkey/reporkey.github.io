// JavaScript for handling any interactive elements or dynamic content

document.addEventListener("DOMContentLoaded", function() {
    // Example: Smooth scrolling for navigation links
    const links = document.querySelectorAll("nav a:not([download])");
    
    for (const link of links) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    }
});
