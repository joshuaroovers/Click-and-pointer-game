levelname = {one : "Entrance", two : "Gate"}

let title = document.getElementById("title")
let background = document.getElementById("game-container")
let dialog = document.getElementById("description")
let inventory = document.getElementById("inventory")
let inv1 = document.getElementById("inventory1")

let buttonscontainer = document.getElementById("game-buttons")
let keuze1 = document.getElementById("button1")
let keuze2 = document.getElementById("button2")
let keuze3 = document.getElementById("button3")



Start()

function Start()
{
    inventory.style.display = "none";
    title.style.color = "rgb(5, 5, 5)";
    title.textContent = "You Shouldn't Be Here";
    title.style.marginLeft = "10px";
    background.style.backgroundColor = "black";
    dialog.textContent = "Welcome!";
    buttonscontainer.style.display = "none";

    dialog.onclick = function(){Startdialog1()};
    
    titleanimation();
}
function Startdialog1()
{
    dialog.textContent = "Try to find a way out but be carefull of the many dangers";
    dialog.onclick = function(){Startdialog2()};
}
function Startdialog2()
{
    keuze2.style.borderRadius = "15px 15px 0px 0px";
    keuze2.style.marginLeft = "0px";
    keuze2.style.width = "601px";
    buttonscontainer.style.display = "block";
    keuze1.style.display = "none";
    keuze3.style.display = "none";
    keuze2.textContent = "Let's Go!";

    dialog.textContent = "Ready?"; 
    keuze2.onclick = function(){Entrance()};
}
function Entrance()
{
    inventory.style.display = "unset";
    title.style.color = "rgba(0, 0, 0, 0.7)";
    background.style.backgroundColor = "white";
    keuze1.style.display = "unset";
    keuze3.style.display = "unset";
    keuze2.style.borderRadius = "0px 0px 0px 0px";
    keuze2.style.marginLeft = "-4px";
    keuze2.style.width = "200px";
    



    titleanimation();
    title.textContent = levelname["one"];
    background.style.backgroundRepeat = "no-repeat"
    background.style.backgroundImage = "url(./images/backgrounds/dungeondoor.jpg)"
    dialog.textContent = ""

}

function titleanimation()
{
    title.style.animationPlayState = "running"
    setTimeout(function(){title.style.animationPlayState = "paused"}, 4000);
}
