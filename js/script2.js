function comprar() {
  let gansito = false;
  let chocobar = false;

  if (gansito === true){
    alert("Toma tu gansito");
  }

  //|| = o / && = y 
  if (chocobar === true && gansito !== true) {
   alert("Toma tu barra de chocorramo");
   } 
   
   if(chocobar === false && gansito === false) {
    alert("No hay ninguno");
   }
}