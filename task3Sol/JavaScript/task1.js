var myarray=new Array()
for(var i=0;i<5;i++)
{
    myarray[i]= parseInt (prompt("enter num "+i ))
}
sortedArrayAsnd=myarray.concat();
sortedArrayDes=myarray.concat();
 sortedArrayAsnd = sortedArrayAsnd.sort(function(a,b){return a-b});//
 sortedArrayDes = sortedArrayDes.sort(function(a,b){return b-a});

 document.write("<h3> Your array you entered "+myarray+"</h3>")
 
 document.write("<h3> sorting array ascending order  "+sortedArrayAsnd+"</h3>")
 
 document.write("<h3> sorting array descending order "+sortedArrayDes+"</h3>")