/* Credit to https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal_img */

// Proj1c Modal
const modal = document.getElementById("imgModal");
const modal_content = document.getElementById("modContent");
const modal_caption = document.getElementById("modCaption");
const modal_close_btn = document.getElementById("modCloseBtn");

// Proj1c Images
const proj1c_img1 = document.getElementById("proj1c-img1");
const proj1c_img2 = document.getElementById("proj1c-img2");
const proj1c_img3 = document.getElementById("proj1c-img3");
const proj1c_img4 = document.getElementById("proj1c-img4");

const proj1c_img_arr = [proj1c_img1, proj1c_img2, proj1c_img3, proj1c_img4];

for(let i = 0; i < proj1c_img_arr.length; i++){
    proj1c_img_arr[i].addEventListener("click", () => {
        modal.style.display = "flex";
        modal_content.src = proj1c_img_arr[i].src;
        modal_caption.innerText = proj1c_img_arr[i].alt;
        console.log(`clicked ${proj1c_img_arr[i].id}`);
    });
}

modal_close_btn.addEventListener("click", () => {
    modal.style.display = "none";
});