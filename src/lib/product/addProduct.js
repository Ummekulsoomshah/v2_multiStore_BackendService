const client=require('../../db/databsepg')
const addProduct = async(prodInfo)=>{
    const {name,price}=prodInfo
    try {
        await client.query(
            `insert into product(name,price) values($1,$2)`,
            [name,price]
        );
        const result = await client.query('select * from product')
        return result.rows
    } catch (error) {
        throw new Error(error.message)
    }
}
module.exports=addProduct