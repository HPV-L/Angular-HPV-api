import { create, get, getAll, remove, update } from '../controller/color'
import { checkPermission } from '../middlewares/checkPermission';
import express from 'express';

const router = express.Router();
router.route("/color").get(getAll).post(create)
router.route("/color/:id").get(get).delete( remove).patch( update)

export default router;