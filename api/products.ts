import { ProductType } from '@/types/product.type'

type DataType = {
  [slug: string]: Array<ProductType>
}

export const products: DataType = {
  miners: [

    // WHATSMINER

    {
      slug: 'microbt-whatsminer-m30S',
      src: '/image/products/m30s.jpg',
      brand: 'Whatsminer',
      title: 'Asic miner Whatsminer M30S 88 Th/s',
      price: 1100,
      availableCount: ,
      hashrate: 88,
      algorithm: 'SHA-256',
      coins: 'Bitcoin',
      status: [],
      desc: 'Whatsminer M30S has a metal case that acts as a protection against mechanical impacts. Reliable chips are designed to ensure long and uninterrupted operation of the device. Compared to the last model of this line, the M30S has a more compact power supply, which allowed to reduce the weight by almost 1 kilogram.  The cooling system of the device consists of two large coolers. They are engaged in blowing out the design and maintaining the optimal temperature of the chips. And the built-in power supply unit is responsible for ensuring stable performance.'
    },
    {
      slug: 'microbt-whatsminer-m30S++',
      src: '/image/products/m30s++.jpg',
      brand: 'Whatsminer',
      title: 'Asic miner Whatsminer M30S++ 112 Th/s',
      price: 1470,
      availableCount: 34,
      hashrate: 112,
      algorithm: 'SHA-256',
      coins: 'Bitcoin',
      status: ['hit'],
      desc: 'Despite the fact that Whatsminer M30S++ is considered a rather simple device - it is able to compete with one of the best Bitmain models - S19 PRO. The device is perfect for beginner miners and commercial customers. An undeniable plus of this miner is that due to the favorable ratio of power consumption and hash rate, it will not lose profitability even in case of a drop in Bitcoin or other cryptocurrency.'
    },
    {
      slug: 'microbt-whatsminer-m50S',
      src: '/image/products/m50s.jpg',
      brand: 'Whatsminer',
      title: 'Asic miner Whatsminer M50S 130 Th/s',
      price: 1970,
      availableCount: 110,
      hashrate: 130,
      algorithm: 'SHA-256',
      coins: 'Bitcoin',
      status: ['hit', 'new'],
      desc: 'The 130th model M50S became a kind of MicroBT s answer to its competitors from Bitmain, who also announced new products in their lineup at the end of 2021. The new equipment from both companies is based on new chips developed by Samsung using "5-nanometer" technology. With their help, it is possible to reduce the size of the miner and heat accumulation during operation, as well as increase the efficiency of the workflow by 15%.'
    },
    {
      slug: 'microbt-whatsminer-m50',
      src: '/image/products/m50.jpg',
      brand: 'Whatsminer',
      title: 'Asic miner Whatsminer M50 120 Th/s',
      price: 1890,
      availableCount: 322,
      hashrate: 120,
      algorithm: 'SHA-256',
      coins: 'Bitcoin',
      status: ['hit', 'new'],
      desc: 'The 120th model M50 became a kind of MicroBT s answer to its competitors from Bitmain, who also announced new products in their lineup at the end of 2021. The new equipment from both companies is based on new chips developed by Samsung using "5-nanometer" technology. With their help, it is possible to reduce the size of the miner and heat accumulation during operation, as well as increase the efficiency of the workflow by 15%.'
    },
    {
      slug: 'microbt-whatsminer-m50s+',
      src: '/image/products/m50s+.jpg',
      brand: 'Whatsminer',
      title: 'Asic miner Whatsminer M50S+ 142 Th/s',
      price: 2190,
      availableCount: 70,
      hashrate: 142000,
      algorithm: 'SHA-256',
      coins: 'Bitcoin',
      status: ['hit', 'new'],
      desc: 'Whatsminer M50S+ 142TH/s 3408W is a powerful mining machine designed by MicroBT for cryptocurrency mining. It is equipped with modern chips that provide high performance and energy efficiency in the process of mining. Against the background of all the advantages of this device, it is worth highlighting the modern cooling system, which even during continuous operation of the device does not allow it to overheat and ensures the optimal condition of the ASIC-miner.'
    },
    {
      slug: 'microbt-whatsminer-m50s++',
      src: '/image/products/m50s++.jpg',
      brand: 'Whatsminer',
      title: 'Asic miner Whatsminer M50S++ 150 Th/s',
      price: 2400,
      availableCount: 71,
      hashrate: 150000,
      algorithm: 'SHA-256',
      coins: 'Bitcoin',
      status: ['hit', 'new'],
      desc: 'Whatsminer M50S++ provides a hash rate of 150 TH/s. This means that it is capable of performing a huge number of hash operations per second, which is a key factor for efficient cryptocurrency mining. A high hash rate allows you to mine cryptocurrency at a much higher speed, increasing the chances of getting blocks and rewards. This is especially important in networks with high complexity, where competition between miners is quite strong. However, in addition to its high performance, the Whatsminer M50S++ also features impressive energy efficiency. Thanks to its energy efficiency, Whatsminer M50S++ helps to reduce operating costs and increase the profitability of mining.'
    },
    {
      slug: 'microbt-whatsminer-m33s+',
      src: '/image/products/m33s+.jpg',
      brand: 'Whatsminer',
      title: 'Asic miner Whatsminer M33S+ 220 Th/s',
      price: 3550,
      availableCount: 9,
      hashrate: 220,
      algorithm: 'SHA-256',
      coins: 'Bitcoin',
      status: ['new'],
      desc: 'Whatsminer M33S+ belongs to the top line of miners from one of the leading companies in the MicroBT industry. Like the M53, this model has a revolutionary cooling system and is best suited for professional mining.'
    },
    {
      slug: 'microbt-whatsminer-m33s++',
      src: '/image/products/m33s++.jpg',
      brand: 'Whatsminer',
      title: 'Asic miner Whatsminer M33S++ 240 Th/s',
      price: 3990,
      availableCount: 15,
      hashrate: 240,
      algorithm: 'SHA-256',
      coins: 'Bitcoin',
      status: ['new'],
      desc: 'Distinctive features of this model are high hash rate and absence of noise. Externally, it is exactly similar to the M53 device, which has almost identical performance characteristics. However, it is Whatsminer M33S++ that can be called the most powerful miner in its lineup.'
    },
    {
      slug: 'microbt-whatsminer-m56',
      src: '/image/products/m56.jpg',
      brand: 'Whatsminer',
      title: 'Asic miner Whatsminer M56 194 Th/s',
      price: 3400,
      availableCount: 50,
      hashrate: 194,
      algorithm: 'SHA-256',
      coins: 'Bitcoin',
      status: ['new', 'hit'],
      desc: 'In Whatsminer M56, the manufacturing company has completely revised the principles of its work. They got an ASIC-miner, which emits heat during calculations and is cooled down by immersion liquid, not by fans, as before. It is thanks to this that it was possible to extend the life of this device.'
    },
    {
      slug: 'microbt-whatsminer-m56s',
      src: '/image/products/m56.jpg',
      brand: 'Whatsminer',
      title: 'Asic miner Whatsminer M56 212 Th/s',
      price: 3700,
      availableCount: 50,
      hashrate: 212,
      algorithm: 'SHA-256',
      coins: 'Bitcoin',
      status: ['new', 'hit'],
      desc: 'In Whatsminer M56S, the manufacturing company has completely revised the principles of its work. They got an ASIC-miner, which emits heat during calculations and is cooled down by immersion liquid, not by fans, as before. It is thanks to this that it was possible to extend the life of this device.'
    },
    {
      slug: 'microbt-whatsminer-m53',
      src: '/image/products/m56.jpg',
      brand: 'Whatsminer',
      title: 'Asic miner Whatsminer M53 246 Th/s',
      price: 3850,
      availableCount: 30,
      hashrate: 246,
      algorithm: 'SHA-256',
      coins: 'Bitcoin',
      status: ['new'],
      desc: 'The M53 has a built-in power supply that ensures stable operation for a long period of time and protects against voltage surges. The cooling system consists of two powerful coolers that efficiently blow the device and protect it from overheating. M53 is quite easy to set up, after connecting power and internet it is ready to mine cryptocurrency almost immediately - this makes it convenient for use by both beginners and professionals.'
    },
    {
      slug: 'microbt-whatsminer-m53s',
      src: '/image/products/m56.jpg',
      brand: 'Whatsminer',
      title: 'Asic miner Whatsminer M53S 260 Th/s',
      price: 4150,
      availableCount: 30,
      hashrate: 260,
      algorithm: 'SHA-256',
      coins: 'Bitcoin',
      status: ['new'],
      desc: 'The M53S has a built-in power supply that ensures stable operation for a long period of time and protects against voltage surges. The cooling system consists of two powerful coolers that efficiently blow the device and protect it from overheating. M53S is quite easy to set up, after connecting power and internet it is ready to mine cryptocurrency almost immediately - this makes it convenient for use by both beginners and professionals.'
    },
    {
      slug: 'microbt-whatsminer-m53s++',
      src: '/image/products/m53s++.jpg',
      brand: 'Whatsminer',
      title: 'Asic miner Whatsminer M53S++ 320 Th/s',
      price: 4500,
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
      price: 1890,
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
      price: 2050,
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
      price: 1400,
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
      price: 1550,
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

    {
      slug: 'Bitmain-Antminer-L7',
      src: '/image/products/L7.jpg',
      brand: 'Bitmain',
      title: 'Asic miner Bitmain Antminer L7 9500MH/s',
      price: 4800,
      availableCount: 270,
      hashrate: 9500,
      algorithm: 'Scrypt',
      coins: 'LTC/DOGE',
      status: ['hit'],
      desc: 'This hardware has four fans for cooling the boards and an additional three fans built into the power supply. L7 also has a flow control function, which allows it to adjust to the current level of electricity costs - that is, the device adjusts its own performance to reduce losses from mining due to high electricity prices. In general, this model is practically no different from the S19, except for increased power and different algorithms.'
    },
    {
      slug: 'Bitmain-Antminer-S19PX',
      src: '/image/products/s19xp.jpg',
      brand: 'Bitmain',
      title: 'Asic miner Bitmain Antminer S19 XP 141TH/s',
      price: 3270,
      availableCount: 73,
      hashrate: 141000,
      algorithm: 'SHA-256',
      coins: 'BTC/BCH',
      status: ['new'],
      desc: 'Antminer S19 XP is a powerful miner with impressive specifications and features. Bitmain first announced this model in 2021. The first thing that stands out about this machine is its high performance and energy efficiency, with a relatively low price and quick payback.'
    },
    {
      slug: 'Bitmain-Antminer-S19J PRO',
      src: '/image/products/s19xp.jpg',
      brand: 'Bitmain',
      title: 'Asic miner Bitmain Antminer S19J PRO+ 122TH/S',
      price: 1840,
      availableCount: 22,
      hashrate: 122,
      algorithm: 'SHA-256',
      coins: 'BTC/BCH',
      status: [],
      desc: 'Antminer S19J PRO is a powerful miner with impressive specifications and features. Bitmain first announced this model in 2021. The first thing that stands out about this machine is its high performance and energy efficiency, with a relatively low price and quick payback.'
    },
    {
      slug: 'Bitmain-Antminer-S19PRO',
      src: '/image/products/s19xp.jpg',
      brand: 'Bitmain',
      title: 'Asic miner Bitmain Antminer S19 PRO 110TH/S',
      price: 1650,
      availableCount: 50,
      hashrate: 110,
      algorithm: 'SHA-256',
      coins: 'BTC/BCH',
      status: [],
      desc: 'Antminer S19 PRO is a powerful miner with impressive specifications and features. Bitmain first announced this model in 2021. The first thing that stands out about this machine is its high performance and energy efficiency, with a relatively low price and quick payback.'
    },
    {
      slug: 'Bitmain-Antminer-S19PRO',
      src: '/image/products/s19xp.jpg',
      brand: 'Bitmain',
      title: 'Asic miner Bitmain Antminer S19 PRO 110TH/S',
      price: 1650,
      availableCount: 33,
      hashrate: 110,
      algorithm: 'SHA-256',
      coins: 'BTC/BCH',
      status: [],
      desc: 'Antminer S19 PRO is a powerful miner with impressive specifications and features. Bitmain first announced this model in 2021. The first thing that stands out about this machine is its high performance and energy efficiency, with a relatively low price and quick payback.'
    },
    {
      slug: 'Bitmain-Antminer-S19J',
      src: '/image/products/S19J.jpg',
      brand: 'Bitmain',
      title: 'Asic miner Bitmain Antminer S19J 90TH/S',
      price: 800,
      availableCount: 7,
      hashrate: 90,
      algorithm: 'SHA-256',
      coins: 'BTC/BCH',
      status: [],
      desc: 'Manufacturer Bitmain first presented an improved version of the S19 series in the not so distant 2020. Despite such a decent amount of time, the S19J is still a sought-after model among both commercial and hobbyist miners.'
    },
    {
      slug: 'Bitmain-Antminer-Z15',
      src: '/image/products/Z15.jpg',
      brand: 'Bitmain',
      title: 'Asic miner Bitmain Antminer Z15 Pro 840kSol/s',
      price: 2600,
      availableCount: 50,
      hashrate: 840,
      algorithm: 'Equihash',
      coins: 'ZEC/ZEN',
      status: ['new'],
      desc: 'Antminer Z15 Pro is the latest generation of ASIC miners in this lineup developed by the leading mining equipment company Bitmain. It features powerful chips and innovative architecture that ensure high hashing speed and efficient operation of the device.'
    },
    {
      slug: 'Bitmain-Antminer-S19J-PRO+',
      src: '/image/products/s19xp.jpg',
      brand: 'Bitmain',
      title: 'Asic miner Bitmain Antminer S19J PRO+ 122TH/S',
      price: 1680,
      availableCount: 140,
      hashrate: 122,
      algorithm: 'SHA-256',
      coins: 'BTC/BCH',
      status: ['hit'],
      desc: 'One of the largest manufacturers of cryptocurrency mining devices in the person of Bitmain just recently presented another masterpiece of engineering - Antminer S19j Pro+. This device shows a power of 122 TH/s and consumes 3355W at an efficiency of 27.5 J/T. We can say that this model is an improved and more advanced version of the much acclaimed S19j Pro.'
    },
    {
      slug: 'Bitmain-Antminer-KDA-Miner-KA3',
      src: '/image/products/KDA.jpg',
      brand: 'Bitmain',
      title: 'Asic miner Bitmain Antminer KDA Miner KA3',
      price: 2400,
      availableCount: 55,
      hashrate: 166,
      algorithm: 'Blake2S',
      coins: 'KDA',
      status: ['hit','new'],
      desc: 'The presentation of the latest miner model from Bitmain took place a little over a month ago - on September 13.  Immediately after its launch, the Antminer KA3 166th topped the list of Kadena cryptocurrency mining efficiency among all currently available devices.'
    },
    {
      slug: 'Bitmain-Antminer-E9-PRO',
      src: '/image/products/E9.jpg',
      brand: 'Bitmain',
      title: 'Asic miner Bitmain Antminer E9 Pro 3780 MH/s',
      price: 2700,
      availableCount: 90,
      hashrate: 3780,
      algorithm: 'Etchash/Ethash',
      coins: 'ETC/ETHW',
      status: ['hit','new'],
      desc: 'Bitmain Antminer E9 PRO is an ASIC miner designed to mine cryptocurrencies using the Ethash algorithm. It was first announced in 2021, and was only released in 2022. Despite the fact that the device is relatively new, it is already a popular choice for many crypto investors who need high hashing power and energy efficiency.'
    },
    {
      slug: 'Bitmain-Antminer-HNS-HS3',
      src: '/image/products/HNS.jpg',
      brand: 'Bitmain',
      title: 'Asic miner Bitmain Antminer HNS Miner HS3',
      price: 2950,
      availableCount: 7,
      hashrate: 9,
      algorithm: 'Blake2B+SHA3',
      coins: 'HNS',
      status: [],
      desc: 'Antminer HNS Miner HS3 is the result of Bitmains desire to create an ASIC miner that will not lose relevance even after several years of operation and will allow its owner to generate a decent amount of cryptocurrency even during a period of falling exchange rates. The device went on sale on December 20, 2022 and has become one of the best value for money in the history of mining.'
    },
    {
      slug: 'Bitmain-Antminer-KS3',
      src: '/image/products/HNS.jpg',
      brand: 'Bitmain',
      title: 'Asic miner Bitmain Antminer KS3 8.3Th',
      price: 25000,
      availableCount: 50,
      hashrate: 8.3,
      algorithm: 'kHeavyHash',
      coins: 'KAS',
      status: ['new'],
      desc: 'Antminer KS3 (8.3Th) model from Bitmain, mining on the KHeavyHash algorithm with a maximum hash rate of 8.3Th/s at a power consumption of 3188W. The performance is not bad at all, especially when compared to video cards. For example, GeForce RTX 4090 produces 2GH at a power consumption of 240W. This means that one ASIC replaces 4150 video cards, but this number of cards will consume 996kWh. The difference between an ASIC miner and a GPU is significant.'
    },
    {
      slug: 'Bitmain-Antminer-D9',
      src: '/image/products/D9.jpg',
      brand: 'Bitmain',
      title: 'Asic miner Bitmain Antminer D9',
      price: 2900,
      availableCount: 30,
      hashrate: 1770,
      algorithm: 'X11',
      coins: 'DASH',
      status: ['new'],
      desc: 'Bitmain Antminer D9 is the most powerful ASIC-miner designed for Dash cryptocurrency mining with an efficient cooling system. It uses modern high-performance chips in its work. It is a popular choice for miners who need high hashing power and optimal energy efficiency.'
    },

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
