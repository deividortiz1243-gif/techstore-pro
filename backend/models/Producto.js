// Importar Mongoose para usar Schema y model 
const mongoose = require('mongoose');

// Schema defina los campos de cada documento Atlas
const productoSchema = new mongoose.Schema({
    id:          { type: Number, required: true },
    icono:       { type: String, required: true },
    nombre:      { type: String, required: true },
    descripcion: { type: String, required: true },
    precio:      { type: String, required: true },
    imagen:      { type: String, required: true },
});

// Crea el Model - Mongoose busca la coleccion 'productos' en Atlas y aplica el Schema
const Producto = mongoose.model('Producto', productoSchema);

// Exportar para poder usarlo en el server.js
module.exports = Producto;
