

function Myrectangle(width,height) 
{


    Object.defineProperties(this,{

        "Width" :{ value:width||0,writable:true}
      ,  "height": { value:height||0,writable:true },

      "area" : {value:function() { return width*height}},
      "circum" : { value:function (){ return 2*(width+height)}}
        }


    
    )
        this.displayInfo=function() { return "the width is " + this[ "Width"]+ " the height is "+ this["height"]+ " the  area is "+ this["area"]()+" the circum is "+ this["circum"]()}

}
var myrect= new Myrectangle(2,6);
console.log(myrect.displayInfo());