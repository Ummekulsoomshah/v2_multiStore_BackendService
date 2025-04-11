const addProduct=require('../../../lib/product/addProduct')
const addProduct=async(req,res)=>{
    const {name,price}=req.body
    const productInfo={
        name,
        price
    }
    try {
        const result=await addProduct(productInfo)
        res.status(200).json({message:'product added successfully'})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:error.message})
    } 
}
module.exports=addProduct