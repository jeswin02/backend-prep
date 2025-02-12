const express = require('express');
const { superAdminAction } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/superadmin/action', authMiddleware(['superadmin']), superAdminAction);

module.exports = router;
