import React, { ReactElement } from 'react'

export interface ButtonProps {
  type: 'submit'
  text?: string
  disabled: boolean
  icon?: ReactElement
  onClick: React.MouseEventHandler<HTMLButtonElement>
}
