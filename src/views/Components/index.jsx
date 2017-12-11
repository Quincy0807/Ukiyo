//@flow
import React from 'react'
import {Switch, Route} from 'react-router-dom'
import NavLink from '../../components/routers/NavLink'
import Breadcrumb from './Breadcrumb'
import Tabs from './Tabs'

const isActiveFun = (match: boolean, location: {pathname: string}) => !!~['/components', '/components/breadcrumb'].indexOf(location.pathname)
export const ComponentsView = () => (
  <div>
    <div className="tabs is-large is-boxed">
      <ul>
        <NavLink isActive={isActiveFun} activeLiClassName='is-active' to='/components/breadcrumb'>Breadcrumb</NavLink>
        <NavLink exact activeLiClassName='is-active' to='/components/tabs'>Tabs</NavLink>
      </ul>
    </div>
    <Switch>
      <Route exact path="/components" component={Breadcrumb} />
      <Route path="/components/breadcrumb" component={Breadcrumb} />
      <Route path="/components/tabs" component={Tabs} />
    </Switch>
  </div>
)
