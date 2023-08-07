import { IFormValues } from '@/types/form.type'
import { InputHTMLAttributes } from 'react'
import {
  ChangeHandler,
  FieldError,
  RefCallBack,
  RegisterOptions,
} from 'react-hook-form'

export interface ICustomSelect {
  error?: FieldError | undefined
  register: (
    name: string,
    RegisterOptions?: RegisterOptions
  ) => {
    onChange: ChangeHandler
    onBlur: ChangeHandler
    name: IFormValues
    ref: RefCallBack
  }
}

type TypeInputProps = InputHTMLAttributes<HTMLSelectElement> & ICustomSelect

export interface ISelect extends TypeInputProps { }