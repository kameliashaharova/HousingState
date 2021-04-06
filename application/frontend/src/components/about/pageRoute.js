import { useParams } from 'react-router-dom';

import Garrett from './userPages/garrett';
import Buu from './userPages/buu';
import Kamelia from './userPages/kamelia';
import Mantasha from './userPages/mantasha';
import Nick from './userPages/nick';
import Sarah from './userPages/sarah';

const page = () => {
  const { name } = useParams();
  console.log(name);
  switch (name) {
    case 'garrett':
      return <Garrett />;
    case 'buu':
      return <Buu />;
    case 'kamelia':
      return <Kamelia />;
    case 'mantasha':
      return <Mantasha />;
    case 'nick':
      return <Nick />;
    case 'sarah':
      return <Sarah />;
    default:
      return <Redirect to="/about" />;
  }
};

export default page;
