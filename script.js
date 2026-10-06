document.addEventListener("DOMContentLoaded", function () {

    /* ================= YEAR ================= */

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* ================= FORM ================= */

    const form = document.getElementById("demoForm");
    const message = document.getElementById("formMessage");


    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const phone =
                document.getElementById("phone").value.trim();

            const organization =
                document.getElementById("organization").value.trim();

            const location =
                document.getElementById("location").value.trim();


            /* Basic validation */

            if (
                name === "" ||
                email === "" ||
                phone === "" ||
                organization === "" ||
                location === ""
            ) {

                message.textContent =
                    "Please fill in all required fields.";

                message.style.color = "#dc2626";

                return;
            }


            /* Get selected modules */

            const selectedModules =
                document.querySelectorAll(
                    'input[name="modules"]:checked'
                );


            let modules = [];


            selectedModules.forEach(function (item) {
                modules.push(item.value);
            });


            /* Show success message */

            message.textContent =
                "Thank you, " +
                name +
                "! Your demo request has been submitted successfully.";

            message.style.color = "#16a34a";


            /* Console output for demonstration */

            console.log("===== MEDSYSB DEMO REQUEST =====");

            console.log("Name:", name);

            console.log("Email:", email);

            console.log("Phone:", phone);

            console.log(
                "Designation:",
                document.getElementById("designation").value
            );

            console.log(
                "Organization:",
                organization
            );

            console.log(
                "Organization Type:",
                document.getElementById("orgType").value
            );

            console.log(
                "Beds:",
                document.getElementById("beds").value
            );

            console.log(
                "Location:",
                location
            );

            console.log(
                "Modules:",
                modules.join(", ")
            );

            console.log(
                "Requirements:",
                document.getElementById("message").value
            );


            /* Reset form */

            form.reset();

        });

    }


    /* ================= NAVIGATION ================= */

    const navigationLinks =
        document.querySelectorAll(".nav-links a");

    const sections =
        document.querySelectorAll("section");


    window.addEventListener("scroll", function () {

        let current = "";

        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 150;

            if (
                window.scrollY >= sectionTop
            ) {

                current =
                    section.getAttribute("id");

            }

        });


        navigationLinks.forEach(function (link) {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.classList.add("active");

            }

        });

    });


    console.log(
        "MedSysB Demo Website Loaded Successfully."
    );

});