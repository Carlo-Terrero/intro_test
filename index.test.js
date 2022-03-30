const { test, expect } = require('@jest/globals');
const {Room,
    Booking,
    suma,
    availableRooms,    
    totalOccupancyPercentage
} = require('./index');

const roomsData = require('./roomsData');
const bookingData = require('./bookingDate'); 


const room1 = new Room('Brauny', 9, 15);
const booking1 = new Booking('carlos','carlos@gmail.com',3,7,20)

//Test de los metodos de las clases
test('prueba las rooms ocupadas', () => {
    expect(room1.isOccupied(roomsData)).toBeTruthy();
    // expect(room1.isOccupied(roomsData)).toBeTruthy(); esta es la que falla. este es el bueno .toBeFalsy()
    //expect(room1.isOccupied(roomsData)).not.toBeTruthy(); este tambien da fallo
});

test('prueba de porcentaje ocupado', () => {
    expect(room1.occupancyPercentage('si'));
});

test('prueba del get Fee', () => {
    expect(booking1.getFee()).toBe(86)
    //expect(booking1.getFee()).toBe(86) respuesta fallida
});


//Test de las funciones 
test('suma los elementos', () => {
    expect(suma(1,2)).not.toBe(3);    
    /*
    expect(suma(1,2)).not.toBe(3);     
    expect(suma(1,2)).toBe(4);    
    Son forma diferentes para que fallen
    */
});

test('porcentaje de ocupación total', () => {
    expect(totalOccupancyPercentage('8b','entra','sale'));
})

//expect.arrayContaining(array)
//probar esto luego
//expect.not.arrayContaining(array) este es el inverso
describe('prueba de available', () => {
    
    it('recibe elementos del array', () => {
        expect(availableRooms(roomsData)).toEqual(expect.arrayContaining(roomsData))
    })
});
