import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { ProductCard } from '@/components'

import styles from './Product.module.scss'

const Product: FC = () => {
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
			src: '/image/miners/Innosilicon.jpg',
			title: 'Innosilicon',
		},
		{
			src: '/image/miners/Canaan.png',
			title: 'Canaan',
		},
		{
			src: '/image/miners/AnexMiner.png',
			title: 'AnexMiner',
		},
		{
			src: '/image/miners/Goldshell.png',
			title: 'Goldshell',
		},
		{
			src: '/image/miners/Hummer.png',
			title: 'Hummer',
		},
		{
			src: '/image/miners/iBeLink.jpg',
			title: 'iBeLink',
		},
		{
			src: '/image/miners/iPollo.png',
			title: 'iPollo',
		},
		{
			src: '/image/miners/Jasminer.png',
			title: 'Jasminer',
		},
		{
			src: '/image/miners/YAMI.png',
			title: 'YAMI',
		},
	]

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
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div>
		</section>
	)
}

export default Product
