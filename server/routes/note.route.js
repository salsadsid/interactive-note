const express = require('express');
const noteController= require('../controllers/note.controller');
const uploader = require('../middlewares/uploader');


const router =express.Router()

router.route("/add").post(uploader.single("image"), noteController.addNote);


module.exports=router;
