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
    $(".modal-title").html('<strong>Bienvenue</strong> '+ document.querySelector("#Prenom").value);
    $(".modal-body").html('<strong>Vous êtes nés le</strong>'+dateValue+' <strong>et vous êtes à:</strong> <img src="https://maps.googleapis.com/maps/api/staticmap?markers= '+ adresseValue +'&zoom=12&size=240x200&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"></img> ' + adresseValue+'');
    
    $('#myModal').modal("show");
 }
 

    }