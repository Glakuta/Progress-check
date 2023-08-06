import express, { Router } from "express";
import { getAllUsers } from "../controllers/userControllers";

const router = express.Router();

router.get("/getUsers", getAllUsers);

export default router;
