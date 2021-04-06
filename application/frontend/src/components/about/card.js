import { Link } from 'react-router-dom';

const card = ({ img, name, page }) => (
  <div className='card about-card mt-5 text-center shadow'>
    <div className='embed-responsive embed-responsive-1by1 overflow'>
      <img src={img} className='card-img-top embed-responsive-item img-fluid' />
    </div>
    <div className='card-body p-3 text-dark'>
      <h4 className='card-title'>{name}</h4>
      <Link to={page} className='btn btn-outline-success stretched-link'>
        About Me
      </Link>
    </div>
  </div>
);

export default card;
