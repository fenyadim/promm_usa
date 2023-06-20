import { Dispatch, SetStateAction, createContext } from 'react'

interface ContextType {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const IsOpenSubMenuContext = createContext<ContextType>({
	isOpen: false,
	setIsOpen: () => {},
})
