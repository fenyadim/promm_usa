import { Metadata, NextPage } from 'next'

import { Product } from '@/pages'

export const metadata: Metadata = {
	title: 'Product',
}

const ProductPage: NextPage = () => {
	return <Product />
}

export default ProductPage
