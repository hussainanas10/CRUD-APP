require('./models/db')
const express = require('express');
const path = require('path');
var exphbs = require('express-handlebars');
const controller = require('./controller/control');

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '/views/'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/students', controller);
// app.get('/display',(req,res)=>{
//     Students.find((err, docs) => {
//             if (err) throw err;
//                  console.log("here are we");
            //  res.render("students/display")
//                 // console.log("hELLOW");
                // });
// })
// app.get('/', function (req, res) {
//     res.render('add');
// });


//const app=express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is running ${PORT} srever`);
})