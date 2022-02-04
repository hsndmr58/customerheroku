const express=require('express')

const pageController =require('../controllers/pageController')
const router = express.Router();

router.route('/').get(pageController.getIndexPage)
router.route('/customer/:slug').get(pageController.getCustomer)
router.route('/contact').get(pageController.getContactPage)
router.route('/works').get(pageController.getWorksPage)
router.route('/works/:id').get(pageController.getWork)
router.route('/customer/works/:id').get(pageController.customerwork)
router.route('/customer/works/cikart/:id').get(pageController.customerworkc)

module.exports=router;