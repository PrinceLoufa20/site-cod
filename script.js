let nomUtilisateur = prompt("Bonjour ! Quel est ton nom ?");
if (nomUtilisateur) {
    alert("Salut " + nomUtilisateur + " ! Bienvenue sur ma page ." );
} else {
    alert("Bonjour l'inconnu(e) ! Bienvenue sur ma page.")
}
const dateActuelle = new date();
console.log("date et heure actuelles : " + dateActuelle);
console.log("il est actuellement : " + dateActuelle.toLocaleTimeString('fr-FR'));
console.log("La date d'aujourd'hui est : " + dateActuelle.toLocaleDateString('fr-Fr'));
const paragrapheModifiable = document.getElementById('message-js')

const heureActuelle = document.getElementById("heure");
if (paragrapheModifiable) {
    paragrapheModifiable.textContent = " Le texte de ce paragraphe a éte modifié par javascript !"
    paragrapheModifiable.style.color = "blue";
    paragrapheModifiable.style.fontWeight = "bold"; 
}
const boutonSalut = document.getElementById('bouton-salut');
if (boutonSalut) {
    boutonSalut.addEventListener('click', function() {
        alert("Tu as cliqué sur le bouton ! bravo !");
        boutonSalut.textContent = "Merci d'avoir cliqué sur le bouton !";
        boutonSalut.style.backgroundColor = " lightgreen";
    }); 
    }
    


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    