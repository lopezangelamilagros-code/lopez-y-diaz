var express = require('express');
var router = express.Router();
var especialidadesModel = require('./../models/EspecialidadesModel'); // Corregido
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

// GET listado de especialidades
router.get('/especialidades', async function (req, res, next){
    try {
        let especialidades = await especialidadesModel.getEspecialidades();

        // Generar URL de imagen con Cloudinary
        especialidades = especialidades.map(especialidad => {
            if (especialidad.img_id){
                const imagen = cloudinary.url(especialidad.img_id, {
                    width: 960,
                    height: 360,
                    crop: 'fill'
                });
                return {
                    ...especialidad,
                    imagen
                }
            } else {
                return {
                    ...especialidad,
                    imagen: ''
                }
            }
        });

        res.json(especialidades);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: true,
            message: 'Error al obtener especialidades'
        });
    }
});

// POST para enviar datos del formulario de contacto
router.post('/contacto', async (req, res) =>{
    try {
        const mail = {
            to: 'admin@gmail.com',
            subject: 'Contacto Web',
            html: `${req.body.nombre} se contactó a través de la web y quiere más información a este correo: ${req.body.email} <br>
            Además, hizo el siguiente comentario: ${req.body.mensaje} <br> Su teléfono es: ${req.body.telefono}`
        };

        const transport = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        await transport.sendMail(mail);

        res.status(201).json({
            error: false,
            message: 'Mensaje enviado'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: true,
            message: 'No se pudo enviar el mensaje'
        });
    }
});

module.exports = router;
