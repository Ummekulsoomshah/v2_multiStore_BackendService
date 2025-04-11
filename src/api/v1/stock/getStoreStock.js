const getStocks=require('../../../lib/stock/getStocks')
const getStoreStock=async(req ,res)=>{
    try {
        const result=await getStocks()
        res.status(200).json({
            result
        })
    } catch (error) {
        next(error)
    }
}
module.exports=getStoreStock