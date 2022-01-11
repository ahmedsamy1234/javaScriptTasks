// #region Event


document.onkeydown = function(){

    // console.log("Ctrl Key: "+event.ctrlKey);
    // console.log("Alt Key: "+event.altKey);
    console.log(event.keyCode);
}


    document.addEventListener("contextmenu", 
    event => event.preventDefault());
    
   

function Confirmation()
{   
    var x=confirm('Do you really want to submit the form?')
    console.log(x);
    if (x)
    {
        return true;
    }
    
    else 
{   
    document.getElementById("myText").value=""
    return false;
}



    }



