import { create, get, getAll, update } from '../controller/order'
import { checkPermission } from '../middlewares/checkPermission';
import express from 'express';

const router = express.Router();
router.route("/order").get(getAll).post(checkPermission,create)
router.route("/order/:id").get(get).patch(checkPermission,update)

export default router;