var p = document.getElementById("p");
var p2 = document.getElementById("p2");
var myInput = document.getElementById("userid");
var userDataByID = document.getElementById("puserID");


function GetData(){

    //1)Create xhr
    //2)Open Connection
    //3)Send Req 
    //4)readyState ==> status ===> response


    //1)
    var xhr = new XMLHttpRequest();
    //2)
    // xhr.open("GET","../info/data.json");
    xhr.open("GET","https://jsonplaceholder.typicode.com/users");
    //3)
    xhr.send("");

    //4)
    xhr.onreadystatechange = function(){

        // console.log(xhr.readyState)
        if(xhr.readyState === 4){
            // console.log(xhr.status)
            if(xhr.status >= 200 && xhr.status <= 300){
                // console.log(xhr.responseText);
                // console.log(xr)
                //Get Data From Json ===> u need to parse it [JSON.parse()]
                //Send Data To Json ===> u need to Stringify it [JSON.Stringify()]
                var data = JSON.parse(xhr.responseText);//Array of Objects
                for(var i=0; i<data.length; i++){
                    // console.log(data[i].name);
                    p.innerHTML += data[i].name+"<br><small><small><small>"+ "UserName: "+data[i].username+", City: "+data[i].address.city+"</small></small></small>"+"<br>";
                    // p2.innerHTML += "UserName: "+data[i].username+", City: "+data[i].address.city+"<br>";
                }
            }else{
                console.log("7asal Error fe el Client||Server side")
            }
        }
    }

}

function GetuserByID(){
    var id = myInput.value;


    var xhr = new XMLHttpRequest();

    xhr.open("GET","https://jsonplaceholder.typicode.com/users/"+id);

    xhr.send("");

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status>=200 && xhr.status < 400){
                var data = JSON.parse(xhr.responseText);
                userDataByID.innerHTML = "Name: "+data.name +"<br>User Name: "+ data.username + "<br>Email: "+data.email
            }
        }
    }


}


