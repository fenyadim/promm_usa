'use client'

import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

import { ProductType } from '@/types/product.type'

import styles from './ProductCard.module.scss'

interface IProductCard {
	items: ProductType
	type: 'miners' | 'containers' | 'business'
}

const ProductCard: FC<IProductCard> = ({ items, type }) => {
	const {
		slug,
		src,
		title,
		price,
		availableCount,
		coins,
		hashrate,
		algorithm,
		status,
		quantityPlace,
		power,
		income,
		payback,
		containerMining,
	} = items
	const [isFavorite, setIsFavorite] = useState<boolean>(false)
	const path = usePathname()

	return (
		<div className={styles.wrapper}>
			{status && (
				<div className={styles.status_wrapper}>
					{status.map((nameStatus) => (
						<span
							key={nameStatus}
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
				<Link href={slug}>
					<Image src={src} alt={title} fill style={{ objectFit: 'contain' }} />
				</Link>
			</div>
			<div className={styles.info}>
				<p className={styles.price}>{price} ₽</p>
				<Link href={slug}>{title}</Link>
				<p
					className={cn(styles.available, {
						[styles.not_available]: availableCount === 0,
					})}
				>
					{availableCount > 0
						? `Есть в наличии - ${availableCount} шт.`
						: 'Нет в наличии'}
				</p>
				<div className={styles.features}>
					{
						{
							miners: (
								<>
									<p>
										<span>Хэшрейт</span> — {hashrate} MH/s
									</p>
									<p>
										<span>Алгоритм</span> — {algorithm}
									</p>
									<p>
										<span>Добываемые монеты</span> — {coins}
									</p>
								</>
							),
							containers: (
								<>
									<p>
										<span>Количество мест</span> — {quantityPlace}
									</p>
									<p>
										<span>Общая мощность, кВт</span> — {power}
									</p>
								</>
							),
							business: (
								<>
									<p>
										<span>Контейнер для майнинга, мест</span> —{' '}
										{containerMining}
									</p>
									<p>
										<span>Доход в месяц</span> — {income} BTC
									</p>
									<p>
										<span>Срок окупаемости</span> — {payback} месяцев
									</p>
								</>
							),
						}[type]
					}
				</div>
			</div>
			<div className={styles.navigation}>
				<button className={styles.order_btn}>Order</button>

				<button
					onClick={() => setIsFavorite(!isFavorite)}
					className={styles.favorite_btn}
				>
					{isFavorite ? (
						<AiFillStar size={26} color="#5820f6" />
					) : (
						<AiOutlineStar size={26} />
					)}
				</button>
			</div>
		</div>
	)
}

export default ProductCard
