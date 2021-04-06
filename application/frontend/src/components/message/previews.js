const preview = ({ preview }) => {
  const formatDate = (date) => {
    return date.toString().substring(0, 10);
  };

  return (
    <>
      <div>
        <div className='card-body text-light'>
          <span className='float-right'>
            {formatDate(preview.last_message_at)}
          </span>
          <legend>{preview.User.first_name}</legend>
        </div>
      </div>
    </>
  );
};
export default preview;
