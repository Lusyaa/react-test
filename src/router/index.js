import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from '../views/login';
import Layout from '../views/layout';

class Routers extends Component {
    render() {
        const { token } = this.props;
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route path="/" render={() => {
                        if (!token) {
                            return <Layout />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    {/* if (!token) return <Redirect to="/login" /> */}
                </Switch>
            </HashRouter>
        )
    }
}

export default Routers;
