'use client'

import cn from 'classnames'
import Image from 'next/image'
import { Dispatch, FC, SetStateAction } from 'react'
import { BsXLg } from 'react-icons/bs'

import { Button, ImageBtn } from '@/components'

import { useAppDispatch } from '@/redux/hooks'
import { clear } from '@/redux/slices/basketSlice'

import { numberWithSpaces } from '@/utils/numberWithSpaces'

import styles from './Merchant.module.scss'

interface IMerchant {
	visible: boolean
	toggleMerchant: Dispatch<SetStateAction<boolean>>
	amount: number
}

const Merchant: FC<IMerchant> = ({ visible, amount, toggleMerchant }) => {
	const dispatch = useAppDispatch()

	const onClickPaid = () => {
		toggleMerchant(false)
		dispatch(clear())
	}

	return (
		<div
			className={cn(styles.wrapper, {
				[styles.not_visible]: !visible,
			})}
		>
			<div className={styles.block}>
				<ImageBtn
					className={styles.close_btn}
					onClick={() => toggleMerchant(false)}
					svg={<BsXLg size={25} />}
				/>
				<h2>Pay For Your Order</h2>
				<Image
					src="/image/merchant/qr.jpg"
					alt="QR Code"
					width={200}
					height={200}
				/>
				<div>
					<h3>Amount</h3>
					<p>{numberWithSpaces(amount)} USDT</p>
				</div>
				<div>
					<h3>Address</h3>
					<p>TXQEc6PLb8KkzUTqbvcY1fXmBywhqrFzBB</p>
				</div>
				<p style={{ color: '#ff6060' }}>
					After you have transferred the amount, click on the "I paid" button.
				</p>
				<Button styleType="fill" onClick={onClickPaid}>
					I paid
				</Button>
			</div>
		</div>
	)
}

export default Merchant
