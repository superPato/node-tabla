const fs = require("fs");
const colors = require("colors")

const crearArchivo = async (base = 5, listar) => {
  let salida = "";

  for (let i = 1; i <= 10; i++) {
    salida += `${base} ${'*'.green} ${i} ${'='.green} ${i * base}\n`;
  }

  if (listar) {
    console.log("=================================".green);
    console.log("           Tabla del: ".green, colors.yellow(base));
    console.log("=================================".green);
    console.log(salida);
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
