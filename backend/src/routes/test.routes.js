const { Router } = require('express'); 

const router = Router(); 

//Controller
const { pruebaGet } = require('../controllers/test.controller.js')


//GET

router.get('/', pruebaGet)




//export 

module.exports = router; 