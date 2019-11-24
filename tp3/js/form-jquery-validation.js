$( document ).ready(function() {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
   
     console.log( "DOM ready!" );
 });
    function validation(){
    var nomValue= $("#nom").val();
    var prenomValue= $("#Prenom").val();
    var dateValue= $("#datedenaissance").val();
    var adresseValue= $("#adresse").val();
    var emailValue= $("#email").val();
    if(nomValue.length==0  || prenomValue.length==0 || dateValue.length==0 || adresseValue.length==0 || emailValue.length==0){
        $('#myModal').modal("show");
}
 else{
    $(".modal-title").html('<strong>Bienvenue</strong> '+$("#Prenom").val());
    $(".modal-body").html('<strong>Vous êtes nés le</strong>'+dateValue+' <strong>et vous êtes à:</strong> <img width="480" src="https://maps.googleapis.com/maps/api/staticmap?markers= '+ adresseValue +'&zoom=12&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"></img> ' + adresseValue+'');
    
    $('#myModal').modal("show");
 }

    }
    