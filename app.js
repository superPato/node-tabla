const { crearArchivo } = require("./helpers/multiplicar");
require("colors")
const argv = require('./config/yargs')

console.clear();

crearArchivo(argv.b, argv.listar, argv.h)
	.then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado') )
	.catch( err => console.log(err) );
