'use client'

import cn from 'classnames'
import { FC, useState } from 'react'

import styles from './Select.module.scss'

interface ISelect {
	title: string
	currentVar: string
	setCurrent: (value: 'Ascending' | 'Descending') => void
}

const Select: FC<ISelect> = ({ title, currentVar, setCurrent }) => {
	const [showMenu, setShowMenu] = useState<boolean>(false)

	const changeCurrent = (value: 'Ascending' | 'Descending') => {
		setCurrent(value)
		setShowMenu(false)
	}

	return (
		<div className={styles.select_wrapper}>
			<h3>{title}</h3>
			<button onClick={() => setShowMenu(!showMenu)}>{currentVar}</button>
			<ul
				className={cn(styles.dropdown, {
					[styles.show]: showMenu,
				})}
			>
				<li onClick={() => changeCurrent('Ascending')}>Ascending</li>
				<li onClick={() => changeCurrent('Descending')}>Descending</li>
			</ul>
		</div>
	)
}

export default Select
