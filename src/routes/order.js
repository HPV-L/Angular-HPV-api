import { create, get, getAll, update } from '../controller/order'
import { checkPermission } from '../middlewares/checkPermission';
import express from 'express';

const router = express.Router();
router.route("/order").get(getAll).post(create)
router.route("/order/:id").get(get).patch(update)

export default router;