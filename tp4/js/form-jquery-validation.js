$( document ).ready(function() {


     console.log( "DOM ready!" );
    
 });
 $(document).keyup(function(){
   // ajout des compteurs de caractére a coté de chaque champs de saisie 
       var nombreCaractere = $("#name").val().length;
       var msg =  " " + nombreCaractere + ' Caractère(s)';
       $('#compteur1').text(msg);
   
       var nombreCaractere = $("#firstname").val().length;
       var msg = " "+ nombreCaractere + ' Caractère(s)';
       $('#compteur2').text(msg);
   
       var nombreCaractere = $("#birth").val().length;
       var msg =  " "+ nombreCaractere + ' Caractère(s)';
       $('#compteur3').text(msg);
   
       var nombreCaractere = $("#adresse").val().length;
       var msg = " "+ nombreCaractere + ' Caractère(s)';
       $('#compteur4').text(msg);
       
       var nombreCaractere = $("#mail").val().length;
       var msg = " "+ nombreCaractere + ' Caractère(s)';
       $('#compteur5').text(msg);
      });



      $("#formulaire").on("submit",function store(event) { 
         event.preventDefault();
         
             var inputNom= document.getElementById("name");
             var inputPrenom= document.getElementById("firstname");
             var inputDn= document.getElementById("birth");
             var inputAdresse= document.getElementById("adresse");
             var inputEmail= document.getElementById("mail");
             
             if($("#nom").val() !== "" && $("#firstname").val() !== "" && $("#birth").val() !== "" 
           && $("#adresse").val() !== "" && $("#mail").val() !== "" ){
             
             //stocker les valeurs saisie dans le navigateur
             localStorage.setItem("name", inputNom.value);
             localStorage.setItem("firstname", inputPrenom.value);
             localStorage.setItem("birth", inputDn.value);
             localStorage.setItem("adresse", inputAdresse.value);
             localStorage.setItem("mail", inputEmail.value);

            $('#success').addClass("alert alert-success").text("le formulaire est sauvegardé dans le tableau");

            $("#tablee").show();
            
            // ajout des valeurs saisie dans le tableau
            document.querySelector("table tbody").innerHTML = document.querySelector("table tbody")
            .innerHTML +'<tr><td>'+localStorage.getItem("name")+'</td><td>'+localStorage.getItem("firstname")
            
           
            +'</td><td>'+localStorage.getItem("birth")+'</td><td><a href="https://maps.google.com/maps?q='
            +localStorage.getItem("adresse")+'">'+localStorage.getItem("adresse")
           
            +'</a></td><td><a href=mailto:>'+localStorage.getItem("mail")+'</a></td>';
            }
           
     
           
     });