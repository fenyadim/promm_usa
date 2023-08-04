import Image from 'next/image'
import Link from 'next/link'

import footerLogo from '../../public/image/footer/footer_logo.svg'

import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer_wrapper}>
				<Image src={footerLogo} alt="Promminer" style={{ gridArea: 'image' }} />
				<div className={styles.footer_column} style={{ gridArea: 'a' }}>
					<Link href="#">Catalog</Link>
					<Link href="#">Investing in mining</Link>
					<Link href="#">Turnkey Mining</Link>
				</div>
				<div className={styles.footer_column} style={{ gridArea: 'b' }}>
					<Link href="#">Data Center</Link>
					<Link href="#">Ready-made business</Link>
					<Link href="#">Containers</Link>
				</div>
				<div className={styles.footer_column} style={{ gridArea: 'c' }}>
					<Link href="#">About company</Link>
					<Link href="#">Payment and delivery</Link>
					<Link href="#">Check your warranty</Link>
					<Link href="#">Service</Link>
				</div>
				<div className={styles.footer_column} style={{ gridArea: 'd' }}>
					<Link href="#">Contact</Link>
					<Link className={styles.mail_link} href="emailto:info@promminer.ru">
						info@promminer.ru
					</Link>
				</div>
				<div className={styles.contacts}>
					<h3>Our location</h3>
					<ul>
						<li>Los Angeles - 5261 W Imperial Hwy, CA 90045</li>
						<li>Dubai - Business Bay, Exchange Tower, office 105</li>
						<li>Moscow - Letnaya str., 99 st3</li>
						<li>Irkutsk - Gorky str. 14B</li>
						<li>Saint Petersburg- Izmailovsky Prospekt 2B</li>
						<li>Hong Kong - 14 Science Museum Rd, Tsim Sha Tsui East</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}

export default Footer
