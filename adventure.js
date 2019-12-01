levelname = {one : "Entrance", two : "Left Hallway", three : "Right Hallway", four : "The Workshop"}

haveitem = {Keyblack : false, Keygold : false, Keywhite : false, shimmer : false, KeyBW : false, KeyALL : false}
//make shure it's possible to be inserted in the dumb waiter
beenhere = {Entrance : false, NoKey : false, Hallwayright : false, Hallwayleft : false, Workshop : false, Dumbwaiter : false}

freeinvslot = {inv1 : true, inv2 : true, inv3 : true, inv4 : true, inv5 : true}

deathtaunting = ["Is it too hard for you?", "Oh well too bad", "Thought so", "Good bye then", "Are you sure you got everything?", "Bye bye bye", "... I'll miss you"]

keycount = 0
craftingitemcount = 0
createshimmer = 0
createshimmermimic = 0
/////////////////////////////////////////////////////////Key smith because ofcours /  tkey trader

//#region                       //Most DOM variables
var title = document.getElementById("title")
var background = document.getElementById("game-container")
var dialog = document.getElementById("description")


var inventory = document.createElement("div")
inventory.id = "inventory"
background.appendChild(inventory)



var inv1 = document.getElementById("inventoryitem")
inventory.appendChild(inv1)
//#region    //inventory spaces
var inv2 = document.createElement("img")
inventory.appendChild(inv2)
inv2.id = "inventoryitem"

var inv3 = document.createElement("img")
inventory.appendChild(inv3)
inv3.id = "inventoryitem"

var inv4 = document.createElement("img")
inventory.appendChild(inv4)
inv4.id = "inventoryitem"

var inv5 = document.createElement("img")
inventory.appendChild(inv5)
inv5.id = "inventoryitem"

var invblank = document.createElement("div")
invblank.id = "emptyinventoryfiller"
inventory.appendChild(invblank)
//#endregion

var buttonscontainer = document.getElementById("game-buttons")
var keuze1 = document.getElementById("button1")
var keuze2 = document.getElementById("button2")
var keuze3 = document.getElementById("button3")

//#region     //move things in the game container
background.appendChild(title)
background.appendChild(dialog)
background.appendChild(buttonscontainer)
//#endregion

//#endregion

//#region                         //create things
var shimmeritem = document.createElement("div")
var shimmermimic = document.createElement("div")

var Keygold = document.createElement("div")
var Keyblack = document.createElement("div")
var Keywhite = document.createElement("div")
//#endregion
//#region                      //make button 4
var keuze4 = document.createElement("button")
keuze4.id = "button4"
buttonscontainer.appendChild(keuze4)
//#endregion
Start()

function Start()//////beter dialog
{
    titleanimation()
    inventory.style.display = "none"
    title.style.color = "rgb(5, 5, 5)"
    title.textContent = "You Shouldn't Be Here"
    title.style.marginLeft = "10px"

    buttonscontainer.style.display = "none"
    background.style.backgroundColor = "black"

    dialog.textContent = "click on this dialog box to continue"
    dialog.onclick = function()
    {
        dialog.textContent = "This game is an adventure game where you look for items and try to find your way out while trying not to die"
        dialog.onclick = function()
        {
            dialog.textContent = "So be carefull, one miss step can and will send you all the way back to the start"
            dialog.onclick = function(){Startchoice()}
        }
    }
}

function Startchoice()
{
    keuze2.style.borderRadius = "15px 15px 0px 0px"
    keuze2.style.marginLeft = "0px"
    keuze2.style.width = "601px"

    buttonscontainer.style.display = "block"
    keuze1.style.display = "none"
    keuze3.style.display = "none"

    dialog.textContent = "Are you ready?"
    keuze2.textContent = "Start!"
    keuze2.onclick = function(){Entrance()}
}



function Entrance()//////dialog
{
    title.style.color = "rgba(0, 0, 0, 0.7)"
    background.style.backgroundColor = "white"
    keuze2.style.borderRadius = "0px 0px 0px 0px"
    keuze2.style.marginLeft = "-4px"
    keuze2.style.width = "200px"
    keuze2.style.display = "none"
    buttonscontainer.style.display = "none"

    title.textContent = levelname["one"]
    background.style.backgroundImage = "url(./images/backgrounds/dungeondoor.jpg)"
    
    if(beenhere["Entrance"] === false)
    {
        titleanimation()
        dialog.textContent = "You're in a large empty room and there is a large holle in the roof"//////////////////////
        dialog.onclick = function()
        {
            dialog.textContent = "That's probably how you got in here"/////////////////////////////
            dialog.onclick = function()
            {
                dialog.textContent = "There should be a way out somewhere around here"
                dialog.onclick = function()
                {
                    inventory.style.display = "unset"
                    dialog.textContent = "Luckely your pouch didn't get torn, you're going to need that"/////////////////////////////
                    dialog.onclick = function()
                    {
                        dialog.textContent = "That's quite the large door over here. Maybe you can open it"/////////////////////////////////
                        dialog.onclick = function()
                        {
                            dialog.textContent = "Or you could check out these two hallways on the left and right"//////////////////////////////////////
                            dialog.onclick = function(){Entrancechoice()}
                            beenhere["Entrance"] = true
                        }
                    }
                }
            }
        }
    }
    else
    {
        Entrancechoice()
    }

    
}

function Entrancechoice()////multiple key thing
{
    Choices()
    
    dialog.textContent = "What will you do?"

    keuze1.textContent = "Go left"
    keuze2.textContent = "Open the large door"
    keuze3.textContent = "Go right"


    keuze1.onclick = function()
    {
        NoChoices()
        dialog.textContent = "Left it is!"
        dialog.onclick = function(){Hallwayleft()}
    }
    

    if(haveitem["Keygold"] === true|| haveitem["Keyblack"] === true|| haveitem["Keywhite"] === true)
    {
        keuze2.style.backgroundColor = "rgba(0, 255, 0, 0.7)"
        keuze2.onclick = function(){Endingpicker()}
    }
    else
    {
        if(beenhere["NoKey"] === true)
        {
            keuze2.style.backgroundColor = "rgba(255, 0, 0, 0.7)"
        }
        keuze2.onclick = function()
        {
            beenhere["NoKey"] = true//////////////////////////////////maybe death instead? not enough death!
            buttonscontainer.style.display = "none"
            dialog.textContent = "You seem to need a key for this door"/////////////////////////////////////////////
           dialog.onclick = function(){Entrancechoice()}
        }
    }


    keuze3.onclick = function()
    {
        NoChoices()
        dialog.textContent = "Let's go right!"
        dialog.onclick = function(){Hallwayright()}
    }
}


function Endingpicker()////NYI
{
    dialog.textContent = "Time to open this door and see what's behind it"
    if(keycount === 2)
    {
        dialog.onclick = function(){Endingpickkey()}
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
    title.style.color = "rgba(0, 0, 255, 0.7)"
    title.textContent = levelname["two"]
    background.style.backgroundImage = "url(./images/backgrounds/hallway.jpg)"

    if (beenhere["Hallwayleft"] === false)
    {
        titleanimation()
        
        if(beenhere["Hallwayright"] === true)
        {
            dialog.textContent = "This hallway is somewhat longer than the one on the right"//////////////////////////////
        }
        else
        {
            dialog.textContent = "Spooky hallway? that's fine.. Not like there are any monsters here, haha"////////////////////
        }

        dialog.onclick = function()
        {
            dialog.textContent = "There are two doors at the end "//////////////////
            dialog.onclick = function()
            {
                dialog.textContent = "On the left an Y"
                dialog.onclick = function()
                {
                    dialog.textContent = "On the right is an other poorly lit room, all you can see are some plants creeping up through the cracks"
                    dialog.onclick = function()////underground black lake + white key
                    {
                        dialog.textContent = "Or you could go back to the first room"
                        dialog.onclick = function(){Hallwaylchoice()}
                    }
                }
            }
            
        }   
        
    }
    else
    {
        dialog.onclick = function(){Hallwaylchoice()}
    }
}

function Hallwaylchoice()//////////////////////////////left and right
{
    beenhere["Hallwayleft"] === true

    Choices()
    
    dialog.textContent = "Where do you go?"
    keuze1.textContent = "Go left" // NYI
    keuze2.textContent = "Go back"
    keuze3.textContent = "Go right" //underground black lake + white key

    keuze1.onclick = function(){}


    keuze2.onclick = function()
    {
        NoChoices()
        dialog.textContent = "You go back to the entrance"
        dialog.onclick = function(){Entrance()}
    }
    keuze3.onclick = function(){}
}



function Hallwayright()////////dialog
{
    createshimmer++
    shimmeritem.style.display = "unset"

    if(haveitem["shimmer"] === true)
    {
        createshimmermimic++
    }

    title.textContent = levelname["three"]
    background.style.backgroundImage = "url(./images/backgrounds/hallway_crack.jpg)"

    if(beenhere["Hallwayright"] === false)
    {
        titleanimation()

        if(beenhere["Hallwayleft"] === true)
        {
            dialog.textContent = "This hallway is darker than the one on the left"///////////////////
        }
        else
        {
            dialog.textContent = "Spooky hallway? that's fine"////////////////////////
        }

        dialog.onclick = function()
        {
            dialog.textContent = "Well besides that crack in the wall and less lighting here there isn't anything intressting. Let's move on"//////////////////
            dialog.onclick = function()
            {
                dialog.textContent = "There are two doors at the end"/////////////////////////
                dialog.onclick = function()
                {
                    dialog.textContent = "On the left is a dark room with a sign that has some faded tekst and a dollar sign"
                    dialog.onclick = function()////key smith / trader
                    {
                        dialog.textContent = "On the right a worn out greenhouse"///////////////////////////////////////////////////////////////////
                        dialog.onclick = function()
                        {
                            dialog.textContent = "You could also head back to the first room"
                            dialog.onclick = function(){Hallwayrchoice()}
                            beenhere["Hallwayright"] = true
                        }
                    }
                }
            }
        }
    }
    else
    {
        Hallwayrchoice()
    }

    if (createshimmer === 3 && haveitem["shimmer"] === false)
    {
        background.appendChild(shimmeritem)
       
        shimmeritem.style.backgroundImage = "url(./images/items/shimmerblue.jpg)"
        shimmeritem.style.width = "10px"
        shimmeritem.style.height = "10px"
        shimmeritem.style.position = "absolute"
        shimmeritem.style.marginTop = "80px"
        shimmeritem.style.marginLeft = "645px"
        shimmeritem.id = "shimmer"
        shimmeritem.onclick = function()
        {
            NoChoices()
            dialog.textContent = "Ooh! What's that?"
            dialog.onclick = function()
            {
                craftingitemcount++
                haveitem["shimmer"] = true 
                shimmeritem.remove() 
                
                
                inventoryspace()
                invx.src = "./images/items/bluegem.jpg" 
                invx.style.display = "unset"

                dialog.textContent = "A gem? It looks valuable might aswell take it"
                haveitem["shimmer"] = true
                dialog.onclick = function(){Hallwayrchoice()}
            }
        }
    }
    if (createshimmermimic > 0)
    {
        background.appendChild(shimmermimic)

        shimmermimic.style.display = "unset"
        shimmermimic.style.backgroundImage = "url(./images/items/shimmerred.jpg)"
        shimmermimic.style.width = "10px"
        shimmermimic.style.height = "10px"
        shimmermimic.style.position = "absolute"
        shimmermimic.style.marginTop = "55px"
        shimmermimic.style.marginLeft = "635px"
        shimmermimic.id = "shimmer"

        shimmermimic.onclick = function()
        {
            NoChoices()
            dialog.textContent = "Oooh looks like another gem"
            dialog.onclick = function()
            {
                dialog.textContent = "this one is quite far back"
                dialog.onclick = function()
                {
                    inventory.style.display = "none"
                    dialog.textContent = "Got it-"
                    shimmermimic.style.display = "none"
                    setTimeout(function(){death("a gem mimic killing you for your greed"), dialog.style.display = "none"}, 1000)
                }
            }
        }

    }
}

function Hallwayrchoice()//////////////////////////////left and right
{
    Choices()
    dialog.textContent = "Where do you go?"
    keuze1.textContent = "Go left" // key trader / smith
    keuze2.textContent = "Go back"
    keuze3.textContent = "Go right" // greenhouse

    keuze1.onclick = function()
    {
        NoChoices()
        dialog.textContent = "You go Left"
        dialog.onclick = function(){Workshop(), shimmeritem.style.display = "none"}
    }


    keuze2.onclick = function()
    {
        NoChoices()
        dialog.textContent = "You go back to the entrance"
        dialog.onclick = function(){Entrance(), shimmeritem.style.display = "none"}
    }
    keuze3.onclick = function()
    {
        NoChoices()
        dialog.textContent = "You go into the greenhouse"
        dialog.onclick = function(){}
    }
}


//#region wokshop
function Workshop()
{
    title.textContent = levelname["four"]
    background.style.backgroundImage = "url(./images/backgrounds/Workshop.jpg)"
    
    if(beenhere["Workshop"] === false)
    {
        titleanimation()
        dialog.textContent = "What a very nice and very dusty wokshop"
        dialog.onclick = function()
        {
            dialog.textContent = "There should be something that could help open that door"
            dialog.onclick = function()
            {
                dialog.textContent = "actually all these tools look like they are about to fall apart"
                dialog.onclick = function()
                {
                    dialog.textContent = "There is something that looks like a dumbwaiter over there that could be intressting"
                    dialog.onclick = function()
                    {
                        dialog.textContent = "There is also that locker that might have something"
                        dialog.onclick = function()
                        {
                            dialog.textContent = "Or you could head back to the hallway and come back later"
                            dialog.onclick = function()
                            {
                                Workshopchoice()
                            }
                        }
                    }
                }
            }
        }
    }
    else
    {
        Workshopchoice()
    }
}

function Workshopchoice()///////locker
{
    beenhere["Workshop"] = true
    Choices()

    dialog.textContent = "What will you do"

    keuze1.textContent = "Look at the locker"
    keuze2.textContent = "Go back"
    keuze3.textContent = "look at the dumbwaiter"

    keuze1.onclick = function()
    {
        NoChoices()
        dialog.textContent = "You decide to look at the locker"
        dialog.onclick = function()
        {

        }
    }
    keuze2.onclick = function()
    {
        NoChoices()
        dialog.textContent = "You go back to the hallway"
        dialog.onclick = function(){Hallwayright()}
    }
    keuze3.onclick = function()
    {
        NoChoices()
        dialog.textContent = "You decide to look at the dumbwaiter"
        dialog.onclick = function(){dumbwaitertrader()}
    }
}
function dumbwaitertrader()
{
    background.style.backgroundImage = "url(./images/backgrounds/dumbwaiter.jpg)"
    
    if(beenhere["Dumbwaiter"] === false)
    {
        dialog.textContent = "Cool a dumbwaiter!"
        dialog.onclick = function()
        {
            dialog.textContent = "It's like a tiny elevator for food and other small things"
            dialog.onclick = function()
            {
                dialog.textContent = "You could send something up but I don't think it would do much"
                dialog.onclick = function()
                {
                    dialog.textContent = "Or we could look go back and look around the workshop"
                    dialog.onclick = function(){dumbwaitertraderchoice()}
                }
            }
        }
    }
    else
    {
        dumbwaitertraderchoice()
    }
}
function dumbwaitertraderchoice()
{
    beenhere["Dumbwaiter"] = true

    Choices()
    dialog.textContent = "What will you do"

    keuze1.textContent = "insert items in the dumbwaiter"
    keuze3.textContent = "Go back"

    keuze1.style.width = "300px"
    keuze2.style.display = "none"
    keuze3.style.width = "300px"

    keuze1.onclick = function(){dumbwaitertrading()}

    keuze3.onclick = function()
    {
        NoChoices()
        dialog.textContent = "You go back to the workshop"
        dialog.onclick = function(){Workshop()}
    }
}
function dumbwaitertrading()
{
    if(haveitem["shimmer"] === true || haveitem["Keygold"] === true || haveitem["Keywhite"] === true || haveitem["Keyblack"] === true)
    {
        Choices()
        dialog.textContent = "Do you want to put all your items in the dumbwaiter?"

        keuze1.textContent = "Yes"
        keuze3.textContent = "No"
    
        keuze1.style.width = "300px"
        keuze2.style.display = "none"
        keuze3.style.width = "300px"

        keuze1.onclick = function()
        {
            NoChoices()
            dialog.textContent = "You put all your belongings in the dumbwaiter and close the hatch"
            inv1.style.display = "none"
            inv2.style.display = "none"
            inv3.style.display = "none"
            inv4.style.display = "none"
            inv5.style.display = "none"
            invblank.style.display = "unset"
            dialog.onclick = function()
            {
                dialog.textContent = "You can hear it going up"
                dialog.onclick = function()
                {
                    setTimeout(function(){dialog.textContent = "."}, 1000)
                    setTimeout(function(){dialog.textContent = ".."}, 1000)
                    setTimeout(function(){dialog.textContent = "..."}, 1000)
                    setTimeout(function(){dialog.textContent = ".."}, 1000)
                    setTimeout(function(){dialog.textContent = "."}, 1000)
                    setTimeout(function(){dialog.textContent = "It's back?!"}, 1000)
                    dialog.onclick = function()
                    {
                        dialog.textContent = "You open the hatch and inside.."
                        dialog.onclick = function()
                        {
                            if(haveitem["shimmer"] === true && haveitem["Keyblack"] === true && haveitem["Keywhite"] === true && haveitem["Keygold"])
                            {
                                
                            }
                            else if (haveitem["shimmer"] === true && haveitem["Keyblack"] === true && haveitem["Keywhite"] === true)
                            {

                            }
                            else
                            {

                            }
                        }
                    }
                }
            }
            
        }
    }
    else
    {
        NoChoices()
        dialog.textContent = "You don't have anything to put inside"
        dialog.onclick = function(){dumbwaitertraderchoice()}
    }
    
}
//#endregion


function death(deathmessage)
{
    inventory.style.display = "none"
    background.style.backgroundImage = "none" 
    background.style.animationPlayState = "running"
    setTimeout(function(){background.style.animationPlayState = "paused"}, 5000)
    
    setTimeout(function(){dialog.style.display = "unset"}, 3000)
    dialog.textContent = "..."
    dialog.onclick = function()
    {
        dialog.textContent = "If your confused about what just happend"
        dialog.onclick = function()
        {
            dialog.textContent = "You just died"
            dialog.onclick = function()
            {
                dialog.textContent = "You apparently died because of " + deathmessage
                dialog.onclick = function()
                {
                    dialog.textContent = "Would you like to try again?"
                    Choices()
                    keuze1.style.width = "300px"
                    keuze2.style.display = "none"
                    keuze3.style.width = "300px"

                    keuze1.textContent = "Restart"
                    keuze3.textContent = "Quit"

                    keuze1.onclick = function()
                    {
                        NoChoices()
                        dialog.onclick = "none"
                        dialog.textContent = "Good luck.."
                        setTimeout(function(){location.reload()},2000)
                    }
                    keuze3.onclick = function()
                    {
                        NoChoices()
                        dialog.onclick = "none"
                        randomnumber = Math.floor(Math.random() * 7)
                        dialog.textContent = deathtaunting[randomnumber]
                        setTimeout(function(){window.close()},2000)
                    }
                }
            }
        }
    }


    
}
function inventoryspace()
{
    invblank.remove()
    if(freeinvslot["inv1"] === true)
    {
        invx = inv1
        freeinvslot["inv1"] = false
    }
    else if(freeinvslot["inv2"] === true)
    {
        invx = inv2
        freeinvslot["inv2"] = false
    }
    else if(freeinvslot["inv3"] === true)
    {
        invx = inv3
        freeinvslot["inv3"] = false
    }
    else if(freeinvslot["inv4"] === true)
    {
        invx = inv4
        freeinvslot["inv4"] = false
    }
    else if(freeinvslot["inv5"] === true)
    {
        invx = inv5
        freeinvslot["inv5"] = false
    }
    return invx
}
function titleanimation()
{
    title.style.animationPlayState = "running"
    setTimeout(function(){title.style.animationPlayState = "paused"}, 3000)
    title.style.color = "rgba(0, 0, 0, 0.7)"
}

function NoChoices()////del the thing
{
    buttonscontainer.style.display = "none"
    keuze1.style.backgroundColor = "rgb(197, 197, 197)"
    keuze2.style.backgroundColor = "rgb(197, 197, 197)"
    keuze3.style.backgroundColor = "rgb(197, 197, 197)"

    keuze1.style.width = "200px"
    keuze2.style.width = "200px"
    keuze3.style.width = "200px"

    keuze1.textContent = "NONSET YOU DUMMY"
    keuze2.textContent = "NONSET YOU DUMMY"
    keuze3.textContent = "NONSET YOU DUMMY"
}
function Choices()
{
    dialog.onclick = "none"
    buttonscontainer.style.display = "block"
    keuze1.style.display = "unset"
    keuze2.style.display = "unset"
    keuze3.style.display = "unset"
}



/*
leaving the dialog empty will create a blank space at the bottom
having more than 1 line of text in the dialog will make the dialog box to big because ofcourse it does

beenhere can backfire    how tho past me?!    possibly if there is an "if" it will just skip everything if there isn't an else since java wont wait for you to click on things

MAKE SURE ALL NAMES ARE CORRECT
*/
