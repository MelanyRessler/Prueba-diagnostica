document.addEventListener("DOMContentLoaded", function() {
    // Hacer la petición a la API
    fetch("https://randomuser.me/api/?results=500") 
        .then(response => response.json())
        .then(data => {
            // Crear una cadena con la información de todos los usuarios
            const usersInfo = data.results.map(user => `
                <div class="usuarios-card">
                    <img src="${user.picture.large}" alt="User Picture" width="100">
                    <p>Nombre: ${user.name.first} ${user.name.last}</p>
                    <p>Género: ${user.gender}</p>
                    <p>Email: ${user.email}</p>
                    <p>Teléfono: ${user.phone}</p>
                    <p>Ciudad: ${user.location.city}</p>
                </div>
            `).join('');

            // Mostrar la información en el elemento con id "user-list"
            document.getElementById("lista-usuarios").innerHTML = usersInfo;
        })
        .catch(error => console.error("Error fetching data:", error));
});
