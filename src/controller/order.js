import Order from '../models/order';
import { orderSchema } from '../schemas/order';

export const getAll = async (req, res) => {
    try {
        const data = await Order.find().populate("products");
        if (data.length == 0) {
            return res.status(203).json({
                message: "Không có đơn hàng nào",
            });
        }
        return res.status(200).json(data);

    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
}

export const get = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Order.findById(id).populate("products");
        if (!data) {
            return res.status(200).json({
                message: "Không có đơn hàng"
            });
        }
        return res.status(200).json(data);
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
}

export const create = async (req, res) => {
    try {
        const body = req.body;
        const { error } = orderSchema.validate(body,{ abortEarly: false })
        if (error) {
            return res.json({
                message: error.details[0].message,
            })
        }
        const  data  = await Order.create(body)
        if (data.length === 0) {
            return res.status(200).json({
                message: "Thêm đơn hàng thất bại"
            });
        }
        return res.status(200).json({
            message: "Thêm đơn hàng thành công",
            data
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        })
    }
}

// export const remove = async (req, res) => {
//     try {
//         const id = req.params.id;
//         const order = await Order.findByIdAndDelete(id);
//         if (!order) {
//             return res.status(404).json({
//                 message: "Không tìm thấy don hang",
//             });
//         }
//         if (!order.isDeleteable) {
//             return res.status(400).send({ message: 'Không thể xóa don hang này' });
//         }
//         return res.status(200).json({
//             message: "Xoá thành công",
//             order
//         })
//     } catch (error) {
//         return res.status(400).json({
//             message: "Xóa don hang thất bại",
//             error: error.message,
//         })
//     }
// }

export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const  data  = await Order.findOneAndUpdate({_id: id}, body, {new: true})
        if (!data) {
            return res.status(200).json({
                message: "Cập nhật thất bại"
            })
        }
        return res.status(200).json({
            message: "Cập nhật thành công",
            data,
        })
    } catch (error) {
        return res.status(400).json({
            message: error,
        })
    }
}