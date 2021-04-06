import Admin from './admin';
import Contact from './contact';

const listingsDisplay = ({ listing }) => {
  return (
    <>
      <div className='col-lg-4 my-4'>
        <div className='card listing-card bg-light p-1'>
          <div className='listing-card-img embed-responsive embed-responsive-1by1 overflow img-thumbnail'>
            <img
              className='card-img-top embed-responsive-item img-fluid'
              src={`http://localhost:3000/${listing.img_path}`}
            />
          </div>
          <h5 className='card-title m-2'>{listing.full_address}</h5>
          <div className='card-body overflow-auto'>
            <table className='table table-condensed'>
              <tbody className='drop-text'>
                <tr>
                  <td>Beds:</td>
                  <td>{listing.bedrooms}</td>
                </tr>
                <tr>
                  <td>Baths:</td>
                  <td>{listing.bathrooms}</td>
                </tr>
                <tr>
                  <td>Cost:</td>
                  <td>{listing.cost}</td>
                </tr>
                <tr>
                  <td>Sq feet:</td>
                  <td>{listing.sq_footage}</td>
                </tr>
                <tr>
                  <td>Offer:</td>
                  <td>{listing.bathrooms}</td>
                </tr>
                <tr>
                  <td>Unit:</td>
                  <td>{listing.offer_type}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='card-footer'>
            <span className='input-group-btn'>
              <Admin listing={listing} />
              <Contact listing={listing} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default listingsDisplay;
