const SubjectSchema = require('../model/SubjectSchema');

const saveSubject = (req, resp) => {
    const subjectData = new SubjectSchema({
        title: req.body.title,
        name: req.body.name,
        credits:req.body.credits,
        hours: req.body.hours,
        lecturer: req.body.lecturer
    });
    subjectData.save().then(result=>{
        resp.status(201).json({message:"Successfully saved!"});
    }).catch(error=>{
        resp.status(500).json({message:"Something went wrong!"});
    })
};

module.exports = {saveSubject};