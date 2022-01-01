function sub () {
    var query = location.search;
    query=query.replace("%40","@")
    var myQuery = query.split("?")[1];
    var len = myQuery.split("&").length;
    var nm = myQuery.split("&")[0].split("=")[1];
    var age = myQuery.split("&")[1].split("=")[1];
    
    var arr = [];
    for(var i =0; i<len; i++){
        // arr[i] = myQuery.split("&")[i].split("=")[1];
        var key = myQuery.split("&")[i].split("=")[0];
        arr[key] = myQuery.split("&")[i].split("=")[1];
    }
    
    console.log(arr);
    
        document.write("Hello ya "+arr["Name"]+", Of email: "+arr["Email"]);
    
    


}
