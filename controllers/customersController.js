const Customers =require('../models/Customers')
const Works = require('../models/Works')


exports.createCustomer=async(req,res)=>{
    try{
        const customers=await Customers.create(req.body)
        res.status(201).redirect('/dashboard')
    }
    catch(err){
        res.status(400).json({
            status:'fail',
            message:err
        })
    }
 
}
exports.add = async (req, res) => {
  
    try {                 
      res.status(200).render("add", {
      });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: err,
      });
    }
  };
  exports.put= async  (req, res) => {
    const works=await Works.find();
    const customer = await Customers.findOne({slug:req.params.slug});
    let customerwork=[]
    for(let i=0;i<works.length;i++){
     

      if(customer.works.indexOf(works[i]._id)!=-1){
        let q=await Works.findOne({_id:works[i]._id.toString()});
        customerwork.push({id:works[i]._id.toString(),cont:true,name:q.name})
      }
      else{
        let q=await Works.findOne({_id:works[i]._id.toString()});
        customerwork.push({id:works[i]._id.toString(),cont:false,name:q.name})
      } 
    }
    try {                 
      res.status(200).render("put", {
        customer,
        works,
        customerwork
      });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: err,
      });
    }
  };

  exports.deleteCustomer=async(req,res)=>{
    await Customers.deleteOne({_id:req.body.delete})
    
    try{
       
        res.status(201).redirect('/dashboard')
    }
    catch(err){
        res.status(400).json({
            status:'fail',
            message:err
        })
    }
 
}

exports.putEndpoint=async(req,res)=>{
  await Customers.findByIdAndUpdate(req.body._id, { name: req.body.name,price:req.body.price })
  try{
       
    res.status(201).redirect('/dashboard')
}
catch(err){
    res.status(400).json({
        status:'fail',
        message:err
    })
}
}