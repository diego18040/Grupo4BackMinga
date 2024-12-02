import { Router } from "express";
import { allCompanies,getCompanyById,searchCompaniesByName } from "../controllers/company/read.js";
import  createCompany  from "../controllers/company/register.js";
import update  from "../controllers/company/update.js";
import  deleteCompany from "../controllers/company/delete.js";


const router = Router();




router.get("/all", allCompanies)
router.get("/search/:name", searchCompaniesByName)
router.get('/:id',getCompanyById)
router.post("/create", createCompany)
router.put("/:id", update)
router.delete("/delete/:id", deleteCompany)





export default router