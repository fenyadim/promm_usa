import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import Slider from 'react-slick'

import LinkBtn from '@/components/LinkBtn/LinkBtn'

import styles from './Home.module.scss'
import ImagesSlider from '@/components/ImagesSlider/ImagesSlider'

const Home: FC = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	}
	return (
		<div className={styles.wrapper}>
			<section className={styles.media_container}>
				<video
					src="/video/main_full.mp4"
					autoPlay
					muted
					loop
					className={styles.main_full}
					width="100%"
					height="100%"
				/>
				<video
					src="/video/main_square (online-video-cutter.com).mp4"
					autoPlay
					muted
					loop
					className={styles.main_square}
					width="100%"
				/>
				<div className={styles.info}>
					<h2>Best prices for mining equipment in the USA</h2>
					<p>
						Many years of contracts with the leading manufacturers of mining
						equipment allow us to give you the most favorable conditions. Our
						own data center, more than 500,000 devices brought in, more than
						100,000 satisfied customers.
					</p>
					<div className={styles.links}>
						<Link href="#">ACIS miners</Link>
						<Link href="#">Data Center</Link>
						<Link href="#">Containers</Link>
						<Link href="#">Turnkey Mining</Link>
					</div>
				</div>
			</section>

			<section className={styles.benefis_wrapper}>
				<div>
					<Image
						src="/image/index/Union1.svg"
						alt=""
						className="main__benefits-image"
						width={40}
						height={40}
					/>
					<div className={styles.benefis_info}>
						<h3 className="main__benefits-heading">Quality control</h3>
						<p className="main__benefits-description">
							We conduct a pre-sale inspection of all goods.
						</p>
					</div>
				</div>
				<div>
					<Image
						src="/image/index/Union2.svg"
						alt=""
						className="main__benefits-image"
						width={40}
						height={40}
					/>
					<div className={styles.benefis_info}>
						<h3 className="main__benefits-heading">24/7 Support</h3>
						<p className="main__benefits-description">
							We help you set up the equipment, provide extended warranty and
							quality service.
						</p>
					</div>
				</div>
				<div>
					<Image
						src="/image/index/Union4.svg"
						alt=""
						className="main__benefits-image"
						width={40}
						height={40}
					/>
					<div className={styles.benefis_info}>
						<h3 className="main__benefits-heading">Turnkey Mining</h3>
						<p className="main__benefits-description">
							Full support - from the purchase of equipment to connection to the
							pool and placement in their own data center.
						</p>
					</div>
				</div>
				<div>
					<Image
						src="/image/index/Union.svg"
						alt=""
						className="main__benefits-img"
						width={40}
						height={40}
					/>
					<div className={styles.benefis_info}>
						<h3 className="main__benefits-heading">Direct supplies</h3>
						<p className="main__benefits-description">
							We work with manufacturers without intermediaries. Only original
							products.
						</p>
					</div>
				</div>
				<div>
					<Image
						src="/image/index/Union3.svg"
						alt=""
						className="main__benefits-img"
						width={40}
						height={40}
					/>
					<div className={styles.benefis_info}>
						<h3 className="main__benefits-heading">Fast shipping</h3>
						<p className="main__benefits-description main__benefits-description-last">
							We work only with reliable logistics companies.
						</p>
					</div>
				</div>
			</section>

			<section className={styles.company_wrapper}>
				<div className={styles.company_info}>
					<h2>About company</h2>
					<p>
						The company's work is based on constant development in the field of
						blockchain and cryptography. We bring modern technology into this
						world. That is why we make the field of mining available to
						everyone.
					</p>
					<div className={styles.company_achievement}>
						<div>
							<h3 className="company__left-heading">7 years</h3>
							<p className="company__left-description">
								The company occupies a leading position in the international
								market
							</p>
						</div>
						<div>
							<h3 className="company__left-heading">100 Experts</h3>
							<p className="company__left-description">
								Experts make Promminer a leader in cryptocurrency mining
							</p>
						</div>
						<div>
							<h3 className="company__left-heading">100,000 units</h3>
							<p className="company__left-description">
								ASIC miners delivered to our customers
							</p>
						</div>
						<div>
							<h3 className="company__left-heading">40 000 000 $</h3>
							<p className="company__left-description">
								Earned by our customers in 2022
							</p>
						</div>
					</div>
					<LinkBtn title="Learn more" />
				</div>
				<div>{/* <ImagesSlider></ImagesSlider> */}</div>
			</section>
		</div>
	)
}

export default Home
