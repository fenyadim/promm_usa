'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, useContext, useEffect, useRef, useState } from 'react'
import { BiMenu } from 'react-icons/bi'

import { ImageBtn, Menu } from '@/components'

import { IsOpenSubMenuContext } from '@/utils/context'
import { toggleVisible } from '@/utils/toggleVisible'

import styles from './Header.module.scss'

const topLinks: Array<{ slug: string; title: string }> = [
	{ slug: '/delivery', title: 'Payment and delivery' },
	{ slug: '/company', title: 'Company' },
	{ slug: '/warranty', title: 'Check the warranty' },
	{ slug: '/service', title: 'Service' },
	{ slug: '/contacts', title: 'Contacts' },
]
const Header: FC = () => {
	const [showMenu, setShowMenu] = useState<boolean>(false)
	const [showSearch, setShowSearch] = useState<boolean>(false)
	const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
	const [innerWidth, setInnerWidth] = useState<number>(0)
	const searchRef = useRef<any>(null)
	const btnSearchRef = useRef<any>(null)
	const pathname = usePathname()
	const { setIsOpen } = useContext(IsOpenSubMenuContext)

	setIsOpen(showMenu || showMobileMenu)

	useEffect(() => {
		const onClick = (e: Event) => {
			if (
				btnSearchRef.current &&
				!btnSearchRef.current.contains(e.target) &&
				searchRef.current &&
				!searchRef.current.contains(e.target)
			) {
				setShowSearch(false)
			}
		}

		document.addEventListener('click', onClick)
		return () => document.removeEventListener('click', onClick)
	}, [searchRef, btnSearchRef])

	useEffect(() => {
		if (innerWidth === 0) {
			setInnerWidth(window.innerWidth)
		}
		const resizeWindow = (e: Event) => {
			const target = e.target as Window
			setInnerWidth(target.innerWidth)
		}

		window.addEventListener('resize', resizeWindow)
		return () => {
			window.removeEventListener('resize', resizeWindow)
		}
	}, [])

	useEffect(() => {
		setShowMenu(false)
		setShowMobileMenu(false)
	}, [pathname])

	const toggleMobileMenu = toggleVisible(setShowMobileMenu, showMobileMenu)

	const toggleMenu = toggleVisible(setShowMenu, showMenu)

	const toggleSearch = toggleVisible(setShowSearch, showSearch)

	return (
		<>
			<header className={styles.header}>
				<nav className={styles.nav_top}>
					<ul className={styles.nav_top_left}>
						{topLinks.map(({ slug, title }) => (
							<li key={slug}>
								<Link href={slug}>{title}</Link>
							</li>
						))}
					</ul>
					<p>5261 W Imperial Hwy, Los Angeles, CA 90045, USA</p>
				</nav>
				<input
					ref={searchRef}
					type="text"
					className={styles.header_input}
					style={
						showSearch
							? { display: 'block', width: '100%' }
							: { display: 'none' }
					}
				/>
				<div
					className={styles.header_middle}
					style={!showSearch ? { display: 'grid' } : { display: 'none' }}
				>
					<Link href="/" className={styles.logo_link}>
						<Image
							src="/image/header/logo.png"
							alt="Promminer"
							fill
							style={{ objectFit: 'contain' }}
						/>
					</Link>
					<div className={styles.dropdown}>
						<button onClick={toggleMenu} className={styles.catalog_btn}>
							<BiMenu size={20} />
							Catalog
						</button>
					</div>
					{innerWidth < 860 ? (
						innerWidth < 570 ? (
							<>
								<ImageBtn
									ref={btnSearchRef}
									src="/image/header/search_black.svg"
									onClick={toggleSearch}
								/>
								<ImageBtn
									onClick={toggleMobileMenu}
									src="/image/header/burger-menu-svgrepo-com (1).svg"
								/>
							</>
						) : (
							<ImageBtn
								ref={btnSearchRef}
								title="Search"
								src="/image/header/search_black.svg"
								onClick={toggleSearch}
							/>
						)
					) : (
						<input type="text" className={styles.header_input} />
					)}
					<div className={styles.header_right}>
						<ImageBtn
							title="Basket"
							src="/image/header/basket_icon_160414.svg"
						/>
						{innerWidth > 860 && (
							<>
								<ImageBtn
									title="Favorites"
									src="/image/header/star-favorite-1498-svgrepo-com.svg"
								/>
								<ImageBtn
									title="Order a call"
									src="/image/header/auricular-phone-symbol-in-a-circle_icon-icons.com_56570.svg"
								/>
							</>
						)}
					</div>
				</div>

				<nav className={styles.nav_bot}>
					<ul>
						<li>
							<Link href="investment">Investing in mining</Link>
						</li>
						<li>
							<Link href="turnkey-mining">Turnkey Mining</Link>
						</li>
						<li>
							<Link href="">Data Center</Link>
						</li>
						<li>
							<Link href="">Equipment leasing</Link>
						</li>
						<li>
							<Link href="">Ready-made business</Link>
						</li>
					</ul>
				</nav>
			</header>
			<Menu showMenu={showMenu} toggleMenu={toggleMenu} zIndex={2}>
				<div>
					<Link href="/catalog/asic-miners">Asic Miner</Link>
					<Link href="/catalog/asic-miners?brand=Bitmain">Bitmain</Link>
					<Link href="/catalog/asic-miners?brand=Whatsminer">Whatsminer</Link>
					<Link href="/catalog/asic-miners?brand=Canaan">Canaan</Link>
					<Link href="/catalog/asic-miners?brand=Goldshell">Goldshell</Link>
					<Link href="/catalog/asic-miners?brand=iPollo">iPollo</Link>
				</div>
				<div>
					<Link href="/catalog/containers">Mining containers</Link>
					<Link href="#">PM Small Container</Link>
					<Link href="#">PM Start container</Link>
					<Link href="#">PM Medium container</Link>
					<Link href="#">PM Optimal container</Link>
					<Link href="#">PM Big container</Link>
				</div>
				<div>
					<Link href="/catalog/business">Ready-made business</Link>
					<Link href="#">Ready-made business-START</Link>
					<Link href="#">Ready-made business-SMART</Link>
					<Link href="#">Ready-made business-MEDIUM</Link>
					<Link href="#">Ready-made business-BIG</Link>
					<Link href="#">Ready-made business-MAX</Link>
					<Link href="#">Ready-made business-VIP</Link>
					<Link href="#">Ready-made business-PREMIUM</Link>
					<Link href="#">Ready-made business-TO THE MOON</Link>
					<Link href="#">Ready-made business-STANDART</Link>
				</div>
			</Menu>
			<Menu showMenu={showMobileMenu} toggleMenu={toggleMobileMenu}>
				<Link href="investment">Investing in mining</Link>
				<Link href="turnkey-mining">Turnkey Mining</Link>
				<Link href="">Data Center</Link>
				<Link href="">Equipment leasing</Link>
				<Link href="">Ready-made business</Link>
				{topLinks.map(({ slug, title }) => (
					<Link key={slug} href={slug}>
						{title}
					</Link>
				))}
			</Menu>
			<div className={styles.bot_menu}>
				<ImageBtn
					src="/image/header/catalog.svg"
					title="Catalog"
					size={30}
					onClick={toggleMenu}
				/>
				<ImageBtn title="Basket" src="/image/header/basket_icon_160414.svg" />
				<ImageBtn
					title="Favorites"
					src="/image/header/star-favorite-1498-svgrepo-com.svg"
				/>
				<ImageBtn
					title="Order a call"
					src="/image/header/auricular-phone-symbol-in-a-circle_icon-icons.com_56570.svg"
				/>
			</div>
		</>
	)
}

export default Header
