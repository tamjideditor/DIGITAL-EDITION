const words=[
"VIDEO EDITOR",
"MOTION DESIGNER",
"CYBER CAFE OWNER",
"STUDENT"
];

let wordIndex=0;
let charIndex=0;
let deleting=false;

const typing=document.getElementById("typing");

function type(){

let current=words[wordIndex];

if(!deleting){

typing.textContent=
current.substring(0,charIndex+1);

charIndex++;

if(charIndex===current.length){

deleting=true;

setTimeout(type,1500);

return;
}

}else{

typing.textContent=
current.substring(0,charIndex-1);

charIndex--;

if(charIndex===0){

deleting=false;

wordIndex++;

if(wordIndex>=words.length){

wordIndex=0;

}

}

}

setTimeout(type,deleting?50:120);

}

type();

const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

});

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const inc=target/100;

if(count<target){

counter.innerText=Math.ceil(count+inc);

setTimeout(update,20);

}else{

counter.innerText=target;

}

};

update();

});