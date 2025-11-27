// routes/admin/especialidades.js
var express = require('express');
var router = express.Router();
var especialidadesModel = require('./../../models/EspecialidadesModel');

// Cloudinary para imágenes
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

/* GET: Listar especialidades */
router.get('/', async (req, res, next) => {
  try {
    var especialidades = await especialidadesModel.getEspecialidades();

    especialidades = especialidades.map(especialidad => {
      if (especialidad.img_id) {
        const imagen = cloudinary.image(especialidad.img_id, {
          width: 100,
          height: 100,
          crop: 'fill'
        });
        return { ...especialidad, imagen };
      } else {
        return { ...especialidad, imagen: '' };
      }
    });

    res.render('admin/especialidades', {
      layout: 'admin/layout',
      persona: req.session.nombre,
      especialidades
    });
  } catch (error) {
    console.log(error);
    res.render('admin/especialidades', {
      layout: 'admin/layout',
      error: true,
      message: 'Error al listar especialidades'
    });
  }
});

/* GET: Formulario para agregar especialidad */
router.get('/agregar', (req, res) => {
  res.render('admin/agregar', { layout: 'admin/layout' });
});

/* POST: Agregar especialidad */
router.post('/agregar', async (req, res, next) => {
  try {
    var img_id = '';
    if (req.files && Object.keys(req.files).length > 0) {
      const imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }

    if (req.body.titulo && req.body.subtitulo && req.body.cuerpo) {
      await especialidadesModel.insertEspecialidad({ ...req.body, img_id });
      res.redirect('/admin/especialidades');
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      });
    }
  } catch (error) {
    console.log(error);
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se pudo agregar la especialidad'
    });
  }
});

/* GET: Eliminar especialidad por ID */
router.get('/eliminar/:id', async (req, res) => {
  try {
    var id = req.params.id;
    let especialidad = await especialidadesModel.getEspecialidadById(id);
    if (especialidad.img_id) {
      await destroy(especialidad.img_id);
    }
    await especialidadesModel.deleteEspecialidadById(id);
    res.redirect('/admin/especialidades');
  } catch (error) {
    console.log(error);
    res.redirect('/admin/especialidades');
  }
});

/* GET: Formulario para modificar especialidad */
router.get('/modificar/:id', async (req, res) => {
  try {
    var id = req.params.id;
    var especialidad = await especialidadesModel.getEspecialidadById(id);
    res.render('admin/modificar', {
      layout: 'admin/layout',
      especialidad
    });
  } catch (error) {
    console.log(error);
    res.redirect('/admin/especialidades');
  }
});

/* POST: Modificar especialidad */
router.post('/modificar/:id', async (req, res) => {
  try {
    var id = req.params.id;
    var obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo
    };

    // Manejo de nueva imagen
    if (req.files && Object.keys(req.files).length > 0) {
      const imagen = req.files.imagen;
      const img_id = (await uploader(imagen.tempFilePath)).public_id;
      obj.img_id = img_id;

      // Eliminar imagen anterior
      let especialidad = await especialidadesModel.getEspecialidadById(id);
      if (especialidad.img_id) {
        await destroy(especialidad.img_id);
      }
    }

    await especialidadesModel.updateEspecialidadById(id, obj);
    res.redirect('/admin/especialidades');
  } catch (error) {
    console.log(error);
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se pudo modificar la especialidad'
    });
  }
});

module.exports = router;
