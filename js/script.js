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

    // Assemble the email address at runtime from escaped characters so crawlers don't find it in the source
    const email = document.getElementById("email");
    if (email) {
        const address = "\u007ah\u0075z\u0069c\u0068u\u006eh\u006fg\u0061n\u0040g\u006da\u0069l\u002ec\u006fm";
        const link = document.createElement("a");
        link.href = "mailto:" + address;
        link.textContent = address;
        email.appendChild(link);
    }
});
