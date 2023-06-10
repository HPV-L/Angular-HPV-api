import { create, get, getAll, getByIdUser, update } from '../controller/order'
import { checkPermission } from '../middlewares/checkPermission';
import express from 'express';

const router = express.Router();
router.route("/order").get(getAll).post(create)
router.route("/order/:id").get(get).patch(update)
router.get("/order/user/:idUser",getByIdUser)

export default router;