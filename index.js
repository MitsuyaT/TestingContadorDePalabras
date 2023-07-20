// Escribir acá la función cuentaPalabras
function cuentaPalabras(text){
    let cantidadDePalabras = text.split(" "); // pedimos el numero de palabras

    let textoDivido = text.split(" "); //Dividimos las palabras en un nuevo array

    let contador = 0;

    for (let i = 0 ; i < textoDivido.length ; i++) { //Usaremos un for para recorrer cada elemento
      if (textoDivido[i].startsWith("a")) { //Recorremos cada palabra para encontrar si empieza con "a"
        contador++;
      }
    }


    return{
    cantidadDePalabras: cantidadDePalabras.length, 
    palabrasConA: contador };
}
// no modificar esta funcion
function testCuentaPalabras() {
  const texto =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste temporibus non, eligendi harum adipisci eos provident quaerat eveniet illo placeat distinctio omnis pariatur maiores et voluptates perferendis laborum quam facere.";
  const resultado = cuentaPalabras(texto);
  if (resultado.cantidadDePalabras == 30 && resultado.palabrasConA == 3) {
    console.log("testCuentaPalabras passed");
  } else {
    throw "testCuentaPalabras falló";
  }
}

function main() {
  testCuentaPalabras();
}

main();