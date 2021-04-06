import axios from 'axios';
import Preview from './previews';
import Message from './message';
import Send from './send';
import { useAuth } from '../../utils/auth';

const page = () => {
  const [previews, setPreviews] = React.useState([]);
  const [messages, setMessages] = React.useState([]);
  const [recepientName, setRecipientName] = React.useState('');
  const { authTokens } = useAuth();

  const getMessages = (fromUserId, toUserId) => {
    axios
      .get(`/api/message/${fromUserId}/${toUserId}`)
      .then((res) => {
        setMessages(res.data);
        setRecipientName(res.data[0].User.first_name);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getPreviews = (userId, mounted) => {
    axios
      .get(`/api/message/${userId}`)
      .then((res) => {
        if (mounted) {
          setPreviews(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    let mounted = true;
    getPreviews(authTokens?.id, mounted);
    return () => (mounted = false);
  }, []);

  return (
    <div className='row container-fluid message-no-padding bg-black'>
      <div className='col-md-4 message-no-padding full-screen message-high-light'>
        <center className='card-header text-white'>Chat</center>
        <div className='message-no-padding message-scroll'>
          {previews.map((preview) => (
            <div
              key={preview.last_message_at}
              className='message-high-light bg-dark'
              onClick={() => getMessages(preview.from_user, preview.to_user)}
            >
              <a
                className='nav-link message-select'
                id='selectMessage'
                data-toggle='tab'
                href='#message'
                role='tab'
              >
                <Preview preview={preview} />
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className='col message-no-padding full-screen message-high-light bg-dark'>
        <div className=' tab-content'>
          <div className='tab-pane fade' id='message' role='tabpanel'>
            <div className='card bg-dark full-screen'>
              <center className='card-header font-weight-bold text-white'>
                {recepientName}
              </center>
              <div className='bg-black message-scroll'>
                {messages.map((message) => (
                  <Message key={message.createdAt} message={message} />
                ))}
              </div>
              <Send message={messages[0]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
