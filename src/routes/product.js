const router=require('express').Router()
const addProduct=require('../api/v1/product/addProduct')
const getAllProducts=require('../api/v1/product/getAllProducts')


router.post('/createProduct',addProduct)
router.get('/allProducts',getAllProducts)

module.exports=router