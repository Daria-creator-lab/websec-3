import * as React from 'react'
import routes from './routes'
import { Route, Switch } from 'react-router-dom'
import './styles.css'
import useAuthListener from './hooks/use-auth-listener';
import UserContext from './context/user';


export default function App (props) {
  // console.log(props)
  const { user } = useAuthListener();
  return (
    <UserContext.Provider value={{ user }}>
      <Switch>
        {routes.map(({ path, exact, fetchInitialData, component: C }) => (
          <Route 
          key={path} 
          path={path} 
          exact={exact} 
          render={(data) => (
            <C data = {data} />
          )} />
        ))}
      </Switch>
    </UserContext.Provider>
  )
}