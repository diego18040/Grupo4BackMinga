import { Router } from "express";
import userRouter from "./user.js"
import companyRouter from "./company.js"
import authorRouter from "./author.js"


const router = Router();


router.use("/users", userRouter)
router.use("/companies", companyRouter)
router.use("/authors", authorRouter)






export default router