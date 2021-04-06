import { useRouteMatch } from 'react-router-dom';
import Card from './card';

// images should be square (nxn pixels)
import imgGarrett from '../../assets/imgs/garrett.png';
import imgBuu from '../../assets/imgs/buu.png';
import imgNick from '../../assets/imgs/nick.png';
import imgSarah from '../../assets/imgs/sarah.png';
import imgKamelia from '../../assets/imgs/kamelia.png';
import imgMantasha from '../../assets/imgs/imgMantasha.jpeg';

const cards = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <center className='mt-5'>
        <h1>About Us</h1>
      </center>
      <div className='card-deck container-fluid align-item-center justify-content-center'>
        <div className='row py-5'>
          <div className='col-md-4 mx-auto'>
            <Card
              img={imgGarrett}
              name='Garrett Johnson'
              page={`${path}/garrett`}
            />
            <Card
              img={imgKamelia}
              name='Kamelia Shaharova'
              page={`${path}/kamelia`}
            />
          </div>
          <div className='col-md-4 mx-auto'>
            <Card img={imgSarah} name='Sarah Nafees' page={`${path}/sarah`} />
            <Card img={imgNick} name='Nick Brown' page={`${path}/nick`} />
          </div>
          <div className='col-md-4 mx-auto'>
            <Card img={imgBuu} name='Buu Phan' page={`${path}/buu`} />
            <Card
              img={imgMantasha}
              name='Mantasha Khan'
              page={`${path}/mantasha`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default cards;
