const express = require('express');
const router = express.Router();
const { getCategories, createCategory } = require('../controllers/categoryController');
const validateCategory = require('../middleware/categoryValidation');


router.get('/', getCategories);
router.post('/', validateCategory, createCategory); // validation added

module.exports = router;