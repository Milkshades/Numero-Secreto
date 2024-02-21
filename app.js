
/*
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Dime un numero del 1 al 10';
*/


let intentos = 0;
let numeroSecreto = 0;
let numeroMaximo = 5;
let listaNumerosSorteados = [];

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
  
     
     if (numeroUsuario === numeroSecreto){
            asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez':'veces'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
     }else{
        if(numeroUsuario>numeroSecreto){
            asignarTextoElemento ('p', 'El numero es menor');
        }else{
            asignarTextoElemento ('p', 'El numero es mayor');
        }
        intentos++; 
        limpiarCaja();
     }
    return;
}


function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si el numero generado esta en la lista hacemos la sgte op.
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }else{

        if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
        }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}


function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('P',`Dime un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    
}

function reiniciarJuego(){
    //limpiar la caja
   limpiarCaja();
   //indicar mensajes inciciales
   condicionesIniciales();
   //generar numero aleatorio
   //deshabilitar el boton de nuevo juego
   document.querySelector('#reiniciar').setAttribute('disabled', 'true');
   //incializar el numero de intentos
}

condicionesIniciales();

/*
function calcularDobleTriple(numero) {
    const doble = numero * 2;
    const triple = numero * 3;
  
    return `El doble de ${numero} es ${doble} y el triple es ${triple}.`;
  }
  
  const numero = 5;
  const resultado = calcularDobleTriple(numero);
  console.log(resultado);

*/


