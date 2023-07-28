import { Metadata, NextPage } from 'next'

import { DataCenter } from '@/pages'

export const metadata: Metadata = {
	title: 'Data Center',
}

const DataCenterPage: NextPage = () => {
	return <DataCenter />
}

export default DataCenterPage
