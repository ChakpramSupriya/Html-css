function doSomething()
{
    // console.log("Hello");
    let d = document.getElementById('one')
    d.innerText = "Hello World";
    d.style.backgroundColor = "blue";
    d.style.height = "500px";

}
// doSomething();
document.getElementById('btn').addEventListener("click",doSomething);

