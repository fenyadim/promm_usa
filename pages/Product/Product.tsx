import { FC } from 'react'

import styles from './Product.module.scss'
import ProductCard from '@/components/ProductCard/ProductCard'

const Product: FC = () => {
	return (
		<section>
			<h1>Miner</h1>
			<div className={styles.products_wrapper}>
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div>
		</section>
	)
}

export default Product
