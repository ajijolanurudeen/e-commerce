const users = [{
    userId:'u1',
    name: 'admin',
    email: 'admin@example.com',
    userName: 'admin',
    password:'random',
    walletBalance: 99,
    status: true,
    dateSignedUp: new Date()

},
{
    userId:'u2',
    name: 'adeshina',
    email: 'adeshina@example.com',
    userName: 'adeshina02',
    password:'adeshina2',
    walletBalance: 100,
    status: true,
    dateSignedUp: new Date()

},
{
    userId:'u3',
    name: 'faruq',
    email: 'faruq@example.com',
    userName: 'faruq01',
    password:'random01',
    walletBalance: 100,
    status: true,
    dateSignedUp: new Date()

},

]

const products = [
    {
        productId: 'p1',
        productName: 'Orange',
        productQty: 20,
        pricePerUnit: 30,
        soldQty:33
    },
    {
        productId: 'p2',
        productName: 'Cherry',
        productQty: 20,
        pricePerUnit: 20,
        soldQty:3
    },
    {
        productId: 'p3',
        productName: 'Grape',
        productQty: 20,
        pricePerUnit: 12,
        soldQty:0
    },
    {
        productId: 'p4',
        productName: 'Guava',
        productQty: 20,
        pricePerUnit: 10,
        soldQty:0
    },
    {
        productId: 'p5',
        productName: 'Pawpaw',
        productQty: 20,
        pricePerUnit: 19,
        soldQty:0
    },
    {
        productId: 'p6',
        productName: 'Banana',
        productQty: 20,
        pricePerUnit: 15,
        soldQty:0
    },
    
]

const allUsersOrders = [
    {
        userId: 'u1',
        userOrders: [{
            orderId: 'u1Or1',
            productId: 'p1',
            orderQty: 5,
            orderValue: 50
        },
        {
            orderId: 'u1Or2',
            productId: 'p1',
            orderQty: 10,
            orderValue: 100
        },]
    },

    {
        userId: 'u2',
        userOrders: [{
            orderId: 'u2Or1',
            productId: 'p1',
            orderQty: 6,
            orderValue: 60
        },
        {
            orderId: 'u2Or2',
            productId: 'p2',
            orderQty: 3,
            orderValue: 60
        }
    ]
    },
    {
        userId: 'u3',
        userOrders: [{
            orderId: 'u3Or1',
            productId: 'p1',
            orderQty: 6,
            orderValue: 60
        },
        {
            orderId: 'u3Or2',
            productId: 'p1',
            orderQty: 6,
            orderValue: 60
        }
    ]
    }

]

const account = []

module.exports = {products, users, allUsersOrders}

