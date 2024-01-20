// Work main homepage buttons.
const proj_1_tn = document.getElementById("project-1-thumbnail");
const proj_2_tn = document.getElementById("project-2-thumbnail");
const proj_3_tn = document.getElementById("project-3-thumbnail");

proj_1_tn.addEventListener("click", () => {
    window.open("proj1/proj1.html", "_self");
});

proj_2_tn.addEventListener("click", () => {
    window.open("proj2.html", "_self");
});

proj_3_tn.addEventListener("click", () => {
    window.open("proj3.html", "_self");
});