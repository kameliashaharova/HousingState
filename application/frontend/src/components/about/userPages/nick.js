import { bioNick } from '../../../utils/text';
import imgNick from '../../../assets/imgs/nick.png';

const nick = () => (
  <>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-3 m-3'>
          <img src={imgNick} className='rounded img-fluid' />
        </div>
        <div className='col-sm-6 mx-3 mt-5'>
          <h1 className='title'>Nick Brown</h1>
          <div>
            <p>{bioNick}</p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default nick;
