var myImage =document.getElementById("myImage");
var counter=1;
function ChangeImage(myelement) 
{ 
if (myelement.id=="Next")
{
    if(counter<6)
{counter++;}
myImage.src="../Images/SlideShow/"+counter+".jpg";

} 
if (myelement.id=="Prev")
{
    if (counter>1)
    {
        counter--;
    }  
      myImage.src="../Images/SlideShow/"+counter+".jpg";

    
}
} 



function Show()
{
myInter = setInterval(
    function(){
        
        {   
            console.log(counter);
            counter=counter%7;
            if (!counter)
            {
                counter++;
            }

            myImage.src="../Images/SlideShow/"+counter+".jpg";
            counter++;
        }
    }
,1000)
}

function CloseInter(){
   
    clearInterval(myInter);
}



var isHovered=0;
ShowMarbels();




var marbelasOff=[];

for (var i=0;i<document.getElementsByClassName("merbelas").length;i++)
{
marbelasOff[i]=(document.getElementsByClassName("merbelas")[i]);
}

var marbelaCounter=0;
function ShowMarbels(){
    myMerbelas = setInterval(
        function(){
            
            {   
                if (!isHovered)
                {
                for (var i=0;i<document.getElementsByClassName("merbelas").length;i++)
{
    (document.getElementsByClassName("merbelas")[i]).src=marbelasOff[i]
}
document.getElementsByClassName("merbelas")=marbelasOff
                //document.getElementsByClassName("merbelas")[marbelaCounter%4].src="../Images/marbels/on.jpg";
                    //  document.getElementsByClassName("merbelas")[marbelaCounter%4].src="../Images/marbels/on.jpg";

                marbelaCounter++;
            }}
        }
    ,1000)
    }

function SetFlagHover() {
    isHovered =1;
}

function ResetFlagHover() {
    isHovered=0;
}
