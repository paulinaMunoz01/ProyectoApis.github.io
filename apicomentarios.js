//Definimos la ruta de donde consultaremos los recuros
const API_URL = 'https://jsonplaceholder.typicode.com';

//Obtenemos el elemento de DOM html donde arrojamos la info
const HTMLResponse = document.querySelector('#apptable');

//Creamos el elemenot donde arrojarems la info
const ol = document.createElement('ol');

fetch(`${API_URL}/comments`)
    .then(response => response.json())
    .then((comments) => {
        comments.forEach((comment) => {
            //Creamos el elemenot li para almacenar cada elemento en el
            let elem = document.createElement('li');
            elem.appendChild(document.createTextNode(`${comment.body} `));
            //Agregamos el name dentro del li del ul
            ol.appendChild(elem);
        });
        //Al final, agregamos el ul dentro del div obtenido
        HTMLResponse.appendChild(ol)
    })
    .catch((error) => {
        console.error('Error en la solicitud');
    });

//nombre, telefono y nombre de la compania