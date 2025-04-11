const updateStock=require('../../../lib/stock/updateStock')
const updateProuctStock=async (req,res )=>{
    const {storeId,prodId}=req.params
    const {quantity,movementtype}=req.body
    const activityinfo={
        storeId,
        prodId,
        quantity,
        movementtype
    }
    try {
        const result=await updateStock(activityinfo)
        res.status(200).json({
            result
        })
    } catch (error) {
        next(error)
    }
}
module.exports=updateProuctStock