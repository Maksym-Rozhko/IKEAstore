const PARAMETER = {
  cat: 'category',
  subcat: 'subcategory',
  search: ['name', 'description', 'category', 'subcategory'],
};

export const getData = {
  // url: https://raw.githubusercontent.com/tereshka/ikea-shop/main/database/dataBase.json
  url: 'database/dataBase.json',

   async getData (url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response}`);
    }

    return await response.json();
  },

  get(process) {
    this.getData(this.url)
      .then(process)
      .catch((err) => console.error(err));
  },

  wishList(list, callback) {
    this.get(data => {
      const result = data.filter(el => list.includes(el.id));
      callback(result);
    });
  },
  item(id, callback) {
    this.get(data => {
      const result = data.find(el => el.id === id);
      callback(result);
    });
  },
  cart(list, callback) {
    this.get(data => {
      const result = data.filter(el => list.some(obj => obj.id === el.id));
      callback(result);
    });
  },
  category(prop, value, callback) {
    this.get(data => {
      const result = data.filter(el => el[PARAMETER[prop]].toLowerCase() === value.toLowerCase());
      callback(result);
    });
  },
  search(value, callback) {
    this.get(data => {
      const result = data.filter(el => {
        for(const prop in el) {
          if (PARAMETER.search.includes(prop) && el[prop].toLowerCase().includes(value.toLowerCase())) {
            return true;
          }
        }
      });
      callback(result);
    });
  },
  catalog(callback) {
    this.get(data => {
      const result = [...new Set(data.map(el => el.category))];
      // getting categories from workshop
      // const result = data.reduce((arr, item) => {
      //   if (!arr.includes(item.category)) {
      //     arr.push(item.category);
      //   }
      //   return arr;
      // }, []);
      callback(result);
    });
  },
  subCatalog(category, callback) {
    this.get(data => {
      const result = [...new Set(data
        .filter(el => el.category.toLowerCase() === category.toLowerCase())
        .map(el => el.subcategory)
      )];
      callback(result);
    });
  },
};