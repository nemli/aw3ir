$( document ).ready(function() {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
     console.log( "DOM ready!" );
     
     // Y mettre le code jQuery pour valider tous les champs du formulaire
 });
    function validation(){
    var nomValue= document.querySelector("#nom").value;
    var prenomValue= document.querySelector("#Prenom").value;
    var dateValue= document.querySelector("#datedenaissance").value;
    var adresseValue= document.querySelector("#adresse").value;
    var emailValue= document.querySelector("#email").value;
    if(nomValue.length==0  || prenomValue.length==0 || dateValue.length==0 || adresseValue.length==0 || emailValue.length==0){
        $('#myModal').modal("show");
}
 else{
    $('#myModal1').modal("show");
 }


    }