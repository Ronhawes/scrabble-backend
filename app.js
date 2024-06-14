require("dotenv").config()
const express=require('express');
const morgan=require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');


const app=express();
const PORT = process.env.PORT || 1235

app.use(cors());
app.use(bodyParser.json());

const error = require("./API/middlewares/error")
const PLAYERS = require("./API/routes/players")
const COMMENTS = require("./API/routes/comments")



app.use(express.urlencoded({ extended: true}));
app.use(morgan('tiny'));
app.use(express.json({}))

BigInt.prototype.toJSON = function ()  {
    return this.toString()
}


app.get('/',(req, res)=>{
   
    res.send('API working',);
});


app.use("/players", PLAYERS)
app.use("/comments", COMMENTS)



app.use(error)


app.listen(PORT, () => {
    console.log(`App is listening to port ${PORT}`)
})