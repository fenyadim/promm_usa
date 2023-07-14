import cn from 'classnames'
import { FC, PropsWithChildren } from 'react'
import { BsXLg } from 'react-icons/bs'

import { ImageBtn } from '@/components'

import styles from './Menu.module.scss'

interface IMenuProps extends PropsWithChildren {
	showMenu: boolean
	toggleMenu: () => void
	zIndex?: number
	position?: 'left' | 'middle'
}

const Menu: FC<IMenuProps> = ({
	showMenu,
	toggleMenu,
	zIndex,
	children,
	position = 'middle',
}) => {
	return (
		<div
			className={cn(
				styles.menu_wrapper,
				{
					[styles.closeMenu]: !showMenu,
				},
				{
					left: styles.position_left,
					middle: styles.position_middle,
				}[position]
			)}
			style={{ zIndex }}
		>
			<ImageBtn
				className={styles.close_btn}
				onClick={toggleMenu}
				svg={<BsXLg size={25} />}
			/>
			{children}
		</div>
	)
}

export default Menu
