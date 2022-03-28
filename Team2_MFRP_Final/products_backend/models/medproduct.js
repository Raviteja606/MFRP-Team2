const mongoose = require('mongoose')

const medproductSchema = new mongoose.Schema({
    
    ProductId:{type:String},
    ProductName:{type:String},
    Img:{type:String},
    Brand:{type:String},
    Drug:{type:String},
    Price:{type:Number},
    ManufacturingDate:{type:String},
    ExpiryDate:{type:String},
    qnt:{type:Number},
    description:{type:String},
    category:{type:String},
})

module.exports = mongoose.model('Medproduct',medproductSchema)