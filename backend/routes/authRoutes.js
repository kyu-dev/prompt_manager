import express from 'express';
import {
  loginUser,
  logoutUser,
  profile,
  register,
  checkSession,
} from '../controller/authController.js';
import passport from 'passport';

const router = express.Router();

router.post('/login', passport.authenticate('local'), loginUser);

router.get('/logout', logoutUser);

router.get('/profile', profile);

router.post('/register', register);

router.get('/checkSession', checkSession);

export default router;
