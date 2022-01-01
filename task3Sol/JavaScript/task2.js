function OpenWin(){
    // window.open()
    var x=0;
    var y=0;
    myWin = open("../Html/profile.html","","width=300,height=300");
    // console.log(myWin);
    front=1;
    back=0;

    myInter = setInterval(
        function(){
            myWin.moveTo(x,y);
            myWin.focus();

            if (front)
            {x=x+130;
            y=y+50; 
            if (y>=550)
            {
                front=0;
                back=1;
            }
        }

         if (back)
            {
            x=x-130;
            y=y-50;
            if(!y||!x)
            {
                front=1;
                back=0;
                y=0;
                x=0;   
            }
            
            console.log(x,y)
        }}
    ,500)
        
}

function CloseInter(){
   
    clearInterval(myInter);
}
