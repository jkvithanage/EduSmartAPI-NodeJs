const express = require('express');
const subjectController = require('../controller/SubjectController');

const router = express.Router(); //

router.post('/save', subjectController.saveSubject);
module.exports = router;