let index=0;

function nextPage(){
index++;
document.querySelector(".container").style.transform=
`translateX(-${index*100}vw)`;
}

function prevPage(){
index--;
document.querySelector(".container").style.transform=
`translateX(-${index*100}vw)`;
}

/* animated background */
const canvas=document.getElementById("bg");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let hearts=[];

for(let i=0;i<60;i++){
hearts.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*5+2,
speed:Math.random()*1+0.5
});
}

function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="pink";

hearts.forEach(h=>{
ctx.beginPath();
ctx.arc(h.x,h.y,h.size,0,Math.PI*2);
ctx.fill();

h.y-=h.speed;
if(h.y<0){
h.y=canvas.height;
h.x=Math.random()*canvas.width;
}
});

requestAnimationFrame(draw);
}

draw();

/* final effect */
function finalMagic(){

for(let i=0;i<40;i++){
let h=document.createElement("div");
h.innerHTML="💖";
h.style.position="fixed";
h.style.left=Math.random()*100+"vw";
h.style.top=Math.random()*100+"vh";
h.style.fontSize="25px";
document.body.appendChild(h);

setTimeout(()=>h.remove(),2000);
}

setTimeout(()=>{
document.getElementById("popup").style.display="flex";
},800);
}

function closePopup(){
document.getElementById("popup").style.display="none";
}
