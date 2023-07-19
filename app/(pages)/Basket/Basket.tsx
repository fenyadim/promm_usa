'use client'

import { FC, Fragment } from 'react'

import { BasketItem } from '@/components'

import { useAppSelector } from '@/redux/hooks'

import { numberWithSpaces } from '@/utils/numberWithSpaces'

import styles from './Basket.module.scss'

const Basket: FC = () => {
	const basket = useAppSelector((state) => state.basket)
	const totalPrice = basket.reduce(
		(acc, item) => acc + item.price * item.count,
		0
	)

	return (
		<section className={styles.wrapper}>
			<div className={styles.header}>
				<h1>Basket</h1>
				<h3>Total: $ {numberWithSpaces(totalPrice)}</h3>
			</div>
			<div>
				<div>
					{basket.map((item) => (
						<Fragment key={item.slug}>
							<BasketItem item={item} />
						</Fragment>
					))}
				</div>
			</div>
		</section>
	)
}

export default Basket
