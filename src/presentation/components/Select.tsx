import React from 'react'
import BaseSelect, {Props as BaseProps} from 'react-select'


export const Select = (props: BaseProps) => {
  return (
    <BaseSelect 
      {...props}
      styles={{ 
        control: (base, state) => ({
          ...base,
          width: '100%',
          backgroundColor: '#fff',
          border: '2px solid #d1d5db',
          borderRadius: '8px',
          paddingLeft: '12px',
          paddingRight: '18px',
          outline: 'none'
        }),
        dropdownIndicator: (base) => ({
          ...base,
          color: '#5840ec'
        }),
        indicatorSeparator: () => ({
          display: 'none'
        })
      }}
    />
  )
}

