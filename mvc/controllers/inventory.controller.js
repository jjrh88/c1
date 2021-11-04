const ctrlInventory = {},
    Inventory = require('../models/inventory'),
    message = require('../config/message')

ctrlInventory.create = async (req, res) => {
    const newInventory = new Inventory({
        category: {
            mainCategory: req.body.category.mainCategory,
            subCategory: req.body.category.subCategory
        },
        product: {
            name: req.body.product.name,
            partNumber: req.body.product.partNumber,
            presentation: req.body.product.presentation,
            quantity: req.body.product.quantity,
            unit: req.body.product.unit,
            expiration: {
                expires: req.body.product.expiration.expires,
                expDate: req.body.product.expiration.expDate
            }
        },
        location: {
            warehouse: req.body.location.warehouse,
            aisle: req.body.location.aisle,
            shelf: req.body.location.shelf,
            rack: req.bodylocation.rack,
        },
        minQuantity: req.body.minQuantity,
        availableQuantity: req.body.availableQuantity
    });
    await newInventory.save();
    res.json({ msg: message.success, status: true });
};