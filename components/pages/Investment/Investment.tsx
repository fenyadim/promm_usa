import Image from 'next/image'
import { FC } from 'react'

import './investment.scss'

const Investment: FC = () => {
	return (
		<div className="investment">
			<section className="investment-banner">
				<div className="wrapper investment__wrapper">
					<h1 className="investment-banner__header">Investing in mining</h1>
					<p className="investment-banner__description">
						Turnkey business from the #1 company in the U.S. and Asia
					</p>
				</div>
			</section>
			<section className="investment-business">
				<div className="wrapper">
					<div className="investment-business__content">
						<video
							src="/video/investment/IMG_9754.mp4"
							autoPlay
							muted
							loop
							width="550px"
							height="550px"
							id="investment-business__video"
						></video>
						<div className="investment-business__right">
							<h3 className="investment-business__heading">Why invest now</h3>
							<p className="investment-business__description">
								Approximately every 4 years there is a sharp drop and then a
								sharp rise in the value of cryptocurrency. This happens as a
								result of halving - the natural process of limiting coin
								issuance. The next halving will be in 2024. Based on the
								previous halving, the value of BTC may increase several times.
							</p>
							<p className="investment-business__description">
								The prices for mining equipment are currently the lowest in the
								last few years. The entry threshold into this business is now
								lower than ever.
							</p>
							<p className="investment-business__description">
								Along with the growth of bitcoin will increase the price of
								equipment.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="investment-how">
				<div className="wrapper investment-how__wrapper">
					<h3 className="investment-how__heading">Why in the U.S.</h3>
					<ul className="investment-how__list">
						<li className="investment-how__item">
							<Image
								src="/image/investment/why_now_ico1.png"
								alt=""
								className="investment-how__svg"
								width={44}
								height={44}
							/>
							<div className="investment-how__item-text">
								<h5 className="investment-how__item-heading">Regulation</h5>
								<p className="investment-how__item-description">
									Right now, the U.S. government is dealing with the issue of
									regulating mining in the country.
								</p>
							</div>
						</li>
						<li className="investment-how__item">
							<Image
								src="/image/investment/why_now_ico2.png"
								alt=""
								className="investment-how__svg"
								width={44}
								height={44}
							/>
							<div className="investment-how__item-text">
								<h5 className="investment-how__item-heading">
									Favorable conditions
								</h5>
								<p className="investment-how__item-description">
									The cold climate and abundance of electricity are ideal
									conditions for hosting mining equipment. The U.S. is
									practically the only country that is ideal for mining
									cryptocurrencies.
								</p>
							</div>
						</li>
						<li className="investment-how__item">
							<Image
								src="/image/investment/why_now_ico3.png"
								alt=""
								className="investment-how__svg"
								width={44}
								height={44}
							/>
							<div className="investment-how__item-text">
								<h5 className="investment-how__item-heading">
									Transfers all over the world
								</h5>
								<p className="investment-how__item-description">
									Thanks to mining, you will be able to transfer money around
									the world without intermediaries in the form of banks and high
									commissions.{' '}
								</p>
							</div>
						</li>
					</ul>
				</div>
			</section>
			<section className="investment-we">
				<div className="wrapper">
					<h3 className="investment-we__heading">Why are we</h3>
					<div className="investment-we__description-pos">
						<p className="investment-we__description">
							Over 7 years we have helped tens of thousands of our clients to
							start earning money on cryptocurrency mining. Our infrastructure
							allows us to place the brought equipment in our own data center,
							monitor its condition, maintain and upgrade it. And highly
							qualified technical support specialists are available 24 hours a
							day and 7 days a week to help at the first request.
						</p>
					</div>
					<ul className="investment-we__list">
						<li className="investment-we__item">
							<span className="investment-we__number"> 1000</span>
							<p className="investment-we__list-text">
								Successful mining projects have been launched by our company.
							</p>
						</li>
						<li className="investment-we__item">
							<span className="investment-we__number">$40 million</span>
							<p className="investment-we__list-text">
								Earned by our clients from mining in 2022
							</p>
						</li>
						<li className="investment-we__item">
							<span className="investment-we__number">10 months</span>
							<p className="investment-we__list-text">
								Average payback period of our customers' investments{' '}
							</p>
						</li>
					</ul>
				</div>
			</section>
			<section className="investment-ready">
				<div className="wrapper">
					<h3 className="investment-ready__heading">
						Why won't there be a better moment?
					</h3>
					<p className="investment-ready__description">
						There is a favorable situation in the market for investment in
						mining, which is not expected to happen again in the next 7-10 years
					</p>
					<div className="image__wrapper">
						<Image
							src="/image/investment/1.PNG"
							alt=""
							className="investment-ready__img"
							fill
							style={{ objectFit: 'contain' }}
						/>
					</div>
				</div>
			</section>
			<section className="investment-step">
				<div className="wrapper">
					<div className="investment-step__content">
						<Image
							src="/image/investment/process.png"
							alt=""
							className="investment-step__image"
							width={530}
							height={530}
						/>
						<div className="investment-step__right">
							<h3 className="investment-step__heading">
								How will the process be structured
							</h3>
							<ul className="investment-step__list">
								<li className="investment-step__item">
									<span className="investment-step__number">1</span>
									<div className="investment-step__text">
										<h5 className="investment-step__item-heading">
											Matching equipment to your needs and budget
										</h5>
										<p className="investment-step__item-description">
											Depending on your goals and budget, our specialists will
											advise you which equipment is ideal for you.
										</p>
									</div>
								</li>
								<li className="investment-step__item">
									<span className="investment-step__number">2</span>
									<div className="investment-step__text">
										<h5 className="investment-step__item-heading">
											Signing the contract
										</h5>
										<p className="investment-step__item-description">
											We work openly and for the safety of our customers we have
											a contract.
										</p>
									</div>
								</li>
								<li className="investment-step__item">
									<span className="investment-step__number">3</span>
									<div className="investment-step__text">
										<h5 className="investment-step__item-heading">
											Equipment insurance
										</h5>
										<p className="investment-step__item-description">
											All the equipment we bring is fully insured. Therefore,
											your funds will be safe.
										</p>
									</div>
								</li>
								<li className="investment-step__item">
									<span className="investment-step__number">4</span>
									<div className="investment-step__text">
										<h5 className="investment-step__item-heading">
											Accommodation in the data center
										</h5>
										<p className="investment-step__item-description">
											The company's own data center allows you to place devices
											in a special-equipped room with round-the-clock security,
											cheap power and specialists who will monitor the devices
											around the clock.
										</p>
									</div>
								</li>
								<li className="investment-step__item">
									<span className="investment-step__number">5</span>
									<div className="investment-step__text">
										<h5 className="investment-step__item-heading">
											Connecting to the pool
										</h5>
										<p className="investment-step__item-description">
											Our specialists will connect your equipment to the mining
											pool, set up all the processes and do all the technical
											work.
										</p>
									</div>
								</li>
								<li className="investment-step__item">
									<span className="investment-step__number">6</span>
									<div className="investment-step__text">
										<h5 className="investment-step__item-heading">
											Providing technical support
										</h5>
										<p className="investment-step__item-description">
											In case of any malfunctions or questions during the
											operation of the equipment, our 24-hour technical support
											service will help you at any time.
										</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Investment
