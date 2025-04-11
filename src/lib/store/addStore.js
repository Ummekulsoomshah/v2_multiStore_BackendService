const client=require('../../db/databsepg')
const addStore=async(storeInfo)=>{
    const {
        name, address

    }=storeInfo
    try {
        await client.query(
            `insert into store(name,address) values($1,$2)`,
            [name, address]
        );
        const result = await client.query('select * from store')
        return result.rows
    } catch (error) {
        throw new Error(error.message)
    }

}
module.exports=addStore