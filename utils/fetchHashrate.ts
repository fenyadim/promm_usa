import { AlgorythmVariable } from "@/types/product.type";

type HashrateType =
  "Th/s" | "Mh/s" | "kSol/s" | 'Gh/s'


export const fetchHashrate = (algorithm: AlgorythmVariable): HashrateType => {
  if (algorithm === 'Etchash/Ethash' || algorithm === 'Scrypt') {
    return 'Mh/s'
  } else if (algorithm === 'Equihash') {
    return 'kSol/s'
  } else if (algorithm === 'X11') {
    return 'Gh/s'
  } else {
    return 'Th/s'
  }
}