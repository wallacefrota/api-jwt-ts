import { Router } from "express";
import { getCustomers } from "../../controllers/CustomerController";

const customersRouter = Router();

customersRouter.get('/list-customers', getCustomers);

export default customersRouter;