let canciones = [];

exports.addCancion = (req, res) => {
    const { nombre, artista, url_video } = req.body;

    if (!nombre || !artista || !url_video) {
        return res.status(400).json({ error: "Todos los campos son obligatorios." });
    }

    const nuevaCancion = { id: canciones.length + 1, nombre, artista, url_video };
    canciones.push(nuevaCancion);

    res.status(201).json(nuevaCancion);
};
