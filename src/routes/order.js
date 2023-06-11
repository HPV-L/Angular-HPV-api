import { create, get, getAll, getByIdUser, getDeleted, getNotDeleted, remove, restore, update } from '../controller/order'
import { checkPermission } from '../middlewares/checkPermission';
import express from 'express';

const router = express.Router();
router.get('/admin/order', getAll)
router.get('/order/canceled', getDeleted)
router.get("/order/user/:idUser",getByIdUser)
router.patch("/order/restore/:id",restore)
router.route("/order").get(getNotDeleted).post(create)
router.route("/order/:id").get(get).patch(update).delete(remove)

export default router;