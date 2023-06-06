import { create, get, getAll, remove, update } from '../controller/categories'
import { checkPermission } from '../middlewares/checkPermission';
import express from 'express';

const router = express.Router();
router.route("/categories").get(getAll).post(checkPermission,create)
router.route("/categories/:id").get(get).delete(checkPermission, remove).patch(checkPermission, update)

export default router;