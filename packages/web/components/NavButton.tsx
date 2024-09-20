import React, {forwardRef} from 'react'
import AngledText from './AngledText'

export interface NavButtonProps extends React.ComponentPropsWithoutRef<'span'> {
  children: string
}

const NavButton = forwardRef<HTMLAnchorElement, NavButtonProps>(({children, ...rest}, ref) => {
  return (
    <span className="text-2xl" {...rest} ref={ref}>
      <AngledText color={'white'}>{children}</AngledText>
    </span>
  )
})

export default NavButton

NavButton.displayName = 'NavButton'
