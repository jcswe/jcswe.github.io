/* Credit to https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal_img */

// Proj3 Modal
const modal = document.getElementById("imgModal");
const modal_content = document.getElementById("modContent");
const modal_caption = document.getElementById("modCaption");
const modal_close_btn = document.getElementById("modCloseBtn");

// Proj3 Images
const proj3_img1 = document.getElementById("proj3-img1");
const proj3_img2 = document.getElementById("proj3-img2");
const proj3_img3 = document.getElementById("proj3-img3");
const proj3_img4 = document.getElementById("proj3-img4");
const proj3_img5 = document.getElementById("proj3-img5");

const proj3_img_arr = [proj3_img1, proj3_img2, proj3_img3, proj3_img4, proj3_img5];

for(let i = 0; i < proj3_img_arr.length; i++){
    proj3_img_arr[i].addEventListener("click", () => {
        modal.style.display = "flex";
        modal_content.src = proj3_img_arr[i].src;
        modal_caption.innerText = proj3_img_arr[i].alt;
        console.log(`clicked ${proj3_img_arr[i].id}`);
    });
}

modal_close_btn.addEventListener("click", () => {
    modal.style.display = "none";
});