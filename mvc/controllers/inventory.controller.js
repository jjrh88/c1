const ctrlInventory = {},
    Inventory = require('../models/inventory'),
    message = require('../config/message')

ctrlInventory.create = async (req, res) => {
    const newInventory = new Inventory(
        {
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
                rack: req.body.location.rack,
            },
            minQuantity: req.body.minQuantity,
            availableQuantity: req.body.availableQuantity
        }
    );
    await newInventory.save();
    res.json({ msg: message.inventory.postSuccess, status: true });
};

ctrlInventory.delete = async (req,res) => {
    console.log(req.params._id);
    const {_id} = req.params ;
    const inventory = await Inventory.deleteOne({_id:_id});
    res.json({msg: message.inventory.deleteSuccess,status : true});
  }

module.exports = ctrlInventory



/*add in postman:

{
    "category": {
        "mainCategory": "main categoty",
        "subCategory": "subcategory"
    },
    "product": {
        "name": "product name",
        "partNumber": "porduct serial number",
        "presentation": "presentation",
        "quantity": 1,
        "unit": 2,
        "expiration": {
            "expires": false,
            "expDate": ""
        }
    },
    "location": {
        "warehouse": "wareh",
        "aisle": 3,
        "shelf": 4,
        "rack": 5
    },
    "minQuantity": 50,
    "availableQuantity": 80
    
}

*/