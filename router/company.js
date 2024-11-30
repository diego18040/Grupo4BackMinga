import { Router } from "express";
import { allCompanies,getCompanyById,searchCompaniesByName } from "../controllers/company/read.js";



const router = Router();




router.get("/all", allCompanies)
router.get("/search/:name", searchCompaniesByName)
router.get('/:id',getCompanyById)




export default router