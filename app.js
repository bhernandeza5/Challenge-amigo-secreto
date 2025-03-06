// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

function agregarAmigo(){
    //Guardar el valor de entrada del usuario
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    //Validar que la entrada no esté vacía
    if (nombre === ''){
        alert("Por favor, ingrese un nombre")
    }else{
        listaAmigos.push(nombre);
    }

    //Limpiar el campo de entrada
    limpiarCaja();

    //Actualizar la lista en el index
    actualizarLista();
}

function actualizarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    listaAmigos.forEach((amigo) => {
        let li = document.createElement("li"); //Se crea un elemento lista <Li>
        li.textContent = amigo; //Se asigna el nombre del amigo
        lista.appendChild(li); //Se agrega a la lista en el index
    })
}

function sortearAmigo(){
    //Validar que hay amigos en la lista
    if (listaAmigos.length === 0){
        alert("No hay amigos en la lista :(");
        return;
    }

    //Generar el índice aleatorio
    let indice = Math.floor(Math.random() * listaAmigos.length);
    /*floor redondea al entero mas cercano
    random da un numero decima de 0 a 1 aleatorio
    multiplicamos por la lista, para obtener un rango de 0 a lenght*/

    //Nombre de tu amigo secreto
    let amigoSecreto = listaAmigos[indice];

    //Mostrar el resultado en el index
    document.getElementById("resultado").innerHTML = `<li>${amigoSecreto}</li>`;
}