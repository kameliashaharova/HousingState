import { bioMantasha } from '../../../utils/text';
import imgMantasha from '../../../assets/imgs/imgMantasha.jpeg';

const mantasha = () => (
  <>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-3 m-3'>
          <img src={imgMantasha} className='rounded img-fluid' />
        </div>
        <div className='col-sm-6 mx-3 mt-5'>
          <h1 className='title'>Mantasha Khan</h1>
          <div>
            <p>{bioMantasha}</p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default mantasha;
