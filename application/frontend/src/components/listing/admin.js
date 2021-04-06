import axios from 'axios';
import { useAuth } from '../../utils/auth';

const admin = ({ listing }) => {
  const { authTokens } = useAuth();

  const stampListing = (listingId, status) => {
    axios
      .patch(`/api/listing/${listingId}`, { approved: status })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        {authTokens?.type == 'admin' && listing.approved == null && (
          <div>
            <button
              type='submit'
              className='btn btn-success btn-sm float-right ml-2'
              onClick={() => stampListing(listing.id, true)}
            >
              Approve
            </button>
            <button
              type='submit'
              className='btn btn-danger btn-sm float-right ml-2'
              onClick={() => stampListing(listing.id, false)}
            >
              Reject
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default admin;
