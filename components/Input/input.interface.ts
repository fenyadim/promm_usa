import { IFormValues } from '@/types/form.type'
import { InputHTMLAttributes } from 'react'
import {
  ChangeHandler,
  FieldError,
  RefCallBack,
  RegisterOptions,
} from 'react-hook-form'



export interface IInputProps {
  title?: string
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

type TypeInputProps = InputHTMLAttributes<HTMLInputElement> & IInputProps

export interface IInput extends TypeInputProps { }
