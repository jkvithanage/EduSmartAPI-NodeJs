const express = require('express');
const studentController = require('../controller/StudentController');

const router = express.Router(); //

router.post('/register', studentController.saveStudent);
module.exports = router;