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

type statusVariable = 'new' | 'hit'

export type ProductType = {
  src: string
  brand: string
  title: string
  price: number
  available: boolean
  hashrate: number
  algorithm: algorythmVariable
  coins: string
  status?: statusVariable[]
}
