db = db.getSiblingDB('optica');
db.dropDatabase();


db.customers.insertOne({
    _id: 01,
    name: 'Occhio',
    surname: 'Variopinto',
    phone: 654567876,
    email: 'occhiov@gmail.com',
    address: {
        street: 'Fake Street',
        number: 2,
        door: 4,
        city: 'Barcelona',
        zip: 08023
    },
    orders: [ 
        {
        brand: 'Rayban', 
        supplier_id: 'M4556534Y',
            order_details: {
                price: 20,
                left_prescription: 2,
                right_prescription: 2,
                frame_type: 'rigid',
                frame_color: 'black',
                rglass_color: 'white',
                lglass_color: 'white',
                },
            employee_details: {
                _id: '2345',
                name: 'Super Employee'
            }
        }
    ]
});

db.customers.insertOne({
    _id: 02,
    name: 'Azzurro',
    surname: 'Ilpomeriggio',
    phone: 654127876,
    email: 'azzurrino@gmail.com',
    address: {
        street: 'Candy Mountain',
        number: 54,
        door: 3,
        city: 'Barcelona',
        zip: 08021
    },
    orders: [ 
        {
        brand: 'Carrera', 
        supplier_id: 'F4553744B',
        order_details: {
                price: 80,
                left_prescription: 3,
                right_prescription: 0,
                frame_type: 'solid',
                frame_color: 'yellow',
                rglass_color: 'brown',
                lglass_color: 'brown'
                },
        employee_details: {
                _id: '2346',
                name: 'Hyper Employee'
            }
        },

        {
        brand: 'NiceOnes', 
        supplier_id: 'F4553744B',
        order_details: {
                price: 100,
                left_prescription: 2,
                right_prescription: 0,
                frame_type: 'okay',
                frame_color: 'green',
                rglass_color: 'grey',
                lglass_color: 'grey'
                },
        employee_details: {
            _id: '2345',
            name: 'Super Employee'
            }
        },
    ]
});



db.suppliers.insertOne({
    _id: 'M4556534Y',
    brand: ['Rayban'],
    name: 'Rosalinda',
    surname: 'Black',   
    address: {
        street: 'Fake Street',
        number: 34,
        floor: 2,
        door: 4,
        zip: 34532,
        city: 'London',
        country: 'UK'
    },
    contact_details: {
        phone: 345432345,
        fax: 456543234
    },
});

db.suppliers.insertOne({
    _id: 'F4553744B',
    brand: ['Carrera', 'NiceOnes'],
    name: 'Geltrude',
    surname: 'Genny',   
    address: {
        street: 'Not Fake Street',
        number: 84,
        floor: 1,
        door: 2,
        zip: 34532,
        city: 'London',
        country: 'UK'
    },
    contact_details: {
        phone: 345474345,
        fax: 456543412
    },
});



