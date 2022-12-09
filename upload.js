const express = require('express');
const multer = require('multer');
const path = require('path');


const app = express();
//var multer = multer();

//app.use(multer.array());

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './assets/upload')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        var ext = path.extname(file.originalname);
        if (ext !== '.png' && ext !== '.jpg') {
            return cb(new Error('Only images are allowed'))
        }
        cb(null, true)
    },
    limits: {
        fileSize: 1024 * 1024
    }

}).single('MyFile');

app.post('/', (req, res) => {
    upload(req, res, (error) => {
        if (error) {
            res.end("File upload failed")
        }
        else {
            res.end("File upload success")
        }
    });


});

app.listen(4040, () => {
    console.log('Server is running at port 4040');
})