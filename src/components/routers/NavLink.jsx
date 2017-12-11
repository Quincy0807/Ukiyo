//@flow
import React from 'react'
import {Route, Link} from 'react-router-dom'

type NavLinkProps = {
  to: string,
  exact: boolean,
  strict: boolean,
  location?: {pathname: string},
  activeClassName: string,
  activeLiClassName: string,
  className: string,
  style: {[string]:string},
  isActive:  ((match: boolean, location: {pathname: string})=> boolean) | boolean,
  activeStyle: {[string]:string},
  'aria-current': boolean
}

const NavLink = ({
  to,
  exact,
  strict,
  location,
  activeClassName,
  activeLiClassName,
  className,
  activeStyle,
  style,
  isActive: getIsActive,
  'aria-current': ariaCurrent,
  ...rest
}: NavLinkProps) => {
  const path = typeof to === 'object' ? to.pathname : to

  const escapedPath = path.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1')

  return (
    <Route
      path={escapedPath}
      exact={exact}
      strict={strict}
      location={location}
      children={({location, match}:{location:{pathname:string}, match:boolean}) => {
        const isActive = !!(typeof getIsActive !== 'boolean' ? getIsActive(match, location) : match)

        return (
          <li className={(isActive && activeLiClassName) || ''}>
            <Link
              to={to}
              className={
                isActive
                  ? [className, activeClassName].filter(i => i).join(' ')
                  : className
              }
              style={isActive ? {...style, ...activeStyle} : style}
              aria-current={(isActive && ariaCurrent) || null}
              {...rest}
            />
          </li>
        )
      }}
    />
  )
}

NavLink.defaultProps = {
  activeClassName: 'active',
  activeStyle: {},
  isActive: false,
  style: {},
  'aria-current': true,
  exact: false,
  strict: false,
  className: '',
}

export default NavLink
