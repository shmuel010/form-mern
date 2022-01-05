const express = require('express');
const router = express.Router();

const Users = require('../models/User');

// @route     POST api/auth
// @desc      Get logged in user
// @access    Public
router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        const {tempData, arrObj} = req.body
        const {userName, date, comment} = tempData
        const user = new Users({
            userName,
            date,
            comment,
            objData: arrObj,
        })
        await user.save()
    }catch (e) {
        console.error(e.message)
    }
});


module.exports = router;
