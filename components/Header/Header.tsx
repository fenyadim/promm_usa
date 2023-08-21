'use client'

import { useRouter } from 'next-nprogress-bar'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, KeyboardEvent, useEffect, useRef, useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import {
	BsBasket,
	BsJournal,
	BsSearch,
	BsStar,
	BsWhatsapp,
} from 'react-icons/bs'

import { ImageBtn, Menu } from '@/components'

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
	const [valueSearch, setValueSearch] = useState<string>('')
	const searchRef = useRef<any>(null)
	const btnSearchRef = useRef<any>(null)
	const pathname = usePathname()
	const router = useRouter()

	useEffect(() => {
		if (showMenu === true || showMobileMenu === true) {
			document.body.style.position = 'fixed'
			document.body.style.left = '100vw'
		} else {
			document.body.style.position = 'relative'
			document.body.style.left = '0'
		}
	}, [showMenu, showMobileMenu])

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

	const enterSearch = (e: KeyboardEvent) => {
		if (e.code === 'Enter') {
			if (valueSearch.length !== 0) router.push('/catalog/asic-miners')
		}
	}
	const toggleMobileMenu = toggleVisible(setShowMobileMenu, showMobileMenu)

	const toggleMenu = toggleVisible(setShowMenu, showMenu)

	const toggleSearch = toggleVisible(setShowSearch, showSearch)

	return (
		<header className={styles.header}>
			<div className={styles.header_content}>
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
					value={valueSearch}
					onChange={(e) => setValueSearch(e.target.value)}
					style={
						showSearch
							? { display: 'block', width: '100%' }
							: { display: 'none' }
					}
					onKeyUp={enterSearch}
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
							priority
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
									svg={<BsSearch size={25} />}
									onClick={toggleSearch}
								/>
								<ImageBtn
									onClick={toggleMobileMenu}
									svg={<BiMenu size={30} />}
								/>
							</>
						) : (
							<ImageBtn
								ref={btnSearchRef}
								title="Search"
								svg={<BsSearch size={25} />}
								onClick={toggleSearch}
							/>
						)
					) : (
						<input
							type="text"
							className={styles.header_input}
							value={valueSearch}
							onChange={(e) => setValueSearch(e.target.value)}
							onKeyUp={enterSearch}
						/>
					)}
					<div className={styles.header_right}>
						<ImageBtn
							title="Basket"
							svg={<BsBasket size={25} />}
							link="/basket"
						/>
						{innerWidth > 860 && (
							<>
								<ImageBtn
									title="Favorites"
									svg={<BsStar size={25} />}
									link="/favorites"
								/>
								<ImageBtn
									title="WhatsApp"
									svg={<BsWhatsapp size={25} />}
									link="https://wa.me/+18325572656"
								/>
							</>
						)}
					</div>
				</div>

				<nav className={styles.nav_bot}>
					<ul>
						<li>
							<Link href="/investment">Investing in mining</Link>
						</li>
						<li>
							<Link href="/turnkey-mining">Turnkey Mining</Link>
						</li>
						<li>
							<Link href="/data-center">Data Center</Link>
						</li>
						<li>
							<Link href="/catalog/business">Ready-made business</Link>
						</li>
					</ul>
				</nav>
			</div>
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
					<Link href="/product/pm-small?type=containers">
						PM Small Container
					</Link>
					<Link href="/product/pm-start?type=containers">
						PM Start container
					</Link>
					<Link href="/product/pm-medium?type=containers">
						PM Medium container
					</Link>
					<Link href="/product/pm-optimal?type=containers">
						PM Optimal container
					</Link>
					<Link href="/product/pm-big?type=containers">PM Big container</Link>
				</div>
				<div>
					<Link href="/catalog/business">Ready-made business</Link>
					<Link href="/product/ready-start?type=business">
						Ready-made business-START
					</Link>
					<Link href="/product/ready-smart?type=business">
						Ready-made business-SMART
					</Link>
					<Link href="/product/ready-medium?type=business">
						Ready-made business-MEDIUM
					</Link>
					<Link href="/product/ready-big?type=business">
						Ready-made business-BIG
					</Link>
					<Link href="/product/ready-max?type=business">
						Ready-made business-MAX
					</Link>
					<Link href="/product/ready-vip?type=business">
						Ready-made business-VIP
					</Link>
					<Link href="/product/ready-lux?type=business">
						Ready-made business-LUX
					</Link>
					<Link href="/product/ready-moon?type=business">
						Ready-made business-TO THE MOON
					</Link>
					<Link href="/product/ready-standart?type=business">
						Ready-made business-STANDART
					</Link>
				</div>
			</Menu>
			<Menu showMenu={showMobileMenu} toggleMenu={toggleMobileMenu}>
				<Link href="/investment">Investing in mining</Link>
				<Link href="/turnkey-mining">Turnkey Mining</Link>
				<Link href="/data-center">Data Center</Link>
				<Link href="/catalog/business">Ready-made business</Link>
				{topLinks.map(({ slug, title }) => (
					<Link key={slug} href={slug}>
						{title}
					</Link>
				))}
			</Menu>
			<div className={styles.bot_menu}>
				<ImageBtn
					title="Catalog"
					svg={<BsJournal size={25} />}
					onClick={toggleMenu}
				/>
				<ImageBtn title="Basket" svg={<BsBasket size={25} />} link="/basket" />
				<ImageBtn
					title="Favorites"
					svg={<BsStar size={25} />}
					link="/favorites"
				/>
				<ImageBtn
					title="WhatsApp"
					svg={<BsWhatsapp size={25} />}
					link="https://wa.me/+18325572656"
				/>
			</div>
		</header>
	)
}

export default Header
