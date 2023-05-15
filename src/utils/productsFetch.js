let products = [
    {id: '1', category:'beanies', title: 'Goorin Bros.', description: 'Ewe R Hot Black Cuff - Goorin Bros.', price: 60, stock: 10, pictureUrl: 'https://hatstore.imgix.net/090625461430_1.jpg?auto=compress%2Cformat&w=816&h=653&q=50'},
    {id: '2', category:'beanies', title: 'Equip', description: 'Skully Cotton Canvas Black Docker - Equip', price: 40, stock: 10, pictureUrl: 'https://hatstore.imgix.net/HS2014821_1.jpg?auto=compress%2Cformat&w=816&h=653&q=50'},
    {id: '3', category:'beanies', title: 'New Era', description: 'Las Vegas Raiders Team Essential Knit Black/White Cuff - New Era', price: 40, stock: 8, pictureUrl: 'https://hatstore.imgix.net/192526851263_2.jpg?auto=compress%2Cformat&w=816&h=653&q=50'},
    {id: '4', category:'beanies', title: 'Resteröds', description: 'Smula Mustard Yellow Organic Short Beanie - Resteröds', price: 30, stock: 8, pictureUrl: 'https://hatstore.imgix.net/5701586983460_1.jpg?auto=compress%2Cformat&w=816&h=653&q=50'},
    {id: '5', category:'caps', title: 'Goorin Bros.', description: 'Hatstore Exclusive x Crush Black Trucker - Goorin Bros.', price: 60, stock: 5, pictureUrl: 'https://hatstore.imgix.net/090625467623_1.jpg?auto=compress%2Cformat&w=816&h=653&q=50'},
    {id: '6', category:'caps', title: 'Stetson', description: 'Great Plains Beige/Green/Navy Trucker - Stetson', price: 50, stock: 5, pictureUrl: 'https://hatstore.imgix.net/4043898988315_1.jpg?auto=compress%2Cformat&w=816&h=653&q=50'}
]

export let productsFetch = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export let getProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 2000)
    })
}