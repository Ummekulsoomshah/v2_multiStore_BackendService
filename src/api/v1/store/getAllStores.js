const getStores=require('../../../lib/store/getStores')
const getAllStores=async(req,res,next)=>{
    try {
        const stores=await getStores()
    } catch (error) {
        next(error)
    }
}
module.exports=getAllStores