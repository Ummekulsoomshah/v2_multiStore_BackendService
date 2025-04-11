const registerStore = async (req, res, next) => {
    const { name, address } = req.body
    const storeInfo = {
        name, address
    }
    try {
        const response = await addStore(storeInfo)
        res.status(200).json({
            message: "registered store successfully"
        })
    } catch (error) {
        next(error)
    }
}
module.exports=registerStore