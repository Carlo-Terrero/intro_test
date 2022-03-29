const { test, expect } = require('@jest/globals');
const {Room,
    Booking,
    suma,
    availableRooms,    
    totalOccupancyPercentage
} = require('./index');

const room1 = new Room('Brauny', 9, 15);
const booking1 = new Booking('carlos','carlos@gmail.com',3,7,20)

//Test de los metodos de las clases
test('prueba de room ocupadas', () => {
    expect(room1.isOccupied('si'));
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
    expect(suma(1,2)).toBe(3);    
});

test('porcentaje de ocupación total', () => {
    expect(totalOccupancyPercentage('8b','entra','sale'));
})

test('prueba de available', () => {
    expect(availableRooms());
});
