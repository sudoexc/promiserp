"use strict";

console.log('подготовка данных...');

const say = new Promise((resolve, reject) => {
    setTimeout(() => {
    
        console.log('добавление данных..');
    
        const product = {
            fruits: 'apple',
            vegetabels: 'potato'
        }
        
        resolve(product)
    }, 1000)

})

say.then((data) => {
    setTimeout(() => {
        product.test = 'all';
        console.log(data);
    }, 2000)
})

f

