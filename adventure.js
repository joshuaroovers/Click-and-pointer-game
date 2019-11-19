levelname = {one : "Entrance", two : "Gate"}

haveitem = {Keyblack : false, Keygold : false, Keyblue : false}

beenhere = {Entrance : false, NoKey : false, Hallwayright : false, Hallwayleft : false}

keycount = 0;

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

function Start()//////beter dialog
{
    titleanimation();

    inventory.style.display = "none";
    title.style.color = "rgb(5, 5, 5)";
    title.textContent = "You Shouldn't Be Here";
    title.style.marginLeft = "10px";

    buttonscontainer.style.display = "none";
    background.style.backgroundColor = "black";

    dialog.textContent = "Welcome!";
    dialog.onclick = function(){Startdialog1()};
}
function Startdialog1()/////beter dialog
{
    dialog.textContent = "Try to find a way out but be carefull of the many dangers";
    dialog.onclick = function(){Startchoice()};
}
function Startchoice()////beter dialog?
{
    keuze2.style.borderRadius = "15px 15px 0px 0px";
    keuze2.style.marginLeft = "0px";
    keuze2.style.width = "601px";

    buttonscontainer.style.display = "block";
    keuze1.style.display = "none";
    keuze3.style.display = "none";

    dialog.textContent = "Are you ready?";
    keuze2.textContent = "Let's Go!";
    keuze2.onclick = function(){Entrance()};
}



function Entrance()//////dialog
{
    
    title.style.color = "rgba(0, 0, 0, 0.7)";
    background.style.backgroundColor = "white";
    keuze2.style.borderRadius = "0px 0px 0px 0px";
    keuze2.style.marginLeft = "-4px";
    keuze2.style.width = "200px";
    keuze2.style.display = "none";
    buttonscontainer.style.display = "none";

    title.textContent = levelname["one"];
    background.style.backgroundRepeat = "no-repeat"
    background.style.backgroundSize = "cover"
    background.style.backgroundImage = "url(./images/backgrounds/dungeondoor.jpg)"
    
    if(beenhere["Entrance"] === false)
    {
        titleanimation();
        dialog.textContent = "We're in a large empty room"
        dialog.onclick = function(){Entrancedialog1()};
        
    }
    else if (beenhere["Entrance"] === true)
    {
        Entrancechoice();
    }
    
}
function Entrancedialog1()///beter dialog
{
    inventory.style.display = "unset";
    dialog.textContent = "But I have to tell you, you have an inventory! It allows you to carry some items around"
    dialog.onclick = function(){Entrancedialog2()};
}
function Entrancedialog2()
{
    dialog.textContent = "...That's quite the large door over here. Maybe we can open it!"
    dialog.onclick = function(){Entrancedialog3()};
}
function Entrancedialog3()///beter dialog
{
    dialog.textContent = "Or we could check out these two hallways on the left and right."
    dialog.onclick = function(){Entrancechoice()};
}
function Entrancechoice()////multiple key thing
{
    Choices();
    beenhere["Entrance"] = true;

    dialog.textContent = "What will you do?"
    keuze1.onclick = function(){EntranceGoleft()};
    keuze1.textContent = "Go left"

    keuze2.textContent = "Open the large door"

    keuze3.onclick = function(){EntranceGoright()};
    keuze3.textContent = "Go right"

    if(haveitem["Keygold"] === true|| haveitem["Keyblack"] === true|| haveitem["Keyblue"] === true)
    {
        keuze2.style.backgroundColor = "rgba(0, 255, 0, 0.7)"
        if(keycount > 1)
        {
            ///wich key?
            Endingpicker();
        }
        else
        {
            Endingpicker();
        }
    }
    else
    {
        if(beenhere["NoKey"] === true)
        {
            keuze2.style.backgroundColor = "rgba(255, 0, 0, 0.7)"
        }
        keuze2.onclick = function(){EntranceNokey()};
    }
}
function EntranceGoleft()
{
    NoChoices();
    dialog.textContent = "Left it is!"
    dialog.onclick = function(){Hallwayleft()}
}
function EntranceGoright()
{
    NoChoices();
    dialog.textContent = "Let's go right!"
    dialog.onclick = function(){Hallwayright()}
}

function EntranceNokey()///beter dialog
{
    beenhere["NoKey"] = true;
    buttonscontainer.style.display = "none";
    dialog.textContent = "You seem to need a key for this door";
    dialog.onclick = function(){Entrancechoice()};
}
function Endingpicker()////NYI
{
    if(haveitem["Keygold"] === true)
    {

    }
    else if(haveitem["Keyblack"] === true)
    {

    }
    else if(haveitem["Keyblue"] === true)
    {   

    }
}
function Hallwayleft()
{
    titleanimation()
    title.textContent = "Left Hallway";
    background.style.backgroundImage = "url(./images/backgrounds/hallway.jpg)"
    dialog.textContent = "Spooky hallway? that's fine...";
    dialog.onclick = function(){Hallwayldialog1()};
}
function Hallwayldialog1()
{
    dialog.textContent = "Not like there are any monsters here, haha"
    dialog.onclick = function(){Hallwayldialog2()};
}
function HallwayRight()
{
    titleanimation()
    title.textContent = "Right Hallway"
    background.style.backgroundImage = "url(./images/backgrounds/hallway.jpg)"
    dialog.textContent = ""
}


function titleanimation()
{
    title.style.animationPlayState = "running"
    setTimeout(function(){title.style.animationPlayState = "paused"}, 4000);
}

function NoChoices()
{
    buttonscontainer.style.display = "none";
    keuze1.style.backgroundColor = "rgb(197, 197, 197)";
    keuze2.style.backgroundColor = "rgb(197, 197, 197)";
    keuze3.style.backgroundColor = "rgb(197, 197, 197)";

    keuze1.textContent = "NONSET YOU DUMMY"
    keuze2.textContent = "NONSET YOU DUMMY"
    keuze3.textContent = "NONSET YOU DUMMY"
}
function Choices()
{
    buttonscontainer.style.display = "block";
    keuze1.style.display = "unset";
    keuze2.style.display = "unset";
    keuze3.style.display = "unset";
}
