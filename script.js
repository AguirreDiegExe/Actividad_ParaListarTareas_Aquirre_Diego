// Función para agregar una nueva tarea
function agregarTarea()
{
    //se van a definir las variables 
    const nuevaTareaInput = document.getElementById("nuevaTarea");
    const listaTareas = document.getElementById("listaTareas");
    const nuevaTareaTexto = nuevaTareaInput.value.trim();

    if (nuevaTareaTexto !== "") {
        const nuevaTarea = document.createElement("li");
        //con createElement se puede crear un nuevo elemento html mediante js 
        nuevaTarea.textContent = nuevaTareaTexto;
        const botonEliminar = document.createElement("button"); //es un nuevo elemento html que se creacra si se presiona el boton 
        botonEliminar.textContent = "Eliminar Tarea";
        botonEliminar.className = "delete";
        botonEliminar.onclick = function()
        {
            //con remove child se puede remover dicho elemento
        listaTareas.removeChild(nuevaTarea);
        };
        //y con append child se puede agregar dicho nuevo elemento 
        nuevaTarea.appendChild(botonEliminar);
        listaTareas.appendChild(nuevaTarea);
    }
}

// Función Dos: marcar una tarea como completada 
function marcarCompletada(tarea) {
    tarea.classList.toggle("completed");  //le esta dando nombre a un elemento con una nueva clase 
}

//lo que addeventListener es agregar un nuevo elemento mediante una funion click ,que tiene que ser colocada mediante una funcion de evento 

document.getElementById("listaTareas").addEventListener("click",
function(event) {
    if (event.target.tagName === "LI") {
    marcarCompletada(event.target);
}
});

document.getElementById("agregar").addEventListener("click",agregarTarea);

//Funcion tres: Es para mostrar todas las tareas completadas 

function mostrarCompletadas() {
    const tareas = document.querySelectorAll("li");
    //nuevo forma de esctablecer un ciclo foreach
    tareas.forEach(tarea => {
        if (tarea.classList.contains("completed")) {
            tarea.style.display = "flex";
        } else {
            tarea.style.display = "none";
        }
    });
}

//podermos definir el document.addEventListener por afuera de la funcion de js 
document.getElementById("mostrarCompletadas").addEventListener("click", mostrarCompletadas);

//Funcion cuatro visualizar las tares por realizar

function MostrarIncompletas(){
    const tareas = document.querySelectorAll("li");
    tareas.forEach(tarea => {
        //para establecer que son diferentes
        if(!tarea.classList.contains("compelted")){
            tarea.style.display ="flex";
        }else{
            tarea.style.display ="none";
        }
    });
}

//para mostrar todas las tareas

document.getElementById("MostrarIncompletas").addEventListener("click" , MostrarIncompletas);