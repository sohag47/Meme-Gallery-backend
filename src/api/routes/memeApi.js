const express = require('express');
const router = express.Router();
const multer = require('multer');

//! import controller
const memeController = require('../controller/memeController');

const upload = multer();

//! User CURD Operations
//? read user:
router.get('/', memeController.meme_list);

//? create user

router.post('/create', upload.single('file'), memeController.add_meme);

//? Delete user
router.delete('/:id/delete', memeController.remove_meme);

module.exports = router;