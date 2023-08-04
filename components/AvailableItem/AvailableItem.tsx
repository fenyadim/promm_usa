import cn from 'classnames'
import { FC } from 'react'

import styles from './AvailableItem.module.scss'

const AvailableItem: FC<{ count: number }> = ({ count }) => {
	return (
		<p
			className={cn(styles.available, {
				[styles.not_available]: count === 0,
			})}
		>
			{count > 0 ? `In stock - ${count} pcs.` : 'Out of stock'}
		</p>
	)
}

export default AvailableItem
