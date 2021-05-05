function listaEst(){
    let estudiante = document.getElementById("respuesta").value; 
    

    if(estudiante === "presente"){
       alert("el estudiente esta presente");
    }
    else{
      alert("el estudiante no asistio")
    }
    // condicion de si es falso negando el true
    /*if(estudiante === false){
        alert("es estudiante no esta presente");
    }*/


}