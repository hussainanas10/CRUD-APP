const express = require('express')
let router = express.Router();
var Students = require('../models/data');
//
//main page students
router.get('/', (req, res) => {
    res.render('students/student');
});

//add page open
router.get('/add', (req, res) => {
    res.render('students/add')

});
//submit button with update
router.post('/', (req, res) => {
    if (req.body._id == "") {
        let student = new Students({
            Firstname: req.body.Firstname,
            email: req.body.email,
            Father: req.body.Father,
            Phone: req.body.Phone
        });
        console.log(req.body);

        student.save((err, data) => {
            if (err) throw err;
            // console.log(data);
            res.redirect('students/display');
        })
    }
    // console.log('new entry')
    else {

        Students.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true, useFindAndModify: false }, (err, docs) => {
            if (!err) res.redirect('students/display');
        });
    }

});


router.get('/display', (req, res) => {
    Students.find((err, docs) => {
        if (!err) {
            res.render('students/display', {
                list: docs
            });
        }
    })
});


router.get('/delete', (req, res) => {
    Students.find((err, docs) => {
        if (!err) {
            res.render('students/delete', {
                list: docs
            });

        }
    })
})
router.get('/delete/:id', (req, res) => {
    Students.findByIdAndRemove({_id:req.params.id},{new: true, useFindAndModify: false},(err,docs)=>{
        if(err) throw err;
        res.send("data deleted check the display page!!") 
        // res.redirect('/delete',{list:docs});
    })

});



router.get('/update', (req, res) => {
    Students.find((err, docs) => {
        if (!err) {
            res.render('students/update', {
                list: docs
            });

        }
    })
});

// //When Update button is pressed in the home page
router.get('/:id', (req, res) => {
    // console.log("Hello chalga");

    Students.findById(req.params.id, (err, docs) => {
        if (err) throw err;
        // console.log("DOC", docs);
        res.render('students/add', { list: docs });
    });
    // res.json('Update Button is pressed');
});



module.exports = router;