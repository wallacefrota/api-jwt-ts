import { Router } from "express";
import { checkJwt } from "../middlewares/checkJwt";
import { verifyPermission } from "../middlewares/verifyPermission";

import authRoute from "./auth/";
import adminRouter from "./admin";
import customersRouter from "./customers";

const routes = Router();

routes.use('/auth', authRoute);
routes.use('/admin', checkJwt, verifyPermission, adminRouter);
routes.use('/customers', checkJwt, verifyPermission, customersRouter);

export default routes;