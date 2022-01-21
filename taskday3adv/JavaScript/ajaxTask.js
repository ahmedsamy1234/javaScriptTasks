
var bandSelector = document.querySelector("#bands");
var artistSelector = document.querySelector("#artist");
var xhr = new XMLHttpRequest();


function getBandSelected()
{
    xhr.open("GET","../Ajax/rockbands.json");
    xhr.onreadystatechange = function () 
    {

        if (xhr.readyState == 4 && xhr.status ==200)
        {
            var res = JSON.parse(xhr.responseText)[bandSelector.value];
            for (var i =0 ;i <res.length;i++ )
                artistSelector.innerHTML +="<option value='"+res[i].value+"'>"+res[i].name+"</option>";   
        }
    };
    xhr.send("");
}

function getArtistselected()
{
    window.open(artistSelector.value);
}

bandSelector.onchange=getBandSelected;
artistSelector.onchange = getArtistselected;