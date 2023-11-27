const products = [
    {   id: '1',
        name: 'Casaca Navigata',
        category: 'casacas',
        price: 80,
        stock: 40,
        description: 'casaca color verde / negro con capucha',
        imageUrl: '/assets/casaca1.png'
    },

    {   id: '2',
        name: 'Casaca Navigata',
        category: 'casacas',
        price: 80,
        stock: 40,
        description: 'casaca Navigata color Negro',
        imageUrl: '/assets/casaca2.png'
    },

    {   id: '3',
        name: 'Casaca Navigata',
        category: 'casacas',
        price: 80,
        stock: 40,
        description: 'casaca color azul / crema con capucha',
        imageUrl: '/assets/casaca3.png'
    },
        
    {
        id: '4',
        name: 'Casaca Navigata',
        category: 'casacas',
        price: 80,
        stock: 40,
        description: 'casaca color azul / rojo con capucha',
        imageUrl: '/assets/casaca4.png'
    },

    {
        id: '5',
        name: 'Pantalon Navigata',
        category: 'pantalones',
        price: 80,
        stock: 40,
        description: 'Pantalon navigata negro skinny',
        imageUrl: '/assets/pantalon1.png'
    },

    {
        id: '6',
        name: 'Pantalon Navigata',
        category: 'pantalones',
        price: 80,
        stock: 40,
        description: 'Pantalon navigata verde skinny',
        imageUrl: '/assets/pantalon2.png'
    },

    {
        id: '7',
        name: 'Pantalon Navigata',
        category: 'pantalones',
        price: 80,
        stock: 40,
        description: 'Pantalon navigata crema skinny',
        imageUrl: '/assets/pantalon3.png'
    },

    {
        id: '8',
        name: 'Pantalon Navigata',
        category: 'pantalones',
        price: 80,
        stock: 40,
        description: 'Pantalon navigata gris skinny',
        imageUrl: '/assets/pantalon4.png'
    },

    {
        id: '9',
        name: 'Polo Navigata',
        category: 'polos',
        price: 80,
        stock: 40,
        description: 'Polo Navigata color Negro',
        imageUrl: '/assets/polo1.png'
    },

    {
        id: '10',
        name: 'Polo Navigata',
        category: 'polos',
        price: 80,
        stock: 40,
        description: 'Polo Navigata color Negro',
        imageUrl: '/assets/polo2.png'
    },

    {
        id: '11',
        name: 'Polo Navigata',
        category: 'polos',
        price: 80,
        stock: 40,
        description: 'Polo Navigata color Negro',
        imageUrl: '/assets/polo3.png'
    },

    {
        id: '12',
        name: 'Polo Navigata',
        category: 'polos',
        price: 80,
        stock: 40,
        description: 'Polo Navigata color Negro',
        imageUrl: '/assets/polo4.png'
    }




]

export const mFetch = (id) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(id ? products.find(prod => prod.id === id) : products)
        }, 1000)
    })
}