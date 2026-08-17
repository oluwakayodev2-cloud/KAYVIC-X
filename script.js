/* ==================================================
   KAYVIC X — MAIN JAVASCRIPT
================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==================================================
       MOBILE MENU
    ================================================== */

    const menuButton = document.getElementById("menuButton");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", function () {

            const isOpen =
                mobileMenu.classList.contains("active");

            if (isOpen) {

                mobileMenu.classList.remove("active");
                menuButton.classList.remove("active");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            } else {

                mobileMenu.classList.add("active");
                menuButton.classList.add("active");

                menuButton.setAttribute(
                    "aria-expanded",
                    "true"
                );

            }

        });


        /* Close menu after clicking a menu link */

        const mobileLinks =
            mobileMenu.querySelectorAll("a");

        mobileLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mobileMenu.classList.remove("active");
                menuButton.classList.remove("active");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }



    /* ==================================================
       FAQ ACCORDION
    ================================================== */

    const faqQuestions =
        document.querySelectorAll(".faq-question");

    faqQuestions.forEach(function (question) {

        question.addEventListener("click", function () {

            const currentItem =
                question.closest(".faq-item");

            const currentAnswer =
                currentItem.querySelector(".faq-answer");

            const currentIcon =
                question.querySelector("b");


            /* Close every other FAQ */

            document
                .querySelectorAll(".faq-item")
                .forEach(function (item) {

                    if (item !== currentItem) {

                        item.classList.remove("active");

                        const answer =
                            item.querySelector(".faq-answer");

                        const icon =
                            item.querySelector(".faq-question b");

                        if (answer) {
                            answer.style.maxHeight = null;
                        }

                        if (icon) {
                            icon.textContent = "+";
                        }

                    }

                });


            /* Toggle selected FAQ */

            const wasOpen =
                currentItem.classList.contains("active");


            if (wasOpen) {

                currentItem.classList.remove("active");

                if (currentAnswer) {
                    currentAnswer.style.maxHeight = null;
                }

                if (currentIcon) {
                    currentIcon.textContent = "+";
                }

            } else {

                currentItem.classList.add("active");

                if (currentAnswer) {
                    currentAnswer.style.maxHeight =
                        currentAnswer.scrollHeight + "px";
                }

                if (currentIcon) {
                    currentIcon.textContent = "−";
                }

            }

        });

    });



    /* ==================================================
       SMOOTH SCROLLING
    ================================================== */

    const navigationLinks =
        document.querySelectorAll('a[href^="#"]');

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });



    /* ==================================================
       SCROLL REVEAL
    ================================================== */

    const revealElements =
        document.querySelectorAll(
            ".section-intro, .project, .service, .price-card, .process-step, .difference, .about-layout, .faq-item"
        );


    /* Add the reveal class so the CSS animation works */

    revealElements.forEach(function (element) {

        element.classList.add("reveal");

    });


    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "visible"
                            );

                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(function (element) {

            revealObserver.observe(element);

        });

    } else {

        revealElements.forEach(function (element) {

            element.classList.add("visible");

        });

    }



    /* ==================================================
       NAVBAR SCROLL EFFECT
    ================================================== */

    const navbar =
        document.querySelector(".navbar");


    window.addEventListener("scroll", function () {

        if (!navbar) {
            return;
        }


        if (window.scrollY > 40) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });


});