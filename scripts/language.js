document.addEventListener("DOMContentLoaded", function () {

    const langButtons = document.querySelectorAll(".lang-btn");

    const currentPage = window.location.pathname.split("/").pop();

    langButtons.forEach(btn => {
        btn.addEventListener("click", function () {

            const lang = this.dataset.lang;

            let newPage = currentPage;

            if (lang === "en") {
                if (!currentPage.includes("-en")) {
                    newPage = currentPage.replace(".html", "-en.html");
                }
            }

            if (lang === "ru") {
                newPage = currentPage.replace("-en.html", ".html");
            }

            window.location.href = newPage;
        });
    });

});

document.addEventListener("DOMContentLoaded", function () {

    const langButtons = document.querySelectorAll(".lang-btn");

    const currentPage = window.location.pathname;

    langButtons.forEach(btn => {

        const lang = btn.dataset.lang;

        if (lang === "en" && currentPage.includes("-en")) {
            btn.classList.add("active");
        }

        if (lang === "ru" && !currentPage.includes("-en")) {
            btn.classList.add("active");
        }

    });

});
