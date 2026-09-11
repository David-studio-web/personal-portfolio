// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("show");

});
// =========================
// CLOSE MOBILE MENU
// =========================

const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("show");

    });

});
// CONTACT FORM
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.className = "error";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.className = "error";
        return;
    }

    formMessage.textContent = "Sending...";
    formMessage.className = "sending";

    const formData = new FormData(contactForm);

    try {

        const response = await fetch(contactForm.action, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {

            formMessage.textContent =
                "Your message has been sent successfully!";

            formMessage.className = "success";

            contactForm.reset();

        } else {

            formMessage.textContent =
                "Unable to send message. Please try again.";

            formMessage.className = "error";
        }

    } catch (error) {

        formMessage.textContent =
            "Unable to send message. Please try again.";

        formMessage.className = "error";

        console.error(error);
    }

});
// =========================
// SCROLL ANIMATION
// =========================

const sections =
    document.querySelectorAll(".section");


const observer =
    new IntersectionObserver(function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    }, {
        threshold: 0.15
    });


sections.forEach(function(section) {

    observer.observe(section);

});