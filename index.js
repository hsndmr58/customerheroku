const express = require("express");
const pageRoute=require('./routes/pageRoute')
const customerRoute=require('./routes/customerRoute')
const userController=require('./controllers/userController')
const worksRoute=require('./routes/workRoute')
const mongoose=require('mongoose')
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
mongoose.connect('mongodb+srv://hsndmr58:HAsan.58@cluster0.mh8a1.mongodb.net/goksu?retryWrites=true&w=majority',{
  useNewUrlParser:true,
  useUnifiedTopology:true,
}).then(()=>{
  console.log('DB connected.')
}).catch((err)=>{
  console.log(err)
})


app.set("view engine","ejs")

app.use(express.static("public"))

app.use("/dashboard",pageRoute);
app.use("/works",worksRoute);
app.use("/customers",customerRoute);
app.get('/',userController.getUser)
app.post('/',userController.login)

const port = process.env.PORT||5000;

app.listen(port, () => {
  console.log(`Uygulama ${port} portta başladı`);
});
