const express = require('express'); 
const app = express(); 

//Middleware
const cors = require('cors')
const morgan = require('morgan'); 


app.use(cors()); 
app.use(morgan('dev'));
app.use(express.json()); 

//Port 
const PORT = 4000; 

//Routes
const testRoute = require('./routes/test.routes.js');

app.use(testRoute);

//Running Server

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));


//Para correr el servidor ponga el comando en la consola : npm run dev