/*
ejercicios de ingles apartir de funcion*/

function calificar(){
    var pregunta1 = document.getElementById("pregunta1");
    var pregunta2= document.getElementById("pregunta2");
    var resultado=document.getElementById("tuResultado");

    var respuestasOk=0;

    //Pregunta 1 
    if(pregunta1.value == "respuesta0"){
        alert("Faltan preguntas por responder");
    }else if(pregunta1.value=="respuesta2"){
        respuestasOk++;
        pregunta1.style.backgroundColor="#82e0aa";
    }else{
        pregunta1.style.backgroundColor="#ec7063";
    }

    //Pregunta 2 
    if(pregunta2.value=="respuesta0"){
        alert("Faltan preguntas por responder");
    }else if(pregunta2.value=="respuesta1"){
        respuestasOk++;
        pregunta2.style.backgroundColor="#82e0aa";
    }else{
        pregunta2.style.backgroundColor="#ec7063";
    }

     //Pregunta 3 
     if(pregunta3.value=="respuesta0"){
        alert("Faltan preguntas por responder");
    }else if(pregunta3.value=="respuesta1"){
        respuestasOk++;
        pregunta3.style.backgroundColor="#82e0aa";
    }else{
        pregunta3.style.backgroundColor="#ec7063";
    }

    resultado.innerHTML="Tu resultado es: "+respuestasOk + " de 3";
}