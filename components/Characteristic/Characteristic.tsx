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
		payback,
	} = item

	return (
		<div className={styles.features}>
			{
				{
					miners: (
						<>
							<p>
								<span>Хэшрейт</span> — {hashrate} MH/s
							</p>
							<p>
								<span>Алгоритм</span> — {algorithm}
							</p>
							<p>
								<span>Добываемые монеты</span> — {coins}
							</p>
						</>
					),
					containers: (
						<>
							<p>
								<span>Количество мест</span> — {quantityPlace}
							</p>
							<p>
								<span>Общая мощность, кВт</span> — {power}
							</p>
						</>
					),
					business: (
						<>
							<p>
								<span>Контейнер для майнинга, мест</span> — {containerMining}
							</p>
							<p>
								<span>Доход в месяц</span> — {income} BTC
							</p>
							<p>
								<span>Срок окупаемости</span> — {payback} месяцев
							</p>
						</>
					),
				}[type]
			}
		</div>
	)
}

export default Characteristic
