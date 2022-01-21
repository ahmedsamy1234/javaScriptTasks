function Employee(name,age,salary)
{

    this.salary=salary||1000;
    this.nm=name||"emp name";
    this.age=age||20;





}

var GetSetGen = {

    getset : function()
    {

        for (var x in this )
        {
               
            (function (x,myobject)
                {   
                
                    myobject["get"+x]=function(){return myobject[x]}
                    myobject["set"+x]=function(val){
                        myobject[x]=val}
                    })(x,this)
        
        }

    }

}



var emp1= new Employee();
console.log(emp1[0]);
//emp1.setSalary(50);
console.log(emp1.salary);
