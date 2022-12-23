let a = 10;
let b = 20;


// alert(`${a}`+"  "+b);

//function declaration

function sayHallo(name) {
    alert("hello "+name);
}

sayHallo("lavesh");

if(typeof a !== "string"){
    console.log(a+ " is string");
}

//function expression
const speak = function(name="'not passed'") {

    console.log("name : "+name);

};

const play = (name) => {

    console.log("play : "+name);

}

speak()

play("teju")
