import { Router } from "express";
import { authControllerLogin } from "../../controllers/AuthController";

const authRoute = Router();

authRoute.post('/login', authControllerLogin);

export default authRoute;