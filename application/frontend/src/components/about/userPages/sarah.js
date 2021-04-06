import { bioSarah } from '../../../utils/text';
import imgSarah from '../../../assets/imgs/sarah.png';

const sarah = () => (
  <>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-3 m-3'>
          <img src={imgSarah} className='rounded img-fluid' />
        </div>
        <div className='col-sm-6 mx-3 mt-5'>
          <h1 className='title'>Sarah Nafees</h1>
          <div>
            <p>{bioSarah}</p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default sarah;
