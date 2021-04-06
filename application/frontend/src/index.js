import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './sass/App.scss';
import 'bootstrap';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
