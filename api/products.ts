import { ProductType } from '@/types/product.type'

type DataType = {
  [slug: string]: Array<ProductType>
}

export const products: DataType = {
  miners: [

    // WHATSMINER

    {
      slug: 'microbt-whatsminer-m30S',
      src: '/image/products/M30S.jpg',
      brand: 'Whatsminer',
      title: 'Asic miner Whatsminer M30S 88 Th/s',
      price: 390100,
      availableCount: 75,
      hashrate: 88,
      algorithm: 'SHA-256',
      coins: 'Bitcoin',
      status: [],
      desc: 'Whatsminer M30S has a metal case that acts as a protection against mechanical impacts. Reliable chips are designed to ensure long and uninterrupted operation of the device. Compared to the last model of this line, the M30S has a more compact power supply, which allowed to reduce the weight by almost 1 kilogram.  The cooling system of the device consists of two large coolers. They are engaged in blowing out the design and maintaining the optimal temperature of the chips. And the built-in power supply unit is responsible for ensuring stable performance.'
    },
    {
      slug: 'microbt-whatsminer-m30S++',
      src: '/image/products/M30S++.jpg',
      brand: 'Whatsminer',
      title: 'Asic miner Whatsminer M30S++ 112 Th/s',
      price: 390100,
      availableCount: 34,
      hashrate: 112,
      algorithm: 'SHA-256',
      coins: 'Bitcoin',
      status: ['hit'],
      desc: 'Despite the fact that Whatsminer M30S++ is considered a rather simple device - it is able to compete with one of the best Bitmain models - S19 PRO. The device is perfect for beginner miners and commercial customers. An undeniable plus of this miner is that due to the favorable ratio of power consumption and hash rate, it will not lose profitability even in case of a drop in Bitcoin or other cryptocurrency.'
    },
    {
      slug: 'microbt-whatsminer-m50S',
      src: '/image/products/M50S.jpg',
      brand: 'Whatsminer',
      title: 'Asic miner Whatsminer M50S 130 Th/s',
      price: 390100,
      availableCount: 110,
      hashrate: 130,
      algorithm: 'SHA-256',
      coins: 'Bitcoin',
      status: ['hit', 'new'],
      desc: 'The 130th model M50S became a kind of MicroBT s answer to its competitors from Bitmain, who also announced new products in their lineup at the end of 2021. The new equipment from both companies is based on new chips developed by Samsung using "5-nanometer" technology. With their help, it is possible to reduce the size of the miner and heat accumulation during operation, as well as increase the efficiency of the workflow by 15%.'
    },
    {
      slug: 'microbt-whatsminer-m50',
      src: '/image/products/M50.jpg',
      brand: 'Whatsminer',
      title: 'Asic miner Whatsminer M50 120 Th/s',
      price: 390100,
      availableCount: 322,
      hashrate: 120,
      algorithm: 'SHA-256',
      coins: 'Bitcoin',
      status: ['hit', 'new'],
      desc: 'The 120th model M50 became a kind of MicroBT s answer to its competitors from Bitmain, who also announced new products in their lineup at the end of 2021. The new equipment from both companies is based on new chips developed by Samsung using "5-nanometer" technology. With their help, it is possible to reduce the size of the miner and heat accumulation during operation, as well as increase the efficiency of the workflow by 15%.'
    },
    {
      slug: 'microbt-whatsminer-m50s+',
      src: '/image/products/M50S+.jpg',
      brand: 'Whatsminer',
      title: 'Asic miner Whatsminer M50S+ 142 Th/s',
      price: 390100,
      availableCount: 70,
      hashrate: 120,
      algorithm: 'SHA-256',
      coins: 'Bitcoin',
      status: ['hit', 'new'],
      desc: 'Whatsminer M50S+ 142TH/s 3408W is a powerful mining machine designed by MicroBT for cryptocurrency mining. It is equipped with modern chips that provide high performance and energy efficiency in the process of mining. Against the background of all the advantages of this device, it is worth highlighting the modern cooling system, which even during continuous operation of the device does not allow it to overheat and ensures the optimal condition of the ASIC-miner.'
    },
    {
      slug: 'microbt-whatsminer-m50s++',
      src: '/image/products/M50S++.jpg',
      brand: 'Whatsminer',
      title: 'Asic miner Whatsminer M50S++ 150 Th/s',
      price: 390100,
      availableCount: 71,
      hashrate: 150,
      algorithm: 'SHA-256',
      coins: 'Bitcoin',
      status: ['hit', 'new'],
      desc: 'Whatsminer M50S++ provides a hash rate of 150 TH/s. This means that it is capable of performing a huge number of hash operations per second, which is a key factor for efficient cryptocurrency mining. A high hash rate allows you to mine cryptocurrency at a much higher speed, increasing the chances of getting blocks and rewards. This is especially important in networks with high complexity, where competition between miners is quite strong. However, in addition to its high performance, the Whatsminer M50S++ also features impressive energy efficiency. Thanks to its energy efficiency, Whatsminer M50S++ helps to reduce operating costs and increase the profitability of mining.'
    },
    {
      slug: 'microbt-whatsminer-m33s+',
      src: '/image/products/M33S+.jpg',
      brand: 'Whatsminer',
      title: 'Asic miner Whatsminer M33S+ 220 Th/s',
      price: 390100,
      availableCount: 9,
      hashrate: 220,
      algorithm: 'SHA-256',
      coins: 'Bitcoin',
      status: ['new'],
      desc: 'Whatsminer M33S+ belongs to the top line of miners from one of the leading companies in the MicroBT industry. Like the M53, this model has a revolutionary cooling system and is best suited for professional mining.'
    },
    {
      slug: 'microbt-whatsminer-m33s++',
      src: '/image/products/M33S++.jpg',
      brand: 'Whatsminer',
      title: 'Asic miner Whatsminer M33S++ 240 Th/s',
      price: 390100,
      availableCount: 15,
      hashrate: 240,
      algorithm: 'SHA-256',
      coins: 'Bitcoin',
      status: ['new'],
      desc: 'Distinctive features of this model are high hash rate and absence of noise. Externally, it is exactly similar to the M53 device, which has almost identical performance characteristics. However, it is Whatsminer M33S++ that can be called the most powerful miner in its lineup.'
    },
    {
      slug: 'microbt-whatsminer-m56',
      src: '/image/products/M56.jpg',
      brand: 'Whatsminer',
      title: 'Asic miner Whatsminer M56 194 Th/s',
      price: 390100,
      availableCount: 50,
      hashrate: 194,
      algorithm: 'SHA-256',
      coins: 'Bitcoin',
      status: ['new', 'hit'],
      desc: 'In Whatsminer M56, the manufacturing company has completely revised the principles of its work. They got an ASIC-miner, which emits heat during calculations and is cooled down by immersion liquid, not by fans, as before. It is thanks to this that it was possible to extend the life of this device.'
    },
    {
      slug: 'microbt-whatsminer-m56s',
      src: '/image/products/M56.jpg',
      brand: 'Whatsminer',
      title: 'Asic miner Whatsminer M56 212 Th/s',
      price: 390100,
      availableCount: 50,
      hashrate: 212,
      algorithm: 'SHA-256',
      coins: 'Bitcoin',
      status: ['new', 'hit'],
      desc: 'In Whatsminer M56S, the manufacturing company has completely revised the principles of its work. They got an ASIC-miner, which emits heat during calculations and is cooled down by immersion liquid, not by fans, as before. It is thanks to this that it was possible to extend the life of this device.'
    },
    {
      slug: 'microbt-whatsminer-m53',
      src: '/image/products/M56.jpg',
      brand: 'Whatsminer',
      title: 'Asic miner Whatsminer M53 246 Th/s',
      price: 390100,
      availableCount: 30,
      hashrate: 246,
      algorithm: 'SHA-256',
      coins: 'Bitcoin',
      status: ['new'],
      desc: 'The M53 has a built-in power supply that ensures stable operation for a long period of time and protects against voltage surges. The cooling system consists of two powerful coolers that efficiently blow the device and protect it from overheating. M53 is quite easy to set up, after connecting power and internet it is ready to mine cryptocurrency almost immediately - this makes it convenient for use by both beginners and professionals.'
    },
    {
      slug: 'microbt-whatsminer-m53s',
      src: '/image/products/M56.jpg',
      brand: 'Whatsminer',
      title: 'Asic miner Whatsminer M53S 260 Th/s',
      price: 390100,
      availableCount: 30,
      hashrate: 260,
      algorithm: 'SHA-256',
      coins: 'Bitcoin',
      status: ['new'],
      desc: 'The M53S has a built-in power supply that ensures stable operation for a long period of time and protects against voltage surges. The cooling system consists of two powerful coolers that efficiently blow the device and protect it from overheating. M53S is quite easy to set up, after connecting power and internet it is ready to mine cryptocurrency almost immediately - this makes it convenient for use by both beginners and professionals.'
    },
    {
      slug: 'microbt-whatsminer-m53s++',
      src: '/image/products/M53s++.jpg',
      brand: 'Whatsminer',
      title: 'Asic miner Whatsminer M53S++ 320 Th/s',
      price: 390100,
      availableCount: 20,
      hashrate: 320,
      algorithm: 'SHA-256',
      coins: 'Bitcoin',
      status: ['new'],
      desc: 'The M53S++ has a built-in power supply that ensures stable operation for a long period of time and protects against voltage surges. The cooling system consists of two powerful coolers that efficiently blow the device and protect it from overheating. M53S++ is quite easy to set up, after connecting power and internet it is ready to mine cryptocurrency almost immediately - this makes it convenient for use by both beginners and professionals.'
    },

    // Canaan
    {
      slug: 'canaan-avalon-a1366',
      src: '/image/products/a1366.jpg',
      brand: 'Canaan',
      title: 'Asic miner Canaan Avalon A1366',
      price: 390100,
      availableCount: 4,
      hashrate: 130,
      algorithm: 'SHA-256',
      coins: 'Bitcoin',
      status: [],
      desc: 'The Avalon A1366 130th/s belongs to the new generation of devices from Canaan. It has made a significant step forward in terms of design and production quality, and customers immediately responded - sales of this model were a great success. The new device has allowed Canaan to once again compete with the leading companies in the mining equipment industry - Bitmain and MicroBT.'
    },
    {
      slug: 'canaan-avalon-a1346',
      src: '/image/products/a1366.jpg',
      brand: 'Canaan',
      title: 'Asic miner Canaan Avalon A1346',
      price: 390100,
      availableCount: 5,
      hashrate: 110,
      algorithm: 'SHA-256',
      coins: 'Bitcoin',
      status: [],
      desc: 'The Avalon A1346 110th/s belongs to the new generation of devices from Canaan. It has made a significant step forward in terms of design and production quality, and customers immediately responded - sales of this model were a great success. The new device has allowed Canaan to once again compete with the leading companies in the mining equipment industry - Bitmain and MicroBT.'
    },
    {
      slug: 'canaan-avalon-a1246',
      src: '/image/products/a1246.jpg',
      brand: 'Canaan',
      title: 'Asic miner Canaan Avalon A1246',
      price: 390100,
      availableCount: 8,
      hashrate: 90,
      algorithm: 'SHA-256',
      coins: 'Bitcoin',
      status: [],
      desc: 'For several years of production and sales, this asic has managed to gain a reputation as an efficient and productive device that perfectly copes with its tasks. It consists of a sturdy aluminum case and a built-in power supply. An undoubted advantage of this model is that it can be placed both horizontally and vertically. This creates additional convenience in organizing space for owners of large mining farms.'
    },
    {
      slug: 'canaan-avalon-a1266',
      src: '/image/products/a1246.jpg',
      brand: 'Canaan',
      title: 'Asic miner Canaan Avalon A1266',
      price: 390100,
      availableCount: 4,
      hashrate: 100,
      algorithm: 'SHA-256',
      coins: 'Bitcoin',
      status: [],
      desc: 'For several years of production and sales, this asic has managed to gain a reputation as an efficient and productive device that perfectly copes with its tasks. It consists of a sturdy aluminum case and a built-in power supply. An undoubted advantage of this model is that it can be placed both horizontally and vertically. This creates additional convenience in organizing space for owners of large mining farms.'
    },

    // iPollo

    {
      slug: 'iPollo-v1-eth-3500',
      src: '/image/products/v1eth.jpg',
      brand: 'iPollo',
      title: 'Asic miner iPollo V1 ETH 3600 ',
      price: 390100,
      availableCount: 25,
      hashrate: 3600,
      algorithm: 'Etchash/Ethash',
      coins: 'ETC, ZIL',
      status: [],
      desc: 'Externally, this device does not differ much from other miners. Except, perhaps, for the bright gold color. The design of IPOLLO V1 is completely copied from Antminer S19. Four large fans are responsible for maintaining the optimal temperature. A natural consequence of the high power of the miner is a lot of noise during operation.  Thanks to its high hash rate, which increases the chances of successfully finding the next block and getting a reward, this miner is among the top most efficient cryptocurrency mining devices on the market.'
    },
    {
      slug: 'iPollo-g1',
      src: '/image/products/g1.jpg',
      brand: 'iPollo',
      title: 'Asic miner iPollo G1 Green Miner',
      price: 390100,
      availableCount: 25,
      hashrate: 36,
      algorithm: 'Etchash/Ethash',
      coins: 'GRIN',
      status: [],
      desc: 'Externally, this device does not differ much from other miners. Except, perhaps, for the bright gold color. The design of IPOLLO G1 is completely copied from Antminer S19. Four large fans are responsible for maintaining the optimal temperature. A natural consequence of the high power of the miner is a lot of noise during operation.  Thanks to its high hash rate, which increases the chances of successfully finding the next block and getting a reward, this miner is among the top most efficient cryptocurrency mining devices on the market.'
    },
    {
      slug: 'iPollo-v1-mini',
      src: '/image/products/v1mini.jpg',
      brand: 'iPollo',
      title: 'Asic miner iPollo V1 MINI SE PLUS',
      price: 390100,
      availableCount: 120,
      hashrate: 400,
      algorithm: 'Etchash/Ethash',
      coins: 'ETC, ZIL',
      status: ['hit'],
      desc: 'The V1 Mini SE PLUS looks like a router - thanks to its size it can be moved without much effort, if necessary. The metal case protects the device from mechanical damage, dust and dirt. It is equipped with one medium-sized cooler, which copes with its work quite well and does not allow the device to overheat.'
    },

    // Goldshell

    {
      slug: 'Goldshell-kd-lite',
      src: '/image/products/kd.jpg',
      brand: 'Goldshell',
      title: 'Asic miner Goldshell KD Lite',
      price: 390100,
      availableCount: 35,
      hashrate: 16.2,
      algorithm: 'Blake2S',
      coins: 'KDA',
      status: [],
      desc: 'The distinctive feature of KD Lite compared to other Kadena miners is its high power and, as a consequence, higher power consumption.  The device case is made of aluminum and has the shape of a classic system unit. Massive bladed fans, visible to the naked eye, cool the chips during active operation.  Goldshell Lite Max has its own software capable of independently detecting errors during operation. In case of failure, the device has an automatic reboot mechanism.'
    },
    {
      slug: 'Goldshell-kd-max',
      src: '/image/products/kd.jpg',
      brand: 'Goldshell',
      title: 'Asic miner Goldshell KD Max',
      price: 390100,
      availableCount: 50,
      hashrate: 40,
      algorithm: 'Blake2S',
      coins: 'KDA',
      status: ['hit'],
      desc: 'The distinctive feature of KD MAX compared to other Kadena miners is its high power and, as a consequence, higher power consumption.  The device case is made of aluminum and has the shape of a classic system unit. Massive bladed fans, visible to the naked eye, cool the chips during active operation.  Goldshell Max has its own software capable of independently detecting errors during operation. In case of failure, the device has an automatic reboot mechanism.'
    },

    // Bitmain

  ],
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
