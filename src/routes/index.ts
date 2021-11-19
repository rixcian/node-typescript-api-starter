import { Router } from 'express';

import AuthController from './controllers/auth';
import UsersController from './controllers/users';

const router = Router();

// Auth Routes
router.post('/auth/login', AuthController.login);
router.post('/auth/register', AuthController.register);

// Users Routes
router.get('/users', UsersController.getAllUsers);
router.get('/users/:id', UsersController.getUserById);


export default router;
