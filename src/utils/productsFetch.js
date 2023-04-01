let products = [
    {id: '1', title: 'Goorin Bros.', description: 'Ewe R Hot Black Cuff - Goorin Bros.', price: 60, pictureUrl: 'https://hatstore.imgix.net/090625461430_1.jpg?auto=compress%2Cformat&w=816&h=653&q=50'},
    {id: '2', title: 'Equip', description: 'Skully Cotton Canvas Black Docker - Equip', price: 40, pictureUrl: 'https://hatstore.imgix.net/HS2014821_1.jpg?auto=compress%2Cformat&w=816&h=653&q=50'},
    {id: '3', title: 'New Era', description: 'Las Vegas Raiders Team Essential Knit Black/White Cuff - New Era', price: 40, pictureUrl: 'https://hatstore.imgix.net/192526851263_2.jpg?auto=compress%2Cformat&w=816&h=653&q=50'},
    {id: '4', title: 'Resteröds', description: 'Smula Mustard Yellow Organic Short Beanie - Resteröds', price: 30, pictureUrl: 'https://hatstore.imgix.net/5701586983460_1.jpg?auto=compress%2Cformat&w=816&h=653&q=50'}
]

export let productsFetch = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}
