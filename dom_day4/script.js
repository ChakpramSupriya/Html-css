// set time out

// let timer = null;
// document.getElementById("set-timeout").addEventListener("click",function (){
//     timer = setTimeout(function(){
//         console.log("Good Job");
//     },3000)
// });
// // clear time out
// document.getElementById("clear-timeout").addEventListener("click",function(){
//     clearTimeout(timer);
// });



// set interval
// setInterval(function(){
//     console.log("Good Job");
// },3000);

let count =1;
let t = setInterval(function(){
    if(count ===5)
    {
        clearInterval(t);
    }
    console.log("Good JOB");
    count++;
},3000);
