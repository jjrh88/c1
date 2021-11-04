const mongoose = require('mongoose')
const collection = 'mvc_inventory'

var InventorySchema = new mongoose.Schema({
    //productId
    category: {
        mainCategory: { type: String, required: true },
        subCategory: { type: String, required: true }
    },
    product: {
        name: { type: String, required: true },
        partNumber: { type: String, required: true },
        presentation: { type: String, required: true },
        quantity: { type: Number, required: true },
        unit: { type: String, required: true },
        expiration: {
            expires: { type: Boolean, default: false },
            expDate: { type: Date } //, required: (this.product.expiration.expires === true)? true : false 
        }
    },
    location: {
        warehouse: { type: String, required: true },
        aisle: { type: Number, required: true },
        shelf: { type: Number, required: true },
        rack: { type: Number, required: true },
    },
    minQuantity: { type: Number, required: true },
    availableQuantity: { type: Number, required: true },
    created: { type: Date, required: true },
    updated: { type: Date, default: Date.now() }
})

// InventorySchema.pre('save', function (next) {
//     console.log('doing something')
//     const inventory = this
//     console.log(inventory.name)
//     //db[collection].find({name: inventory.name}).limit(1).size()

// })

module.exports = mongoose.model(collection, InventorySchema)