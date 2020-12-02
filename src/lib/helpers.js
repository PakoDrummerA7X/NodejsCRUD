const bcrypt = require('bcryptjs');

const helpers = {};

helpers.encryptPassword = async(password) => { //recibe la contraseña en texto plano
    const salt = await bcrypt.genSalt(10); //generamos un patrón para que funcione el cifrado
    const hash = await bcrypt.hash(password, salt); //le damos la contraseña y el patrón para que cifre la contraseña
    return hash; //devolvemos el cifraddo
};

helpers.matchPassword = async (password, savedPassword) => {
    try {
        return await bcrypt.compare(password, savedPassword);
    }
    catch(e) {
        console.log(e);
    }
};

module.exports = helpers;