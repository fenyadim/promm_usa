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
			<section className="team">
				<div className="wrapper">
					<div className="team__heading">
						<h2 className="section__heading">Our team</h2>
						<p className="team__description">
							For 7 years of work in the market our specialists have accumulated
							vast experience and thanks to it solve all the tasks efficiently
							and effectively.
						</p>
					</div>
					<ul className="team__list">
						<li
							className="team__item"
							style={{ backgroundImage: 'url(/image/company/1.png)' }}
						>
							<p className="team__item-heading">Timofey Kuzmenko</p>
							<span className="team__item-position">FOUNDER</span>
							<p className="team__item-description">
								Serial entrepreneur, has been in business since 2012. He founded
								several successful startups. With in-depth knowledge of digital
								assets and technology, he launched Promminer in 2016.
							</p>
						</li>
						<li
							className="team__item"
							style={{ backgroundImage: 'url(/image/company/4.png)' }}
						>
							<p className="team__item-heading">Eugene Degot</p>
							<span className="team__item-position">DIRECTOR GENERAL</span>
							<p className="team__item-description">
								The CEO, for 7 years, has been building effective management
								systems and organizing the work of the Promminer team at the
								highest level.
							</p>
						</li>
						<li
							className="team__item"
							style={{ backgroundImage: 'url(/image/company/2.png)' }}
						>
							<p className="team__item-heading">Alexander Fedorov</p>
							<span className="team__item-position">DEVELOPMENT DIRECTOR</span>
							<p className="team__item-description">
								Director of Development, since its inception Promminer has been
								working to ensure that relationships with customers and partners
								are built on a long-term basis. Thanks to his ideas, we are able
								to provide you with such a wide range of services.
							</p>
						</li>
						<li
							className="team__item"
							style={{ backgroundImage: 'url(/image/company/5.png)' }}
						>
							<p className="team__item-heading">Leonid Belous</p>
							<span className="team__item-position">
								CHIEF FINANCIAL OFFICER
							</span>
							<p className="team__item-description">
								Manager with many years of management experience in large
								international and Russian holding structures. Ensures the
								financial well-being of the company.
							</p>
						</li>
						<li
							className="team__item"
							style={{ backgroundImage: 'url(/image/company/4.png)' }}
						>
							<p className="team__item-heading">David Davtyan</p>
							<span className="team__item-position">SALES DIRECTOR</span>
							<p className="team__item-description">
								A manager with more than 10 years of experience. He is
								responsible for the quality of service and inspires the
								enthusiasm of all sales staff. David is absolutely sure that
								nothing is impossible and he always confirms this thesis with
								the sales plan
							</p>
						</li>
					</ul>
				</div>
			</section>
		</div>
	)
}

export default Company
