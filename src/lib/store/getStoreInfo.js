const client=require('../../db/databsepg')
const getStoreInfo=async(storeId)=>{
    try {
        const result=await client.query('select * from store where id=$1',[storeId])
        return result.rows
    } catch (error) {
        throw new Error(error.message)
    }
}
module.exports=getStoreInfo