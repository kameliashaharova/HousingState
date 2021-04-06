import * as Yup from 'yup';
import axios from 'axios';
import Page1 from './form/page1';
import Page2 from './form/page2';
import Page3 from './form/page3';
import { useAuth } from '../../utils/auth';
import { Wizard, WizardStep } from '../utils/multiStepForm';
import { Redirect } from 'react-router-dom';

const post = () => {
  const [hasPosted, setHasPosted] = React.useState(false);
  const { authTokens } = useAuth();

  const postListing = (body, { setSubmitting }) => {
    const fd = new FormData();
    Object.entries(body).forEach(([key, val]) => {
      fd.append(key, val);
    });
    axios
      .post('/api/listing', fd)
      .then((res) => {
        setHasPosted(true);
      })
      .catch((error) => {
        console.log(error);
        setSubmitting(false);
      });
  };

  const formData = {
    street: '',
    city: '',
    state: '',
    description: '',
    unit_type: '',
    offer_type: '',
    bedrooms: '',
    bathrooms: '',
    building_num: '',
    zip_code: '',
    cost: '',
    sq_footage: '',
    lease_length: '',
    img_path: '',
    full_address: '',
    user_id: authTokens?.id,
    listingImage: undefined,
  };

  // define form validation rules
  const page1Validation = Yup.object({
    state: Yup.string()
      .matches(/^[A-z]{2}$/, 'Must be two letters')
      .required('Required'),
    zip_code: Yup.string()
      .matches(/^[0-9]{5}$/, 'Must be 5 digits')
      .required('Required'),
    street: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    building_num: Yup.number().positive().integer().required('Required'),
  });

  const page2Validation = Yup.object({
    bedrooms: Yup.number().positive().integer().required('Required'),
    bathrooms: Yup.number().positive().required('Required'),
    unit_type: Yup.string().required('Required'),
    offer_type: Yup.string().required('Required'),
  });

  const page3Validation = Yup.object({
    cost: Yup.number().positive().integer().required('Required'),
    sq_footage: Yup.number().positive().integer().required('Required'),
    lease_length: Yup.number().positive().integer().required('Required'),
    listingImage: Yup.mixed().required('Required'),
  });

  if (hasPosted) {
    return <Redirect to='/account' />;
  }

  return (
    <div>
      <center>
        <h4 className='mt-3'>Post a Listing</h4>
      </center>
      <div className='row container-fluid align-item-center justify-content-center mt-2'>
        <div className='col-md-6'>
          <div className='card mb-4'>
            <div className='card-body'>
              <Wizard
                initialValues={{ ...formData }}
                onSubmit={(values, { setSubmitting }) => {
                  setSubmitting(true);
                  postListing(values, { setSubmitting });
                }}
              >
                <WizardStep validationSchema={page1Validation}>
                  <Page1 />
                </WizardStep>
                <WizardStep validationSchema={page2Validation}>
                  <Page2 />
                </WizardStep>
                <WizardStep validationSchema={page3Validation}>
                  <Page3 />
                </WizardStep>
              </Wizard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default post;
