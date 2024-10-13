import { Router } from "express";
import shoeRouter from "./shoe";

const router = Router();

router.use(shoeRouter)

export default router;
