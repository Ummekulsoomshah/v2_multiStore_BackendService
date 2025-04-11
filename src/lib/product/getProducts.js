const client=require('../../db/databsepg')
const getProducts=async()=>{
    try {
        await client.query('select * from product')
    } catch (error) {
        throw new Error(error.message)
    }
}
module.exports=getProducts