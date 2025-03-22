import { describe } from '@jest/globals';
import { getProducts, getProductDetails } from '../lib/products';
import axios from 'axios';
describe('Products E2E tests', () => {
    describe('getProducts', () => {
        it('returns a promise', () => {
            const res = getProducts();
            expect(res).toBeInstanceOf(Promise);
        });

        it('has correct fields', async () => {
            const res = await getProducts();
            const product = res[0];
            expect(product).toHaveProperty('product_id');
            expect(product).toHaveProperty('effective_from');
            expect(product).toHaveProperty('effective_to');
            expect(product).toHaveProperty('product_category');
            expect(product).toHaveProperty('name');
            expect(product).toHaveProperty('description');
            expect(product).toHaveProperty('brand');
        });
        it('can handles errors', async () => {
            const mockAxios = jest.spyOn(axios, 'get');
            mockAxios.mockRejectedValue({
                response: {
                    status: 404,
                    data: { errors: [{ message: 'Products endpoint missing' }] },
                },
            });

            await expect(getProducts()).rejects.toEqual({
                status: 404,
                error: [{ message: 'Products endpoint missing' }],
                message: 'Failed to fetch products',
            });

            mockAxios.mockRestore();
        });
    });


    describe('getProductDetails', () => {
        it('returns a promise', () => {
            const res = getProductDetails('8bba7e425a5a4eeb8ecb7eec4daadf0c');
            expect(res).toBeInstanceOf(Promise);
        });

        it('has correct fields', async () => {
            const productDetails = await getProductDetails('8bba7e425a5a4eeb8ecb7eec4daadf0c');
            expect(productDetails).toHaveProperty('features');
            expect(productDetails).toHaveProperty('eligibility');
            expect(productDetails).toHaveProperty('fees');
        })
    it('can handles errors correctly', async () => {
        const mockAxios = jest.spyOn(axios, 'get');
        mockAxios.mockRejectedValue({
            response: {
                status: 404,
                data: { errors: [{ message: 'Product not found' }] },
            },
        });

        await expect(getProductDetails('invalid-id')).rejects.toEqual({
            status: 404,
            error: [{ message: 'Product not found' }],
            message: 'Failed to fetch single product [invalid-id]',
        });

        mockAxios.mockRestore();
    });
});

});