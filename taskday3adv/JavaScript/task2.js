function Shape(length1,length2) 
{
    if (this.constructor==Shape)
    {

        throw "you can't Create objet"
    }
    this.length1=length1;
    this.length2=length2;
}

function Rect(width,height)
{   
    if (this instanceof Rect)
    {
        if (Rect.singleton==1)
        {
            throw "can't Create Another one"
        } else 
        {

            Rect.singleton=1;

        }

    }
    Shape.bind(this,width,height)();
    var ah="ag";

}


Rect.prototype = Object.create(Shape.prototype)

Rect.prototype.toString=function () {
return "i'am  Rectangle "+ "the Area is" +this.Area()+ " the cir " + this.circ();

}
Rect.prototype.Area= function(){return this.length1*this.length2};

Rect.prototype.circ=function() { return 2*(this.length1+this.length2)}
Rect.prototype.valueOf=function() {
    return this.Area();

}
Rect.prototype.constructor=Rect;




function Square(length)
{
Rect.bind(this,length,length)();
this.Area= function(){return this.length1*this.length1};
this.circ= function() { return 4*(this.length1)}



}
Square.prototype =Object.create(Rect.prototype) ;


Square.prototype.Area=function(){return this.length1*this.length1};

Square.prototype.circ=function() { return 4*(this.length1)}

Square.prototype.toString=function () {
    return "i'am  Square "+ "the Area is" +this.Area()+ " the cir " + this.circ();
    
    }
Square.prototype.constructor=Square;

Rect.singleton=0;