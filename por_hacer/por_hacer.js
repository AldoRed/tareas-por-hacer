const fs = require('fs')

let listadoPorHacer = []


const guardarDB = (lista) => {
    let data = JSON.stringify(lista)

    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err)
    })
}

const leerDB = () => {
    try {
        listadoPorHacer = require('../db/data.json')
    } catch (error) {
        listadoPorHacer = []
    }
}

const crear = (descripcion) => {

    leerDB()

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer)

    guardarDB(listadoPorHacer)

    return porHacer

}

const getListado = () => {

    leerDB()

    return listadoPorHacer
}

const actualizar = (descripcion, completado) => {

    leerDB()

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

    if (index >= 0) {
        listadoPorHacer[index].completado = completado
        guardarDB(listadoPorHacer)
        return true
    }
    return false
}

const borrar = (descripcion) => {

    leerDB()

    let nuevaLista = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion)

    guardarDB(nuevaLista)

    return
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}