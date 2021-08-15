import express from 'express';

const router = express.Router();

import { singup, singin, singout } from "../controller/auth";

import { userSignupValidator } from "../validator";



router.post('/signup', userSignupValidator, singup);// singup that:))

router.post('/signin', singin)

router.post('/signout', singout)

module.exports = router;
