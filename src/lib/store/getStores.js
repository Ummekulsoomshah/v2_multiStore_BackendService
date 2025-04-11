const client=require('../../db/databsepg')
const getStores=async()=>{
    try {
        const result=client.query('select * from store')
        return result.rows
    } catch (error) {
        throw new Error(error.message)
    }
}
module.exports=getStores