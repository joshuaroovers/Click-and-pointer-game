levelname = {one : "Entrance", two : "Left Hallway", three : "Right Hallway"}

haveitem = {Keyblack : false, Keygold : false, Keywhite : false}

beenhere = {Entrance : false, NoKey : false, Hallwayright : false, Hallwayleft : false}

keycount = 0;
createshimmer = 0;
/////////////////////////////////////////////////////////Key smith because ofcours. also hollow knight lol
var title = document.getElementById("title")
var background = document.getElementById("game-container")
var dialog = document.getElementById("description")


var inventory = document.createElement("div")
inventory.id = "inventory";
background.appendChild(inventory);

var invblank = document.createElement("div");
invblank.id = "emptyinventoryfiller"
inventory.appendChild(invblank);

var inv1 = document.getElementById("inventoryitem1")
inventory.appendChild(inv1);


var buttonscontainer = document.getElementById("game-buttons")
var keuze1 = document.getElementById("button1")
var keuze2 = document.getElementById("button2")
var keuze3 = document.getElementById("button3")
background.appendChild(title)
background.appendChild(dialog)
background.appendChild(buttonscontainer)

var shimmeritem = document.createElement("div");

var Keygold = document.createElement("div");
var Keyblack = document.createElement("div");
var Keywhite = document.createElement("div");



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
    dialog.onclick = function(){Startdialog1();};
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
    background.style.backgroundImage = "url(./images/backgrounds/dungeondoor.jpg)"
    
    if(beenhere["Entrance"] === false)
    {
        titleanimation();
        dialog.textContent = "We're in a large empty room"
        dialog.onclick = function(){Entrancedialog1()};
    }
    else
    {
        Entrancechoice();
    }

    
}

function Entrancereturn()
{
    dialog.textContent = "You go back to the entrance"
    dialog.onclick = function(){Entrance()};
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
    beenhere["Entrance"] = true;
}

function Entrancechoice()////multiple key thing
{
    Choices();
    
    dialog.textContent = "What will you do?"
    keuze1.onclick = function(){EntranceGoleft()};
    keuze1.textContent = "Go left"

    keuze2.textContent = "Open the large door"

    keuze3.onclick = function(){EntranceGoright()};
    keuze3.textContent = "Go right"

    if(haveitem["Keygold"] === true|| haveitem["Keyblack"] === true|| haveitem["Keywhite"] === true)
    {
        keuze2.style.backgroundColor = "rgba(0, 255, 0, 0.7)"
        keuze2.onclick = function(){Endingpicker()};
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
    dialog.textContent = "Time to open this door and see what's behind it"
    if(keycount === 2)
    {
        dialog.onclick = function(){Endingpickkey()};
    }
    else if (keycount === 3)
    {

    }
    else
    {
        if(haveitem["Keygold"] === true)
        {
            
        }
        else if(haveitem["Keyblack"] === true)
        {
            
        }
        else if(haveitem["Keywhite"] === true)
        {   
            
        }
    }
}
function Endingchoice()
{

}
function Endingpickkey()
{
    dialog.textContent = "Wich key do you want to use?"

    if(haveitem["Keygold"] === true && haveitem["Keyblack"] === true)
    {
        keuze1.textContent = "Use the gold key"
        keuze2.textContent = "Not yet"
        keuze3.textContent = "Use the black key"
        keuze1.onclick = function(){}
        keuze2.onclick = function(){}
        keuze3.onclick = function(){}
    }
    else if(haveitem["Keywhite"] === true && haveitem["Keygold"] === true)
    {
        keuze1.textContent = "Use the white key"
        keuze2.textContent = "Not yet"
        keuze3.textContent = "Use the gold key"
        keuze1.onclick = function(){}
        keuze2.onclick = function(){}
        keuze3.onclick = function(){}
    }
    else if(haveitem["Keyblack"] === true && haveitem["Keywhite"] === true)////fuse
    {
        keuze1.textContent = "Use the black key"
        keuze2.textContent = "Not yet"
        keuze3.textContent = "Use the white key"
        keuze1.onclick = function(){}
        keuze2.onclick = function(){}
        keuze3.onclick = function(){}
    }
}



function Hallwayleft()
{
    title.style.color = "rgba(56, 56, 56, 0.7)";
    title.textContent = levelname["two"];
    background.style.backgroundImage = "url(./images/backgrounds/hallway.jpg)";

    if (beenhere["Hallwayleft"] === false)
    {
        titleanimation()

        if(beenhere["Hallwayright"] === true)
        {
            dialog.textContent = "This hallway is somewhat longer than the one on the right";
        }
        else
        {
            dialog.textContent = "Spooky hallway? that's fine...";
        }
        dialog.onclick = function(){Hallwayldialog1()};        
    }
    dialog.onclick = function(){};
}

function Hallwayldialog1()
{
    dialog.textContent = "Not like there are any monsters here, haha";
    dialog.onclick = function(){Hallwayldialog2()};
}

function Hallwayldialog2()
{
    dialog.textContent = "There are two corridors at the end. On the left an Y and on the right an Y. You could also go back..";
    dialog.onclick = function(){Hallwaylchoice()};
}



function Hallwayright()////////dialog
{
    createshimmer++;

    title.style.color = "rgba(56, 56, 56, 0.7)";
    title.textContent = levelname["three"];
    background.style.backgroundImage = "url(./images/backgrounds/hallway_crack.jpg)";

    if(beenhere["Hallwayright"] === false)
    {
        titleanimation()

        if(beenhere["Hallwayleft"] === true)
        {
            dialog.textContent = "This hallway is much darker than the one on the left";
        }
        else
        {
            dialog.textContent = "Spooky hallway? that's fine...";
        }
        dialog.onclick = function(){Hallwayrdialog1()}
    }
    else
    {
        dialog.onclick = function(){Hallwayrchoice()};
    }
    
    if (createshimmer > 2 )
    {
        background.appendChild(shimmeritem);
        shimmeritem.style.backgroundImage = "url(./images/items/shimmer.jpg)";
        shimmeritem.style.width = "10px";
        shimmeritem.style.height = "10px";
        shimmeritem.style.position = "absolute";
        shimmeritem.style.marginTop = "-240px";
        shimmeritem.style.marginLeft = "910px";
        shimmeritem.onclick = function(){};
    }
}
function Hallwayrdialog1()
{
    dialog.textContent = "Well besides that crack in the wall and less lighting here there isn't anything intressting. Let's move on"
    dialog.onclick = function(){Hallwayrdialog2()}
}
function Hallwayrdialog2()
{
    dialog.textContent = "There are two corridors at the end. On the left an X and on the right an X. You could also go back.."
    dialog.onclick = function(){Hallwayrchoice()}
    beenhere["Hallwayright"] = true;
}
function Hallwayrchoice()
{
    Choices()
    dialog.textContent = "Where do you go?"
    keuze1.textContent = "Go left"
    keuze2.textContent = "Go back"
    keuze3.textContent = "Go right"

    keuze1.onclick = function(){}
    keuze2.onclick = function(){Entrancereturn()}
    keuze3.onclick = function(){}
}


function titleanimation()
{
    title.style.animationPlayState = "running"
    setTimeout(function(){title.style.animationPlayState = "paused"}, 3000);
    title.style.color = "rgba(0, 0, 0, 0.7)"
}

function NoChoices()////del the thing
{
    buttonscontainer.style.display = "none";
    keuze1.style.backgroundColor = "rgb(197, 197, 197)";
    keuze2.style.backgroundColor = "rgb(197, 197, 197)";
    keuze3.style.backgroundColor = "rgb(197, 197, 197)";

    keuze1.textContent = "NONSET YOU DUMMY";
    keuze2.textContent = "NONSET YOU DUMMY";
    keuze3.textContent = "NONSET YOU DUMMY";
}
function Choices()
{
    buttonscontainer.style.display = "block";
    keuze1.style.display = "unset";
    keuze2.style.display = "unset";
    keuze3.style.display = "unset";
}



/*
leaving the dialog empty will create a blank space at the bottom
having more than 1 line of text in the dialog will make the dialog box to big because ofcourse it does

beenhere can backfire

MAKE SURE ALL NAMES ARE CORRECT
*/
