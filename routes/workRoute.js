const express=require('express')

const worksController =require('../controllers/worksController')
const router = express.Router();

router.route('/add').post(worksController.createWork)
router.route('/add').get(worksController.Work)
router.route('/delete').post(worksController.deleteWork)
router.route('/put/:_id').get(worksController.put)
router.route('/put').post(worksController.putEndpoint)

module.exports=router;