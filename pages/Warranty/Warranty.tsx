import { FC } from 'react'

import { LinkBtn } from '@/components'

import './warranty.scss'

const Warranty: FC = () => (
	<section className="warranty__wrapper">
		<h2 className="warranty__heading">Warranty</h2>
		<p className="warranty__description">
			Promminer is an official distributor of leading manufacturers of
			cryptocurrency mining equipment such as Bitmain, Whatsminer, Innosilicon,
			Canaan and others.
		</p>
		<p className="warranty__description">
			In case your mining equipment fails or there are problems during the
			warranty period, we provide technical support through our service center.
		</p>
		<p className="warranty__description">
			The Promminer service center consists of experienced specialists who are
			familiar with all models of ASIC-mainers on the market. They are ready to
			provide you with professional assistance and repair your mining equipment
			if needed. If the problem cannot be solved remotely, we will provide you
			with instructions on how to send the equipment for repair to our center.
		</p>
		<p className="warranty__description">
			It is important to note that the warranty does not cover damage to the
			equipment due to misuse, failure to follow operating recommendations, or
			physical damage caused by improper use.
		</p>
		<p className="warranty__description">
			We strive to provide a high level of satisfaction to our customers and
			guarantee their success in mining cryptocurrencies.
		</p>
		<p className="warranty__description" style={{ fontWeight: 600 }}>
			To check the warranty period, you can go to Warranty Check on the official
			website of Bitmain and WhatsMiner ASIC miner manufacturer, and enter the
			serial number (SN).
		</p>
		<div className="warranty__button">
			<LinkBtn
				title="Check the Bitmain warranty"
				href="https://m.bitmain.com/support/warranty"
			/>
			<LinkBtn
				title="Check the WhatsMiner warranty"
				href="https://www.whatsminer.com/src/views/support.html"
			/>
		</div>
	</section>
)

export default Warranty
