var myInter;
var c = 0;
function OpenInter(){

    var myString=new String("ana zh2t wallahy")
    var shownString=[];
    counter=0;
    myInter = setInterval(
            function(){
            
            if(counter <myString.length){

                shownString[counter]=myString[counter]
                console.log(shownString)
                document.open ();
                document.close ();
                document.write("<h1>"+shownString.join("")+"</h1>");
               counter++;
            }else{
                clearInterval(myInter);
                this.close()
            }
        },500)
            
}
OpenInter();