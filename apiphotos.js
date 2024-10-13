// Definimos la ruta de donde consultaremos los recursos
const API_URL = 'https://jsonplaceholder.typicode.com';

// Obtenemos el elemento de DOM html donde arrojamos la info
const HTMLResponse = document.querySelector('#appphotos');

// Creamos el elemento div donde arrojaremos la info
const containerDiv = document.createElement('div');
containerDiv.style.display = 'flex'
containerDiv.style.flexWrap = 'wrap'

fetch(`${API_URL}/photos`)
    .then(response => response.json())
    .then((photos) => {
        photos.forEach((photo) => {
            // Creamos el elemento div para almacenar cada imagen
            let userDiv = document.createElement('div');
            
            // Supongamos que cada usuario tiene una URL de imagen en user.image
            let img = document.createElement('img');
            img.src = photo.thumbnailUrl; // Aquí debes tener la URL de la imagen
            img.alt = photo.title;

            // Agregamos la imagen dentro del div del usuario
            userDiv.appendChild(img);
            containerDiv.appendChild(userDiv);
        });

        // Al final, agregamos el containerDiv dentro del div obtenido
        HTMLResponse.appendChild(containerDiv);
    })
    .catch((error) => {
        console.error('Error en la solicitud');
    });
