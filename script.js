document.addEventListener("DOMContentLoaded", () => {

    const topButton = document.getElementById("topButton");
    const scrollButton = document.getElementById("scrollButton");
    const heroBook = document.querySelector(".hero-book img");
    const sections = document.querySelectorAll("main section");

    const progress = document.createElement("div");
    progress.id = "progressBar";
    document.body.appendChild(progress);

    // Smooth Scroll
    if (scrollButton) {
        scrollButton.addEventListener("click", () => {
            document.getElementById("about").scrollIntoView({
                behavior: "smooth"
            });
        });
    }

    // Scroll Reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.15
    });

    sections.forEach(section => {
        section.classList.add("hidden");
        observer.observe(section);
    });

    // Scroll Events
    window.addEventListener("scroll", () => {

        if (topButton) {
            topButton.style.display =
                window.scrollY > 500 ? "block" : "none";
        }

        const total =
            document.documentElement.scrollHeight -
            window.innerHeight;

        progress.style.width =
            (window.scrollY / total) * 100 + "%";

    });

    // Back To Top
    if (topButton) {
        topButton.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Premium Book Tilt
    if (heroBook) {

        heroBook.style.transition =
            "transform .25s ease-out";

        heroBook.addEventListener("mousemove", (e) => {

            const rect =
                heroBook.getBoundingClientRect();

            const x =
                (e.clientX - rect.left) /
                rect.width - 0.5;

            const y =
                (e.clientY - rect.top) /
                rect.height - 0.5;

            heroBook.style.transform = `
                perspective(1200px)
                rotateY(${x * 10}deg)
                rotateX(${-y * 10}deg)
                scale(1.02)
            `;

        });

        heroBook.addEventListener("mouseleave", () => {

            heroBook.style.transform =
                "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)";

        });

    }

    console.log("Stories By Raza R. Loaded!");

});