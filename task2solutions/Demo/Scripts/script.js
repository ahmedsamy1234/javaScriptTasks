
function reverseString(str) {
    return str.split("").reverse().join("");
}

do {

    var Choice;
    var matched=0;

    do {
    Choice=prompt("enter if you want function case sensitive or not (say yes/no)");}
    while(!(Choice=="yes"||Choice=="no"))
    myString=prompt("Enter your string")
    if (Choice=="no")
{
    myString = myString.toUpperCase()
}

var reversedString =reverseString(myString);
matched=(reversedString==myString);
if (!matched)
{

    alert("this string is not  palindrome");
}

} while (!matched)
 
alert("this string is palindrome");




do {

    var Choice;
    var matched=1;

    do {
    Choice=prompt("enter if you want function case sensitive or not (say yes/no)");}
    while(!(Choice=="yes"||Choice=="no"))
    myString=prompt("Enter your string")
    myLength=(myString.length);
    if (Choice=="no")
{
    myLength = myLength11`1`.toUpperCase()
}
myString=myString.split("");
for (var position = 0; (position < myLength/2&& matched==1); position++) 
{
    
    if(myString[position]!=myString[myLength-position-1])
    {
        matched=0;
    }
    
}
if (!matched)
{

    alert("this string is not  palindrome");
}

} while (!matched)
 
alert("this string is palindrome");

