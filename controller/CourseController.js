const CourseSchema = require('../model/CourseSchema');

const saveCourse = (req, resp) => {
    const courseData = new CourseSchema({
        name:req.body.name,
        startDate:req.body.startDate,
        batch:req.body.batch,
        branch:req.body.branch,
        subjects:req.body.subjects
    });
    courseData.save().then(result=>{
        resp.status(201).json({message:"Successfully saved!"});
    }).catch(error=>{
        resp.status(500).json({message:"Something went wrong!"});
    })
};

module.exports = {saveCourse};