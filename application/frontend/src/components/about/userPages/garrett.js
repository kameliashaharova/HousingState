import { bioGarrett } from '../../../utils/text';
import imgGarrett from '../../../assets/imgs/garrett.png';

const garrett = () => (
  <>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-3 m-3'>
          <img src={imgGarrett} className='rounded img-fluid' />
        </div>
        <div className='col-sm-6 mx-3 mt-5'>
          <h1 className='title'>Garrett Johnson</h1>
          <div>
            <p>{bioGarrett}</p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default garrett;
