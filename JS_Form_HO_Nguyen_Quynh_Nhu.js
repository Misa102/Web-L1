function validateForm() {

    var nom = document.forms["contactForm"]["nom"].value;
    var prenom = document.forms["contactForm"]["prenom"].value;
    var adresse = document.forms["contactForm"]["adresse"].value;
    var codepostal = document.forms["contactForm"]["codepostal"].value;
    var regPhone = /^\d{10}$/; //10 so
    var telephone = document.forms["contactForm"]["telephone"].value;
    var regMail = /^[A-Za-z][\w$.]+@[\w]+\.\w+$/;
    var email = document.forms["contactForm"]["email"].value;
	var texte =document.forms["contactForm"]["texte"].value;

	if(nom != "" && telephone !== "" && email !== "" && prenom !== "" && adresse !== "" && codepostal !== "" && texte !== ""){
		if (!telephone.match(regPhone)) {
            alert('Votre numéro de téléphone n est pas au bon format!');
			return false;
		} else {
			if(!email.match(regMail)){
				alert("email not valid");
				return false;
			}else{
				var choice = confirm('Confirmez votre information\n'+nom+"\n"+prenom+"\n"+adresse+"\n"+codepostal+"\n"+telephone+"\n"+email)
				if (choice ==1){
					alert('Votre commentaire est envoyé. Merci!');
			    }
				return true;
			}
		}
		
	}else{
		alert("veuillez tout remplir");
		return false;
	}
		
	
}