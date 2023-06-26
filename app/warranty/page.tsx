import { Metadata, NextPage } from 'next'

import { Warranty } from '@/pages'

export const metadata: Metadata = {
	title: 'Warranty',
}

const WarrantyPage: NextPage = () => {
	return <Warranty />
}

export default WarrantyPage
