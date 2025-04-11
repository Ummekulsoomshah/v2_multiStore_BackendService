const router=require('express').Router()
const getStoreStock=require('../api/v1/stock/getStoreStock')
const updateProuctStock=require('../api/v1/stock/updateProuctStock')
const getStockMovements=require('../api/v1/stock/getStockMovements')
router.get('/stock/store/:storeId',getStoreStock)
router.put('/stock/:storeId/:prodId',updateProuctStock)
router.post('/stockMovement',getStockMovements)








module.exports=router