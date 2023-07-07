import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { ImagesSlider, LinkBtn } from '@/components'

import styles from './Home.module.scss'

const peopleInfo = [
	{
		srcImg: '/image/index/people/1.jpg',
		name: 'Тимофей Кузьменко',
		place: 'Основатель',
	},
	{
		srcImg: '/image/index/people/2.jpg',
		name: 'Евгений Дёготь',
		place: 'Генеральный директор ',
	},
	{
		srcImg: '/image/index/people/3.jpg',
		name: 'Александр Федоров',
		place: 'Директор по развитию',
	},
	{
		srcImg: '/image/index/people/4.jpg',
		name: 'Леонид Белоус',
		place: 'Финансовый директор',
	},
]

const Home: FC = () => {
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
						<Link href="/product/asic-miners">ACIS miners</Link>
						<Link href="#">Data Center</Link>
						<Link href="/product/containers">Containers</Link>
						<Link href="turnkey-mining">Turnkey Mining</Link>
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
						<h3>Quality control</h3>
						<p>We conduct a pre-sale inspection of all goods.</p>
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
					<LinkBtn title="Learn more" href="company" />
				</div>
				<ImagesSlider data={peopleInfo} />
			</section>

			<section className={styles.partners_wrapper}>
				<h2>Our Partners</h2>
				<div>
					<div className={styles.partners_image}>
						<Image
							src="/image/index/partners/bitmain_PhotoRoom.png_PhotoRoom.png"
							alt=""
							fill
							style={{ objectFit: 'contain' }}
						/>
					</div>
					<div className={styles.partners_image}>
						<Image
							src="/image/index/partners/Innosilicon_PhotoRoom.png_PhotoRoom.png"
							alt=""
							fill
							style={{ objectFit: 'contain' }}
						/>
					</div>
					<div className={styles.partners_image}>
						<Image
							src="/image/index/partners/image_ccmmiQzXJ_transformed_PhotoRoom.png_PhotoRoom.png"
							alt=""
							fill
							style={{ objectFit: 'contain' }}
						/>
					</div>
					<div className={styles.partners_image}>
						<Image
							src="/image/index/partners/kanan_PhotoRoom.png_PhotoRoom.png"
							alt=""
							fill
							style={{ objectFit: 'contain' }}
						/>
					</div>
				</div>
			</section>

			<section className={styles.awards_wrapper}>
				<h2>Our Awards</h2>
				<div className={styles.awards_content}>
					<div className={styles.awards_item}>
						<Image
							src="/image/index/awards/10.jpg"
							alt=""
							width={300}
							height={230}
						/>
						<h3>Special Blockchain Life 2023 sponsor</h3>
					</div>
					<div className={styles.awards_item}>
						<Image
							src="/image/index/awards/6.jpg"
							alt=""
							width={300}
							height={230}
						/>
						<h3>General sponsor of the Balance 2022 forum</h3>
					</div>
					<div className={styles.awards_item}>
						<Image
							src="/image/index/awards/11.jpg"
							alt=""
							width={300}
							height={230}
						/>
						<h3>Participants in the Technoblock Forum in Iran</h3>
					</div>
					<div className={styles.awards_item}>
						<Image
							src="/image/index/awards/8.jpg"
							alt=""
							width={300}
							height={230}
						/>
						<h3>Blockchain Life's Mining Project of the Year 2022</h3>
					</div>
				</div>
			</section>

			<section className={styles.bussiness_wrapper}>
				<Image
					src="/image/index/image main.png"
					alt=""
					width={732}
					height={500}
				/>
				<div className={styles.business_info}>
					<h2 className="section__heading">Mining for Business</h2>
					<ul>
						<li>
							<span>01</span>
							The U.S. government is currently considering a bill to legally
							regulate mining
						</li>
						<li>
							<span>02</span>
							Favorable climate for mining and electricity surplus
						</li>
						<li>
							<span>03</span>
							Mining allows unrestricted currency transfers around the world,
							which is relevant because of the current sanctions
						</li>
					</ul>
					<LinkBtn title="Learn more" />
				</div>
			</section>

			<section className={styles.turnkey_wrapper}>
				<h2>Turnkey Mining</h2>
				<div className={styles.turnkey_content}>
					<div className={styles.turnkey_item}>
						<svg
							width="48"
							height="70"
							viewBox="0 0 48 70"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M24 43.5C34.4934 43.5 43 34.9934 43 24.5C43 14.0066 34.4934 5.5 24 5.5C13.5066 5.5 5 14.0066 5 24.5C5 34.9934 13.5066 43.5 24 43.5ZM24 48.5C37.2548 48.5 48 37.7548 48 24.5C48 11.2452 37.2548 0.5 24 0.5C10.7452 0.5 0 11.2452 0 24.5C0 37.7548 10.7452 48.5 24 48.5ZM24 39.5C32.2843 39.5 39 32.7843 39 24.5C39 16.2157 32.2843 9.5 24 9.5C15.7157 9.5 9 16.2157 9 24.5C9 32.7843 15.7157 39.5 24 39.5ZM26.4833 20.7067L24.4422 16.8382C24.2546 16.4826 23.7454 16.4826 23.5578 16.8382L21.5167 20.7067C21.4444 20.8438 21.3125 20.9396 21.1597 20.9661L16.8498 21.7118C16.4537 21.7803 16.2963 22.2646 16.5765 22.5529L19.625 25.6896C19.733 25.8007 19.7834 25.9557 19.7613 26.1092L19.1387 30.4386C19.0815 30.8366 19.4935 31.1359 19.8543 30.9585L23.7794 29.0285C23.9185 28.9601 24.0815 28.9601 24.2206 29.0285L28.1457 30.9585C28.5065 31.1359 28.9185 30.8366 28.8613 30.4386L28.2387 26.1092C28.2166 25.9557 28.267 25.8007 28.375 25.6896L31.4235 22.5529C31.7037 22.2646 31.5463 21.7803 31.1502 21.7118L26.8403 20.9661C26.6875 20.9396 26.5556 20.8438 26.4833 20.7067ZM7.5 68.0107V46.4741C9.33685 47.846 11.3503 48.9945 13.5 49.8795V67.0457L8.87863 68.9362C8.22075 69.2054 7.5 68.7215 7.5 68.0107ZM16.5 65.8184V50.9156C18.8843 51.5872 21.3995 51.9464 23.9985 51.9464C26.5987 51.9464 29.1148 51.5869 31.5 50.9147V65.8184L25.8932 63.5247C24.6799 63.0283 23.3202 63.0283 22.1068 63.5247L16.5 65.8184ZM34.5 67.0457V49.8783C36.6498 48.993 38.6632 47.8442 40.5 46.4719L40.5 68.0163C40.4962 68.724 39.7775 69.2046 39.1214 68.9362L34.5 67.0457Z"
								fill="#5820F6"
							></path>
						</svg>
						<p>We select equipment from the world's best manufacturers</p>
					</div>
					<div className={styles.turnkey_item}>
						<svg
							width="64"
							height="60"
							viewBox="0 0 64 60"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M9.24164 5.07167C9.03017 6.15956 8.96675 7.6969 9.01585 9.3662C9.02795 9.77756 9.04646 10.1866 9.06963 10.5862C11.2735 8.79574 13.727 7.38417 16.2503 6.28931C14.4945 5.02435 12.4385 4.28298 11.2821 4.01188C10.992 4.05198 10.5839 4.1959 10.097 4.47902C9.76981 4.66922 9.4744 4.88295 9.24164 5.07167ZM20.539 4.73241C17.7243 1.77568 13.625 0.397052 11.834 0.0388386L11.6398 0H11.4417C10.1314 0 8.9355 0.527367 8.08648 1.02098C7.20899 1.53115 6.47324 2.14005 6.0275 2.58578L5.66104 2.95224L5.51867 3.45056C5.02798 5.16797 4.9585 7.47499 5.01758 9.4838C5.07035 11.278 5.23364 13.0219 5.39089 14.2565C1.77181 18.7297 -0.457011 24.8191 0.0793235 33L9.91327 42C9.91327 40 10.2083 35.7 11.3884 34.5L13.3552 35C12.5363 41.9945 15.1212 56.677 32 59.4934C48.8788 56.677 51.4637 41.9945 50.6448 35L52.6116 34.5C53.7917 35.7 54.0867 40 54.0867 42L63.9207 33C64.457 24.8191 62.2282 18.7297 58.6091 14.2565C58.7663 13.0219 58.9296 11.278 58.9824 9.4838C59.0415 7.47499 58.972 5.16797 58.4813 3.45056L58.3389 2.95224L57.9725 2.58578C57.5267 2.14005 56.791 1.53115 55.9135 1.02098C55.0645 0.527367 53.8685 0 52.5583 0H52.3602L52.166 0.0388386C50.375 0.397052 46.2756 1.77568 43.461 4.73241C39.294 3.49054 35.2107 3.004 32 3.00002C28.7893 3.004 24.706 3.49054 20.539 4.73241ZM47.7496 6.2893C50.273 7.38417 52.7265 8.79574 54.9304 10.5862C54.9535 10.1866 54.972 9.77755 54.9841 9.3662C55.0332 7.6969 54.9698 6.15956 54.7583 5.07167C54.5256 4.88295 54.2302 4.66922 53.903 4.47902C53.4161 4.1959 53.008 4.05198 52.7179 4.01188C51.5615 4.28298 49.5055 5.02435 47.7496 6.2893ZM19 20.9998C22.6 20.5998 24.5 22.4998 25 23.4998C20.6 26.6997 18.5 23.8332 18 22L19 20.9998ZM39 23.4998C39.5 22.4998 41.4 20.5998 45 20.9998L46 22C45.5 23.8332 43.4 26.6997 39 23.4998ZM27.5 28C28.5 26.5 30.5 26 32.5 26C34.5 26 36.5 26.5 37.5 28C37.6227 28.1841 37.783 28.4058 37.9699 28.6642C39.3062 30.5117 42 34.2362 42 39.5C42 42.4286 40.8088 45.7147 39.0659 48.3114C37.8279 47.1335 35.0254 45.1164 32.1249 45.0048V45C32.0833 45 32.0416 45.0004 32 45.0012C31.9584 45.0004 31.9167 45 31.8751 45V45.0048C29.3985 45.1001 26.9932 46.5847 25.5725 47.7499C24.0285 45.2511 23 42.2213 23 39.5C23 34.2362 25.6938 30.5117 27.0301 28.6642L27.0301 28.6641L27.0301 28.664C27.217 28.4057 27.3773 28.184 27.5 28ZM32 48.5011C33.2725 48.5236 35.7592 48.8876 37.6646 50.1141C36.0843 51.8603 34.2542 53 32.5 53C30.6205 53 28.6538 51.6917 27.0006 49.7308C28.787 48.8097 30.8712 48.5211 32 48.5011ZM32 40L26.5 37.5C26.6667 36.3333 28 34 32 34C36 34 37.3333 36.3333 37.5 37.5L32 40Z"
								fill="#5820F6"
							></path>
						</svg>
						<p>We purchase, deliver and install it in our own data center</p>
					</div>
					<div className={styles.turnkey_item}>
						<svg
							width="46"
							height="64"
							viewBox="0 0 46 64"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M0 3C0 1.34315 1.34315 0 3 0H43C44.6569 0 46 1.34315 46 3V10C46 11.6569 44.6569 13 43 13H3C1.34315 13 0 11.6569 0 10V3ZM5 6.5C5 5.67157 5.67157 5 6.5 5H16.5C17.3284 5 18 5.67157 18 6.5C18 7.32843 17.3284 8 16.5 8H6.5C5.67157 8 5 7.32843 5 6.5ZM31.5 9C32.8807 9 34 7.88071 34 6.5C34 5.11929 32.8807 4 31.5 4C30.1193 4 29 5.11929 29 6.5C29 7.88071 30.1193 9 31.5 9ZM41 6.5C41 7.88071 39.8807 9 38.5 9C37.1193 9 36 7.88071 36 6.5C36 5.11929 37.1193 4 38.5 4C39.8807 4 41 5.11929 41 6.5ZM3 16C1.34315 16 0 17.3431 0 19V26C0 27.6569 1.34315 29 3 29H43C44.6569 29 46 27.6569 46 26V19C46 17.3431 44.6569 16 43 16H3ZM6.5 21C5.67157 21 5 21.6716 5 22.5C5 23.3284 5.67157 24 6.5 24H16.5C17.3284 24 18 23.3284 18 22.5C18 21.6716 17.3284 21 16.5 21H6.5ZM34 22.5C34 23.8807 32.8807 25 31.5 25C30.1193 25 29 23.8807 29 22.5C29 21.1193 30.1193 20 31.5 20C32.8807 20 34 21.1193 34 22.5ZM38.5 25C39.8807 25 41 23.8807 41 22.5C41 21.1193 39.8807 20 38.5 20C37.1193 20 36 21.1193 36 22.5C36 23.8807 37.1193 25 38.5 25ZM3 32C1.34315 32 0 33.3431 0 35V42C0 43.6569 1.34315 45 3 45H20V52.8027C19.0891 53.3296 18.3296 54.0891 17.8027 55H5C3.34315 55 2 56.3431 2 58C2 59.6569 3.34315 61 5 61H17.8027C18.8401 62.7934 20.7792 64 23 64C25.2208 64 27.1599 62.7934 28.1973 61H40C41.6569 61 43 59.6569 43 58C43 56.3431 41.6569 55 40 55H28.1973C27.6704 54.0891 26.9109 53.3296 26 52.8027V45H43C44.6569 45 46 43.6569 46 42V35C46 33.3431 44.6569 32 43 32H3ZM6.5 37C5.67157 37 5 37.6716 5 38.5C5 39.3284 5.67157 40 6.5 40H16.5C17.3284 40 18 39.3284 18 38.5C18 37.6716 17.3284 37 16.5 37H6.5ZM34 38.5C34 39.8807 32.8807 41 31.5 41C30.1193 41 29 39.8807 29 38.5C29 37.1193 30.1193 36 31.5 36C32.8807 36 34 37.1193 34 38.5ZM38.5 41C39.8807 41 41 39.8807 41 38.5C41 37.1193 39.8807 36 38.5 36C37.1193 36 36 37.1193 36 38.5C36 39.8807 37.1193 41 38.5 41ZM23 61C24.6569 61 26 59.6569 26 58C26 56.3431 24.6569 55 23 55C21.3431 55 20 56.3431 20 58C20 59.6569 21.3431 61 23 61Z"
								fill="#5820F6"
							></path>
						</svg>
						<p>Connecting equipment to the pool for more efficient mining</p>
					</div>
					<div className={styles.turnkey_item}>
						<svg
							width="66"
							height="66"
							viewBox="0 0 66 66"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M5.5 33C5.5 17.8122 17.8122 5.5 33 5.5C41.0624 5.5 48.3144 8.96743 53.3474 14.5H49.5C48.1193 14.5 47 15.6193 47 17C47 18.3807 48.1193 19.5 49.5 19.5H59.5C60.8807 19.5 62 18.3807 62 17V7C62 5.61929 60.8807 4.5 59.5 4.5C58.1193 4.5 57 5.61929 57 7V11.0852C51.0599 4.5838 42.5066 0.5 33 0.5C15.0507 0.5 0.5 15.0507 0.5 33C0.5 34.3807 1.61929 35.5 3 35.5C4.38071 35.5 5.5 34.3807 5.5 33ZM65.5 33C65.5 31.6193 64.3807 30.5 63 30.5C61.6193 30.5 60.5 31.6193 60.5 33C60.5 48.1878 48.1878 60.5 33 60.5C24.9376 60.5 17.6856 57.0326 12.6526 51.5H16.5C17.8807 51.5 19 50.3807 19 49C19 47.6193 17.8807 46.5 16.5 46.5H6.5C5.11929 46.5 4 47.6193 4 49L4 59C4 60.3807 5.11929 61.5 6.5 61.5C7.88071 61.5 9 60.3807 9 59L9 54.9148C14.9401 61.4162 23.4934 65.5 33 65.5C50.9493 65.5 65.5 50.9493 65.5 33ZM41.5129 12L19 34.1092H29.0211L23.4211 54L47 30.2006H36.7657L41.5129 12Z"
								fill="#5820F6"
							></path>
						</svg>
						<p>
							We provide uninterrupted 24-hour operation of equipment and
							service support
						</p>
					</div>
					<div className={styles.turnkey_item}>
						<svg
							width="63"
							height="54"
							viewBox="0 0 63 54"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M0.5 11C0.5 3.4 21 0.5 31.5 0.5C42 0.5 62.5 3.4 62.5 11L61 24.5C59.8333 25.6667 56.9 28.1 54.5 28.5C54.5522 28.187 54.5564 27.8414 54.5 27.4734V28.5V30.5C54.5 43.2025 44.2025 53.5 31.5 53.5C18.7975 53.5 8.5 43.2025 8.5 30.5V28.5V27.4734C8.44356 27.8414 8.44784 28.187 8.5 28.5C6.1 28.1 3.16667 25.6667 2 24.5L0.5 11ZM12.5 22.8542V30.5C12.5 40.9934 21.0066 49.5 31.5 49.5C41.9934 49.5 50.5 40.9934 50.5 30.5V22.8542C47.1314 20.9889 41.2637 19.5 31.5 19.5C21.7363 19.5 15.8686 20.9889 12.5 22.8542ZM8 16C15 12 24 10.5 31 10.5C38 10.5 47 12 54 16C51.6667 15 43.8 13 31 13C18.2 13 10.3333 15 8 16ZM32.9351 34.8068C32.3733 35.1609 32 35.7868 32 36.5C32 37.6046 32.8954 38.5 34 38.5C34.361 38.5 34.6997 38.4043 34.9921 38.237C34.8703 40.0595 33.3534 41.5 31.5 41.5C29.567 41.5 28 39.933 28 38C28 36.067 29.567 34.5 31.5 34.5C32.0114 34.5 32.4972 34.6097 32.9351 34.8068ZM37.5 38C37.5 41.3137 34.8137 44 31.5 44C28.1863 44 25.5 41.3137 25.5 38C25.5 34.6863 28.1863 32 31.5 32C34.8137 32 37.5 34.6863 37.5 38ZM39.5 38C39.5 42.4183 35.9183 46 31.5 46C27.0817 46 23.5 42.4183 23.5 38C23.5 33.5817 27.0817 30 31.5 30C35.9183 30 39.5 33.5817 39.5 38Z"
								fill="#5820F6"
							></path>
						</svg>
						<p>Provide access to monitoring and control systems</p>
					</div>
				</div>
				<LinkBtn title="Learn more" href="turnkey-mining" />
			</section>
		</div>
	)
}

export default Home
