import { useAuth } from '../../utils/auth';

const message = ({ message }) => {
  const { authTokens } = useAuth();

  const formatDate = (date) => {
    return date.toString().substring(0, 10);
  };

  const factory = () => {
    if (message.from_user === authTokens?.id) {
      return (
        <div className='card bg-primary message-reply'>
          <div className='text-light font-weight-bold message-no-padding'>
            {message.User.first_name}
            <div className='float-left text-dark text-secondary mr-5'>
              {formatDate(message.createdAt)}
            </div>
          </div>
          <hr />
          <div className='text-light'>{message.text}</div>
        </div>
      );
    } else
      return (
        <div className='card bg-dark message-message'>
          <div className='text-light font-weight-bold message-no-padding'>
            {message.User.first_name}
            <div className='float-right text-secondary ml-5'>
              {formatDate(message.createdAt)}
            </div>
          </div>
          <hr />
          <div className='text-light'>{message.text}</div>
        </div>
      );
  };

  return <div>{factory()}</div>;
};

export default message;
