
var ourText = document.getElementById("ourText");
var memory=0;
function addTextToInput(myInput){
    ourText.value += myInput.value.trim()
}

document.getElementById("buttonC").onclick = function(){
    ourText.value = "";
    memory=0;
}
document.getElementById("removeLast").onclick=function(){
if (ourText.value!=""){
    console.log("what!")
    ourText.value = ourText.value.slice(0, -1)
}
}
function Operations (myOperation) {
    var operation =myOperation.value.trim()
//var ourText = document.getElementById("ourText");
   // memory=parseFloat(ourText.value.trim());
   // ourText.value="";
    if (operation=="+")
    {   
        ourText.value=parseFloat(memory)+parseFloat(ourText.value.trim());
    }
    else if (operation=="-")
    {
        ourText.value=parseFloat(memory)-parseFloat(ourText.value.trim());
    } 
    else if (operation=="*")
    {
        ourText.value=parseFloat(memory)*parseFloat(ourText.value.trim());

    }
    memory=parseFloat(ourText.value);
    //ourText.value="";
    
}