import { Router, Request, Response } from 'express';
import { getProducts, getProductDetails } from '../lib/products';
import { ProductDetailsNetworkResponse } from '../types/productTypes';
import { errorMiddleware } from '../lib/middleware';
import { productDetailsNormalizer, productNormalizer } from '../lib/normalizers';

const router: Router = Router();

router.get('/products', async (req: Request, res: Response, next: (e: Error) => void): Promise<any> => {
    try {
        const products = await getProducts();
        res.status(200).send(products);
    } catch (e) {
        next(e)
    }
}, errorMiddleware);

router.get('/productDetails/:id', async (req: Request, res: Response, next: (e: Error) => void): Promise<any> => {
    try {
        const product = await getProductDetails(req.params.id);
        res.status(200).send(product);
    } catch (e) {
        next(e)
    }
}, errorMiddleware);

export default router;