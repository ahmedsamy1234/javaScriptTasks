///Query String   ===>location.search  '?usrName=koko&usrAge=20'
function validateForm() {
    var name = document.forms["myform"]["Name"].value;
    var gmail =document.forms["myform"]["Email"].value;
    regName = /^[a-zA-Z]+$/g;


RegEmail =/^[a-zA-Z]+\@{1}[a-zA-Z0-9]+\.{1}[com]{3}$/g;

      return (RegEmail.test(gmail)&&  regName.test(name))

    }

