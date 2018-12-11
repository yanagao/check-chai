import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { Layout } from 'antd';

import LayoutHeader from './components/layout-header';

import Dashboard from './pages/dashboard';

import './App.less';

export default class App extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <Router>

                <Layout className="mockstar-container">

                    <LayoutHeader />

                    <Layout.Content>
                        <Switch>
                            <Redirect exact from="/" to={`/dashboard`} />
                            <Route path={`/dashboard`} component={Dashboard} />
                        </Switch>
                    </Layout.Content>

                </Layout>

            </Router>
        );
    }
}