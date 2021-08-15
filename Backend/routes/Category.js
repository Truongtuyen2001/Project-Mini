import express from 'express'
import { update, list, create, CategoryId, read, remove, categoryPage, productById, cateName, photo } from '../controller/Category';
const router = express.Router();


router.post('/category', create);
router.get('/category/photo/:CategoryId', photo);
router.get('/categories', list);
router.get('/category/:CategoryId', read);
router.put('/category/:CategoryId', update);
router.delete('/category/:CategoryId', remove);
router.get('/categoryPage/:CategoryId', categoryPage)
router.get('/product/cate/:productId', cateName)
router.param('CategoryId', CategoryId)
router.param('productId', productById);


module.exports = router;

