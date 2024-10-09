//Definimos la ruta de donde consultaremos los recuros
const API_URL = 'https://jsonplaceholder.typicode.com';

//Obtenemos el elemento de DOM html donde arrojamos la info
const HTMLResponse = document.querySelector('#app');

//Creamos el elemenot donde arrojarems la info
const ul = document.createElement('ul');

fetch(`${API_URL}/users`)
    .then(response => response.json())
    .then((users) => {
        users.forEach((user) => {
            //Creamos el elemenot li para almacenar cada elemento en el
            let elem = document.createElement('li');
            elem.appendChild(document.createTextNode(`${user.name} || ${user.phone} || ${user.email} || ${user.company.name} `));
            //Agregamos el name dentro del li del ul
            ul.appendChild(elem);
        });
        //Al final, agregamos el ul dentro del div obtenido
        HTMLResponse.appendChild(ul)
    })
    .catch((error) => {
        console.error('Error en la solicitud');
    });

//nombre, telefono y nombre de la compania