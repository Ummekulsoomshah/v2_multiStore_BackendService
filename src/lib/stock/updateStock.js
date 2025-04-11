const client = require('../../db/databsepg')
const updateStock = async (activityinfo) => {
    const { storeId, prodId, quantity, movementtype } = activityinfo
    try {
        const storeResult = await client.query('SELECT * FROM store WHERE id = $1', [storeId]);
        if (storeResult.rows.length === 0) {
            throw new Error('Store not found');
        }

        const productResult = await client.query('SELECT * FROM product WHERE id = $1', [prodId]);
        if (productResult.rows.length === 0) {
            throw new Error('Product not found');
        }

        const stockResult = await client.query('SELECT * FROM storeStock WHERE store_id = $1 AND product_id = $2', [storeId, prodId]);
        if (stockResult.rows.length === 0) {
            throw new Error('Stock record not found');
        }

        let newQuantity;
        if (movementtype === 'add') {
            newQuantity = quantity;
        } else {
            newQuantity = stockResult.rows[0].quantity - quantity;
            if (newQuantity < 0) {
                throw new Error('Insufficient stock');
            }
        } 

        await client.query('UPDATE storeStock SET quantity = $1 WHERE store_id = $2 AND product_id = $3', [newQuantity, storeId, prodId]);

        return { message: 'Stock updated successfully', newQuantity };

    } catch (error) {
        console.error('Error updating stock:', error);
        throw error; 

    }
}
module.exports=updateStock