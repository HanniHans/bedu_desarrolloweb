const Mascota = require('../models/mascota')

function crearMascota(req, res) {
  var mascota = new Mascota(req.body)
  res.status(201).send(mascota)
}

function obtenerMascota(req, res) {
    var mascota1 = new Mascota(1, 'Firulais', 'perro', 'link', 'descripcion1', 'anunciante1', 'ubicacion1')
    var mascota2 = new Mascota(2, 'Pancho', 'gato', 'link', 'descripcion2', 'anunciante2', 'ubicacion2')
    res.send([mascota1, mascota2])
  }
  
  function modificarMascota(req, res) {
    var mascota1 = new Mascota(req.params.id, 'Pancho', 'gato', 'link', 'descripcion2', 'anunciante2', 'ubicacion2')
    var modificaciones = req.body
    mascota1 = { ...mascota1, ...modificaciones }
    res.send(mascota1)
  }
  
  function eliminarMascota(req, res) {
    res.status(200).send(`Mascota ${req.params.id} eliminado`);
  }

  module.exports = {
    crearMascota,
    obtenerMascota,
    modificarMascota,
    eliminarMascota
  }
