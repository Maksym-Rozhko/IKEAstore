import { getLocalStorage, setLocalStorage } from './storage.js';

const userData = {
    _wishListData: getLocalStorage('wishList'),
    get wishList() {
        return this._wishListData;
    },
    set wishList(id) {
        if (this._wishListData.includes(id)) {
            const index = this._wishListData.indexOf(id);
            this._wishListData.splice(index, 1);
        } else {
            this._wishListData.push(id)
        }
        setLocalStorage('wishList', this.wishList);
    },

    cartListData: getLocalStorage('cartList'),

    get cartList () {
        return this.cartListData;
    }, 

    set cartList (id) {
        let obj = this.cartListData.find(item => item.id === id);
        if (obj) {
            obj.count++;
        } else {
            obj = {
                id,
                count: 1,
            };
            this.cartListData.push(obj);
        }
        setLocalStorage('cartList', this.cartList);
    }, 
};

export default userData;