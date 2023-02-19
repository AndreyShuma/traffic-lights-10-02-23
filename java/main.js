// "use strict";
const circle = document.querySelectorAll('.circle');
const btn = document.querySelector('.btn');
const btn_stop = document.querySelector('.btn_stop');
// console.dir(btn_stop); 
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

 }
 const trafficLight = () => setInterval(light, 6000);




btn.addEventListener('click', () => {
    light();
    trafficLight();
    console.log("Hello");
});
  

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
// console.dir(curr);
// console.dir(curr.length);
const op = (length=0) => width => height => length + width + height;

// console.log(curr(1)()());
// console.log(op()(2)(3));
// console.log(lolCurr(3));

let top1 = () => console.log(this);
let top2 = function () {console.log( this)};
function top3() {console.log( this)};

const animal = {
    name: 'Kucko',
    age: 2,
    say() {console.log(this)},
    top1,
    top2,
    top3,
};
const animalHome = {
    name1: 'Reks',
    age: 5,
    get() {console.log(this);}
};

let {name1, age} = animalHome;
// console.log(name1, age);
// animalHome.get();
animal.__proto__ = animalHome;
// console.log(animal);
// console.log({...animal});

// let kit = [10, 25, 12, 36, 10];
// let kit2 = [...kit];
// kit2[6]= -20;
// console.log([...kit]);
// console.log(kit2);

function test(a){
    this.name = a;
    this.az = function() {return this.name};
   }
test.prototype.age = function() {console.log("метод age",this);}
    var ob= new test('js');

//    console.log(ob);
//    console.log(ob.az());
//    console.log(ob.age());
function myFn(a) {
    animalHome.name ='Peks'; 
    // console.log(this);
    return a
}
// console.dir(myFn) ;

// console.log(myFn(animalHome));
// console.log(animalHome);


var o1 = {
    bar: "bar1",
    // foo() {
        // console.log(this.bar);
    // }
    foo:() => {
        console.log(this.bar);
    }
};

var o2 = {bar: "bar2", foo: o1.foo};
 
var bar = "bar3";

var foo = o1.foo; //console.log(this.bar)
 
// o1.foo();   // bar1
// o2.foo();   // bar2
// foo();      // bar3
// console.dir(foo);

// var bar = "bar2";
 
// function daz(){
//     var bar = "bar5";
//     function maz(){  
//         console.log(this.bar);
//     }
//     maz();
// }
// daz();  // bar2

// function foo(){
//     console.log(this.bar);
// }
 
// var o3 = {bar: "bar3", foo}
// var bar = "bar1";
// foo();  // bar1
// foo.apply(o3);  // bar3
// // или
// // foo.call(o3);

const person = {
    name: "Tom",
    say:()=> console.log(`Меня зовут ${this.name}`),
};
// person.say();   // Меня зовут 

const person1 = {
    name: "Tom",
    hello(){
        // console.log("Привет");
        let say = ()=> console.log(`Меня зовут ${this.name}`);
        say();
    }
}
// person1.hello();
const school ={
    title: "Oxford",
    courses: ["JavaScript", "TypeScript", "Java"],
    printCourses: function(){
        this.courses.forEach(function(course){
            console.log(this.title, course);
        })
    }
}
// school.printCourses();

// function foot() {console.log("Hellow");}

// function callback(b) {b();}

// callback(foot);

let f = {
    name: "Vasy",
    age: 50,
    zoo1
}
// console.dir(f);
function zoo1(){return console.log('zoo1')}
function zoo( a, b, c) {
    console.log(++a);
    b();
    // console.log(c);
    arguments[0] = 5;
    // console.log(arguments);
    // console.log(arguments.length);
    // console.log(this);
    // return a, b, c 
}
//  zoo( 9, zoo1, f.zoo1());
// console.log(zoo().arguments);

function f2(...x) {
    // x = 5;
    // alert( arguments[0] ); // 5, обновлённый x
    // arguments[0] = 5;
    for ( let i=0; i <x.length; i++ ) {
        console.log(x[i]);
    }
    // console.log(arguments[0]);
    // console.log(x.length);
    // console.log(arguments[0] == x[0]);
    // alert( x ); // не 5, а 1! Переменная "отвязана" от arguments
  }
// f2(1, 3, 2); 
var vasya = {
    age: 21,
    name: 'Вася',
    surname: 'Петров'
  }; 
  var user = {
    isAdmin: false,
    isEmailConfirmed: true
  };
  var student = {
    university: 'My university'
  };
function copy() {
    var dst = arguments[0];
//   console.log(arguments);
    for (var i = 1; i < arguments.length; i++) {
      var arg = arguments[i];
      console.log(arg);
      for (var key in arg) {
        dst[key] = arg[key];
        //   console.log(arg[key]);
        //   console.log(key);
      }
    }
    // console.log(dst);
    return dst;
  }
//   var userClone = copy({}, vasya, user, student);
//   console.log(userClone);
function squareDigits(num){
    let num2 = num.toString().split('');
    let result = [];
    for( let key of num2) {
        let a = +key * +key;
        result.push((a).toString());
    }
    return +result.join('');
  }
//   console.log(squareDigits( 765)); //493625

const myArr = [
    'Вилка',
    'Ложка',
    'Тарілка',
    'Ніж'
];
const myArrMap = myArr.map( (item) => {
    const i = `<li>${item}</li>`;
    return i;
});

const items = document.querySelector('.items');
items.innerHTML =myArrMap.join('');
console.log(myArrMap);