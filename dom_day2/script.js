let products = [
    {
        name:"Tayai",
        address:"Patsoi",
        cont:12345
    },
    {
        name:"Abem",
        address:"Bamon kampu",
        cont:34567
    },
    {
        name:"Tayai_Abem",
        address:"Patsoi Part 1",
        cont:67894
    } 
]

for(let i =0;i<products.length;i++)
{
let d = document.createElement("div");
d.classList.add("child");

let h = document.createElement("h1");
h.innerText = products[i].name;

let h3 = document.createElement("h3");
h3.innerText = products[i].address;

let h4 = document.createElement("h4");
h4.innerText = products[i].cont;
//create id 
h4.id = "bad";

let b = document.createElement("button");
b.classList.add("btn");
b.id = "tap";
b.innerText = "click";  

d.appendChild(h);
d.appendChild(h3);
d.appendChild(h4);
d.appendChild(b);


document.getElementById("parent").appendChild(d);
console.log(d);
}
// id give only the 1st element if there is many element
function doSomething()
{
   document.getElementById("bad").innerHTML = 45667;
}
document.getElementById("tap").addEventListener("click",doSomething);

// let d = document.createElement("div");
// d.classList.add("child");

// let h = document.createElement("h1");
// h.innerText = "Hello World my Tayai";

// let h3 = document.createElement("h3");
// h3.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam alias suscipit ut consequuntur.";

// let b = document.createElement("button");
// b.classList.add("btn");
// b.innerText = "click";  


// d.appendChild(h);
// d.appendChild(h3);
// d.appendChild(b);


// document.getElementById("parent").appendChild(d);
// console.log(d);