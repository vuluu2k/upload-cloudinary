
   
const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./router');
const port=process.env.PORT||8000;

app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({
    limit:'50mb',
    extended:true
}))
app.use(cors())


router(app);


app.listen(port, ()=>console.log(`server run in http://localhost:${port}`))