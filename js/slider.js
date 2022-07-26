const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slider = document.querySelector(".img_slider");
const ul = slider.querySelector("ul");
const lis = ul.querySelectorAll("li");

let liWid = parseFloat(getComputedStyle(lis[0]).width);
let wid = parseFloat(getComputedStyle(slider).width);
let per = Math.ceil(-(liWid / wid) * 100);

getWid();

// 문제 => 리사이즈 됐을 때 per 값을 바꾸고 싶은데 바뀌지 않음()
window.addEventListener("resize", () => {
    getWid();

    // console.log(liWid);
    // console.log(wid);
    // console.log(per);
})

function getWid() {
    let wid = parseFloat(getComputedStyle(slider).width);
    let liWid = parseFloat(getComputedStyle(lis[0]).width);
    let per = Math.ceil(-(liWid / wid) * 100);

    ul.style.left = per + "%";
}


next.addEventListener("click", (e) => {
    e.preventDefault();
    nextSlide();
})

prev.addEventListener("click", (e) => {
    e.preventDefault();
    prevSlide();
})

function nextSlide() {
    new Anime(ul, {
        prop: "left",
        value: per * 2 + "%",
        duration: 1000,
        callback: () => {
            ul.append(ul.firstElementChild);
            ul.style.left = per + "%"
        }
    })
}

function prevSlide() {
    new Anime(ul, {
        prop: "left",
        value: "0%",
        duration: 1000,
        callback: () => {
            ul.prepend(ul.lastElementChild);
            ul.style.left = per + "%"
        }
    })
}