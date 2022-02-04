const Customers = require("../models/Customers");
const Works = require("../models/Works");

exports.getIndexPage = async (req, res) => {
  try {
    const customers = await Customers.find().sort('-createdAt');
    let total=0
    for(let a=0;a<customers.length;a++){
      if(customers[a].debt){
      total+=customers[a].price
      }
    }
    res.status(200).render("index", {
      customers,
      total
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
exports.getContactPage = async (req, res) => {
  try {
    res.status(200).render("contact", {
  
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
exports.getWorksPage = async (req, res) => {
  const works = await Works.find()
  try {
    res.status(200).render("works", {
      works
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getCustomer = async (req, res) => {
    
      const customer = await Customers.findOne({slug:req.params.slug});
      const works=await Works.find();
      let cworks=[]
      for(let i=0;i<customer.works.length;i++){
        let q=await Works.findOne({_id:customer.works[i]});
        if(q){
          cworks.push(q.name)
        }
        
      
      }
      try {
      res.status(200).render("customer", {
        customer,
        cworks
      });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: err,
      });
    }
  };
  exports.getWork = async (req, res) => {
    try {
      const work = await Works.findOne({_id:req.params.id});
      res.status(200).render("work", {
        work,
      });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: err,
      });
    }
  };
  exports.customerwork =async(req,res)=>{

    let ids=req.params.id.split("-")
    let workid=ids[0]
    let customerid=ids[1]
    let customer=await Customers.findById(customerid)
    await customer.works.push(workid)
    await customer.save();
    try{
      
      res.status(201).redirect(`/customers/put/${customer.slug}`)
  }
  catch(err){
      res.status(400).redirect(`/customers/put/${customer.slug}`)
  }
  }
  exports.customerworkc =async(req,res)=>{

    let ids=req.params.id.split("-")
    let workid=ids[0]
    let customerid=ids[1]
    let customer=await Customers.findById(customerid)
    await customer.works.pop(workid)
    await customer.save();
    try{
      
      res.status(201).redirect(`/customers/put/${customer.slug}`)
  }
  catch(err){
      res.status(400).redirect(`/customers/put/${customer.slug}`)
  }
  }