const Works=require('../models/Works')
const Customers=require('../models/Customers')

exports.createWork=async(req,res)=>{
    try{
        const works=await Works.create(req.body)
        res.status(201).redirect('/dashboard/works')
    }
    catch(err){
        res.status(400).json({
            status:'fail',
            message:err
        })
    }
 
}
exports.Work = async (req, res) => {
    try {
    
      res.status(200).render("workadd", {
      });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: err,
      });
    }
  };
  exports.deleteWork=async(req,res)=>{
    const customers=await Customers.find();
    await Works.deleteOne({_id:req.body.delete})
    for(let i=0;i<customers.length;i++){
      await customers[i].works.pop(req.body.delete)
      await customers[i].save();
    }
    try{
       
        res.status(201).redirect('/dashboard/works')
    }
    catch(err){
        res.status(400).json({
            status:'fail',
            message:err
        })
    }
 
}
exports.put= async  (req, res) => {
    
  const work = await Works.findOne({_id:req.params._id});
  try {                 
    res.status(200).render("putwork", {
      work
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
exports.putEndpoint=async(req,res)=>{
  
  try{
    await Works.findByIdAndUpdate(req.body.id, { name: req.body.name })
    res.status(201).redirect('/dashboard/works')
}
catch(err){
    res.status(400).json({
        status:'fail',
        message:err
    })
}
}