const express = require('express'); 
const router = express.Router(); 

const dataController = require('../../controllers/data_controller.js');

router.get('/metrices', dataController.metrices);
router.get('/predictions', dataController.predictions);

module.exports = router;