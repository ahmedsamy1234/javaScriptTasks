
// document.getElementById("")// XXXXXXXXX

function CreateCookie(Key,value,exp){

    if(exp){
        document.cookie = Key+"="+value+";expires="+exp;
    }else{
        document.cookie = Key+"="+value;
    }

}

function DeleteCookie(key){
    var today = new Date();
    today.setMonth(today.getMonth()-1);
    document.cookie = key+"=;expires="+today;
}



// var AssArray = [];

// function GetAllCookies(){

// }

function GetCookie(key1){
    var AssArray = [];
    var allCookies = document.cookie.split(";")//["userName=Aly", " userAge=20"]
    for(var i =0; i<allCookies.length;i++){
        var key = allCookies[i].split("=")[0].trim();
        var val = allCookies[i].split("=")[1];
        AssArray[key] = val;
    }
    return AssArray[key1];
}


function GetCookies(){
    var AssArray = [];
    var allCookies = document.cookie.split(";")//["userName=Aly", " userAge=20"]
    for(var i =0; i<allCookies.length;i++){
        var key = allCookies[i].split("=")[0].trim();
        var val = allCookies[i].split("=")[1];
        AssArray[key] = val;
    }
    return AssArray;
}


function GetKeys(){
    var Array = [];
    var allCookies = document.cookie.split(";")//["userName=Aly", " userAge=20"]
    for(var i =0; i<allCookies.length;i++){
        var key = allCookies[i].split("=")[0].trim();
        Array[i] = key;
    }
    return Array;
}



