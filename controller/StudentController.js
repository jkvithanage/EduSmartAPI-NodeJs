const StudentSchema = require('../model/StudentSchema');

const saveStudent = (req, resp) => {
    const studentSchema = new StudentSchema({
        name:req.body.name,
        dob:req.body.dob,
        course:req.body.course,
        contact:req.body.contact,
        address:req.body.address
    });
    studentSchema.save().then(result=>{
        resp.status(201).json({message:"Successfully saved!"});
    }).catch(error=>{
        resp.status(500).json({message:"Something went wrong!"});
    })
};

module.exports = {saveStudent};