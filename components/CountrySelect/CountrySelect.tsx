'use client'

import cn from 'classnames'
import { FC, useEffect, useState } from 'react'

import styles from './CountrySelect.module.scss'
import { ISelect } from './select.interface'

type FetchData = {
	name: string
	cca2: string
}

const CountrySelect: FC<ISelect> = ({ register, style, error, ...props }) => {
	const [countries, setCountries] = useState<FetchData[]>([])

	useEffect(() => {
		const data: FetchData[] = require('../../api/countries.json')
		setCountries(data)
	}, [])

	return (
		<div
			className={cn(styles.field, {
				[styles.error]: error,
			})}
			style={style}
		>
			<span className={styles.label}>Country</span>
			<select {...register} {...props}>
				<option value="">Select country</option>
				{countries.map(({ cca2, name }) => (
					<option key={cca2} value={name}>
						{name}
					</option>
				))}
			</select>
			{error && <span className={styles.error_text}>{error.message}</span>}
		</div>
	)
}

export default CountrySelect
