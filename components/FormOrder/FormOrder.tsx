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
				placeholder="+7(___)___-__-__"
				title="Телефон"
				error={errors.phone}
				//@ts-ignore
				register={{
					...register('phone', {
						required: 'Введите телефон',
						pattern: {
							value: phoneReg,
							message: 'Введите корректный номер',
						},
					}),
				}}
			/>
			<Input
				title="ФИО"
				placeholder="Например, Иванов Иван Иванович"
				error={errors.name}
				//@ts-ignore
				register={{
					...register('name', {
						required: 'Введите ФИО',
						pattern: {
							value: nameReg,
							message: 'Введите ФИО',
						},
					}),
				}}
			/>
			<Input
				//@ts-ignore
				register={{
					...register('city', { required: 'Введите город/поселок' }),
				}}
				title="Город/Поселок"
				placeholder="Например, г. Москва"
				error={errors.city}
			/>
			<Input
				//@ts-ignore
				register={{ ...register('street') }}
				title="Улица"
				placeholder="Например, ул.Пушкина"
				error={errors.street}
			/>
			<div className={styles.addressWrapper}>
				<Input
					//@ts-ignore
					register={{ ...register('house', { required: 'Введите дом' }) }}
					title="Дом"
					placeholder="Например, д.45/4"
					error={errors.house}
				/>
				<Input
					//@ts-ignore
					register={{
						...register('apartment', { required: 'Введите квартиру' }),
					}}
					title="Квартира"
					placeholder="Например, кв.24"
					error={errors.apartment}
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
