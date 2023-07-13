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
			{count > 0 ? `Есть в наличии - ${count} шт.` : 'Нет в наличии'}
		</p>
	)
}

export default AvailableItem
