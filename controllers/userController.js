exports.getUser = async (req, res) => {
    try {
      res.status(200).render("login", {
      });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: err,
      });
    }
  };

  exports.login = async (req, res) => {
    try {
        const pass=req.body.password;
        if(pass==="goksu123"){
           res.status(200).redirect("/dashboard") 
        }
        else{
            res.status(400).redirect("/") 
        }
      
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: err,
      });
    }
  };