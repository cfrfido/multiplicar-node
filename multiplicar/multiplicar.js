const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('============================='.green);
    console.log(`Tabla de multiplicar del ${ base }`.green);
    console.log('============================='.green);

    if (!Number(base)) {
        console.log(`El valor introducído ${ base } no es un número`);
        return;
    }

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${i} \t= ${ base*i }`);
    }

};


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducído ${ base } no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } \t= ${ base*i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`);
        });

    });

};

module.exports = {
    crearArchivo,
    listarTabla
}