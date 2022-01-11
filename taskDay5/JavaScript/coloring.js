function ChangeFont(txt)
{

    document.getElementById("PAR").style.fontFamily=txt;
}




function ChangeAlign(txt){



    document.getElementById("PAR").style.textAlign=txt;

}
function ChangeHeight (txt){



    document.getElementById("PAR").style.lineHeight=txt;

}

var myError = new Error("this is our Error");
function TwoParament(x,y){

    if (!(arguments.length==2))
    {
        throw myError
    }
}
function Sum(x,y)
{
if ((arguments.length==0))
{
    throw myError
} else 
{
 //   console.log(arguments.length)
for (var i=0 ;i<arguments.length;i++)
{  // console.log(isFinite(i))
    if (!isFinite(arguments[i]))
    {throw myError}
}
x=x||0;
y=y||0;
console.log(x+y)

}


}
///ChangeHeight('normal')
///ChangeLSpace('normal')