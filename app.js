const argv = require('yargs')
.command('listar','Imprime en consola la tabla de multiplicar',{
    base:{
        demand:true,
        alias:'b'
    
    },
    limite:{
        alias:'l',
        default:10
    }

})
.command('crear','Crea archivo para las tabals de multipiplicar',{
    base:{
        demand:true,
        alias:'b'
    
    },
    limite:{
        alias:'l',
        default:10
    }

})
.argv;




const {crearArchivo,listarTabla} = require('./multiplicar/multiplicar');
const { argv0 } = require('process');

let comando = argv._[0];

switch(comando){

case 'Listar':
    listarTabla(argv.base,argv.limite);
    break;
case 'Crear':
crearArchivo(argv.base, argv.limite)
.then(archivo=>console.log(`Archivo creado: ${archivo}`))
.catch(e=>console.log(e));
    break;
default:
    console.log('Comando no reconocido');


}

//console.log(argv);
//const { argv0 } = require('process');
//const yargs = require('yargs');
//let base = '4';


//let argv = process.argv;


//let parametro = argv[2];
//let base = parametro.split('=')[1]
//console.log(base);
//crearArchivo(base)
//.then(archivo=>console.log(`Archivo creado: ${archivo}`))
//.catch(e=>console.log(e));

