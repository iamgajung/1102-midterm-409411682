const db = require('../utils/database');

const Shop_xx = class Shop_xx {

    constructor(id, name, cat_id, price, remote_url, local_url) {
        this.id = id;
        this.name = name;
        this.cat_id = cat_id;
        this.price = price;
        this.remote_url = remote_url;
        this.local_url = local_url;
    }

    // get all products

    static async fetchAll() {
        try {
            let results = await db.query(`SELECT * from shop_xx`);
            // console.log('fetchAll results', JSON.stringify(results.rows));
            return results.rows;
        } catch (err){
            console.log('error', err);
        }
    }

    static async fetchProductsByCategory(id) {
       const query = {
           text: `SELECT * from shop_xx where cat_id = $1`,
           values: [id]
       }
       try {
           let results = await db.query(query);
           return results.rows;
       }catch(err){
           console.log(err);
       }
    }
}

//testing
// const test = async () => {
//     let results = await Shop_xx.fetchProductsByCategory(1);
//     console.log('test results', JSON.stringify(results));
// }

// test();

module.exports = Shop_xx;