const express=require('express')

const customersController =require('../controllers/customersController')
const router = express.Router();

router.route('/add').get(customersController.add)
router.route('/put/:slug').get(customersController.put)
router.route('/put').post(customersController.putEndpoint)
router.route('/add').post(customersController.createCustomer)
router.route('/delete').post(customersController.deleteCustomer)

module.exports=router;