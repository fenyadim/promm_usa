'use client'

import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button, Input } from '@/components'

import { useAppDispatch } from '@/redux/hooks'

import { IFormValues } from '@/types/form.type'

import styles from './FormOrder.module.scss'
import { nameReg, phoneReg } from './regular'

const FormOrder: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<IFormValues>({
		mode: 'onChange',
	})
	const dispatch = useAppDispatch()

	const submit: SubmitHandler<IFormValues> = async (formData) => {}
	return (
		<form className={styles.form} onSubmit={handleSubmit(submit)}>
			<Input
				type="tel"
				placeholder="Phone"
				title="Phone"
				error={errors.phone}
				//@ts-ignore
				register={{
					...register('phone', {
						required: 'Enter phone number',
						pattern: {
							value: phoneReg,
							message: 'Enter a valid number',
						},
					}),
				}}
			/>
			<div
				className={styles.addressWrapper}
				style={{ gridTemplateColumns: '1fr 1fr' }}
			>
				<Input
					title="First name"
					placeholder="John"
					error={errors.firstName}
					//@ts-ignore
					register={{
						...register('firstName', {
							required: 'Enter first name',
							pattern: {
								value: nameReg,
								message: 'Enter first name',
							},
						}),
					}}
				/>
				<Input
					title="Last name"
					placeholder="Doe"
					error={errors.lastName}
					//@ts-ignore
					register={{
						...register('lastName', {
							required: 'Enter last name',
							pattern: {
								value: nameReg,
								message: 'Enter last name',
							},
						}),
					}}
				/>
			</div>
			<Input
				//@ts-ignore
				register={{
					...register('company'),
				}}
				title="Company (optional)"
				placeholder="Promminer"
				error={errors.company}
			/>
			<Input
				//@ts-ignore
				register={{
					...register('address', { required: 'Enter address' }),
				}}
				title="Address"
				placeholder="2 WATTAQUADOCK HILL RD"
				error={errors.address}
			/>
			<Input
				//@ts-ignore
				register={{ ...register('apartment') }}
				title="Apartment, suite, etc. (optional)"
				error={errors.apartment}
			/>
			<div className={styles.addressWrapper}>
				<Input
					//@ts-ignore
					register={{ ...register('city', { required: 'Enter city' }) }}
					title="City"
					placeholder="Bolton"
					error={errors.city}
				/>
				<Input
					//@ts-ignore
					register={{ ...register('region', { required: 'Enter region' }) }}
					title="Region"
					placeholder="MA"
					error={errors.region}
				/>
				<Input
					//@ts-ignore
					register={{
						...register('postalCode', { required: 'Enter postal code' }),
					}}
					title="Postal Code"
					placeholder="01740"
					error={errors.postalCode}
				/>
			</div>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Button type="submit" styleType="fill">
					Оформить заказ
				</Button>
				<Button styleType="clear">Очистить корзину</Button>
			</div>
		</form>
	)
}

export default FormOrder