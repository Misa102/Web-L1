

/*Faites en sorte que la date et l’heure s’affiche à un endroit sur la page*/


function displayHour(){
    let now = new Date();
    let dateinput = document.getElementById("date");
    function minutes(){
        let min = now.getMinutes();
        if(min < 10)
        {
            return "0"+min;
        }
        else
        {
            return min;
        }
    }

    dateinput.value= "Il est " + now.getHours() + "h" + minutes() ;
    dateinput.style.border="none";
    dateinput.style.fontSize="2em";
    dateinput.style.color="#d88b67";
    dateinput.style.fontStyle="italic";
    dateinput.style.background="none";
}


/*Lorsqu’on clique sur une image de la page d’accueil, une deuxième image apparait à la place, lorsqu’on clique à nouveau la première image réapparait.*/


function changeImage() {

    if (document.getElementById("imgClickAndChange").src === "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1280px-Flag_of_Vietnam.svg.png")
    {
        document.getElementById("imgClickAndChange").src = "http://baochinhphu.vn/Uploaded/tranducmanh/2015_09_16/tranhcodong_giaoduc_so1.jpg";
    }
    else
    {
        document.getElementById("imgClickAndChange").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1280px-Flag_of_Vietnam.svg.png";
    }
}


/* Modifier le fichier présentant le plan du site (inclus dans le répertoire Miscellaneous) pourque lorsque l’on clique sur le nom d’un répertoire (ou sur une image `a côté),
   on puisse alternativement afficher ou cacher son contenu.*/


document.getElementById("misce");
function displayElement() {

    const misceElementDiv = document.getElementById("misce-div");

    if(misceElementDiv.style.display === "none"){
        misceElementDiv.style.display = "block";
    }else{
        misceElementDiv.style.display = "none";
    }
    
}



/* Lorsqu’on clique sur le lien d’envoi de mail sur la page d’accueil, le mail crée contient dans son objet des informations sur le navigateur, le syst`eme d’exploitation que
    l’internaute utilise ainsi que la durée pass´ee sur la page depuis que l’internaute l’a chargée*/


function showInformation(){
    let contact = document.getElementById("mail");
    let info1 = console.log(window.navigator.appVersion);
    let info2 = console.log(window.navigator.appName);
    contact.href = "mailto:ngoc.kim.ngan.ho@etu.univ-poitiers.fr?subject=" + info1 + info2;
}


