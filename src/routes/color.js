import { create, get, getAll, remove, update } from '../controller/color'
import { checkPermission } from '../middlewares/checkPermission';
import express from 'express';

const router = express.Router();
router.route("/color").get(getAll).post(checkPermission,create)
router.route("/color/:id").get(get).delete(checkPermission, remove).patch(checkPermission, update)

export default router;