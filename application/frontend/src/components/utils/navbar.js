import logo from '../../assets/imgs/logo.jpg';
import { useAuth } from '../../utils/auth';

const navbar = () => {
  // will conditionally render login/sigup when no authTokens exist
  // will render admin when authToken indicates user is an admin
  // and render Account when authTokens exist
  const { authTokens } = useAuth();

  return (
    <nav className='navbar navbar-expand-md navbar-fixed-top justify-content-end navbar-light nav-color'>
      <div className='navbar-collapse collapse w-150 order-1 order-md-0 dual-collapse2 '>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <div className='container'>
              <div className='row'>
                <div className='col'>
                  <img src={logo} width='60' height='55' />
                </div>
                <div className='col-8'>
                  <h5>Housing State</h5>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className='ml-auto navbar-brand order-0'>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='.dual-collapse2'
        >
          <span className='navbar-toggler-icon' />
        </button>
      </div>
      <div className='navbar-collapse collapse w-100 order-2 dual-collapse2'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <a className='nav-link text-white' href='/'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link text-white' href='/post'>
              Post
            </a>
          </li>
          {authTokens?.type == 'admin' && (
            <>
              <li className='nav-item'>
                <a className='nav-link text-white' href='/admin'>
                  Admin
                </a>
              </li>
            </>
          )}
          {authTokens && (
            <>
              <li className='nav-item'>
                <a className='nav-link text-white' href='/account'>
                  Account
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link text-white' href='/message'>
                  Message
                </a>
              </li>
            </>
          )}
          {!authTokens && (
            <>
              <li className='nav-item'>
                <a className='nav-link text-white' href='/login'>
                  Login
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link text-white' href='/signup'>
                  Sign Up
                </a>
              </li>
            </>
          )}
          <li className='nav-item'>
            <a className='nav-link text-white' href='/about'>
              About Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default navbar;
