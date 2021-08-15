import Category from '../models/category'
import Product from '../models/product'
import _ from 'lodash';
import formidable from "formidable"
import fs from 'fs'
export const CategoryId = (req, res, next, id) => {
    Category.findById(id, (err, data) => {
        if (err) {
            return res.status(400).json({ err: 'có lỗi rồi hihi !' });
        }
        req.category = data;
        next()
    })
}

export const create = (req, res) => {
    let form = formidable.IncomingForm();
    form.keepExtensions = true

    form.parse(req, (err, fildes, files) => {
        if (err) {
            return res.status(400).json({
                error: "Không thêm được danh mục"
            })
        }
        let cate = new Category(fildes)
        if (files.photo) {
            if (files.photo.size > 1024*1024*100) {
                return res.status(400).json({
                    error: "Lỗi nè !!! "
                })
            }
            cate.photo.data = fs.readFileSync(files.photo.path)
            cate.photo.contentType = files.photo.type
        }

        cate.save((err, data) => {
            if (err) {
                return res.status(400).json({
                    err: "Thêm thất bại !"
                })
            }
            res.json({ data, message: "Thêm Thành Công " })
        })

    })

}
export const list = (req, res) => {
    Category.find((err, data) => {
        if (err) {
            return res.status(400).json({
                error: "Danh mục không tồn tại"
            })
        }
        res.json(data)
    })
}
export const categoryId = (req, res, next, id) => {
    Category.findById(id).exec((err, category) => {
        if (err || !category) {
            return res.status(400).json({
                error: "Không tìm thấy danh mục",
            });
        }
        req.category = category;
        next();
    });
};

export const read = (req, res) => {
    return res.json(req.category);
}

export const update = (req, res) => {
    let category = req.category;
    // category.name = req.body;
    category = _.assignIn(category, req.body)
    category.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: "Không thêm được danh mục"
            })
        }
        res.json(data);

    })
}

export const remove = (req, res) => {
    let category = req.category;
    category.remove((err, deletedCategory) => {
        if (err || !category) {
            res.status(400).json({
                error: "Danh mục này không tồn tại"
            })
        }
        res.json({ deletedCategory, message: "Xoá danh mục thành công" })
    })
}

export const categoryPage = (req, res) => {
    const { categoryId } = req.params

    Product.find({ category: categoryId }, (err, data) => {
        if (err) {
            console.log(err.message)

            return res.json(
                { message: "Khong tim thay san pham" }
            )
        }
        res.json({ data });
    })
}


export const cateName = (req, res) => {
    let product = req.product;
    Category.find({ _id: product.category }, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: "Khong tim thay danh muc"
            })
        }
        res.json({ data })
    })
}
export const productById = (req, res, next, id) => {
    Product.findById(id).exec((err, product) => {
        if (err || !product) {
            return res.status(400).json({
                err: "Khong tim thay san pham"
            })
        }
        req.product = product;
        next();
    })
}
export const photo = (req, res, next) => {
    if (req.category.photo.data) {
        res.set("Content-Type", req.category.photo.contentType);
        return res.send(req.category.photo.data)
    }
    next();
}