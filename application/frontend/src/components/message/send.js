import { Form, Formik } from 'formik';
import { TextInput } from '../utils/inputs';
import * as Yup from 'yup';
import axios from 'axios';

const send = ({ message }) => {
  const sendMessage = (body, { setSubmitting }) => {
    body = { ...body, to_user: message.to_user, from_user: message.from_user };
    console.log(body);
    axios
      .post('/api/message', body)
      .then((res) => {
        setSubmitting(false);
      })
      .catch((error) => {
        console.log(error);
        setSubmitting(false);
      });
  };

  return (
    <div className='card-body container '>
      <Formik
        initialValues={{ text: '' }}
        validationSchema={Yup.object({ text: Yup.string().required() })}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          sendMessage(values, { setSubmitting });
        }}
      >
        {({ isSubmitting }) => (
          <Form className='row'>
            <TextInput
              type='text'
              name='text'
              className='form-control col-md-10'
              placeholder='Enter a message...'
              maxLength='200'
            />

            <button
              type='submit'
              disabled={isSubmitting}
              className='btn col btn-primary'
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default send;
