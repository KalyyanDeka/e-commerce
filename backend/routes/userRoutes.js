const express = require('express');
const { authUser, getUserProfile } = require('../controllers/userControllers');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/login', authUser);

router.route('/profile').get(protect, getUserProfile);

module.exports = router;
