db = db.getSiblingDB('pizzeria');
db.dropDatabase();


db.customers.insertOne({
    _id: 10,
    name: 'Fernando',
    surname: 'Ferri',
    address: {
        street: 'Fake street',
        number: 12,
        floor: 3,
        door: 2,
        province: 'Barcelona',
        city: 'Badalona',
        zip: 08038
    },
    orders: [1000]
})

db.customers.insertOne({
    _id: 11,
    name: 'Vegito',
    surname: 'Blue',
    address: {
        street: 'Calle Potara',
        number: 10,
        floor: 12,
        door: 5,
        province: 'Barcelona',
        city: 'Sabadell',
        zip: 08075
    },
    orders: [1001]
})

db.orders.insertOne({
    _id: 1000,
    order_date_time: new Date(),
    delivery_type: 'delivery',
    delivery_date_time: new Date(),
    product_details: [
        {
            food: 'hamburger',
            quantity: 2
        },
        {
            drink: 'coca-cola',
            quantity: 2
        },
        {total_price: 30},
    ],
    employees_id: 'deliver01',
    restaurant_id: 'Super restaurant'
})

db.orders.insertOne({
    _id: 1001,
    order_date_time: new Date(),
    delivery_type: 'store',
    product_details: [
        {
            food: 'pizza',
            quantity: 2,
            categoria: 'calzone'
        },
        {
            drink: 'coca-cola',
            quantity: 1
        },
        {
            drink: 'fanta',
            quantity: 1
        },
        {total_price: 24},
    ],
    restaurant_id: 'Super restaurant'
})

db.restaurant.insertOne({
    _id: 'Super restaurant',
    address: {
        street: 'Restaurant street',
        number: 14,
        province: 'Barcelona',
        city: 'Barcelona'
    },
    employees: [
        {
        _id: 'chef01',
        name: 'Cookie',
        surname: 'Cooker',
        nif: 'Y6473847B',
        phone: 654893847,
        type: 'chef'
        },
        {
        _id: 'deliver01',
        name: 'Cookie',
        surname: 'Cooker',
        nif: 'Y6473847B',
        phone: 654893847,
        type: 'deliver'
        },
    ],
})

db.restaurant.insertOne({
    _id: 'Hot restaurant',
    address: {
        street: 'Food street',
        number: 156,
        province: 'Barcelona',
        city: 'Hospitalet'
    },
    employees: [
        {
        _id: 'chef04',
        name: 'Handy',
        surname: 'Patrol',
        nif: 'Y6441787G',
        phone: 654123447,
        type: 'chef'
        },
        {
        _id: 'deliver01',
        name: 'Chulito',
        surname: 'Carry',
        nif: 'Y6474785L',
        phone: 654895896,
        type: 'deliver'
        },
    ],
})

