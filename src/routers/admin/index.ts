import { Router } from "express";
import { getContracts } from "../../controllers/ContractController";

const adminRouter = Router();

adminRouter.get('/contracts', getContracts);

export default adminRouter;