let button = document.getElementById("guardar");
button.addEventListener("click", async () => {
    let nombre = document.getElementById("nombre").value;
    let artista = document.getElementById("artista").value;
    let url = document.getElementById("url").value;
    let body = JSON.stringify({ nombre, artista, url_video: url });

    try {
        let response = await fetch('http://localhost:3000/cancion', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: body
        });
        if (response.status === 201) {
            let cancion = await response.json();
            console.log(cancion);
            alert('Canción guardada con éxito.');
        } else {
            alert('Error al guardar la canción.');
        }
    } catch (error) {
        console.error(error);
    }
});
