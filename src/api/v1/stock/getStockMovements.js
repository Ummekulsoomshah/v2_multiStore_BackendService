const StockMovement=require('../../../lib/stock/StockMovement')
const getStockMovements=async(req,res)=>{
    try{
        const stockMovements=await StockMovement()
        res.status(200).json(stockMovements)
    }catch(err){
        console.log(err)
        res.status(500).json({error:'Error getting stock movements'})
    }
}
module.exports=getStockMovements