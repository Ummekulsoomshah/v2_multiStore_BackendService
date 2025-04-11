const getProducts = require("../../../lib/product/getProducts")

const getAllProducts=async(req ,res)=>{
    try {
        const result=await getProducts()
         res.status(200).json({
            status:'success',
            data:{
                products:result
            }
        })
    } catch (error) {
        next(error)
    }
}
module.exports=getAllProducts