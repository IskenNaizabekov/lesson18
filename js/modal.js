const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector("#btn-get");
const closeModalBtn = document.querySelector(".modal_close");

const showPopup = () => {
    modal.style.display = "block";
    window.removeEventListener("scroll", handleScrollTrigger);
    clearTimeout(popupTimer);
};

const hidePopup = () => {
    modal.style.display = "none";
};

openModalBtn.onclick = showPopup;
closeModalBtn.onclick = hidePopup;

const popupTimer = setTimeout(showPopup, 10000);

const handleScrollTrigger = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        showPopup();
    }
};

window.addEventListener("scroll", handleScrollTrigger);
