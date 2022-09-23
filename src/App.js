import { Route, Switch } from 'react-router-dom';
import Home from './component/Home/'
import Signin from './component/Signin';
import Signup from './component/Signup';
import WalletRecharge from './component/WalletRecharge';
import AmountTransfer from './component/AmountTransfer';
import Transactions from './component/Transactions';
import { Redirect } from 'react-router-dom';

import './App.css';

function App() {

  // const isUserLoggedIn = localStorage.getItem("email") !== "" ? true : false;
  const isUserLoggedIn = localStorage.getItem("email") !== null ? true : false;


  return (
    <div className="App">
      <Switch>
        {/* <Route path='/' exact component={Home} /> */}
        <Route
          exact
          path="/"
          component={
            isUserLoggedIn
              ? () => <Home />
              : () => (
                <Redirect
                  to="/signin"
                  component={Signin}
                ></Redirect>
              )
          }
        />
        
        <Route path='/signin' component={Signin} />

        <Route path='/signup' component={Signup} />
        <Route path='/recharge' component={WalletRecharge} />
        <Route path='/transfer' component={AmountTransfer} />
        <Route path='/transactions' component={Transactions} />

      </Switch>
    </div>
  );
}

export default App;
