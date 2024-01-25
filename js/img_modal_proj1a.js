/* Credit to https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal_img */

// Proj1a Modal
const modal = document.getElementById("imgModal");
const modal_content = document.getElementById("modContent");
const modal_caption = document.getElementById("modCaption");
const modal_close_btn = document.getElementById("modCloseBtn");

// Proj1a Images
const proj1a_img1 = document.getElementById("proj1a-img1");
const proj1a_img2 = document.getElementById("proj1a-img2");
const proj1a_img3 = document.getElementById("proj1a-img3");
const proj1a_img4 = document.getElementById("proj1a-img4");
const proj1a_img5 = document.getElementById("proj1a-img5");

const proj1a_img_arr = [proj1a_img1, proj1a_img2, proj1a_img3, proj1a_img4, proj1a_img5];

// Desktop style images.
for(let i = 0; i < 2; i++){
    proj1a_img_arr[i].addEventListener("click", () => {
        modal.style.display = "flex";
        modal_content.classList.remove("modal-mobile-content");
        modal_content.classList.add("modal-content");
        modal_content.src = proj1a_img_arr[i].src;
        modal_caption.innerText = proj1a_img_arr[i].alt;
        console.log(`clicked ${proj1a_img_arr[i].id}`);
    });
}

//Mobile style images. 
for(let i = 2; i < proj1a_img_arr.length; i++){
    proj1a_img_arr[i].addEventListener("click", () => {
        modal.style.display = "flex";
        modal_content.classList.remove("modal-content");
        modal_content.classList.add("modal-mobile-content");
        modal_content.src = proj1a_img_arr[i].src;
        modal_caption.innerText = proj1a_img_arr[i].alt;
        console.log(`clicked ${proj1a_img_arr[i].id}`);
    });
}

modal_close_btn.addEventListener("click", () => {
    modal.style.display = "none";
});