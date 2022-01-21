function box()
{
    box.count++;
    this.boxes=[];
    this.addbox=function (mybook)
    {   if (mybook instanceof book)


        {    
            for (var x=0;x<this.boxes.length;x++)
        {

            if (this.boxes[x].id==mybook.id)
            {
                return false
            }

        }
            console.log("hea")
            this.boxes.push(mybook);
            return true
        }   
            else 
            return false
    }
    this.numberOfBookssinThisBook= function (){

        return this.boxes.length;
    }
    box.numberOfBox=function(){return box.count}
    this.removeItem= function(val) 
{
    if(this.boxes.length)
    {
        

            for  (var x  in this.boxes) {

                if (this.boxes[x]==val)
                {
                    this.boxes.splice(x,1)
                    book.count--; 

                 return 1;                     
                }
            }
               return 0;
        }
               
            return 0;
}
}

function book ()
{book.instances++;
book.count++;
this.id=book.instances;

book.TotalnumberOfBook=function(){return book.count}


}



book.count=0
box.count=0;
book.instances=0;
myBox1= new box();
Mybook1=new book();
 

