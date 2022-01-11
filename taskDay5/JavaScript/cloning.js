	//	var myImg=document.getElementsByTagName("img");
    clonedElemnt=document.getElementById("header");
    var x=clonedElemnt.cloneNode(true);
    var mydiv=document.getElementById("cloiningDiv")
    var ulList =document.getElementById ("nav")
    
    function f(){
        setTimeout(function()
    {
        mydiv.appendChild(x);	
        ulList.type="circle"
    
        
    },4000)

}
document.onclick=f();


