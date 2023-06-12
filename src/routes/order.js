import { create, get, getAll, getByIdUser, remove, restore, update } from '../controller/order'
import { checkPermission } from '../middlewares/checkPermission';
import express from 'express';

const router = express.Router();
router.get("/order/user/:idUser",getByIdUser)
router.patch("/order/restore/:id",restore)
router.route("/order").get(getAll).post(create)
router.route("/order/:id").get(get).patch(update).delete(remove)

export default router;