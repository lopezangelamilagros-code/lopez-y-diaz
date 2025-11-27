var express = require('express');
var router = express.Router();
var usuarioModel = require('./../../models/usuarioModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/login',{ //login.hbs
    layout:'admin/layout'    //layout.hbs
  });
});
router.get('/login', function(req, res, next) {
  res.render('admin/login', { layout: 'login' });
});

router.get('/logout', function (req, res, next) {
  req.session.destroy();
  res.render('admin/login', { //login.hbs
    layout: 'admin/layout'    //layout.hbs
  });
});

router.post('/', async (req, res, next) => {
  try {
    var email = req.body.email; //captura los datos del formulario
    var password = req.body.password; //123456

    var data = await usuarioModel.getUserByEmailAndPassword(email, password);

    if (data != undefined) {
      req.session.id_usuario = data.id_usuario;
      req.session.nombre = data.nombre;
      res.redirect('/admin/especialidades');
    } else {
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true
      });
    }
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;