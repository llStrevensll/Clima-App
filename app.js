const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion); //obtiene las coordenadas
        console.log(`Direccion: ${coors.direccion}, Latitud: ${coors.lat}, Longitud ${coors.lng}`);

        let temp = await clima.getClima(coors.lat, coors.lng); //usa las coordenadas para buscar la temperatura
        return `El clima de ${coors.direccion} es de ${temp}.`;
    } catch (e) {
        return `No se pudo determinar el clima ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));

/* clima.getClima(9.9280694, -84.0907246)
    .then(temp => console.log(temp))
    .catch(e => console.log(e));
 */