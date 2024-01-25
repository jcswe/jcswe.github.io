/* Credit to https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal_img */

// Proj1b Modal
const modal = document.getElementById("imgModal");
const modal_content = document.getElementById("modContent");
const modal_caption = document.getElementById("modCaption");
const modal_close_btn = document.getElementById("modCloseBtn");

// Proj1b Images
const proj1b_img1 = document.getElementById("proj1b-img1");
const proj1b_img2 = document.getElementById("proj1b-img2");
const proj1b_img3 = document.getElementById("proj1b-img3");
const proj1b_img4 = document.getElementById("proj1b-img4");
const proj1b_img5 = document.getElementById("proj1b-img5");

const proj1b_img_arr = [proj1b_img1, proj1b_img2, proj1b_img3, proj1b_img4, proj1b_img5];

for(let i = 0; i < proj1b_img_arr.length; i++){
    proj1b_img_arr[i].addEventListener("click", () => {
        modal.style.display = "flex";
        modal_content.src = proj1b_img_arr[i].src;
        modal_caption.innerText = proj1b_img_arr[i].alt;
        console.log(`clicked ${proj1b_img_arr[i].id}`);
    });
}

modal_close_btn.addEventListener("click", () => {
    modal.style.display = "none";
});