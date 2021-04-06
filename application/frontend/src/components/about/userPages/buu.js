import { bioBuu } from '../../../utils/text';
import imgBuu from '../../../assets/imgs/buu.png';

const buu = () => (
  <>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-3 m-3'>
          <img src={imgBuu} className='rounded img-fluid' />
        </div>
        <div className='col-sm-6 mx-3 mt-5'>
          <h1 className='title'>Buu Phan</h1>
          <div>
            <p>{bioBuu}</p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default buu;
