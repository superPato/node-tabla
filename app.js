const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('yargs')
	.options({
		'b': {
			alias: 'base',
			type: 'number',
			demandOption: true,
		},
		'l': {
			alias: 'listar',
			type: 'boolean',
			demandOption: false,
			default: false
		}
	})
	.check((argv, options) => {
		if (isNaN(argv.b)) {
			throw 'La base tiene que ser un número'
		}
		return true;
	})
	.argv

console.clear();

console.log(argv)


crearArchivo(argv.b, argv.listar)
	.then( nombreArchivo => console.log(nombreArchivo, 'creado') )
	.catch( err => console.log(err) );
