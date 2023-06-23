import { FC } from 'react'

import './help.scss'

const Help: FC = () => {
	return (
		<section className="delivery">
			<div className="wrapper">
				<h2 className="section__heading">Payment and delivery</h2>
				<h2 className="section__heading">Shipping</h2>
				<p className="delivery__description">
					In 7 years of operation, Promminer has made more than 50,000 shipments
					in a variety of ways.
				</p>
				<h3 className="section__heading">WAYS OF DELIVERY</h3>
				<h3 className="delivery__heading">Self-delivery </h3>
				<p className="delivery__description">
					To get your order from Promminer yourself, you can choose the pickup
					option. After the manager calls you and confirms the availability of
					the goods, you can come and pick up your order. Promminer is
					headquartered in Los Angeles at: 5261 W Imperial Hwy, Los Angeles, CA
					90045, USA
				</p>
				<h3 className="section__heading">UPS shipping</h3>
				<p className="delivery__description">
					Shipping by shipping company is a popular shipping option in the
					United States. This method involves using a third-party shipping
					company for the shipment. The delivery is made to the nearest delivery
					point in your city or to the address specified by you.
				</p>
				<h3 className="section__heading">Payment</h3>
				<p className="delivery__description">
					Payment for the selected equipment can be made in any convenient
					cryptocurrency
				</p>
			</div>
		</section>
	)
}

export default Help
