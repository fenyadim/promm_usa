'use client'

import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'

import { ProductType } from '@/types/product'

import styles from './ProductCard.module.scss'

const ProductCard: FC<{ items: ProductType }> = ({ items }) => {
	const { src, title, price, available, coins, hashrate, algorithm, status } =
		items
	const [isFavorite, setIsFavorite] = useState<boolean>(false)

	return (
		<div className={styles.wrapper}>
			{status && (
				<div className={styles.status_wrapper}>
					{status.map((nameStatus) => (
						<span
							className={cn(styles.status, {
								[styles.status_hit]: nameStatus === 'hit',
								[styles.status_new]: nameStatus === 'new',
							})}
						>
							{nameStatus}
						</span>
					))}
				</div>
			)}
			<div className={styles.image}>
				<Link href="">
					<Image src={src} alt={title} fill style={{ objectFit: 'contain' }} />
				</Link>
			</div>
			<div className={styles.info}>
				<p className={styles.price}>{price} ₽</p>
				<Link href="">{title}</Link>
				<p className={styles.available}>
					{available ? 'Есть в наличии' : 'Нет в наличии'}
				</p>
				<div className={styles.features}>
					<p>
						<span>Хэшрейт</span> — {hashrate}
					</p>
					<p>
						<span>Алгоритм</span> — {algorithm}
					</p>
					<p>
						<span>Добываемые монеты</span> — {coins}
					</p>
				</div>
			</div>
			<div className={styles.navigation}>
				<button className={styles.order_btn}>Order</button>
				<button
					onClick={() => setIsFavorite(!isFavorite)}
					className={cn(styles.favorite_btn, {
						[styles.favorite_active]: isFavorite,
					})}
				>
					<svg
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							id="Vector"
							d="M2.33496 10.3368C2.02171 10.0471 2.19187 9.52339 2.61557 9.47316L8.61914 8.76107C8.79182 8.74059 8.94181 8.63215 9.01465 8.47425L11.5469 2.98446C11.7256 2.59703 12.2764 2.59695 12.4551 2.98439L14.9873 8.47413C15.0601 8.63204 15.2092 8.74077 15.3818 8.76124L21.3857 9.47316C21.8094 9.52339 21.9791 10.0472 21.6659 10.3369L17.2278 14.4419C17.1001 14.56 17.0433 14.7357 17.0771 14.9063L18.255 20.8359C18.3382 21.2544 17.8928 21.5787 17.5205 21.3703L12.2451 18.4166C12.0934 18.3317 11.9091 18.3321 11.7573 18.417L6.48144 21.3695C6.10913 21.5779 5.66294 21.2544 5.74609 20.8359L6.92414 14.9066C6.95803 14.7361 6.90134 14.5599 6.77367 14.4419L2.33496 10.3368Z"
							stroke="#6c747b"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>
			</div>
		</div>
	)
}

export default ProductCard
