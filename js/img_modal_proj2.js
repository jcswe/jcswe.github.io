/* Credit to https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal_img */

// Proj2 Modal
const modal = document.getElementById("imgModal");
const modal_content = document.getElementById("modContent");
const modal_caption = document.getElementById("modCaption");
const modal_close_btn = document.getElementById("modCloseBtn");

// Proj2 Images
const proj2_img1 = document.getElementById("proj2-img1");
const proj2_img2 = document.getElementById("proj2-img2");
const proj2_img3 = document.getElementById("proj2-img3");
const proj2_img4 = document.getElementById("proj2-img4");
const proj2_img5 = document.getElementById("proj2-img5");

const proj2_img_arr = [proj2_img1, proj2_img2, proj2_img3, proj2_img4, proj2_img5];

// Desktop style images.
for(let i = 0; i < 2; i++){
    proj2_img_arr[i].addEventListener("click", () => {
        modal.style.display = "flex";
        modal_content.classList.remove("modal-mobile-content");
        modal_content.classList.add("modal-content");
        modal_content.src = proj2_img_arr[i].src;
        modal_caption.innerText = proj2_img_arr[i].alt;
        console.log(`clicked ${proj2_img_arr[i].id}`);
    });
}

//Mobile style images. 
for(let i = 2; i < proj2_img_arr.length; i++){
    proj2_img_arr[i].addEventListener("click", () => {
        modal.style.display = "flex";
        modal_content.classList.remove("modal-content");
        modal_content.classList.add("modal-mobile-content");
        modal_content.src = proj2_img_arr[i].src;
        modal_caption.innerText = proj2_img_arr[i].alt;
        console.log(`clicked ${proj2_img_arr[i].id}`);
    });
}

modal_close_btn.addEventListener("click", () => {
    modal.style.display = "none";
});