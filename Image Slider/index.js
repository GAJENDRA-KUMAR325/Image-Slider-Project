const nextEl = document.querySelector(".next");
const imgsEl = document.querySelectorAll("img");
const imageContainerEl = document.querySelector(".img-container")
const prevEl = document.querySelector(".prev");
let currentImage = 1;
let timeout;
nextEl.addEventListener("click",()=>{
    currentImage++;
    clearTimeout(timeout);
    updateImage();
})
prevEl.addEventListener("click",()=>{
    currentImage--;
    clearTimeout(timeout);
    updateImage();
})
updateImage();
function updateImage(){
    if(currentImage>imgsEl.length)
    {
        currentImage=1;
    }
    else if(currentImage<1)
    {
        currentImage = imgsEl.length;
    }
imageContainerEl.style.transform = `translateX(-${(currentImage)*500}px)`
timeout = setTimeout(()=>{
    currentImage++;
    updateImage();
},3000)
}