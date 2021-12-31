
//task 2 
regName = /^[a-zA-Z]+$/g;
regphoneNum = /^[0-9]{8}$/g;
regMobile=/^[(010|011|012|015)]{3}[0-9]{8}$/g
RegEmail =/^[a-zA-Z]+\@{1}[a-zA-Z0-9]+\.{1}[com]{3}$/g;
do 
{
 var nameOfuser =prompt("please Enter your name ");

}while (!regName.test(nameOfuser ))


do 
{
 var phoneNum =prompt("please Enter your num (should  be 8) ");
}while (!regphoneNum.test(phoneNum))

do 
{
 var mobile =prompt("please Enter your mobile (should be 11 ) ");
}while (!regMobile.test(mobile))

do 
{
 var email =prompt("please Enter your Email ");
}while (!RegEmail.test(email))


do 
{
 var color =prompt("please Enter your color  (red  or green or blue )  ");
}while (!(color=="red"||color=="blue"||color=="green"))

document.write("<h1> User Info </h1>")
document.write("<p style=color:"+color+"> Welcome Dear Guest </p>"+ nameOfuser);

document.write("<p style=color:"+color+"> Telephone </p>"+ phoneNum);

document.write("<p style=color:"+color+"> Mobile</p>"+ mobile);

document.write("<p style=color:"+color+"> Email </p>"+ email);
