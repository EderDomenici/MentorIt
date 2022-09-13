const express = require('express');
const cors = require('cors')

//Routes
const mentorRoute = require('./routes/mentorRoute')




const app = express();


app.use(cors())

app.use(express.json());

app.use('/mentor', mentorRoute)










app.listen(3000,()=> console.log('Server is runing 🚀'))