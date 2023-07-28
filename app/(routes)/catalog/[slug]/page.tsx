import { Metadata, NextPage } from 'next'

import { Catalog } from '@/pages'

export const metadata: Metadata = {
	title: 'Catalog',
}

const CatalogPage: NextPage = () => {
	return <Catalog />
}

export default CatalogPage
