import { FC } from 'react'

import { CatalogType, ProductType } from '@/types/product.type'

import styles from './Characteristic.module.scss'

interface ICharacteristic {
	type: CatalogType
	item: ProductType
}

const Characteristic: FC<ICharacteristic> = ({ type, item }) => {
	const {
		hashrate,
		algorithm,
		coins,
		quantityPlace,
		power,
		containerMining,
		income,
	} = item

	return (
		<div className={styles.features}>
			{
				{
					miners: (
						<>
							<p>
								<span>Hashrate</span> — {hashrate} MH/s
							</p>
							<p>
								<span>Algorithm</span> — {algorithm}
							</p>
							<p>
								<span>Coins to be mined</span> — {coins}
							</p>
						</>
					),
					containers: (
						<>
							<p>
								<span>Number of places</span> — {quantityPlace}
							</p>
							<p>
								<span>Total power, kW</span> — {power}
							</p>
						</>
					),
					business: (
						<>
							<p>
								<span>Mining container, places</span> — {containerMining}
							</p>
							<p>
								<span>Income per month</span> — {income} BTC
							</p>
						</>
					),
				}[type]
			}
		</div>
	)
}

export default Characteristic
