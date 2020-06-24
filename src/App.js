import React, { Fragment, useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Upgrade from './components/auth/Upgrade';
import Cart from './components/Cart';
import Payment from './components/Payment';
import ProductList from './components/ProductList';
import PrivateRoutes from './components/routing/PrivateRoutes';
import Shipping from './components/Shipping';
import setAuthToken from './components/utils/setAuthToken';
import { loadUser } from './redux/actions/auth';
import store from './redux/store';

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/upgrade" component={Upgrade} />
            <Route exact path="/products" component={ProductList} />
            <PrivateRoutes exact path="/cart" component={Cart} />
            <PrivateRoutes
              exact
              path="/shipping"
              component={Shipping}
            ></PrivateRoutes>
            <PrivateRoutes
              exact
              path="/payment"
              component={Payment}
            ></PrivateRoutes>
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
