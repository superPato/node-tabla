const fs = require("fs");
const colors = require("colors")

const crearArchivo = async (base = 5, listar, hasta) => {
  let salida, consola = "";

  for (let i = 1; i <= hasta; i++) {
    salida += `${base} * ${i} = ${i * base}\n`;
    consola += `${base} ${'*'.green} ${i} ${'='.green} ${i * base}\n`;
  }

  if (listar) {
    console.log("=================================".green);
    console.log("           Tabla del: ".green, colors.yellow(base));
    console.log("=================================".green);
    console.log(consola);
  }
    

  const nombreArchivo = `tabla-${base}.txt`

  try {
    fs.writeFileSync(nombreArchivo, salida);
    return nombreArchivo
  } catch (err) {
    throw err
  }

};

module.exports = {
  crearArchivo,
};
