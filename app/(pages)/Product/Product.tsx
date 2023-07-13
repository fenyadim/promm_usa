'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { FC, useState } from 'react'
import {
	AiOutlineCloudServer,
	AiOutlineDatabase,
	AiOutlineSetting,
} from 'react-icons/ai'
import { GoTriangleRight } from 'react-icons/go'

import { AvailableItem, Characteristic } from '@/components'

import { useAppSelector } from '@/redux/hooks'

import { numberWithSpaces } from '@/utils/numberWithSpaces'

import { CatalogType, TabsType } from '@/types/product.type'

import styles from './Product.module.scss'

const tabs: TabsType[] = ['Description', 'Payment', 'Delivery']

const Product: FC = () => {
	const [activeTab, setActiveTab] = useState<TabsType>('Description')
	const state = useAppSelector((state) => state.productReducer)

	const path = usePathname()
	const searchParams = useSearchParams()
	const typeFind = searchParams.get('type')

	const items = state[typeFind as string].filter(
		({ slug }) => slug === path.split('/product/')[1]
	)[0]

	const { brand, title, src, price, availableCount } = items

	return (
		<section className={styles.wrapper}>
			<div className={styles.breadcrumbs}>
				{brand && (
					<>
						<Link href={`/catalog/asic-miners?brand=${brand}`}>{brand}</Link>
						<GoTriangleRight />
					</>
				)}
				<p>{title}</p>
			</div>
			<div className={styles.product_wrapper}>
				<div className={styles.image}>
					<Image src={src} alt={title} fill style={{ objectFit: 'contain' }} />
				</div>
				<div className={styles.product_info}>
					<h2>{title}</h2>
					<div className={styles.info_block}>
						<div className={styles.characteristic}>
							<h4>Characteristics:</h4>
							<Characteristic type={typeFind as CatalogType} item={items} />
						</div>
						<div className={styles.rightSide}>
							<div className={styles.order}>
								<div className={styles.price_block}>
									<h3>$ {numberWithSpaces(price)}</h3>
									<AvailableItem count={availableCount} />
								</div>
								<button>Order</button>
							</div>
							<div className={styles.links_block}>
								<Link href="">
									<AiOutlineDatabase size={20} />
									Free hosting in the data center
								</Link>
								<Link href="">
									<AiOutlineCloudServer size={20} />
									Free pool connection
								</Link>
								<Link href="">
									<AiOutlineSetting size={20} />
									Service
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.benefis_wrapper}>
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
			</div>
			<div className={styles.tabs_wrapper}>
				<div className={styles.tabs_nav}>
					{tabs.map((name) => (
						<button
							key={name}
							type="button"
							className={`${activeTab === name && styles.active_tab}`}
							onClick={() => setActiveTab(name)}
						>
							{name}
						</button>
					))}
				</div>
				<div className={styles.tabs_body}>
					<div
						style={
							activeTab === 'Description'
								? { display: 'block' }
								: { display: 'none' }
						}
					>
						<h3>{title}</h3>
						<h4>О товаре</h4>
						<p>
							Производитель Bitmain впервые презентовал улучшенную версию серии
							S19 в недалеком 2020 году. Несмотря на такой приличный промежуток
							времени, модель S19j pro по прежнему остается востребованной
							моделью как среди коммерческих майнеров, так и среди любителей.
						</p>
						<h4>Какую криптовалюту можно добывать </h4>
						<p>
							Алгоритм, на котором работает устройство SHA-256 — предназначено
							для добычи таких востребованных криптовалют, как ВТС, ВСН, LСС и
							другие.
						</p>
						<h4>Особенности оборудования</h4>
						<p>
							Новая модель немного длиннее и тяжелее предыдущей версии — это
							связано с увеличенным размером хэш-платы, из-за большего
							количества чипов. Блок питания остался такой же как в S19 pro. За
							охлаждение отвечают четыре вентилятора — два мощных на вдув, и по
							принципу аэродинамики чуть менее мощные на выдув. В этой версии
							чипы потребляют чуть меньше электроэнергии, как следствие,
							уменьшилось тепловыделение. Сама плата охлаждается с одной стороны
							двумя металлическими пластинами радиатора, а с другой группой
							более мелких радиаторов припаянных к плате — это необходимо для
							более эффективного теплоотвода с двух сторон платы. Также
							улучшилась схема расположения комплектующих для более эффективного
							теплоотведения и отказоустойчивости устройства.
						</p>
						<h4>Где лучше всего поставить данное оборудование </h4>
						<p>
							Размещать данное оборудование лучше всего в просторных, хорошо
							проветриваемых помещениях, так как во время работы он будет
							выделять достаточно много тепла.
						</p>
						<h4>О производителе</h4>
						<p>
							Производитель данного оборудования мировой лидер в области
							майнинга, компания Bitmain. Компания славится передовыми
							технологиями в области вычислительной техники и надежностью своего
							оборудования.
						</p>
					</div>
					<div
						style={
							activeTab === 'Payment'
								? { display: 'block' }
								: { display: 'none' }
						}
					>
						<h4>Payment</h4>
						<p>
							Shipping by shipping company is a popular shipping option in the
							United States. This method involves using a third-party shipping
							company for the shipment. The delivery is made to the nearest
							delivery point in your city or to the address specified by you.
						</p>
					</div>
					<div
						style={
							activeTab === 'Delivery'
								? { display: 'block' }
								: { display: 'none' }
						}
					>
						<h3>Ways of delivery</h3>
						<h4>Self-delivery</h4>
						<p>
							To get your order from Promminer yourself, you can choose the
							pickup option. After the manager calls you and confirms the
							availability of the goods, you can come and pick up your order.
							Promminer is headquartered in Los Angeles at: 5261 W Imperial Hwy,
							Los Angeles, CA 90045, USA
						</p>
						<h4>UPS shipping</h4>
						<p>
							Shipping by shipping company is a popular shipping option in the
							United States. This method involves using a third-party shipping
							company for the shipment. The delivery is made to the nearest
							delivery point in your city or to the address specified by you.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Product
