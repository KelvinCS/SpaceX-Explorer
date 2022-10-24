import React from 'react'

export type TIconButtonProps = React.HtmlHTMLAttributes<HTMLInputElement> & {
  icon: JSX.Element
  disabled?: boolean
}

export const IconButton = ({icon, ...props}: TIconButtonProps) => {
  return (
    <button {...props as any}>
      {icon}
    </button>
  )
}