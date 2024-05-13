const PRODUCTS = 'http://localhost:4200/products';
import { IProduct } from './../types/product.interface';
import axios from 'axios';

export const ProductService = {
	async getAll() {
		const { data } = await axios<IProduct[]>({
			url: PRODUCTS,
			method: 'GET',
		});
		return data;
	},
};
