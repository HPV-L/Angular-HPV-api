import express from 'express';
import { create, get, getAll, remove, update, getSlug, getTrash, restore, forceDelete } from '../controller/products'
import { checkPermission } from '../middlewares/checkPermission';
import uploadCloud from '../middlewares/cloudinary';

const router = express.Router();
router.route("/products").get(getAll).post(create)
router.route("/products/:id").get(get).patch(update).delete(remove)
router.get("/products/:slug", getSlug)
router.get("/admin/products/:id", get)
router.get("/admin/products/trash", getTrash)
router.patch("/products/restore/:id", restore)
router.delete("/products/:id/force", forceDelete)

export default router;