type algorythmVariable =
  | 'Blake2B+SHA3'
  | 'Blake2S'
  | 'Eaglesong'
  | 'Equihash'
  | 'Etchash/Ethash'
  | 'kHeavyHash'
  | 'Scrypt'
  | 'SHA-256'
  | 'X11'

export type statusVariable = 'new' | 'hit'

export type ProductType = {
  /** Ссылка товара */
  slug: string
  /** Путь изображения */
  src: string
  /** Бренд (для машинок) */
  brand?: string
  /** Название */
  title: string
  /** Цена */
  price: number
  /** Количество доступных (0 = нет в наличии) */
  availableCount: number
  /** Хэшрэйт */
  hashrate?: number
  /** Алгоритм */
  algorithm?: algorythmVariable
  /** Валюта */
  coins?: string
  /** Статусы: new и hit. Пример, ['new', 'hit'].  */
  status?: statusVariable[]
  /** Количество мест */
  quantityPlace?: number
  /** Мощность */
  power?: number
  /** Контейнер для майнинга */
  containerMining?: number
  /** Доход в месяц  */
  income?: number
  /** Срок окупаемости  */
  payback?: number
}
