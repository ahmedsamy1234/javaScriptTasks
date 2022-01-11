//#region LifeCycle
// console.log("Start");

// wait5sec();

// fun();

// console.log("end");

// setTimeout(function(){
//     console.log("setTimeOut After 1 sec");
// },1000)


// console.log("Hello")




// function fun(){
//     setTimeout(function(){
//         console.log("setTimeOut Immed.")
//     },0)
// }
// function wait5sec(){

// }
//#endregion


//#region DOM

// console.log(document.documentElement);//Root Element
// console.log(document.documentElement.firstChild);//head Element
// console.log(document.documentElement.firstChild.nextSibling);//text Element
// console.log(document.documentElement.firstChild.nextElementSibling);//body Element
// console.log(document.documentElement.lastChild);//body Element
// console.log(document.documentElement.lastChild.firstElementChild.nextElementSibling);//div Element
// console.log(document.documentElement.lastChild.firstElementChild.nextElementSibling.firstElementChild.firstChild);//div Element
// console.log(document.documentElement.lastChild.firstElementChild.nextElementSibling.firstElementChild.id);//div Element

// console.log(document.getElementById("par1").className)



// console.log(document.getElementById("par1").classList)


// console.log(document.documentElement.lastChild.firstElementChild.nextElementSibling.firstElementChild.className);//div Element
// document.documentElement.lastChild.firstElementChild.nextElementSibling.firstElementChild.classList.add("he2");//div Element
// document.documentElement.lastChild.firstElementChild.nextElementSibling.firstElementChild.classList.remove("he2");//div Element

// setInterval(function(){
// document.documentElement.lastChild.firstElementChild.nextElementSibling.firstElementChild.classList.toggle("he2");//div Element
// },1000)

// console.log(document.documentElement.lastChild.firstElementChild.nextElementSibling.firstElementChild);//div Element

// console.log(document.styleSheets);
// console.log(document.styleSheets[0].cssRules);
// console.log(document.styleSheets[0].cssRules[0]);//he
// console.log(document.styleSheets[0].cssRules[1]);//he2

// console.log(document.styleSheets[0].cssRules[0].selectorText);//he
// console.log(document.styleSheets[0].cssRules[1].selectorText);//he2


// console.log(document.styleSheets[0].cssRules[0].cssText);//.he{}
// console.log(document.styleSheets[0].cssRules[1].cssText);//.he2{}

//#endregion



//#region Add Element at html from js

// Append Child  ||||   insert before
//========================= Ya (a) append child (b) gwaky ============================
//========================= Ya body Insert (a) before (b)  ============================

// var a = document.createElement("div");//div called (a) at js
// var txt = document.createTextNode("Hello from div 1");

// a.appendChild(txt); //<div>Hello from div 1</div

// a.style.border = "1px solid black";
// a.style.width = "200px";
// a.style.height = "100px";
// a.style.textAlign = "center";
// a.style.margin = "auto";
// a.style.paddingTop = "60px";
// a.style.color = "red";
// a.style.backgroundColor = "aqua";


// var DivAtHtml = document.getElementById("divhtml");

// DivAtHtml.appendChild(a);


// var a2 = document.createElement("div");//div called (a) at js
// var txt2 = document.createTextNode("Hello from div 2");
// a2.appendChild(txt2); //<div>Hello from div 1</div
// a2.style.border = "1px solid black";
// a2.style.width = "200px";
// a2.style.height = "100px";
// a2.style.textAlign = "center";
// a2.style.margin = "auto";
// a2.style.paddingTop = "60px";
// a2.style.color = "red";
// a2.style.backgroundColor = "aqua";

// document.body.insertBefore(a2,DivAtHtml);


//Clone Node (True[include All Content inside element] || False(default) [structur Only])

// var a3 = a2.cloneNode(true);

// DivAtHtml.appendChild(a3);

// var s = document.getElementById("")


//#endregion


// document.getElementById("img").style.left = "10px";
//#region Image And Style
function MoveMan(){
    // // document.getElementById("img").style.left+=10+"px";
    var myImage = document.getElementById("img");
    // console.log(getComputedStyle(myImage))
    var lef = getComputedStyle(myImage).left;//"50px"
    console.log(lef);
    document.getElementById("img").style.left = parseInt(lef)+10+"px"

    // document.getElementById("img").style.left =  parseInt(document.getElementById("img").style.left)+"px";
}
//#endregion


/**
 * another way to add events at any element at html
 * 
 * Bubble Vs Capture
 * Event
 * Error
 * try catch
 * 
 * 
 * Clouser ---> XXX
 * Object
 */

//#region Bubble Vs Capture

// document.getElementById("btn1").onclick = function(){
//     // asdadsd
//     //
//     //
//     alert("Hello Alex 2")
// }



// document.getElementById("btn1").addEventListener("click",function(){
//     alert("Hello Alex <3")
// })

//Bubble Mode
// function showme(myDiv,e){
//     console.log(myDiv.id);
//     e.stopPropagation();
// // }

// for(var i=0; i<document.getElementsByTagName("div").length; i++){

//     document.getElementsByTagName("div")[i].addEventListener("click",function(e){
//         console.log(this.id);
//         e.stopPropagation();
//     },true);

//     //false (default) ==> Bubble Mode
//     //true ==> Capture Mode

// }

//#endregion


//#region Event
// document.onkeypress = function(){
//     console.log(event);
// }

// document.onkeydown = function(){
//     if(event.ctrlKey && event.key=="s"){
        
//     }
//     // console.log(event);
//     // console.log("Ctrl Key: "+event.ctrlKey);
//     // console.log("Alt Key: "+event.altKey);
//     // console.log("Shift Key: "+event.shiftKey);
// }


///Event Object

//1)Create Event
// var ourEvent = new Event("seen");

//2)Add EventListener at Specific Element at html
// document.getElementById("div1").addEventListener("seen",function(){
//     document.getElementById("span1").innerHTML = "<small><small> ✔✔</small></small>"
// })


//3)Fire Event
// document.getElementById("div1").dispatchEvent(ourEvent);

// setTimeout(function(){
//     document.getElementById("div1").dispatchEvent(ourEvent);
// },1000)

// document.getElementById("div1").onclick = function(){
//     this.dispatchEvent(ourEvent);
// }

//#endregion


//#region Error Object

//1) Syntax Error
// alert("adasd);
// alert("adasd";


//2) Type Error
// var num = 10;
// num.toUpperCase();

//3) Range Error
// var num = 5;
// console.log(num.toFixed(101));


//4) Reference Error
// var x = 10;
// var z = x + y;

//5) URI Error
// console.log(decodeURI("%%%"));


// var myError = new Error("this is our Error");

// // throw myError

// console.log(myError.name)
// console.log(myError.message)

// // console.log("Hii After Error");



// var myError2 = new TypeError("this is our Type Error");
// console.log(myError2.name)
// console.log(myError2.message)


// if(myError2 instanceof TypeError){
//     console.log("instance of TypeError")
// }

// if(myError2 instanceof RangeError){
//     console.log("instance of RangeError")
// }

// var str = "asdasd";
// if(typeof str == "string"){
//     //
//     //
//     //
// }

var myErrror = new TypeError("Error");
var myErrror2 = new RangeError("Error");
//
//
//========>



try{
    //
    //
    //
    // throw myErrror;//Type Error
    // throw myErrror2;//Range Error
}catch(err){
    // console.log("7asal Error");

    // if(err instanceof TypeError){
    //     console.log("Type Errror 7asal")
    // }else if(err instanceof RangeError){
    //     console.log("Range Errror 7asal")
    // }

    // throw myErrror2;


}
finally{
    console.log("Hello at Finally");
}


console.log("ay 7aga ba3d el try w catch")


//#endregion


function sum(){
    return arguments[0] + arguments[1];
}


// document
// .addEventListener("click",function(){
//     // this
//     // e
// })


// window.setTimeout
