import Image from 'next/image'
import { FC } from 'react'

import { RecallType } from '@/types/recall.type'

import styles from './RecallItem.module.scss'

const RecallItem: FC<{ items: RecallType }> = ({ items }) => {
	const { date, name, src, text } = items

	return (
		<div className={styles.wrapper}>
			<div className={styles.top}>
				<Image src={src} alt={name} width={64} height={64} />
				<div className={styles.info}>
					<p>
						Buyer - <span>{date}</span>
					</p>
					<h3>{name}</h3>
				</div>
			</div>
			<p>{text}</p>
		</div>
	)
}

export default RecallItem
