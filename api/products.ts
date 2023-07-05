import { ProductType } from '@/types/product'

export const products: Array<ProductType> = [
	{
		src: '/image/products/Bitmain Antminer L7.jpg',
		brand: 'Bitmain',
		title: 'Asic майнер Bitmain Antminer L7 9500MH/s',
		price: 390100,
		available: true,
		hashrate: '9500 MH/s',
		algorithm: 'Scrypt',
		coins: 'LTC/DOGE',
		status: ['hit', 'new'],
	},
	{
		src: '/image/products/Bitmain Antminer E9 Pro.jpg',
		brand: 'Bitmain',
		title: 'Asic майнер Bitmain Antminer E9 Pro 3680 MH/s',
		price: 195050,
		available: false,
		hashrate: '3680 MH/s',
		algorithm: 'Etchash/Ethash',
		coins: 'ETC/ETHW',
	},
]
