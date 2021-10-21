const { Router } = require('express');
const router = Router();

const path = require('path');
const { unlink } = require('fs-extra');

const Cuadro = require('../models/Cuadro');

router.get('/', async (req, res) => {
    const cuadros = await Cuadro.find().sort('-_id');
    res.json(cuadros);
});

router.post('/', async (req, res) => {
    const { nombre, grado, motivo} = req.body;
    const newCuadro = new Cuadro({nombre, grado, motivo});
    console.log(newCuadro)
    await newCuadro.save();
    res.json({'message': 'cuadro de Honor Saved'});
});

router.delete('/:id', async (req, res) => {
    const ciadro = await Cuadro.findByIdAndDelete(req.params.id);
    res.json({message: 'Cuadro de honor Deleted'});
});


module.exports = router;