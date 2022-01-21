

function addCookie(){
    document.cookie = "name='Ahmed'";//no expiry data===> session cookie ==> Non-persistant cookie
}


var mycolor = document.getElementById("mySelect")




function addCookiePer(){
    var today = new Date();
    today.setMonth(today.getMonth()+1);
    var age = 20
    document.cookie = "age="+age+";expires="+today;
}


var myCheck = document.getElementById("chk");
///var CountVisits=0;
function Reg(){
    var today1 = new Date();
    today1.setMonth(today1.getMonth()+1);
   // CountVisits=CountVisits+1;
    var userName = document.getElementById("i1").value;
    var userAge = document.getElementById("i2").value;
    var male=document.getElementById("Male");
    var female=document.getElementById("Female");

    
       // CreateCookie("Counter",x+1,today1);
        CreateCookie("userName",userName,today1);
        CreateCookie("userAge",userAge,today1);
        if (male.checked)
        {
        CreateCookie("Gender","Male",today1);
        }
        else {
        CreateCookie("Gender","Female",today1)
        }

        for(var i = 0; i<mycolor.length;i++){
            if(mycolor.options[i].selected){
                CreateCookie("Color",mycolor.options[i].value,today1);
                    
            }
        }
 

        
}




function ClearCookies(){
    // var today1 = new Date();
    // today1.setMonth(today1.getMonth()-1);

    // var today2 = new Date();
    // today2.setMonth(today2.getMonth()-1);
    
    // document.cookie = "userName=;expires="+today1;
    // document.cookie = "userAge=;expires="+today2;

    DeleteCookie("userName")
    DeleteCookie("userAge")

}


//

function GetOneCookie(){
    var lab1 = document.getElementById("lab1");
    var key =  document.getElementById("txt").value;
    lab1.innerHTML = GetCookie(key);
}

function GetKeys1(){
    document.getElementById("p1").innerHTML = GetKeys();
}

