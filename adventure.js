levelname = {one : "Entrance", two : "Left Hallway", three : "Right Hallway", four : "The Workshop", five : "The Greenhouse", six : "Peacefull room"}

haveitem = {Keyblack : 0, Keygold : 0, Keywhite : 0, shimmer : 0, KeyBW : false, Keymaster : false, Crowbar : true, Trowel : false}/////0 is false, 1 is true, 2 is used to have but crafted into something else
//make shure it's possible to be inserted in the dumb waiter
beenhere = {Entrance : false, NoKey : false, Hallwayright : false, Hallwayleft : false, Workshop : false, Dumbwaiter : false, Locker : 0, Greenhouse : false, 𝒫𝑒𝒶𝒸𝑒𝒻𝓊𝓁𝓁𝓇𝑜𝑜𝓂 : 0}
//locker is special case since you shouldn't die if you did take the item and go back
freeinvslot = {inv1 : true, inv2 : true, inv3 : true, inv4 : true, inv5 : true}

deathtaunting = ["Is it too hard for you?", "Oh well too bad", "Thought so", "Good bye then", "Are you sure you got everything?", "Bye bye bye", "... I'll miss you"]

keycount = 0
greenhousdooropen = false
craftingitemcount = 0
createshimmer = 0
createshimmermimic = 0



//#region                       //Most DOM variables
var title = document.getElementById("title")
var background = document.getElementById("game-container")
var dialog = document.getElementById("description")


var inventory = document.createElement("div")
inventory.id = "inventory"
background.appendChild(inventory)

var buttonscontainer = document.getElementById("game-buttons")
var keuze1 = document.getElementById("button1")
var keuze2 = document.getElementById("button2")
var keuze3 = document.getElementById("button3")
//#endregion

//#region    //inventory spaces
var inv1 = document.getElementById("inventoryitem1")
inventory.appendChild(inv1)

var inv2 = document.createElement("img")
inventory.appendChild(inv2)
inv2.id = "inventoryitem2"

var inv3 = document.createElement("img")
inventory.appendChild(inv3)
inv3.id = "inventoryitem3"

var inv4 = document.createElement("img")
inventory.appendChild(inv4)
inv4.id = "inventoryitem4"

var inv5 = document.createElement("img")
inventory.appendChild(inv5)
inv5.id = "inventoryitem5"

var inv6 = document.createElement("img")
inventory.appendChild(inv6)
inv6.id = "inventoryitem6"

var invblank = document.createElement("div")
invblank.id = "emptyinventoryfiller"
inventory.appendChild(invblank)
//#endregion

//#region     //move things in the game container
background.appendChild(title)
background.appendChild(dialog)
background.appendChild(buttonscontainer)
//#endregion

//#region                         //create things
var shimmeritem = document.createElement("img")
var shimmerlure = document.createElement("img")
var shimmermimic = document.createElement("img")

var keyrecipe = document.createElement("div")

var Crowbar = document.createElement("img")////////////////////////background image with div pls DO NOT UNLESS YOU WANT TO SPECIFY THE SIZES
var Trowel = document.createElement("img")
var flowerpot = document.createElement("div")

var Keygold = document.createElement("img")
var Keyblack = document.createElement("img")
var Keywhite = document.createElement("img")
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

function Entrancechoice()////multiple key thing ///diffrent color for "You can open door signifier"
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
        dialog.onclick = function(){Hallwayleft(), title.style.color = "rgb(100, 100, 100)"}
    }
    

    if(haveitem["Keygold"] === 1|| haveitem["Keyblack"] === 1|| haveitem["Keywhite"] === 1 || haveitem["KeyBW"] || haveitem["Keymaster"])
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
        dialog.onclick = function(){Hallwayright(), title.style.color = "rgb(100, 100, 100)"}
    }
}


function Endingpicker()////NYI
{
    dialog.textContent = "Time to open this door and see what's behind it"
    if(keycount === 2)
    {
        dialog.onclick = function(){Endingpickkey()}
    }
    else
    {
        if(haveitem["Keygold"] === 1)
        {
            
        }
        else if(haveitem["Keyblack"] === 1)
        {
            
        }
        else if(haveitem["Keywhite"] === 1)
        {   
            
        }
        else if(haveitem["Keymaster"] === 1)
        {

        }
    }
}

function Endingpickkey()
{
    dialog.textContent = "Wich key do you want to use?"
    Choices()
    if(haveitem["Keygold"] === 1 && haveitem["Keyblack"] === 1)
    {
        keuze1.textContent = "Use the gold key"
        keuze2.textContent = "Not yet"
        keuze3.textContent = "Use the black key"
        keuze1.onclick = function(){}
        keuze2.onclick = function()
        {
            dialog.textContent = "You decide to wait"
            dialog.onclick = function(){Entrance()}
        }
        keuze3.onclick = function(){}
    }
    else if(haveitem["Keywhite"] === 1 && haveitem["Keygold"] === 1)
    {
        keuze1.textContent = "Use the white key"
        keuze2.textContent = "Not yet"
        keuze3.textContent = "Use the gold key"
        keuze1.onclick = function(){}
        keuze2.onclick = function()
        {
            dialog.textContent = "You decide to wait"
            dialog.onclick = function(){Entrance()}
        }
        keuze3.onclick = function(){}
    }
    else if(haveitem["Keyblack"] === 1 && haveitem["Keywhite"] === 1)////fuse
    {
        keuze1.textContent = "Use the black key"
        keuze2.textContent = "Not yet"
        keuze3.textContent = "Use the white key"
        keuze1.onclick = function(){}
        keuze2.onclick = function()
        {
            dialog.textContent = "You decide to wait"
            dialog.onclick = function(){Entrance()}
        }
        keuze3.onclick = function(){}
    }
    else if(haveitem["Keygold"] === 1 && haveitem["KeyBW"] === 1)////fuse
    {
        keuze1.textContent = "Use the black and white key"
        keuze2.textContent = "Not yet"
        keuze3.textContent = "Use the gold key"
        keuze1.onclick = function(){}
        keuze2.onclick = function()
        {
            dialog.textContent = "You decide to wait"
            dialog.onclick = function(){Entrance()}
        }
        keuze3.onclick = function(){}
    }
}



function Hallwayleft()
{
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
                dialog.textContent = "On the left is a very dark room. You can't see anything in there. the sign above the door frame says: [𝒫𝑒𝒶𝒸𝑒𝒻𝓊𝓁𝓁 𝓇𝑜𝑜𝓂]"
                dialog.onclick = function()
                {
                    dialog.textContent = "On the right is a very cave like room"
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
        Hallwaylchoice()
    }
}

function Hallwaylchoice()//////only right
{
    beenhere["Hallwayleft"] = true

    Choices()
    
    dialog.textContent = "Where do you go?"
    keuze1.textContent = "Go left" // 𝒫𝑒𝒶𝒸𝑒𝒻𝓊𝓁𝓁 𝓇𝑜𝑜𝓂
    keuze2.textContent = "Go back"
    keuze3.textContent = "Go right" //indiana jones thing for the black key? swap it for the gem but you could take it back and time a trap

    keuze1.onclick = function()
    {
        NoChoices()
        dialog.textContent = " You go to the 𝒫𝑒𝒶𝒸𝑒𝒻𝓊𝓁𝓁 𝓇𝑜𝑜𝓂"
        dialog.onclick = function(){𝒫𝑒𝒶𝒸𝑒𝒻𝓊𝓁𝓁𝓇𝑜𝑜𝓂(), title.style.color = "rgb(100, 100, 100)"}
    }


    keuze2.onclick = function()
    {
        NoChoices()
        dialog.textContent = "You go back to the entrance"
        dialog.onclick = function(){Entrance()}
    }
    keuze3.onclick = function()
    {
        NoChoices()
        dialog.textContent = " "
        dialog.onclick = function(){}
    }
}


function 𝒫𝑒𝒶𝒸𝑒𝒻𝓊𝓁𝓁𝓇𝑜𝑜𝓂()
{
    title.textContent = levelname["six"]
    background.style.backgroundImage = "url(./images/backgrounds/Peacefullroom.jpg)"
    if(beenhere["𝒫𝑒𝒶𝒸𝑒𝒻𝓊𝓁𝓁𝓇𝑜𝑜𝓂"] === 0)
    {
        titleanimation()
        dialog.textContent = "That's really dark"
        dialog.onclick = function()
        {
            dialog.textContent = "Are you sure you want to go in there?"
        
            Choices()

            keuze1.style.width = "300px"
            keuze2.style.display = "none"
            keuze3.style.width = "300px"

            keuze1.textContent = "Yes"
            keuze3.textContent = "Nevermind"

            keuze1.onclick = function()
            {
                NoChoices()
                dialog.textContent = "Well then good luck" 
                dialog.onclick = function(){𝒫𝑒𝒶𝒸𝑒𝒻𝓊𝓁𝓁𝓇𝑜𝑜𝓂𝒸𝒽𝑜𝒾𝒸𝑒(), shimmerlure.remove()}
            }

            keuze3.onclick = function()
            {
                beenhere["𝒫𝑒𝒶𝒸𝑒𝒻𝓊𝓁𝓁𝓇𝑜𝑜𝓂"] = 1
                NoChoices()
                dialog.textContent = "Yeah, maybe later or even never"
                dialog.onclick = function(){Hallwayleft(), shimmerlure.remove()}
            }
        }
    }
    else if (beenhere["𝒫𝑒𝒶𝒸𝑒𝒻𝓊𝓁𝓁𝓇𝑜𝑜𝓂"] === 1)
    {
        𝒫𝑒𝒶𝒸𝑒𝒻𝓊𝓁𝓁𝓇𝑜𝑜𝓂𝒸𝒽𝑜𝒾𝒸𝑒()
    }
    else if (beenhere["𝒫𝑒𝒶𝒸𝑒𝒻𝓊𝓁𝓁𝓇𝑜𝑜𝓂"] === 2)
    {
        NoChoices()
        dialog.textContent = "No need to go back in there"
        dialog.onclick = function(){Hallwayleft()}
    }
    else if (beenhere["𝒫𝑒𝒶𝒸𝑒𝒻𝓊𝓁𝓁𝓇𝑜𝑜𝓂"] === 3)
    {
        NoChoices()
        beenhere["𝒫𝑒𝒶𝒸𝑒𝒻𝓊𝓁𝓁𝓇𝑜𝑜𝓂"] = 2
        dialog.textContent = "You should go back to the hallway"
        dialog.onclick = function(){Hallwayleft()}
    }

    if(haveitem["Keywhite"] === 0)
    {
        background.appendChild(shimmerlure)
        shimmerlure.src = "./images/items/shimmerwhite.jpg"
        shimmerlure.id = "shimmer"
        shimmerlure.style.marginLeft = "480px"
    }

}

function 𝒫𝑒𝒶𝒸𝑒𝒻𝓊𝓁𝓁𝓇𝑜𝑜𝓂𝒸𝒽𝑜𝒾𝒸𝑒()////////////////////////////////////////////////////////////////////////////
{
    background.style.backgroundImage = "url(./images/backgrounds/black.jpg)"
    dialog.textContent = "Wow, it's even darker than it looked like from outside"
    dialog.onclick = function()
    { 
        beenhere["𝒫𝑒𝒶𝒸𝑒𝒻𝓊𝓁𝓁𝓇𝑜𝑜𝓂"] = 3
        buttonscontainer.style.display = "unset"
        keuze1.style.display = "unset"
        keuze1.style.width = "300px"

        keuze3.style.display = "unset"
        keuze3.style.width = "300px"

        dialog.textContent = "Where do you go?"
        keuze1.textContent = "left"
        keuze3.textContent = "right"

        keuze1.onclick = function()
        {
            buttonscontainer.style.display = "none"
            dialog.textContent = "You take a step to your left and walk forward"
            dialog.onclick = function()
            {
                dialog.textContent = "Okay now what"
                dialog.onclick = function()
                {
                    buttonscontainer.style.display = "unset"
                    dialog.textContent = "Where to now?"

                    keuze1.onclick = function()
                    {
                        buttonscontainer.style.display = "none"
                        dialog.textContent = "Let's go left again"
                        dialog.onclick = function()
                        {
                            dialog.textContent = "You take a step to your left and walk forward"
                            dialog.onclick = function()
                            {
                                buttonscontainer.style.display = "unset"
                                dialog.textContent = "Where to now?"
                                
                                keuze1.onclick = function()
                                {
                                    buttonscontainer.style.display = "none"
                                    dialog.textContent = "three times a charm! let's go left again"
                                    dialog.onclick = function(){death("You took a wrong step in the 𝒫𝑒𝒶𝒸𝑒𝒻𝓊𝓁𝓁𝓇𝑜𝑜𝓂")}
                                }

                                keuze3.onclick = function()
                                {
                                    buttonscontainer.style.display = "none"
                                    dialog.textContent = "Let's go right now"
                                    dialog.onclick = function()
                                    {
                                        background.appendChild(shimmerlure)
                                        shimmerlure.style.position = "absolute"
                                        dialog.textContent = "There it is!" 
                                        shimmerlure.style.width = "40px"
                                        shimmerlure.onclick = function()
                                        {
                                            dialog.textContent = "It's a key?!"
                                            haveitem["Keywhite"] = 1
                                            inv4.style.display = "unset"
                                            inv4.src = "./images/items/Keywhiteinv.jpg"
                                            
                                            shimmerlure.remove()
                                            dialog.onclick = function()
                                            {
                                                dialog.textContent = "Well that was the good news"///////////////////////////////////////////////////////////////you gotta go back aswel :)
                                                dialog.onclick = function()
                                                {
                                                    dialog.textContent = "The bad news.. well"
                                                    dialog.onclick = function()
                                                    {
                                                        dialog.textContent = "Let's say I hope you have a good memory because your going to have to go the same way back"
                                                        dialog.onclick = function()
                                                        {
                                                            dialog.textContent = "Where do you go.."
                                                            buttonscontainer.style.display = "unset"

                                                            keuze1.onclick = function()
                                                            {
                                                                buttonscontainer.style.display = "none"
                                                                dialog.textContent = "Left . . ."
                                                                dialog.onclick = function()
                                                                {
                                                                    dialog.textContent = "Okay, next go."

                                                                    buttonscontainer.style.display = "unset"

                                                                    keuze1.onclick = function()
                                                                    {
                                                                        buttonscontainer.style.display = "none"
                                                                        dialog.textContent = "Left . ."
                                                                        dialog.onclick = function(){death("You took a wrong step in the 𝒫𝑒𝒶𝒸𝑒𝒻𝓊𝓁𝓁𝓇𝑜𝑜𝓂")}
                                                                    }
                                                                    keuze3.onclick = function()
                                                                    {
                                                                        buttonscontainer.style.display = "none"
                                                                        dialog.textContent = "Right . ."
                                                                        dialog.onclick = function()
                                                                        {
                                                                            dialog.textContent = "One more!"

                                                                            buttonscontainer.style.display = "unset"

                                                                            keuze1.onclick = function()
                                                                            {
                                                                                buttonscontainer.style.display = "none"
                                                                                dialog.textContent = "Left and?"
                                                                                dialog.onclick = function(){death("You took a wrong step in the 𝒫𝑒𝒶𝒸𝑒𝒻𝓊𝓁𝓁𝓇𝑜𝑜𝓂")}
                                                                            }
                                                                            keuze3.onclick = function()
                                                                            {
                                                                                buttonscontainer.style.display = "none"
                                                                                dialog.textContent = "Right and?"
                                                                                dialog.onclick = function()
                                                                                {
                                                                                    dialog.textContent = "Yes! You made it!"
                                                                                    dialog.onclick = function(){𝒫𝑒𝒶𝒸𝑒𝒻𝓊𝓁𝓁𝓇𝑜𝑜𝓂()}
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                                
                                                            }
                                                            keuze3.onclick = function()
                                                            {
                                                                dialog.textContent = "Right . . ."
                                                                dialog.onclick = function(){death("You took a wrong step in the 𝒫𝑒𝒶𝒸𝑒𝒻𝓊𝓁𝓁𝓇𝑜𝑜𝓂")}
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                    keuze3.onclick = function()
                    {
                        buttonscontainer.style.display = "none"
                        dialog.textContent = "Let's go right this time"
                        dialog.onclick = function()
                        {
                            dialog.textContent = "You take a step to your right and walk forward"
                            dialog.onclick = function()
                            {
                                buttonscontainer.style.display = "unset"
                                dialog.textContent = "Where to now?"

                                keuze1.onclick = function()
                                {
                                    buttonscontainer.style.display = "none"
                                    dialog.textContent = "Let's go left this time"
                                    dialog.onclick = function(){death("You took a wrong step in the 𝒫𝑒𝒶𝒸𝑒𝒻𝓊𝓁𝓁𝓇𝑜𝑜𝓂")}
                                }

                                keuze3.onclick = function()
                                {
                                    buttonscontainer.style.display = "none"
                                    dialog.textContent = "Let's go right again"    
                                    dialog.onclick = function(){death("You took a wrong step in the 𝒫𝑒𝒶𝒸𝑒𝒻𝓊𝓁𝓁𝓇𝑜𝑜𝓂")}                                
                                }
                            }
                        }
                    }
                }
            }
        }

        keuze3.onclick = function()
        {
            buttonscontainer.style.display = "none"
            dialog.textContent = "You take a step to your right and walk forward-"
            dialog.onclick = function()
            {
                dialog.textContent = "There is a pitfall with spikes"
                dialog.onclick = function()
                {
                    dialog.textContent = "You where barly able to see it in time"
                    dialog.onclick = function()
                    {
                        dialog.textContent = "You go back to the hallway"
                        dialog.onclick = function(){𝒫𝑒𝒶𝒸𝑒𝒻𝓊𝓁𝓁𝓇𝑜𝑜𝓂()}
                    }
                }
            }
        }
    }
}




function Hallwayright()////////dialog
{
    createshimmer++
    shimmeritem.style.display = "unset"

    if(haveitem["shimmer"] === 1 || haveitem["shimmer"] === 2)
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

    if (createshimmer === 3 && haveitem["shimmer"] === 0)
    {
        background.appendChild(shimmeritem)
       
        shimmeritem.src = "./images/items/shimmerblue.jpg"
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
                shimmeritem.remove() 
                
                
                inv1.src = "./images/items/bluegem.jpg" 
                inv1.style.display = "unset"

                dialog.textContent = "A gem? It looks valuable might aswell take it"
                haveitem["shimmer"] = 1
                dialog.onclick = function(){Hallwayrchoice()}
            }
        }
    }
    if (createshimmermimic > 0)
    {
        background.appendChild(shimmermimic)

        shimmermimic.style.display = "unset"
        shimmermimic.src = "./images/items/shimmerred.jpg"
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
                    shimmermimic.remove()
                    setTimeout(function(){death("The red gem you tried to pick up was a mimic that saw you pick up the first one, and well it mimiced it and killed you"), dialog.style.display = "none"}, 1000)
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
        dialog.onclick = function(){Workshop(), shimmeritem.remove(), shimmermimic.remove()}
    }


    keuze2.onclick = function()
    {
        NoChoices()
        dialog.textContent = "You go back to the entrance"
        dialog.onclick = function(){Entrance(), shimmeritem.remove(), shimmermimic.remove()}
    }
    keuze3.onclick = function()
    {
        NoChoices()
        if(greenhousdooropen === true)
        {
            dialog.textContent = "You go into the greenhouse"
            dialog.onclick = function(){Greenhouse(), shimmeritem.remove(), shimmermimic.remove()}
        }
        else if(haveitem["Crowbar"] === true && greenhousdooropen === false)
        {
            keuze3.style.backgroundColor = "green"
            dialog.textContent = "Now that you have a crowbar you should be able to open the door"
            dialog.onclick = function()
            {
                greenhousdooropen = true
                dialog.textContent = "Yep! it's open now. Let's go in"
                dialog.onclick = function(){Greenhouse(), shimmeritem.remove(), shimmermimic.remove()}
            }
        }
        else
        {
            dialog.textContent = "You go into the greenhouse"
            dialog.onclick = function()
            {
                dialog.textContent = "Actually you're not"
                dialog.onclick = function()
                {
                    dialog.textContent = "The door is stuck. there should be something somewhere else that could help open this door"
                    dialog.onclick = function(){Hallwayrchoice(), keuze3.style.backgroundColor = "red"}
                }
            }
        }
    }
}



function Greenhouse()
{
   title.textContent = levelname["five"] 
   background.style.backgroundImage = "url(./images/backgrounds/Greenhouse.jpg)"
   if(beenhere["Greenhouse"] === false)
   {
        dialog.textContent = "This greenhouse is suprisingly lively"
        dialog.onclick = function()
        {
            dialog.textContent = "And there doesn't seem to be anything really usefull here"
            dialog.onclick = function()
            {
                dialog.textContent = "You could look around a bit if you want and then head back to the hallway"
                dialog.onclick = function(){Greenhousechoice()}
            }
        }
   }
   else
   {
       Greenhousechoice()
   }

   background.appendChild(flowerpot)
   flowerpot.style.position = "absolute"
   flowerpot.style.width = "150px"
   flowerpot.style.marginLeft = "50px"
   flowerpot.style.height = "150px"
   
   if(haveitem["Trowel"] === false)
   {
       Keygold.style.position = "absolute"
       background.appendChild(Trowel)
       Trowel.src = "./images/items/trowel.png"
       Trowel.style.marginLeft = "930px"
       Trowel.style.marginTop = "50px"
   }
}

function Greenhousechoice()
{
    beenhere["Greenhouse"] = true

    Choices()

    dialog.textContent = "What do you do"

    keuze1.style.width = "600px"
    keuze2.style.display = "none"
    keuze3.style.display = "none"

    keuze1.textContent = "Go back"
    keuze1.style.borderRadius = "15px 15px 0px 0px"

    keuze1.onclick = function()
    {
        NoChoices()
        dialog.textContent = "You go back to the hallway"
        Trowel.remove()
        flowerpot.remove()
        dialog.onclick = function(){Hallwayright(), title.style.color = "rgb(100, 100, 100)"}
    }

    flowerpot.onclick = function()
    {
        if(haveitem["Keygold"] === 1)
        {
            NoChoices()
            dialog.textContent = "You tortured that plant more than enough"
            dialog.onclick = function(){Greenhouse()}
        }
        if(haveitem["Trowel"] === true && haveitem["Keygold"] === 0)
        {
            NoChoices()
            dialog.textContent = "You realy want to dig up this poor potted plant?"
            dialog.onclick = function()
            {
                dialog.textContent = "Okay then"
                dialog.onclick = function()
                {
                    dialog.textContent = "Wait.."
                    dialog.onclick = function()
                    {
                        dialog.textContent = "Is that?"
                        dialog.onclick = function()
                        {
                            dialog.textContent = "A key!"
                            inv2.src = "./images/items/Keygoldinv.jpg"
                            inv2.style.display = "unset"
                            haveitem["Keygold"] = 1
                            dialog.onclick = function()
                            {
                                dialog.textContent = "That plant was a thief!"
                                dialog.onclick = function(){Greenhouse()}
                            }
                        }  
                    }
                }
            }
        }
        else
        {
            NoChoices()
            dialog.textContent = "What a lovely plant"
            dialog.onclick = function(){Greenhouse()}
        }
    }

    Trowel.onclick = function()
    {
        NoChoices()
        dialog.textContent = "A trowel?"
        dialog.onclick = function()
        {
            dialog.textContent = "Not sure what you could use that for but take it anyway"
            haveitem["Trowel"] = true
            
            inv6.src = "./images/items/trowelinv.jpg"
            inv6.style.display = "unset"
            Trowel.remove()
            dialog.onclick = function(){Greenhouse()}
        }
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
function Workshopchoice()
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
        dialog.onclick = function(){locker()}
    }
    keuze2.onclick = function()
    {
        NoChoices()
        dialog.textContent = "You go back to the hallway"
        dialog.onclick = function(){Hallwayright(), title.style.color = "rgb(100, 100, 100)"}
    }
    keuze3.onclick = function()
    {
        NoChoices()
        dialog.textContent = "You decide to look at the dumbwaiter"
        dialog.onclick = function(){dumbwaitertrader()}
    }
}


function locker()
{
    if(beenhere["Locker"] === 0)
    {
        background.style.backgroundImage = "url(./images/backgrounds/Closet.jpg)"
        dialog.textContent = "This looks pretty new"
        dialog.onclick = function()
        {
            dialog.textContent = "You should be able to open it maybe there is something usefull in there"
            dialog.onclick = function()
            {
                dialog.textContent = "Or you could come back later"
                dialog.onclick = function(){lockerchoice()}
            }
        }
    }
    else if(beenhere["Locker"] === 1)
    {
        background.style.backgroundImage = "url(./images/backgrounds/Closet_open.jpg)"
        dialog.textContent = "Wait that wasn't open before was it?"
        setTimeout(function(){death("You should have opened it before")},2000)
    }
    else if(beenhere["Locker"] === 2)
    {
        background.style.backgroundImage = "url(./images/backgrounds/Closet_open.jpg)"
        dialog.textContent = "You already took everything"
        dialog.onclick = function(){Workshop()}
    }
}
function lockerchoice()
{
    Choices()
    
    keuze1.style.width = "300px"
    keuze2.style.display = "none"
    keuze3.style.width = "300px"

    dialog.textContent = "What do you do?"
    keuze1.textContent = "Open locker"
    keuze3.textContent = "Don't"

    keuze1.onclick = function()
    {
        NoChoices()
        
        dialog.textContent = "You decide to open the locker"
        dialog.onclick = function()
        {
            beenhere["Locker"] = 2
            background.style.backgroundImage = "url(./images/backgrounds/Closet_open.jpg)"
            background.appendChild(Crowbar)
            Crowbar.src = "./images/items/Crowbar.png"
            Crowbar.style.marginLeft = "450px"
            Crowbar.style.marginTop = "0px"
            dialog.textContent = "There is a crowbar!"////////////////////////////////////////////////////////////////////////////////
            Crowbar.onclick = function()
            {
                Crowbar.remove()
                
                inv5.src = "./images/items/Crowbarinv.jpg"
                inv5.style.display = "unset"
                haveitem["Crowbar"] = true
                dialog.textContent = "This will come in handy"
                dialog.onclick = function(){Workshop()}
            }
        }
    }
    
    keuze3.onclick = function()
    {
        NoChoices()
        beenhere["Locker"] = 1
        dialog.textContent = "You go back to the workshop"
        dialog.onclick = function(){Workshop()}
    }
}


function dumbwaitertrader()
{
    keyrecipe.style.display = "unset"
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
    background.appendChild(keyrecipe)
    keyrecipe.style.width = "110px"
    keyrecipe.style.height = "50px"
    keyrecipe.style.backgroundColor = "rgba(0,0,0,0)"
    keyrecipe.style.position = "absolute"
    keyrecipe.style.marginTop = "-50px"
    keyrecipe.style.marginLeft = "920px"
    keyrecipe.onclick = function(){keyrecipedisplay()}
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

    keuze1.onclick = function()
    {
        NoChoices()
        dialog.textContent = "Let's try sending somethings up you never know"
        dialog.onclick = function(){dumbwaitertrading()}
    }

    keuze3.onclick = function()
    {
        NoChoices()
        keyrecipe.style.display = "none"
        dialog.textContent = "You go back to the workshop"
        dialog.onclick = function(){Workshop()}
    }
    keyrecipe.onclick = function(){keyrecipedisplay()}
}
function keyrecipedisplay()
{
    NoChoices()
    background.style.backgroundImage = "url(./images/backgrounds/Keyrecipe.jpg)" 
    dialog.textContent = "It's some kind of recipe"
    dialog.onclick = function()
    {
        dumbwaitertrader()
        background.style.backgroundImage = "url(./images/backgrounds/dumbwaiter.jpg)"
    }
}
function dumbwaitertrading()///////////////if more items which prob need to add more things ALSO THERE ARE THREEE
{
    if(haveitem["shimmer"] === 1 || haveitem["Keygold"] === 1 || haveitem["Keywhite"] === 1 || haveitem["Keyblack"] === 1)
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
            inv6.style.display = "none"
            invblank.style.display = "block"
            dialog.onclick = function()
            {
                dialog.textContent = "You can hear it going up"
                dialog.onclick = function()
                {
                    dialog.onclick = "none"
                    setTimeout(function(){dialog.textContent = "."}, 1000)
                    setTimeout(function(){dialog.textContent = ".."}, 2000)
                    setTimeout(function(){dialog.textContent = "..."}, 3000)
                    setTimeout(function(){dialog.textContent = ".."}, 4000)
                    setTimeout(function(){dialog.textContent = "."}, 5000)
                    setTimeout(function(){dialog.textContent = "It's back?!"}, 6000)
                    setTimeout(function(){dialog.onclick = function()
                    {
                            dialog.textContent = "You open the hatch and inside.."
                            dialog.onclick = function()
                            {
                                if(haveitem["shimmer"] === 1 && haveitem["Keyblack"] === 1 && haveitem["Keywhite"] === 1 && haveitem["Keygold"])
                                {
                                    dialog.textContent = "The three keys and the gem are gone and in their place is a diffrent key"
                                    dialog.onclick = function()
                                    {
                                        dialog.textContent = "You take the new key"
                                        haveitem["shimmer"] = 2
                                        haveitem["Keyblack"] = 2
                                        haveitem["Keywhite"] = 2
                                        haveitem["Keygold"] = 2
                                        keycount = keycount - 3

                                        inv1.src = "./images/items/Keymaster.jpg"
                                        haveitem["Keymaster"] = true
                                        keycount++

                                        inv1.style.display = "unset"
                                        inv2.style.display = "none"
                                        inv3.style.display = "none"
                                        inv4.style.display = "none"

                                        if(haveitem["Crowbar"] = true)////////////////////////////////////////////////////////////////////////////////////
                                        {
                                            inv5.style.display = "unset"
                                        }
                                        if(haveitem["Trowel"] = true)
                                        {
                                            inv6.style.display = "unset"
                                        }

                                        invblank.style.display = "none"
                                        dialog.onclick = function()
                                        {
                                            dialog.textContent = "Let's go back to the workshop"
                                            dialog.onclick = function(){Workshop()}
                                        }
                                    }
                                }
                                else if (haveitem["shimmer"] === 1 && haveitem["Keyblack"] === 1 && haveitem["Keywhite"] === 1)
                                {
                                    dialog.textContent = "The two keys and the gem are gone and in their place is a diffrent key"
                                    dialog.onclick = function()
                                    {
                                        dialog.textContent = "You take the new key"
                                        haveitem["shimmer"] = 2
                                        haveitem["Keyblack"] = 2
                                        haveitem["Keywhite"] = 2
                                        keycount = keycount - 2

                                        inv1.src = "./images/items/KeyBW.jpg"
                                        haveitem["KeyBW"] = true
                                        keycount++

                                        inv1.style.display = "unset"
                                        inv2.style.display = "none"
                                        inv3.style.display = "none"
                                        inv4.style.display = "none"

                                        if(haveitem["Crowbar"] = true)//////////////////////////////////////////////////////////////////////////////////////
                                        {
                                            inv5.style.display = "unset"
                                        }
                                        if(haveitem["Trowel"] = true)
                                        {
                                            inv6.style.display = "unset"
                                        }

                                        invblank.style.display = "none"
                                        dialog.onclick = function()
                                        {
                                            dialog.textContent = "Let's go back to the workshop"
                                            dialog.onclick = function(){Workshop()}
                                        }
                                    }
                                }
                                else
                                {
                                    dialog.textContent = "Nothing happend"
                                    dialog.onclick = function()
                                    {
                                        if(haveitem["shimmer"] === 1)
                                        {
                                            inv1.style.display = "unset"
                                        }
                                        if(haveitem["Keygold"] === 1)
                                        {
                                            inv2.style.display = "unset"
                                        }
                                        if(haveitem["Keywhite"] === 1)
                                        {
                                            inv3.style.display = "unset"
                                        }
                                        if(haveitem["Keyblack"] === 1)
                                        {
                                            inv4.style.display = "unset"
                                        }
                                        if(haveitem["Crowbar"] === 1)////////////////////////////////////////////////////////////////////////////////////////////
                                        {
                                            inv5.style.display = "unset"
                                        }
                                        if(haveitem["Trowel"] === 1)
                                        {
                                            inv6.style.display = "unset"
                                        }
                                        invblank.style.display = "none"

                                        dialog.textContent = "Let's go back to the workshop"
                                        dialog.onclick = function(){Workshop()}
                                    }
                                }
                            }
                        }
                    },6000)
                }
            }
            
        }
    }
    else
    {
        NoChoices()
        dialog.textContent = "Oh wait"
        dialog.onclick = function()
        {
            dialog.textContent = "You don't have anything to put inside"
            dialog.onclick = function(){dumbwaitertraderchoice()}
        }
    }
    
}
//#endregion


function death(deathmessage)////////////////////////////////////////////random restart message
{
    inventory.style.display = "none"
    background.style.backgroundImage = "none" 
    dialog.style.display = "none"
    background.style.animationPlayState = "running"
    setTimeout(function(){background.style.animationPlayState = "paused"}, 5000)
    
    setTimeout(function(){dialog.style.display = "unset"}, 7000)
    dialog.textContent = "..."
    dialog.onclick = function()
    {
        dialog.textContent = "If your confused about what just happend"
        dialog.onclick = function()
        {
            dialog.textContent = "You just died"
            dialog.onclick = function()
            {
                dialog.textContent = deathmessage
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
                        dialog.textContent = "Good luck.."//////////////////////////////////////////////////////////
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

function titleanimation()////////////////////////any fix because anoyence
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

    keuze1.style.borderRadius = "15px 0px 0px 0px"
    keuze2.style.borderRadius = "0px 0px 0px 0px"
    keuze3.style.borderRadius = "0px 15px 0px 0px"
    
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
