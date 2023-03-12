
//Hamburger

const mainMenu=document.querySelector('.mainMenu');
const closeMenu=document.querySelector('.closeMenu');
const openMenu=document.querySelector('.openMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);


function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close(){
    mainMenu.style.top = '-100%';
}


// Go to Page


let x = 1;
let y = 2;
let z = 3;
let d = 4;
let prev = document.getElementById('btnP');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let next = document.getElementById('btnN');



function condtion(){
    btn1.innerHTML = (`<button id="btn-${x}">${x}</button>`);
    let red1 = document.getElementById(`btn-${x}`);
    if(x%4==0){
        red1.style.background = "Dodgerblue";
        red1.style.color = "white";
    }
    btn2.innerHTML = (`<button id="btn-${y}">${y}</button>`);
    let red2 = document.getElementById(`btn-${y}`);
    if(y%4==0){
        red2.style.background = "Dodgerblue";
        red2.style.color = "white";
    }
    btn3.innerHTML = (`<button id="btn-${z}">${z}</button>`);
    let red3 = document.getElementById(`btn-${z}`);
    if(z%4==0){
        red3.style.background = "Dodgerblue";
        red3.style.color = "white";
    }
    btn4.innerHTML = (`<button id="btn-${d}">${d}</button>`);
    let red4 = document.getElementById(`btn-${d}`);
    if(d%4==0){
        red4.style.background = "Dodgerblue";
        red4.style.color = "white";
    }
}

next.addEventListener("click", function(){
    x++;
    y++;
    z++;
    d++;
    condtion();
})


prev.addEventListener("click", function(){
    if(x>1 || y>2 || z>3 || d>4){
    x--;
    y--;
    z--;
    d--;
    condtion();
}
})



btn3.addEventListener("click", function(){
    x++;
    y++;
    z++;
    d++;
    condtion();
})


btn4.addEventListener("click", function(){
    x+=2;
    y+=2;
    z+=2;
    d+=2;
    condtion();
})
