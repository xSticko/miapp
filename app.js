const formulario = document.querySelector(".form-create"); /* Para llamar a un documento*/ 
let contador = 0;

formulario.addEventListener("submit", (a) => {
    a.preventDefault(); /esto impide que la pagina se reinicie cuando se presione el boton/
    const publicacion = document.querySelector("#publicacion").value; /al agregar # es para llamar un ID, al agregar .value, llamamos lo que el usuario ingrese/
    const contenedor = document.querySelector(".contenedor-publicaciones"); /*al agregar un . llamamos una clase */
    contenedor.innerHTML += `    
    <div class="contenedor.publicaciones">
        <div class="publicacion"> 
            <p>$contador+=</p>
            <p>${ID}</p>
            <p>${publicacion}</p>
            <button>Editar</button>
            <button>Eliminar</button>
        </div>
    </div>`;/*esto sirve para poder añadir tanto texto como variables sin estar concatenando */
}); /* cuando se haga submit en el formulario se llamara a la variable*/