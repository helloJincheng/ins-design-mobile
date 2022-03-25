import React, { FC } from 'react'



type ButtonProps = {
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger',
  fill?: 'solid' | 'outline' | 'none',
  size?: 'mini' | 'small' | 'middle' | 'large',
  block?: boolean,
  loading?: boolean,
  loadingText?: string,
  disabled?: boolean,
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  type?: 'submit' | 'reset' | 'button'
  shape?: 'default' | 'rounded' | 'rectangular'
}

export const Button: FC<ButtonProps> = props => {
  return <>button1</>
}
