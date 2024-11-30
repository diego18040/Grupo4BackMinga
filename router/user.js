import { Router } from "express";
import { allUsers } from "../controllers/user/read.js";


const router = Router();

router.get("/all", allUsers)





export default router