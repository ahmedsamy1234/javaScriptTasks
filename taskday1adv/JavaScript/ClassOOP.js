function Display(){
    return this.nam + ", Age: "+this.age;
}

console.log(Display());//window.Display()

//class in js

function LinkedList(){
    this.arr  = [],

    this.Display=function()
    {

     for  (var x  in this.arr) {

        console.log(this.arr[x]["Val"]);
        }}

        this.GetLastValue=function(){


            return this.arr[this.arr.length-1]["Val"]
        }
    
        this.Push=function(val)
    {          
            if ( !this.arr.length||this.GetLastValue()<val)
            {
                this.arr.push({"Val":val});
                return true 
            }
            else return false 


    }
    this.Enqueue=function(val)
    {
        {          
            if ( !this.arr.length||this.arr[0]["Val"]>val)
            {
                this.arr.unshift({"Val":val});
                return true 
            }
            else return false 


    }

    }
    this.Pop=function()
    {
        if (this.arr.length)
        {

        return     this.arr.pop()["Val"]
        }
        else return -1
    }

    
    
    this.Dequeue=function()
    {
        {          
            if (this.arr.length)
            {
                this.arr.shift();
                return true 
            }
            else return false 


    }
}
    this.RemoveSpacificElemnt=function(val)
    {
            if(this.arr.length)
            {
                

                    for  (var x  in this.arr) {

                        if (this.arr[x]["Val"]==val)
                        {
                            this.arr.splice(x,1) 

                         return 1;                     
                        }
                    }
                       return 0;
                }
                       
                    return 0;
}

this.Insert=function(val)
{
        
            if(!this.arr.length)
            {
                this.arr.unshift({"Val":val});



            }
            else 
            {

                for  (var x  in this.arr) {


                    if (this.arr[x]["Val"]==val)
                    {
                      
                     return 0;                     
                    }
           
                   if (this.arr[x]["Val"]>val)
                   {
                    this.arr.splice(x,0,{"Val":val}) 
                   // console.log("gaaaaa")  
                    return 1;    

                   }


                }
                    this.Push(val)
                   return 1;
            }
                   
            
}
}
    // this.Display3 = Display;


myList =new LinkedList();
myList.Push(5);
myList.Push(100)
myList.Push(40)
myList.Enqueue(2)

myList.Dequeue()
//console.log(myList.Pop());
myList.RemoveSpacificElemnt(5);
//console.log(myList.arr)
myList.Insert(1)

myList.Display()