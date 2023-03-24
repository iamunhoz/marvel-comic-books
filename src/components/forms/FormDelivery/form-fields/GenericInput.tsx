import { AsyncState } from 'jotai-form/dist/src/atomWithValidate'
import { PatternFormat } from 'react-number-format'

type GenericInputProps = {
  title: string
  value: AsyncState<string>
  setValue: (value: string) => void
  customInput?: (className: string) => JSX.Element
}

export function GenericInput(props: GenericInputProps) {
  const { title, value, setValue, customInput } = props

  const inputClassName = `${
    !value.isValidating && value.isValid ? 'border-2 border-green-400' : ''
  } border shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-2 focus:border-blue-400 focus:outline-none focus:shadow-outline`

  return (
    <div className='pt-3'>
      <label
        title={title}
        htmlFor={title}
        className='block text-gray-700 text-sm font-bold w-24 mb-0'
      >
        {title}:
      </label>
      {!!customInput ? (
        customInput(inputClassName)
      ) : (
        <input
          className={inputClassName}
          value={value.value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
      {!value.isValidating && value.isDirty && (
        <div>
          <span className='text-red-500 text-xs italic'>
            {!value.isValid &&
              `${(value.error as { message: string }).message}`}
          </span>
        </div>
      )}
    </div>
  )
}
