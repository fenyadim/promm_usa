import { Metadata, NextPage } from 'next'

import { Favorites } from '@/pages'

export const metadata: Metadata = {
	title: 'Favorites',
}

const FavoritesPage: NextPage = () => {
	return <Favorites />
}

export default FavoritesPage
