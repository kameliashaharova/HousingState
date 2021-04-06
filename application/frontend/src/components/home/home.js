import Searchbar from './search';
import ListingDisplay from '../listing/display';

const home = () => {
  const [listings, setListings] = React.useState([]);

  return (
    <>
      <center>
        <div className='col my-4 py-5'>
          <Searchbar setListings={setListings} />
          <div className='row my-4'>
            {listings.map((listing) => (
              <ListingDisplay key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </center>
    </>
  );
};

export default home;
