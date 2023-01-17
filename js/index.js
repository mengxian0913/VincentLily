let width = screen.width;
const hamburger = document.querySelector('.hamburger');
const container2 = document.querySelector('.container2');
const a = document.querySelector('.aa');
const b = document.querySelector('.bb');
const c = document.querySelector('.cc');
const d = document.querySelector('.dd');
const e = document.querySelector('.aa2');
const f = document.querySelector('.bb2');
const g = document.querySelector('.cc2');
const h = document.querySelector('.dd2');
const arr = [a, b, c, d, e, f, g, h];
let len = arr.length;

function rm(){
    for(var i=0;i<len;i++){
        arr[i].classList.remove('is-active');
    }
}

hamburger.addEventListener('click', function(){
    this.classList.toggle('is-active');
    container2.classList.toggle('is-active');
});

for(var i=0;i<len;i++)
{
    arr[i].addEventListener('click', function(){
        rm();
        this.classList.add('is-active');
    });
}

/*birthdayCard*/
const containerF = document.querySelector('.containerF');
const birthdayCard = document.querySelector('.birthdayCard');
const matte = document.querySelector('.matte');
const Close = document.querySelector(".close");

let delayInMilliseconds = 500; // second

function show_big(){
    console.log('CLICK!!');

    if(width <= 830){
        setTimeout(function(){
            console.log("Wait 0.5 seconds");
            matte.classList.add('is-active');
            containerF.classList.add('is-active');
            console.log(containerF);
        },delayInMilliseconds);
    }

    else{
        console.log("Wait 3 seconds");
        matte.classList.add('is-active');
        containerF.classList.add('is-active');
        console.log(containerF);
    }
}

function close_big(){
    console.log("CLOSE!");
    matte.classList.remove('is-active');    
    containerF.classList.remove('is-active');
    console.log(containerF);
}

birthdayCard.addEventListener("click", show_big);

Close.addEventListener("click", close_big);


/*slide*/

/*
const tmp_ul = document.querySelector('#slide-ul');
const tmp_li = tmp_ul.querySelectorAll('li');
const arr_li = new Array();

for(var i=0; i<tmp_li.length; i++){
    arr_li.push(tmp_li[i]);
    console.log(arr_li[i]);
}

for(let i=0;i<2;i++){
    for(let k=0;k<arr_li.length;k++){
        var child_li = document.createElement('li');
        var tmp_img = new Image();
        tmp_img = arr_li[i].querySelector('img');
        child_li.appendChild(img);
        tmp_ul.appendChild(child_li);
        console.log(child_li);
    }
}
*/

const ul = document.querySelector('#slide-ul');
const lis = ul.querySelectorAll('li');
const liArr = Array.from(lis);

for (let i = 0; i < 100; i++) {
    for (let li of liArr) {
        let cloneLi = li.cloneNode(true);
        ul.appendChild(cloneLi);
    }
}

