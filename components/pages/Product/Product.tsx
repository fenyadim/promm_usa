'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { ProductCard } from '@/components'

import { useAppSelector } from '@/redux/hooks'

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

const Product: FC = () => {
	const products = useAppSelector((state) => state.productReducer)

	return (
		<section className={styles.wrapper}>
			<h1>Miner</h1>
			<div className={styles.brand_links}>
				{brands.map(({ src, title }) => (
					<Link key={title} href="">
						<span>
							<Image
								src={src}
								alt={title}
								fill
								style={{ objectFit: 'contain' }}
							/>
						</span>
						{title}
					</Link>
				))}
			</div>
			<div className={styles.fliter_wrapper}></div>
			<div className={styles.products_wrapper}>
				{products.map((items) => (
					<ProductCard items={items} />
				))}
			</div>
		</section>
	)
}

export default Product
