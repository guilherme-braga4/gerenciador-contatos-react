import React, { ReactElement } from 'react'

export interface ButtonProps {
  type: 'submit'
  text?: string
  disabled: any
  icon?: ReactElement
  onClick: React.MouseEventHandler<HTMLButtonElement>
}
