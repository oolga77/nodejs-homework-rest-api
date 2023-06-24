const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody } = require("../../middlewares");
const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrl.getAllContacts);

router.get("/:contactId", ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.add);

router.delete("/:contactId", ctrl.deleteById);

router.put("/:contactId", validateBody(schemas.addSchema), ctrl.updateById);

module.exports = router;



// const express = require('express')
// const {listContacts,
//   getContactById,
//   } = require('../../models/contacts')

// const router = express.Router()

// router.get('/', async (req, res, next) => {
//   try{
//     const result = await listContacts();
//   res.json(result)
// }
//   catch(error){
//     res.status(500).json({
//       message: "Server error"
//     })
//   }
  
// })

// router.get('/:contactId', async (req, res, next) => {
//   // try{
//   //   const {contactID} = req.params;
//   //   const result = await getContactById(contactID);
//   //   if (!result) {
//   //     const error = new Error("Not Found");
//   //     error.status = 404;
//   //     throw error
//   //      return  res.status(404).json({ message: "Not found" });
//   //     }
//   //   res.json(result);
//   // }
//   // catch(error){
//   //   res.status(500).json({
//   //     message: "Server error"
//   //   })
//   // }


//   const { contactId } = req.params;
//   const contact = await getContactById(contactId);
//   if (contact) {
//     res.status(200).json(contact);
//   } else {
//     res.status(404).json({ message: "Not found" });
//   }
  
// })

// router.post('/', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.delete('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.put('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// module.exports = router
