
function changeImage(e) {
    // const file = ;
    const image = document.getElementById("image");
        image.src = URL.createObjectURL(e.target.files[0]);
        image.style.display = "block";
        image.style.borderRadius = "5px";
        image.style.position = "absolute";
        image.style.top = "1rem";
        image.style.right = "9rem";
        image.style.maxWidth = "50px";
        image.style.maxHeight = "5Opx";
        image.style.objectFit = "cover";
        image.style.overflow = "hidden";
}