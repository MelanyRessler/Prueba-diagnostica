document.addEventListener("DOMContentLoaded", function() {
    fetch("https://randomuser.me/api/?results=500") 
        .then(response => response.json())
        .then(data => {
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

            document.getElementById("lista-usuarios").innerHTML = usersInfo;
        })
        .catch(error => console.error("Error fetching data:", error));
});
