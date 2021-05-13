function Registro() {
  let Nombre = document.getElementById("Name").value;
  let Apellido = document.getElementById("SecondName").value;
  let Edad = document.getElementById("Age").value;
  let Correo = document.getElementById("Email").value;

  Edad = parseInt(Edad);

  if (Nombre === "" || Apellido === "" || Edad === "" || Correo === "") {
    alert(`Por favor ingrese todos los campos`);
  } else {
    if (Edad >= 18) {
      alert(
        `Hola ${Nombre} ${Apellido}, has aplicado correctamente te contactaremos en ${Correo}`
      );
    }
    if (Edad <= 18) {
      alert(`Hola ${Nombre} ${Apellido}, no cumples con la edad requerida`);
    }
  }
}
