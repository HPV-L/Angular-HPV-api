import { create, get, getAll, remove, update } from '../controller/categories'
import { checkPermission } from '../middlewares/checkPermission';
import express from 'express';

const router = express.Router();
router.route("/categories").get(getAll).post(create)
router.get("/categories/:id", get)
router.delete("/categories/:id", remove)
router.patch("/categories/:id", update)

export default router;