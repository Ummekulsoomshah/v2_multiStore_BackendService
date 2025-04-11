const client=require('../../db/databsepg')
const getStocks=async()=>{
    try {
       const result= await client.query(`select * from storeStock`)
       return result.rows
    } catch (error) {
        throw new Error(error.message)
    }
}
module.exports=getStocks