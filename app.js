// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigoAgregado = document.getElementById('amigo');

function agregarAmigo()  {
    //trim elimina los espacios del principio y final
    let nombre = amigoAgregado.value.trim();

    
    if (nombre === "") {
        alert('Ingrese un nombre válido');
    } else if (amigos.includes(nombre)) {
        alert('Este amigo ya ha sido agregado.');
    } else { 
        
        amigos.push(nombre);
        amigoAgregado.value = '';
        console.log(amigos);
        lista_html();
    }
}

function lista_html() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""
    for (let i = 0; i < amigos.length ; i++) {
        let nuevoLi = document.createElement('li');
        nuevoLi.textContent = amigos[i];
        lista.appendChild(nuevoLi);
    }


}

function sortearAmigo(){
    let ganador = Math.floor(Math.random()*amigos.length);
    let nombreGanador = amigos[ganador];
    let resultadoElemento = document.getElementById('resultado');
    resultadoElemento.textContent = `¡El amigo sorteado es: ${nombreGanador}!`;
    console.log(`El ganador es: ${nombreGanador}`);
}