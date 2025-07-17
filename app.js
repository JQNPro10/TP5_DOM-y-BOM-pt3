/*
3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin. 
*/

const input = document.getElementById("input");
const btnAgregar = document.getElementById("btnAgregar");
const tareas = document.getElementById("tareas");

btnAgregar.addEventListener("click", () => {
    const tarea = input.value.trim();
    if (tarea) {
        const elementoLista = document.createElement("li");
        elementoLista.className = "list-group-item d-flex justify-content-between align-items-center px-2 border";
        elementoLista.style.marginBottom = "0.5rem";

        const spanTarea = document.createElement("span");
        spanTarea.textContent = tarea;
        spanTarea.style.wordBreak = "break-word";
        spanTarea.style.flex = "1";

        const eliminarBoton = document.createElement("button");
        eliminarBoton.className = "btn btn-danger ms-3";
        eliminarBoton.textContent = "X";
        eliminarBoton.addEventListener("click", () => {
            tareas.removeChild(elementoLista);
        });

        elementoLista.appendChild(spanTarea);
        elementoLista.appendChild(eliminarBoton);
        tareas.appendChild(elementoLista);
        input.value = "";
    } else {
        alert("Por favor, ingrese una tarea.");
    }
});
