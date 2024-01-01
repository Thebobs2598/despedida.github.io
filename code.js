function validarPalabra() {
    var palabraIngresada = document.getElementById("palabraInput").value;
    
    if (palabraIngresada.toLowerCase() === "hylcjy") {
      // Si la palabra es correcta, redirige a otra página
      window.location.href = "carta.html";
    } else {
      // Si la palabra es incorrecta, muestra un mensaje de error
      alert("Palabra incorrecta. Intenta de nuevo.");
    }
  }
  