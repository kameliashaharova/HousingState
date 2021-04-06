import axios from 'axios';
import ListingDisplay from './listing/display';
import { useAuth } from '../utils/auth';

const account = () => {
  const [listings, setListings] = React.useState([]);
  const { authTokens } = useAuth();

  const getListings = (mounted) => {
    axios
      .get(`/api/listing/pending`)
      .then((res) => {
        if (mounted) {
          setListings(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    let mounted = true;
    getListings(authTokens.id, mounted);
    return () => (mounted = false);
  }, []);

  return (
    <>
      <center>
        <h4 className='mt-3'>All Pending Listings</h4>
        <div className='container my-2 p-5'>
          <div className='row my-2'>
            {listings.map((listing) => (
              <ListingDisplay key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </center>
    </>
  );
};

export default account;
