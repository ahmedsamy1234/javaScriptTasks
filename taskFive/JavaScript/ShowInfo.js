


document.write("<h1> Hello " + GetCookie("userName") +" age : "+  GetCookie("userAge") + "your gender is " + GetCookie("Gender")+ "you Visited the website  "+GetCookie("Counter")+"times   "+ GetCookie("Color")+"</h1>");


mainImage= document.getElementById("genderImage");

if ( GetCookie("Gender")=="Male")
{
    mainImage.src="../Images/male.jpg"

}else 
{

    mainImage.src="../Images/female.jpg"
}