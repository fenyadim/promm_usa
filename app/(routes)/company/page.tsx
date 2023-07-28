import { Metadata, NextPage } from 'next'

import { Company } from '@/pages'

export const metadata: Metadata = {
	title: 'Company',
}

const CompanyPage: NextPage = () => {
	return <Company />
}

export default CompanyPage
