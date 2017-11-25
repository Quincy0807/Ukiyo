import React from 'react'
import {Route, Link} from 'react-router-dom'

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
}) => {
  const path = typeof to === 'object' ? to.pathname : to

  const escapedPath = path.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1')

  return (
    <Route
      path={escapedPath}
      exact={exact}
      strict={strict}
      location={location}
      children={({location, match}) => {
        const isActive = !!(getIsActive ? getIsActive(match, location) : match)

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
  'aria-current': 'true',
}

export default NavLink
