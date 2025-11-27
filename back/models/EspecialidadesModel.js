// EspecialidadesModel.js
var pool = require('./db'); // Importa tu conexión a la base de datos (pool de MySQL)

// Listar todas las especialidades
async function getEspecialidades() {
  try {
    var query = "SELECT * FROM especialidades ORDER BY id DESC";
    var rows = await pool.query(query);
    return rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// Obtener especialidad por ID
async function getEspecialidadById(id) {
  try {
    var query = "SELECT * FROM especialidades WHERE id = ?";
    var rows = await pool.query(query, [id]);
    return rows[0];
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// Insertar nueva especialidad
async function insertEspecialidad(obj) {
  try {
    var query = "INSERT INTO especialidades SET ?";
    var rows = await pool.query(query, [obj]);
    return rows.insertId;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// Eliminar especialidad por ID
async function deleteEspecialidadById(id) {
  try {
    var query = "DELETE FROM especialidades WHERE id = ?";
    await pool.query(query, [id]);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// Modificar especialidad
async function updateEspecialidadById(id, obj) {
  try {
    var query = "UPDATE especialidades SET ? WHERE id = ?";
    await pool.query(query, [obj, id]);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = {
  getEspecialidades,
  getEspecialidadById,
  insertEspecialidad,
  deleteEspecialidadById,
  updateEspecialidadById
};
