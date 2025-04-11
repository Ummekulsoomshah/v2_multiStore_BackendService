const getStoreInfo=require('../../../lib/store/getStore')
const getStore=async(req,res,next)=>{
    const {storeId}=req.params
    try {
        const store=await getStoreInfo(storeId)
        res.status(200).json({
            store
        })
    } catch (error) {
        next(error)
    }
}
module.exports=getStore