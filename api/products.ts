import { ProductType } from '@/types/product.type'

type DataType = {
  [slug: string]: Array<ProductType>
}

export const products: DataType = {
  miners: [{
    slug: 'bitmain-antminer-L7',
    src: '/image/products/Bitmain Antminer L7.jpg',
    brand: 'Bitmain',
    title: 'Asic майнер Bitmain Antminer L7 9500MH/s',
    price: 390100,
    availableCount: 10,
    hashrate: 9500,
    algorithm: 'Scrypt',
    coins: 'LTC/DOGE',
    status: ['hit', 'new'],
    desc: 'Описание'
  },
  {
    slug: 'bitmain-antminer-e9-pro',
    src: '/image/products/Bitmain Antminer E9 Pro.jpg',
    brand: 'Bitmain',
    title: 'Asic майнер Bitmain Antminer E9 Pro 3680 MH/s',
    price: 195050,
    availableCount: 0,
    hashrate: 3680,
    algorithm: 'Etchash/Ethash',
    coins: 'ETC/ETHW',
  },
  {
    slug: 'bitmain-antminer-e9-pro',
    src: '/image/products/Bitmain Antminer E9 Pro.jpg',
    brand: 'Bitmain',
    title: 'Asic майнер Bitmain Antminer E9 Pro 3680 MH/s',
    price: 230000,
    availableCount: 15,
    hashrate: 2300,
    algorithm: 'Etchash/Ethash',
    coins: 'ETC/ETHW',
  },
  {
    slug: 'bitmain-antminer-e9-pro',
    src: '/image/products/Bitmain Antminer E9 Pro.jpg',
    brand: 'Bitmain',
    title: 'Asic майнер Bitmain Antminer E9 Pro 3680 MH/s',
    price: 320000,
    availableCount: 10,
    hashrate: 2300,
    algorithm: 'Etchash/Ethash',
    coins: 'ETC/ETHW',
  },
  {
    slug: 'bitmain-antminer-e9-pro',
    src: '/image/products/Bitmain Antminer E9 Pro.jpg',
    brand: 'Bitmain',
    title: 'Asic майнер Bitmain Antminer E9 Pro 3680 MH/s',
    price: 195050,
    availableCount: 14,
    hashrate: 3680,
    algorithm: 'Etchash/Ethash',
    coins: 'ETC/ETHW',
  },
  {
    slug: 'bitmain-antminer-e9-pro',
    src: '/image/products/Bitmain Antminer E9 Pro.jpg',
    brand: 'Bitmain',
    title: 'Asic майнер Bitmain Antminer E9 Pro 3680 MH/s',
    price: 195050,
    availableCount: 14,
    hashrate: 5200,
    algorithm: 'Etchash/Ethash',
    coins: 'ETC/ETHW',
  },
  {
    slug: 'bitmain-antminer-e9-pro',
    src: '/image/products/Bitmain Antminer E9 Pro.jpg',
    brand: 'Whatsminer',
    title: 'Asic майнер Bitmain Antminer E9 Pro 3680 MH/s',
    price: 195050,
    availableCount: 14,
    hashrate: 3680,
    algorithm: 'Etchash/Ethash',
    coins: 'ETC/ETHW',
  }],
  containers: [{
    slug: 'pm-start',
    src: '/image/containers/start.jpg',
    title: 'Container PM Start',
    price: 850000,
    availableCount: 10,
    quantityPlace: 36,
    power: 198
  }, {
    slug: 'pm-small',
    src: '/image/containers/start.jpg',
    title: 'Container PM Small',
    price: 1400000,
    availableCount: 10,
    quantityPlace: 72,
    power: 415
  },
  {
    slug: 'pm-optimal',
    src: '/image/containers/optimal.jpg',
    title: 'Container PM Optimal',
    price: 2050000,
    availableCount: 0,
    quantityPlace: 192,
    power: 831
  }, {
    slug: 'pm-big',
    src: '/image/containers/big.jpeg',
    title: 'Container PM Big',
    price: 2850000,
    availableCount: 10,
    quantityPlace: 264,
    power: 1050
  }, {
    slug: 'pm-medium',
    src: '/image/containers/medium.jpeg',
    title: 'Container PM Medium',
    price: 1650000,
    availableCount: 10,
    quantityPlace: 120,
    power: 528
  }],
  business: [{
    slug: 'ready-start',
    src: '/image/ready-business/Start.jpg',
    title: 'Готовый бизнес-START',
    price: 6186000,
    availableCount: 10,
    containerMining: 36,
    income: 0.38,
  },
  ]
}
