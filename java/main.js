'use strict';
const circle = document.querySelectorAll('.circle');
const btn = document.querySelector('.btn');
const btn_stop = document.querySelector('.btn_stop');
const arr =Array.from(circle);
let red = arr[0];
let yellow = arr[1];
let green = arr[2];

function redFunc() {
    red.classList.add('red');
}

let a = 0;

 function light()  { setTimeout( () => {
        red.classList.add('red');
        green.classList.remove('green');

    }, 0 );
    setTimeout( () => {
        yellow.classList.add('yellow');
        red.classList.remove('red');
    }, 2000 );
    setTimeout( () => { 
        red.classList.remove('red');
        green.classList.add('green');
        yellow.classList.remove('yellow');
    }, 4000);
    console.log('a:',++a);
    if(a == 3) {clearInterval(trafficLight())};

    // setTimeout( () => { 
    //     // red.classList.remove('red');
    //     green.classList.remove('green');
    //     yellow.classList.remove('yellow');
    // }, 6000);
 }
 const trafficLight = () => setInterval(light, 6000);


//  const trafficLightClean = () => {
//     clearInterval(trafficLight);
//     console.log('clearInterval');
//  };


btn.addEventListener('click', () => {
    light();
    trafficLight();
    console.log("Hello");
});

// btn_stop.addEventListener('click', clearInterval(trafficLight));



// function test(e){console.log(e.target);}
// document.addEventListener("click", test);
// document.removeEventListener("click", test );  

var idI = setInterval(() => {console.log('Hello')},3000);
clearInterval(idI);

function sum(n1) {
    console.log( typeof n1);
    return function (n2) {
        return n1 + n2;
    }
}
// console.log(sum(5)(2));

// console.log(Math.max(10, 3110, 20));

// let o = [10, 20, 30];
// console.log(...o);
// console.dir(sum);

// let t = (tag, classListFn) => text => {
//     console.log( classListFn, typeof classListFn);
//    return `<${tag} class="${classListFn}">${text}</${tag}>`};
// let div = t('div', 'orange');
// let elem = div('Hello');
// const traffic = document.querySelector('.traffic');
// traffic.innerHTML += elem;


function curr(length = 0) {
    function f1(width = 0) {
        function f2(height = 0) {
            return length + width + height;
        }
        return f2
    }
    return f1 
};

const lolCurr = curr(1)(2);
console.dir(lolCurr);
const op = (length=0) => width => height => length + width + height;

console.log(curr(1)()());
console.log(op()(2)(3));
console.log(lolCurr(3));
 function name(params) {
    
}