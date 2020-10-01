import { getData } from './getData.js';

const wishList = ['idd007', 'idd010', 'idd011', 'idd077', 'idd023'];

const cartList = [
    {
        id: 'idd017',
        count: 3
    },
    {
        id: 'idd087',
        count: 1
    },
    {
        id: 'idd097',   
        count: 2
    }
];




export const loadData = () => {

    if (location.search) {
        const search = decodeURI(location.search);
        const prop = search.split('=')[0].substring(1);
        const value = search.split('=')[1];

        if (prop === 's') {
            getData.search(value, (data) => console.log(data));
        } else if (prop === 'wishlist') {
            getData.wishList(wishList, (data) => console.dir({wishlist: data}));
        } else if (prop === 'cat' || prop === 'subcat') {
            getData.category(prop, value, (data) => console.log(data));
        }
    }

    if (location.hash) {
        getData.item(location.hash.substring(1), (data) => console.log(data));
    }

    if (location.pathname.includes('cart')) {
        getData.cart(cartList, (data) => console.log(data));
    }

    getData.catalog((data) => console.log(data));
    getData.subCatalog("Декор", (data) => console.log(data));
};