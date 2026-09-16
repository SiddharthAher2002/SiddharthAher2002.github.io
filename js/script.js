document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------------------------------
       Mobile Navigation
       ----------------------------------------------------- */

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        // Close menu after clicking a navigation link
        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });

        });
    }


    /* -----------------------------------------------------
       Current Year
       ----------------------------------------------------- */

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    /* -----------------------------------------------------
       Scroll Reveal Animation
       ----------------------------------------------------- */

    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    /* -----------------------------------------------------
       Active Navigation Link
       ----------------------------------------------------- */

    const sections = document.querySelectorAll("section[id]");
    const navigationLinks = document.querySelectorAll(".nav-links a");

    const sectionObserver = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const currentSection = entry.target.getAttribute("id");

                    navigationLinks.forEach(link => {

                        link.classList.remove("active");

                        if (
                            link.getAttribute("href") ===
                            `#${currentSection}`
                        ) {
                            link.classList.add("active");
                        }

                    });

                }

            });

        },
        {
            rootMargin: "-35% 0px -55% 0px"
        }
    );


    sections.forEach(section => {
        sectionObserver.observe(section);
    });


    /* -----------------------------------------------------
       Prevent broken external links from causing issues
       ----------------------------------------------------- */

    document.querySelectorAll('a[target="_blank"]').forEach(link => {

        link.setAttribute("rel", "noopener noreferrer");

    });

});