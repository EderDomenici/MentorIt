const express = require('express');
const cors = require('cors')

//Routes
const mentorRoute = require('./routes/mentorRoute')
const mentoradoRoute = require('./routes/mentoradoRoute')




const app = express();


app.use(cors())

app.use(express.json());

app.use('/mentor', mentorRoute)
app.use('/mentorado', mentorRoute)










app.listen(3000,()=> console.log('Server is runing 🚀'))