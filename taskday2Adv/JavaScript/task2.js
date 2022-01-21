start   = parseInt (window.prompt("enter  the start "));

end  = parseInt(window.prompt("enter the end "));

step = parseInt(window.prompt(" steps?"));


function Mylist(start,step,end)
{
    this.arr=[];

    function fillingArray()
    {

        for(var mystep=start;mystep<=end;mystep=mystep+step)
        {

            this.arr.push(mystep);
        }
    }


    fillingArray.bind(this)()
    this.Display=function()
    {

     for  (var x  in this.arr) {

        console.log(this.arr[x]);
        }}

        this.GetLastValue=function(){


            return this.arr[this.arr.length-1]
        }
    
        this.Push=function(val)
    {          
            if ( !this.arr.length||this.GetLastValue()<val)
            {
                this.arr.push(val);
                return true 
            }
            else return false 


    }
    this.Enqueue=function(val)
    {
        {          
            if ( !this.arr.length||this.arr[0]>val)
            {
                this.arr.unshift(val);
                return true 
            }
            else return false 


    }

    }
    this.Pop=function()
    {
        if (this.arr.length)
        {

        return     this.arr.pop()
        }
        else return -1
    }

    
    
    this.Dequeue=function()
    {
        {          
            if (this.arr.length)
            {
                var dequeued=this.arr.shift();
                return dequeued;
            }
            else return false 


    }
}

this.Insert=function(val)
{
        
            if(!this.arr.length)
            {
                this.arr.unshift(val);



            }
            else 
            {

                for  (var x  in this.arr) {


                    if (this.arr[x]==val)
                    {
                      
                     return 0;                     
                    }
           
                   if (this.arr[x]>val)
                   {
                    this.arr.splice(x,0,val) 
                   // console.log("gaaaaa")  
                    return 1;    

                   }


                }
                    this.Push(val)
                   return 1;
            }
                   
            
}


}

var list = new Mylist(start,step,end)