const roomsData = require('./roomsData');

/* roomsData.map((room, i) => {
    console.log(room.rate)
}) */


const Room = class {
    constructor(name, rate, discount){
        this.name = name;
        this.rate = rate;
        this.discount = discount;
    }

    //devuelve falso si no está ocupado, devuelve el invitado si está ocupado
    isOccupied(date) {
        date.map((d) => {
            if (d.status === false ){
                return false 
            }else{
                //console.log(d.name)
                return d.name;
            }
        })
        
    }

    //devuelve el porcentaje de días con ocupación dentro del rango de fechas proporcionadas (inclusive)
    occupancyPercentage(startDate, endDate) {

    }
}

const Booking = class {
    constructor(name, email, check_in, check_out, discount){
        this.name = name;
        this.email = email;
        this.check_in = check_in;
        this.check_out = check_out;
        this.discount = discount;
    }

    //devuelve la tarifa, incluidos los descuentos en la habitación y el invitado
    getFee(){
        return 100 - this.discount;
    }
    
}


 //devuelve el porcentaje de ocupación total en todas las habitaciones de la matriz
const totalOccupancyPercentage = (rooms, startDate, endDate) => {
    
}

//devuelve todas las habitaciones de la matriz que no están ocupadas durante toda la duración
function availableRooms(rooms, startDate, endDate) {
   
}

//jest.fn()la función proporcionada por la biblioteca Jest para crear funciones simuladas.



//archivo prueba
function suma(a, b){
    return a + b;
}

module.exports = {
    Room,
    Booking,
    suma,
    availableRooms,    
    totalOccupancyPercentage};