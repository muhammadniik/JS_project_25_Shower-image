const imgs = document.getElementsByClassName("imags");
console.log(imgs);
let a = 0;

function showeChenge(i) {
    if (i > -1) {
        a = (a + i) % imgs.length;
    } else {
        a = (imgs.length + a + i) % imgs.length;
    }
    Array.from(imgs).forEach((img) => {
        img.classList.remove("active");
    })
    imgs[a].classList.add("active");

}