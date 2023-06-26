import cn from 'classnames'
import { FC, PropsWithChildren } from 'react'

import { ImageBtn } from '@/components'

import styles from './Menu.module.scss'

interface IMenuProps extends PropsWithChildren {
	showMenu: boolean
	toggleMenu: () => void
	zIndex?: number
}

const Menu: FC<IMenuProps> = ({ showMenu, toggleMenu, zIndex, children }) => {
	return (
		<div
			className={cn(styles.menu_wrapper, {
				[styles.closeMenu]: !showMenu,
			})}
			style={{ zIndex }}
		>
			<ImageBtn
				className={styles.close_btn}
				onClick={toggleMenu}
				src="/image/header/cross.svg"
			/>
			{children}
		</div>
	)
}

export default Menu
