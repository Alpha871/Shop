import { getStorageItem, setStorageItem } from './utils.js';
let store = getStorageItem('store');
const setupStore = (products) => {
    store = products.map(product => {
        const {id, fields} = product
        const {featured, name, price, company, colors, image:img}= fields
        const image = img[0].thumbnails.large.url;
        return {id, featured, name, price, company, colors,image }
    })
    setStorageItem('store', store)
};
const findProduct = (id) => {
    let product = store.find(item => item.id=== id )
    return product
};
export { store, setupStore, findProduct };
