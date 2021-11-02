const fs = require("fs");

const crearArchivo = async (base = 5, listar) => {
  let salida = "";

  for (let i = 1; i <= 10; i++) {
    salida += `${base} * ${i} = ${i * base}\n`;
  }

  if (listar) {
    console.log("=================================");
    console.log("           Tabla del: ", base);
    console.log("=================================");
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
