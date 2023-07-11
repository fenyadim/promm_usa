'use client'

import { FC, Fragment } from 'react'

import { ProductCard } from '@/components'

import { useAppSelector } from '@/redux/hooks'

import { statusVariable } from '@/types/product.type'

import styles from './ProductSection.module.scss'

interface IProductSection {
	type: statusVariable
}

const ProductSection: FC<IProductSection> = ({ type }) => {
	const { miners } = useAppSelector((state) => state.productReducer)
	const findArr = miners.filter(({ status }) => status?.includes(type))
	const transformTitle = type.charAt(0).toUpperCase() + type.slice(1)

	return (
		<section className={styles.wrapper}>
			<h2>{transformTitle}</h2>
			<div className={styles.product_wrapper}>
				{findArr.map((items) => (
					<Fragment key={items.slug}>
						<ProductCard items={items} type="miners" />
					</Fragment>
				))}
			</div>
		</section>
	)
}

export default ProductSection
