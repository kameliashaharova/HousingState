import { Switch, Route } from 'react-router-dom';
import { AuthContext } from '../utils/auth';
import ProtectedRoute from './utils/protectedRoute';
import Home from './home/home';
import About from './about/about';
import Post from './post/post';
import Navbar from './utils/navbar';
import Signup from './signup';
import Login from './login';
import Account from './account';
import Message from './message/page';
import Admin from './admin';

const App = () => {
  const existingTokens = JSON.parse(localStorage.getItem('tokens'));
  const [authTokens, setAuthTokens] = React.useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem('tokens', JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <>
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
        <div>
          <header>
            <Navbar />
          </header>
          <div>
            <Switch>
              <Route path='/about' component={About} />
              <ProtectedRoute path='/post' component={Post} />
              <Route path='/signup' component={Signup} />
              <Route path='/login' component={Login} />
              <ProtectedRoute path='/account' component={Account} />
              <ProtectedRoute path='/admin' component={Admin} />
              <Route path='/message' component={Message} />
              <Route exact path='/' component={Home} />
            </Switch>
          </div>
        </div>
      </AuthContext.Provider>
    </>
  );
};

export default App;
