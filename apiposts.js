// Definimos la ruta de donde consultaremos los recursos
const API_URL = 'https://jsonplaceholder.typicode.com';

// Obtenemos el elemento de DOM html donde arrojamos la info
const HTMLResponse = document.querySelector('#appposts');

// Creamos el elemento tabla, su encabezado y su cuerpo
const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

// Creamos la fila de encabezado
const headerRow = document.createElement('tr');
const headers = ['USUARIO ID', 'ID', 'TITULO', 'CONTENIDO'];
headers.forEach(headerText => {
    let header = document.createElement('th');
    header.appendChild(document.createTextNode(headerText));
    headerRow.appendChild(header);
});
thead.appendChild(headerRow);
table.appendChild(thead);

fetch(`${API_URL}/posts`)
    .then(response => response.json())
    .then((posts) => {
        posts.forEach((post) => {
            // Creamos una fila para cada usuario
            let row = document.createElement('tr');
            
            // Creamos una celda para cada dato del usuario
            let nameCell = document.createElement('td');
            nameCell.appendChild(document.createTextNode(post.userId));
            row.appendChild(nameCell);
            
            let phoneCell = document.createElement('td');
            phoneCell.appendChild(document.createTextNode(post.id));
            row.appendChild(phoneCell);
            
            let emailCell = document.createElement('td');
            emailCell.appendChild(document.createTextNode(post.title));
            row.appendChild(emailCell);
            
            let companyCell = document.createElement('td');
            companyCell.appendChild(document.createTextNode(post.body));
            row.appendChild(companyCell);

            // Agregamos la fila al cuerpo de la tabla
            tbody.appendChild(row);
        });

        // Agregamos el cuerpo a la tabla y la tabla al div obtenido
        table.appendChild(tbody);
        HTMLResponse.appendChild(table);
    })
    .catch((error) => {
        console.error('Error en la solicitud');
    });
