const express = require('express');
const courseController = require('../controller/CourseController');

const router = express.Router(); //

router.post('/save', courseController.saveCourse);
module.exports = router;