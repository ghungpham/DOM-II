//1
const navliMouse = document.querySelector(".nav");
console.log(navliMouse)
navliMouse.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = "2rem";
    event.target.style.color = "orange";
setTimeout(function(){
    event.target.style.fontSize = "";
    event.target.style.color = "";
    }, 300);
    event.preventDefault();
}, false);


//2
const img4 = document.querySelector(".content-destination img")
console.log(img4)
img4.addEventListener('contextmenu', function(event){
    alert("Sup!?");
} )


const img3 = document.querySelector(".inverse-content .img-content")
console.log(img3)

//3
img3.addEventListener('mousedown', function(event){
    event.target.style.opacity = "0.5";
} )

//4
img3.addEventListener('mouseup', function(event){
    event.target.style.opacity = "0.9";
}
)

//5
const img1 = document.querySelector(".intro img");
console.log(img1);
 img1.addEventListener('dblclick', function (e) {
     img1.classList.toggle('large');
 }
);

//6
const load1 = document.querySelector(".home .intro");
const text = document.createElement("p")
text.textContent= "Page has loaded"
console.log(load1);
window.addEventListener('load', function (e) {
load1.appendChild(text)
}
);

//7

//76 is key L

window.addEventListener("keydown",keyPress,false);
function keyPress(key){
   if(key.keyCode=="76"){
       alert("Have you gone to the beach?");
   }
};

//8
window.addEventListener('resize', function (e) {
console.log("The window has been resized");}
);


//9 (2 clicks)
const contentsection = document.querySelector(".content-section");
 contentsection.addEventListener('click', function (e) {
     event.target.style.border = "2px solid red";
 }
);

const img2 = document.querySelector(".content-section .img-content");
console.log(img2);
 img2.addEventListener('click', function (e) {
     event.target.style.opacity = "0.8";
     event.stopPropagation();
 }
);

window.addEventListener('beforeprint', (event) => {
    console.log('This should show when before printing is done');
  });