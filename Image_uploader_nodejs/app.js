const express = require("express");
const multer = require("multer");
const ejs = require("ejs");
const path = require("path");
const { send } = require("process");

//Set Storage Engine
const storage = multer.diskStorage({
    destination: "./public/uploads/",
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

//Init Upload
const upload = multer({
    storage: storage,
    limits: {fileSize: 10000000},
    fileFilter: function (req,file, cb) { //cb = callbackFunction
        checkFileType(file,cb);
    } //1Mb, if it's too large, there is a msg error
}).single('myImage'); //multiple if you want to be able to upload more than one file || .single(<input name>)

//check file type
function checkFileType(file,cb){
    //Allowed extensions
    const filetypes = /jpeg|jpg|png|gif/;
    //check the extension
    const extname = filetypes.test(path.extname(file.originalname).toLocaleLowerCase());
    //check mime type
    const mimetype = filetypes.test(file.mimetype);

    if(extname && mimetype){
        return cb(null, true);
    }else{
        cb('Error: Images File Type Only!');
    }
}

//Init app
const app = express();

//Ejs
app.set('view engine', 'ejs');

//Public Folder
app.use(express.static('./public'));

app.get('/', (req,res)=> res.render('index'));

app.post('/upload', (req, res) =>{
    upload(req, res, (err) =>{
       if(err){
           res.render('index', {
               msg: err
           });
       }else{
          if(req.file == undefined){ //if file is empty, log error
            res.render('index', {
                msg: 'Error: No File Selected!'
            });
          }else{
            res.render('index', {
                msg: 'File Uploaded Successfully!',
                file: `uploads/${req.file.filename}`
            });
          }
       }
    });
});

const port = 3000;

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
});