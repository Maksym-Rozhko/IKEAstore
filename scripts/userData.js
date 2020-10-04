import { getLocalStorage, setLocalStorage } from './storage.js';

const userData = {
  wishListData: getLocalStorage('wishlist'),
  get wishList() {
    return this.wishListData;
  },
  set wishList(id) {
    if (this.wishListData.includes(id)) {
      // this.wishListData = this.wishListData.filter(el => el !== id);
      const index = this.wishListData.indexOf(id);
      this.wishListData.splice(index, 1);
    } else {
      this.wishListData.push(id);
    }
    setLocalStorage('wishlist', this.wishListData);
  },

  cartListData: getLocalStorage('cartlist'), // {id: string, count: number}
  get cartList() {
    return this.cartListData;
  },
  set cartList(id) {
    let object = this.cartListData.find(el => el.id === id);
    if (object) {
      object.count++;
    } else {
      object = {
        id,
        count: 1,
      };
      this.cartListData.push(object);
    }
    setLocalStorage('cartlist', this.cartListData);
  },

  set changeCountCartList(itemCart) {
    let obj = this.cartListData.find(item => item.id === itemCart.id);
    obj.count = itemCart.count;

    setLocalStorage('cartlist', this.cartList);
  },

  set deleteItemCart(idd) {
    let index = -1;
    this.cartList.forEach((item, i) => {
      if (item.idd === idd) {
        index = i;
      }
    });
    this.cartList.splice(index, 1);
    setLocalStorage('cartlist', this.cartList);
  }
};

export default userData;