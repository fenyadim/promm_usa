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
					<Link href="/catalog/asic-miners">Catalog</Link>
					<Link href="/investment">Investing in mining</Link>
					<Link href="/turnkey-mining">Turnkey Mining</Link>
				</div>
				<div className={styles.footer_column} style={{ gridArea: 'b' }}>
					<Link href="/data-center">Data Center</Link>
					<Link href="/catalog/business">Ready-made business</Link>
					<Link href="/catalog/containers">Containers</Link>
				</div>
				<div className={styles.footer_column} style={{ gridArea: 'c' }}>
					<Link href="/company">About company</Link>
					<Link href="/delivery">Payment and delivery</Link>
					<Link href="/warranty">Check your warranty</Link>
					<Link href="/service">Service</Link>
				</div>
				<div className={styles.footer_column} style={{ gridArea: 'd' }}>
					<Link href="/contacts">Contact</Link>
					<Link
						className={styles.mail_link}
						href="emailto:support@promminer.us"
					>
						support@promminer.us
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
