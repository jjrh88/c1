const user = require('../models/user'),
//<<<<<<< HEAD
roles = require('../models/roles')
//=======
student = require('../models/student')
//>>>>>>> 31850c54168c42087c2fe8b73d77b82118116d3d
inventory = require('../models/inventory')

// exports.createStudent = function(){
//    var newStudent = new student({
//       id: "816518152",
//       school_id: "894653132A",
//       name: "Jose Perez",
//       age: 12,
//       address: "calle 2 # 4-6",
//       tutor:[
//           {
//               priority: 1,
//               name: "Maria LOpEZ",
//               age: 41,
//               relationship: "MOther",
//               phone: 68598518,
//               address: "calle 2 # 4-6",
//           },
//           {
//               priority: 2,
//               name: "JOSE Perez",
//               age: 39,
//               relationship: "father",
//               phone: 98463198,
//               address: "calle 2 # 4-6",
//               status: true
//           }
//       ],
//       grade: 6,
//       classroom: "6B",
//       teacher: "Carolina arenas",
//       //start_date: "2002-11-5",
//       lunch_service: true
//       //created: "2002-11-2"
//    })
//    newStudent.save()
// }




/*exports.createUser = function(){
   var newUser = new user({
    name: "JHONSITO",
    phone: "555555",
    password: "123",
    document: 1111760853,
    //status: true,
    addres:{ 
       street: "calle 26",
       kra: "10 # 345",
       number_house: "370"
    }
   })

   newUser.save()

   var newUser = new user({
    name: "JORGE ALBERTO",
    phone: "9999",
    password: "456",
    document: 1111760854,
    status: true,
    addres:{ 
       street: "calle 30",
       kra: "20 # 367",
       number_house: "379"
    }
   })

   newUser.save()
}*/

// exports.createRole = function(){
//    var newRole = new roles({
//       role_id: 001,
//       role_name: "Administrador",
//       role_active_status: true,
//       role_modules:[ 
//         {
//             modules: "Inventory"
//         }
//       ],
      
//    })
// }

// exports.createInventory = function () {

//    let newInventory = new inventory({
//       category: {
//          mainCategory: 'ferreteria',
//          subCategory: 'pintura'
//       },
//       product: {
//          name: 'caneca pintura',
//          partNumber: 'n/a',
//          presentation: 'caneca',
//          quantity: 0.5,
//          unit: 'galones',
//          expiration: {
//             expires: true,
//             expDate: '2025-12-15'
//          }
//       },
//       location: {
//          warehouse: 'consumibles',
//          aisle: 4,
//          shelf: 5,
//          rack: 1,
//       },
//       minQuantity: 0,
//       availableQuantity: 5,
//       created: Date.now(),
//    })
//    newInventory.save()
// }