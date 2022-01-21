




function increaseCount() {
    var today1 = new Date();
    today1.setMonth(today1.getMonth() + 1);
    var x;

    console.log("hena");
 

        x = parseInt(GetCookie("Counter"));

        CreateCookie("Counter", parseInt(GetCookie("Counter"))+1, today1);
  
    console.log("onload")
    

    
   
}

if ((GetCookie("Counter")) == "NaN"  ||(GetCookie("Counter")) == undefined) {
    var today1 = new Date();
    today1.setMonth(today1.getMonth() + 1);  
    x = 0;
    CreateCookie("Counter", x, today1);

   
} 
console.log("Main")

document.getElementById("myMain"
).innerHTML="<h1> Hello " + GetCookie("userName") +" age : "+  GetCookie("userAge") + "your gender is " + GetCookie("Gender")+ "you Visited the website  "+(parseInt(GetCookie("Counter"))+1)+"times   "+ GetCookie("Color")+"</h1>"
    mainImage= document.getElementById("genderImage");
    
    if ( GetCookie("Gender")=="Male")
    {
        mainImage.src="../Images/male.jpg"
    
    }else 
    {
    
        mainImage.src="../Images/female.jpg"
    }  
     