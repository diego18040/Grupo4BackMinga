import { Router } from "express";
import { allCompanies, getCompanyById, searchCompaniesByName } from "../controllers/company/read.js";
import createCompany from "../controllers/company/register.js";
import update from "../controllers/company/update.js";
import deleteCompany from "../controllers/company/delete.js";
/* import companySignUpSchema from "../schema/createCompany.js" */
/* import companyUpdateSchema from "../schema/updateCompany.js" */
import passport from "../middleware/passport.js";
import validator from "../middleware/validator.js";
import existingAccounts from "../middleware/existingAccounts.js";
import isRole0 from "../middleware/isRole0.js";

const router = Router();




router.get("/all", passport.authenticate('jwt', { session: false }), isRole0, allCompanies)
router.get("/search/:name", passport.authenticate('jwt', { session: false }), searchCompaniesByName)
router.get('/:id', passport.authenticate('jwt', { session: false }), isRole0,  getCompanyById)
router.post("/create"/* , validator(companyUpdateSchema) */, passport.authenticate('jwt', { session: false }), existingAccounts, createCompany)
router.put("/:id"/* , validator(companyUpdateSchema) */, passport.authenticate('jwt', { session: false }), isRole0, update)
router.delete("/delete/:id", passport.authenticate('jwt', { session: false }), isRole0, deleteCompany)






export default router