var  str  =prompt("please enter string  ");
var  char  =prompt("please inter char ");
letter_Count=0;
    for (var position = 0; position < str.length; position++) 
    {
       if (str.charAt(position) == char) 
         {
         letter_Count += 1;
         }
     }
     alert( letter_Count);