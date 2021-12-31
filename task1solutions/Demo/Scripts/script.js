console.log("samy");
var x="";
for (let i = 1; i <= 6; i++) {
x="<h"+i+">"+ "header Num "+i+"</h"+i+">";
document.write(x)
}
 var num;
 var sum =0;

do {
    num=+prompt("enter Num")
    if(isFinite(num))
    {
   // num=+prompt("enter Num")
    sum=sum+num;
    }else 
    alert("you should enter numric num only");
} while (sum<100&&num!=0)

alert("sum of your values is "+sum);