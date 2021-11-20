import React from 'react'
import {
    Switch,
    Route
} from 'react-router-dom'

const HomePage = React.lazy(() => import('./pages/HomePage'))

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
        </Switch>
    )
}

export default Routes;
