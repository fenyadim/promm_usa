'use client'

import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { FC, Fragment, useEffect, useState } from 'react'

import { ProductCard, Select } from '@/components'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {
	fetchAll,
	filterByBrands,
	filterByHash,
	filterByPrice,
} from '@/redux/slices/productSlice'

import styles from './Product.module.scss'

const brands = [
	{
		src: '/image/miners/Bitmain.jpg',
		title: 'Bitmain',
	},
	{
		src: '/image/miners/Whatsminer.jpg',
		title: 'Whatsminer',
	},
	{
		src: '/image/miners/Canaan.png',
		title: 'Canaan',
	},
	{
		src: '/image/miners/Goldshell.png',
		title: 'Goldshell',
	},
	{
		src: '/image/miners/iPollo.png',
		title: 'iPollo',
	},
]

type SortVars = 'Ascending' | 'Descending'

const Product: FC = () => {
	const [sortPrice, setSortPrice] = useState<SortVars>('Ascending')
	const [sortHash, setSortHash] = useState<SortVars>('Ascending')
	const products = useAppSelector((state) => state.productReducer)
	const dispatch = useAppDispatch()

	const searchParams = useSearchParams()
	const brandFind = searchParams.get('brand')

	useEffect(() => {
		if (brandFind === null) dispatch(fetchAll())
		else dispatch(filterByBrands(brandFind))
	}, [brandFind])

	useEffect(() => {
		dispatch(filterByPrice(sortPrice))
	}, [sortPrice])

	useEffect(() => {
		dispatch(filterByHash(sortHash))
	}, [sortHash])

	return (
		<section className={styles.wrapper}>
			<h1>Miner</h1>
			<div className={styles.brand_links}>
				{brands.map(({ src, title }) => (
					<Link
						key={title}
						href={
							title !== brandFind
								? `/product/asic-miners?brand=${title}`
								: '/product/asic-miners'
						}
						className={cn(styles.brand_item, {
							[styles.selected]: brandFind === title,
						})}
					>
						<div className={styles.brand_image}>
							<Image
								src={src}
								alt={title}
								fill
								style={{ objectFit: 'contain' }}
							/>
						</div>
						{title}
					</Link>
				))}
			</div>
			<div className={styles.layout}>
				<div className={styles.fliter_wrapper}>
					<Select
						title="Price"
						currentVar={sortPrice}
						setCurrent={setSortPrice}
					/>
					<Select
						title="Hashrate"
						currentVar={sortHash}
						setCurrent={setSortHash}
					/>
				</div>
				<div className={styles.products_wrapper}>
					{products.map((items, id) => (
						<Fragment key={id}>
							<ProductCard items={items} />
						</Fragment>
					))}
				</div>
			</div>
		</section>
	)
}

export default Product
