import Image from 'next/image'
import { FC } from 'react'

import './company.scss'

const Company: FC = () => {
	return (
		<div className="company_wrapper">
			<section className="company">
				<video
					src="/video/main-video-company-section-19mb (online-video-cutter.com).mp4"
					autoPlay
					muted
					loop
					width="100%"
					id="company__video"
				></video>
				<video
					src="/video/main-video-company-section-mobile (online-video-cutter.com) (1).mp4"
					autoPlay
					muted
					loop
					id="company__mobile"
				></video>
				<div className="wrapper">
					<ul className="company__list">
						<li className="company__item">
							<p className="company__heading">7 years</p>
							<p className="company__description">
								The company occupies a leading position in the international
								market
							</p>
						</li>
						<li className="company__item">
							<p className="company__heading">100 Experts</p>
							<p className="company__description">
								Experts make Promminer a leader in cryptocurrency mining
							</p>
						</li>
						<li className="company__item">
							<p className="company__heading">100,000 units</p>
							<p className="company__description">
								ASIC miners delivered to our customers
							</p>
						</li>
						<li className="company__item">
							<p className="company__heading">40 000 000 $</p>
							<p className="company__description">
								Earned by our customers in 2022
							</p>
						</li>
					</ul>
				</div>
			</section>
			<section className="history">
				<div className="wrapper history__wrapper">
					<div className="history__left">
						<Image
							src="/image/company/2 1.jpg"
							alt=""
							className="history__img"
							width={324}
							height={240}
						/>
						<Image
							src="/image/company/33.jpg"
							alt=""
							className="history__img"
							width={324}
							height={240}
						/>
						<Image
							src="/image/company/44.jpg"
							alt=""
							className="history__img"
							width={324}
							height={240}
						/>
						<Image
							src="/image/company/56.jpg"
							alt=""
							className="history__img"
							width={324}
							height={240}
						/>
					</div>
					<div className="history__right">
						<h2 className="section__heading">Company History</h2>
						<p className="history__description">
							We founded our company at the beginning of 2016, when the mining
							equipment business was just emerging. Since the company's
							inception, we decided to go beyond just supplying equipment and
							started providing our customers with exceptional service and
							turnkey solutions.
						</p>
						<p className="history__description">
							Our company offers its customers a full range of services:
							professional advice, ASIC-mainers maintenance, hosting and more.
							We are sure that this approach allows us to grow and develop
							continuously.
						</p>
						<p className="history__description">
							Today PROMMINER is a leading company in the global market with
							offices in the US, Europe, Asia and the Middle East. We have our
							own data center and build the infrastructure to meet the needs of
							the mining industry.
						</p>
						<p className="history__description">
							We are happy to offer our clients a full range of services and
							strive to make their business trouble-free and highly profitable.
						</p>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Company
