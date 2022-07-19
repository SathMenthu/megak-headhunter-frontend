import { forwardRef } from 'react'
import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form'

type InputTypes = 'text' | 'number' | 'checkbox' | 'email' | 'password'

interface FormInputProps {
    label?: string
    type: InputTypes
    id?: string
    placeholder?: string
    checked?: boolean
    error?: FieldError | undefined
}

export const FormInput = forwardRef<
    HTMLInputElement,
    FormInputProps & ReturnType<UseFormRegister<FieldValues>>
    >(({ label, type, id, name, placeholder, onChange, onBlur, error }, ref) => {
    return (
        <>
            <div className={type === 'checkbox' ? 'flex items-center' : ''}>
                <input
                    id={id}
                    name={name}
                    type={type}
                    ref={ref}
                    className={
                        type === 'checkbox'
                            ? 'h-4 w-4 text-indigo-600 border-gray-300 rounded-sm'
                            : `appearance-none rounded-none relative px-3 py-2 mb-2 bg-gray-800 placeholder-gray-400 text-gray-100 focus:outline-none sm:text-sm block w-full border-0 border-b border-transparent border-b-gray-800 focus:border-gray-400 focus:ring-0 sm:text-sm ${
                                error ? 'validation-failed' : ''
                            }`
                    }
                    placeholder={placeholder}
                    onChange={onChange}
                    onBlur={onBlur}
                />
                {label && (
                    <label htmlFor={id} className='ml-2 block text-sm text-gray-100'>
                        {label}
                    </label>
                )}
              <p className='my-2 text-xs text-red-500'>{error?.message}</p>
            </div>
        </>
    )
})
