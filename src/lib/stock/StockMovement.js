const client=require('../../db/databsepg')
const StockMovement=async()=>{
    try {
        const result=await client.query('SELECT * FROM storeStock')
        return result.rows
    } catch (error) {
        throw new Error('Error fetching stock movements')
    }
}
module.exports=StockMovement