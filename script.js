document.addEventListener("DOMContentLoaded", function () {
  let texto = document.querySelector("#texto");
  let cantidadInput = document.querySelector("#cantidad");
  let numeroLimite = document.querySelector("#numLimite");
  let btnJugar = document.getElementById("jugar");

  let nLimite = prompt("Ingresa el número límite para adivinar.");

  let numeroSecreto = Math.floor(Math.random() * nLimite);
  numeroLimite.innerHTML = nLimite;

  console.log(numeroSecreto);

  let numIntentos = 0;

  btnJugar.onclick = function () {
    let cantidad = parseInt(cantidadInput.value);
    let mensaje;
    numIntentos += 1;
    if (cantidad === numeroSecreto) {
      mensaje = `¡GANASTE! en ${numIntentos} intento/s`;
    } else if (cantidad > numeroSecreto) {
      mensaje = `Te equivocaste, el número secreto es menor a ${cantidadInput.value} `;
    } else {
      mensaje = `Te equivocaste, el número secreto es mayor a ${cantidadInput.value} `;
    }
    texto.innerHTML = mensaje;

    texto.style.animation = "none";
    void texto.offsetWidth;
    texto.style.animation = null;
  };
});
