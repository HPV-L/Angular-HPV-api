import Joi, { required } from "joi";

export const productSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "Không được bỏ trống tên",
    "any.required": "Trường 'tên' là bắt buộc",
  }),
  thumbnail: Joi.string().messages({
    "string.empty": "Không được bỏ trống ảnh",
    // "any.required": "Trường 'ảnh' là bắt buộc",
  }),
  price: Joi.number().required().min(0),
  description: Joi.string(),
  categoryId: Joi.string().messages({
    "string.empty": "Không được bỏ trống danh mục",
    "any.required": "Trường 'danh mục' là bắt buộc",
  }),
  createdAt: Joi.date().default(() => new Date()),
  updatedAt: Joi.date().default(() => new Date()),
  deletedAt: Joi.date().default(null),
  deleted: Joi.boolean().default(false),
});
