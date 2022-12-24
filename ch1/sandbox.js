let a = 10;
let b = 20;


// alert(`${a}`+"  "+b);

//function declaration

function sayHallo(name) {
    alert("hello " + name);


}

sayHallo("lavesh");

if (typeof a !== "string") {
    console.log(a + " is string");
}

//function expression
const speak = function (name = "'not passed'") {

    console.log("name : " + name);

};

const play = (name) => {

    console.log("play : " + name);

}


let abc = (call) => {

    call('lala');
}

abc((name) => {
    console.log("name : " + name)
})

html = ``;

let page = document.getElementById("yoyo");

ar = ['lala', 'bobo', 'ichi'];

ar.forEach((i) => {
    html += `<li>${i}</li>`
})


page.innerHTML = html;

speak()

play("teju")


let obj = {
    name: "lavesh",
    hobbies: ["programming", 'java', 'spring boot'],
    age: 24,
    clg: {
        name: "git"
    },
    func:function(){
        console.log("fdfdsfdsfsdfdf");
    }
}

obj.func();
console.log(obj)
