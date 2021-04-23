

document.getElementById("button1").addEventListener("click", grow);

document.getElementById("button2").addEventListener("click", blue);

document.getElementById("button3").addEventListener("click", fade);

document.getElementById("button4").addEventListener("click", reset);

document.getElementById("button5").addEventListener("click", green);

document.getElementById("button6").addEventListener("click", border);

function grow() {
    document.getElementById("box").style.height = "250px";
   }

function blue() {
    document.getElementById("box").style.background = "blue";
   }
   
function fade() {
    let element = document.getElementById("box");
    if (element.style.opacity != "0") 
    {
        element.style.opacity = "0";      
    }
     else 
     {
        element.style.opacity = "1";
     }
    
   }

function green() {
       document.getElementById("box").style.background = "green";
   }

function reset() {
    document.getElementById("box").style = "";
    document.getElementById("box").style.background = "orange";
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.margin = "25px";

   }

function border() {
    document.getElementById("box").style.border = "thick solid black";
   }