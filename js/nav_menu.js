/**
 * Handles the nav menu for both desktop and mobile.
 */

// Handle clicking on different links in the desktop menu.
const desktop_home_btn = document.getElementById("desktop-home-btn");
const desktop_about_me_btn = document.getElementById("desktop-about-me-btn");
const desktop_experience_btn = document.getElementById("desktop-experience-btn");
const desktop_work_btn = document.getElementById("desktop-work-btn");
const desktop_connect_btn = document.getElementById("desktop-connect-btn");

desktop_home_btn.addEventListener("click", () => {
    window.open("https://jcswe.github.io/", "_self");
})

desktop_about_me_btn.addEventListener("click", () => {
    window.open("https://jcswe.github.io/about_me/", "_self");
});

desktop_experience_btn.addEventListener("click", () => {
    window.open("https://jcswe.github.io/experience/", "_self");
});

desktop_work_btn.addEventListener("click", () => {
    window.open("https://jcswe.github.io/work/", "_self");
});

desktop_connect_btn.addEventListener("click", () => {
    window.open("https://jcswe.github.io/connect/", "_self");
});

// Handle mobile menu btn click.
const mobile_menu_btn = document.getElementById("menu-btn-id");
const mobile_menu = document.getElementById("mobile-menu");
const body_ele = document.getElementById("body-ele");

mobile_menu_btn.addEventListener("click", () => {
    if(mobile_menu.style.display === "none"){
        mobile_menu.style.display = "block";
        body_ele.style.position = "fixed";

        // Handle clicking on different links in the mobile menu.
        const mobile_home_btn = document.getElementById("mobile-home-btn");
        const mobile_about_me_btn = document.getElementById("mobile-about-me-btn");
        const mobile_experience_btn = document.getElementById("mobile-experience-btn");
        const mobile_work_btn = document.getElementById("mobile-work-btn");
        const mobile_connect_btn = document.getElementById("mobile-connect-btn");

        mobile_home_btn.addEventListener("click", () => {
            window.open("https://jcswe.github.io/", "_self");
        })

        mobile_about_me_btn.addEventListener("click", () => {
            window.open("https://jcswe.github.io/about_me/", "_self");
        });

        mobile_experience_btn.addEventListener("click", () => {
            window.open("https://jcswe.github.io/experience/", "_self");
        });

        mobile_work_btn.addEventListener("click", () => {
            window.open("https://jcswe.github.io/work/", "_self");
        });

        mobile_connect_btn.addEventListener("click", () => {
            window.open("https://jcswe.github.io/connect/", "_self");
        });
    }
    else {
        mobile_menu.style.display = "none";
        body_ele.style.position = "unset";
    }
});