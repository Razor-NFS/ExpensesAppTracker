import express from 'express';
import authRoutes from './authRoutes.js';
//import accountRoute from './accountRoute.js';
//import transactionRoute from './transactionRoute.js';
//import userRoute from './userRoute.js';



const router = express.Router();

router.use("/auth", authRoutes);
//router.use("/user", userRoute);
//router.use("/account", accountRoutes);
//router.use("/transaction", transactionRoute);




export default router;