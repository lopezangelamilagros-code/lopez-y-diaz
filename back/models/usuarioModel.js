var pool = require('./bd');
var md5 =  require('md5');

async function getUserByEmailAndPassword(email, password) {
    try{
        var query = 'select * from usuarios where email = ? and pass = ? limit 1';
        var rows = await pool.query(query, [email, md5(password)]);
        return rows[0];
    } catch(error){
        console.log(error);
    }
}

module.exports = {getUserByEmailAndPassword}