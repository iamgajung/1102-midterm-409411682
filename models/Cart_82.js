const db = require('../utils/database');

const Cart_82 = class Cart_82 {

    constructor(cid, shop_id, user_id, amount) {
        this.cid = cid;
        this.shop_id = shop_id;
        this.user_id = user_id;
        this.amount = amount;
    }

    // get all categories

    static async fetchCartInfo() {
        try {
            let results = await db.query(`SELECT cid, shop_id, name, price, local_url, user_id, amount from cart_82 as C, shop_82 as S where C.shop_id = S.id`);
            // console.log('fetchAll results', JSON.stringify(results.rows));
            return results.rows;
        } catch (err){
            console.log('error', err);
        }
    }

}

// testing
const test = async () => {
    let results = await Cart_82.fetchCartInfo();
    console.log('test results', JSON.stringify(results));
}

// test();

module.exports = Cart_82;