var y=0;
var flag=0;
function pageScroll() {
    
    
    window.scrollTo(0,y); // horizontal and vertical scroll increments
    // console.log(document.body.scrollBy)
    if (y<document.body.offsetHeight&& flag==0)
    {
        y=y+150;
    }else 
    {
        flag=1
    }
    if (flag==1)
    {
        y=y-150;
        if (y<=0)
        {
            flag=0;
        }
    }
    scrolldelay = setTimeout('pageScroll()',100); // scrolls every 100 milliseconds
}
pageScroll();