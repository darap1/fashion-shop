import type { Metadata } from 'next';
import { ProductService } from './../servises/product.service';
import Catalog from './../../components/ui/catalog/Catalog';

export const metadata: Metadata = {
	title: 'Catalog',
	description: 'Catalog',
};

async function getProducts() {
	const data = await ProductService.getAll();

	return data;
}

export default async function CatalogPage() {
	const data = await getProducts();

	return <Catalog isFull products={data} />;
}
