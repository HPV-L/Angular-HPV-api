import express from 'express';
import { create, get, getAll, remove, update, getSlug, getTrash, restore, forceDelete } from '../controller/products'
import { checkPermission } from '../middlewares/checkPermission';
import uploadCloud from '../middlewares/cloudinary';

const router = express.Router();
router.route("/products").get(getAll).post(checkPermission, uploadCloud.single('thumbnail'), create)
router.route("/products/:id").get(get).patch(checkPermission,update).delete(checkPermission,remove)
router.patch("/products/restore/:id", checkPermission, restore)
router.delete("/products/:id/force", checkPermission, forceDelete)
router.get("/products/:slug", getSlug)
router.get("/admin/products/:id", get)
router.get("/admin/products/trash", getTrash)

export default router;