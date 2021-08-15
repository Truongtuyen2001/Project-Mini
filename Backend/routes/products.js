import express from 'express'
import { update, list, create, productById, read, remove, photo, productByCategory } from '../controller/product';

const router = express.Router();

router.post('/product', create);

router.get('/product', list);

router.put('/product/:productId', update);

router.get('/product/:productId', read);

router.get('/product/readPhoto/:productId', photo)

router.delete('/product/:productId', remove);

// get product by category id
router.get('/products/:productByCategory', read)

router.param('productId', productById);
router.param('productByCategory', productByCategory)

// router.get('/product/photo/:productId', image);


module.exports = router;