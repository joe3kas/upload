const { Router } = require('express');
const router = Router();

const path = require('path');
const { unlink } = require('fs-extra');

const Slider = require('../models/Slider');
const Docente = require('../models/Docente');
const Noticia = require('../models/Noticia');

router.get('/', async (req, res) => {
    const sliders = await Slider.find().sort('-_id');
    const docentes = await Docente.find().sort('-_id');
    const noticias = await Noticia.find().sort('-_id');
    res.json({sliders,noticias,docentes});
});

module.exports = router;

