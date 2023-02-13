import express from 'express';
import {signIn,signUp} from '../controllers/post.js';

const router = express.Router();

router.post('/', signIn);
router.post('/', signUp);

export default router;