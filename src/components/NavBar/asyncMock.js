const products = [
    {
        id: '1',
        name: 'Plato de madera',
        price: 2500,
        category: 'Platos',
        img: https://http2.mlstatic.com/D_NQ_NP_935124-MLA32697011146_102019-O.webp ,
        stock: 100,
        description:' descripcion de plato de madera' 

    },
    {
        id: '2',
        name: 'cuenco de madera',
        price: 1500,
        category: 'cuencos',
        img: "https://http2.mlstatic.com/D_NQ_NP_862387-MLA44914862857_022021-O.webp" ,
        stock: 100,
        description:' descripcion de cuenco de madera' 

    },
    {
        id: '3',
        name: 'tabla de madera',
        price: 5500,
        category: 'Tablas',
        img: https://raizmaderapura.com/wp-content/uploads/2022/05/genoa.jpg ,
        stock: 100,
        description:' descripcion de tabla de madera' 

    }, 
]

export const getProducts =() => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products)

        }, 500)
    })
}