import { Router } from "express";
import userRouter from "./user.js"
import companyRouter from "./company.js"
import authorRouter from "./author.js"
import categoryRouter from "./category.js"
import commentRouter from "./comment.js"
import chapterRouter from "./chapter.js"
import mangaRouter from "./manga.js"
import reactionRouter from "./reactions.js"
import authRouter from "./auth.js"


const router = Router();


router.use("/users", userRouter)
router.use("/companies", companyRouter)
router.use("/authors", authorRouter)
router.use("/categories", categoryRouter)
router.use("/auth", authRouter)
router.use("/comments", commentRouter)
router.use("/chapters", chapterRouter)
router.use("/mangas", mangaRouter)
router.use("/reactions", reactionRouter)






export default router