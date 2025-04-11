const router=require('express').Router()
const registerStore=require('../api/v1/store/registerStore')
const getAllStores=require('../api/v1/store/getAllStores')
// const getStore=require('../api/v1/store/getStore')


router.post('/addStore',registerStore)
router.get('/allStores',getAllStores)
// router.get('/stores/:storeId',getStore)


module.exports=router