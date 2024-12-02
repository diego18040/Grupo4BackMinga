import { Router } from "express";
import userRouter from "./user.js"
import companyRouter from "./company.js"
import authorRouter from "./author.js"
import categoryRouter from "./category.js"
import authRouter from "./auth.js"


const router = Router();


router.use("/users", userRouter)
router.use("/companies", companyRouter)
router.use("/authors", authorRouter)
router.use("/categories", categoryRouter)
router.use("/auth", authRouter)






export default router