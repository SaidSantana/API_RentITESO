const express = require('express');
const router = express.Router();

const userRouter = require('./usuarios');

router.use('',express.json());

router.use('/users',userRouter);


module.exports = router;