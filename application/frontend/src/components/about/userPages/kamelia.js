import { bioKamelia } from '../../../utils/text';
import imgKamelia from '../../../assets/imgs/kamelia.png';

const kamelia = () => (
  <>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-3 m-3'>
          <img src={imgKamelia} className='rounded img-fluid' />
        </div>
        <div className='col-sm-6 mx-3 mt-5'>
          <h1 className='title'>Kamelia Shaharova</h1>
          <div>
            <p>{bioKamelia}</p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default kamelia;
