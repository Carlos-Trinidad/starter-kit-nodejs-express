const express = require('express');
const router = express.Router();
const controller1_example = require('../controllers/controller1.example');

router.post('/myfunction1', controller1_example.myFunction1);
router.get('/myfunction2/:id', controller1_example.myFunction2);

module.exports = router;