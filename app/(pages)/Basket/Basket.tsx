'use client'

import { FC, Fragment, useState } from 'react'

import { BasketItem, FormOrder, Merchant, NothingWrapper } from '@/components'

import { useAppSelector } from '@/redux/hooks'

import { numberWithSpaces } from '@/utils/numberWithSpaces'

import styles from './Basket.module.scss'

const Basket: FC = () => {
	const [visibleMerchant, setVisibleMerchant] = useState(false)
	const basket = useAppSelector((state) => state.basket)
	const totalPrice = basket.reduce(
		(acc, item) => acc + item.price * item.count,
		0
	)

	return (
		<>
			<section className={styles.wrapper}>
				<div className={styles.header}>
					<h1>Basket</h1>
					<h3>Total: $ {numberWithSpaces(totalPrice)}</h3>
				</div>
				<NothingWrapper visible={basket.length === 0}>
					<div className={styles.items}>
						<div>
							{basket.map((item) => (
								<Fragment key={item.slug}>
									<BasketItem item={item} />
								</Fragment>
							))}
						</div>
						<FormOrder toggleMerchant={setVisibleMerchant} />
					</div>
				</NothingWrapper>
			</section>
			<Merchant
				visible={visibleMerchant}
				toggleMerchant={setVisibleMerchant}
				amount={totalPrice}
			/>
		</>
	)
}

export default Basket
