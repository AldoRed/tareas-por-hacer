const argv = require('./config/yargs').argv

const colors = require('colors')

const porHacer = require('./por_hacer/por_hacer')

let comando = argv._[0]

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea)
        break
    case 'listar':
        let listado = porHacer.getListado()

        for (let tarea of listado) {
            console.log('\n==========POR HACER========='.green)
            console.log(tarea.descripcion)
            console.log(tarea.completado)
            console.log('============================\n'.green)
        }
        break
    case 'actualizar':
        let actualizar = porHacer.actualizar(argv.descripcion, argv.completado)
        console.log(actualizar)
        break
    case 'borrar':
        let borrar = porHacer.borrar(argv.d)
        console.log(borrar)
        break
    default:
        console.log('Comando no es reconocido');
}