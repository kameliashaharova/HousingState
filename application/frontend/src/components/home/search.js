import { Form, Formik } from 'formik';
import axios from 'axios';
import { TextInput, Select } from '../utils/inputs';

const searchbar = ({ setListings }) => {
  const searchListings = (query, { setSubmitting }) => {
    axios
      .get('/api/listing', { params: query })
      .then((res) => {
        setListings(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setSubmitting(false));
  };

  const formData = {
    search_term: '',
    unit_type: '',
    offer_type: '',
    bedrooms: 0,
    cost: 0,
  };

  return (
    <div className='row container-fluid align-item-center justify-content-center'>
      <div className='col-md-6'>
        <Formik
          initialValues={{ ...formData }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            searchListings(values, { setSubmitting });
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className='input-bar form-inline'>
                <div className='input-bar-item col-sm'>
                  <div className='input-group'>
                    <TextInput
                      name='search_term'
                      className='form-control'
                      placeholder='Enter an address, city, or ZIP code'
                      maxLength='40'
                    />
                    <span className='input-group-btn'>
                      <button
                        type='submit'
                        disabled={isSubmitting}
                        className='btn btn-primary float-right ml-2'
                      >
                        Search
                      </button>
                      <a
                        className='btn btn-dark'
                        data-toggle='collapse'
                        href='#collapse-options'
                      >
                        Options
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              <div className='form-row collapse' id='collapse-options'>
                <div className='form-group col-sm-3 text-left'>
                  <label className='label-text' htmlFor='unit_type'>
                    Unit Type
                  </label>
                  <Select
                    id='unit_type'
                    name='unit_type'
                    className='form-control border drop-text'
                  >
                    <option value=''>All</option>
                    <option value='house'>House</option>
                    <option value='appartment'>Apartment</option>
                    <option value='townhouse'>Townhouse</option>
                  </Select>
                </div>
                <div className='form-group col-sm-3 text-left'>
                  <label className='label-text' htmlFor='offer_type'>
                    Offer Type
                  </label>
                  <Select
                    id='offer_type'
                    name='offer_type'
                    className='form-control border drop-text'
                  >
                    <option value=''>All</option>
                    <option value='buy'>Buy</option>
                    <option value='rent'>Rent</option>
                  </Select>
                </div>
                <div className='form-group col-sm-3 text-left'>
                  <label className='label-text' htmlFor='bedrooms'>
                    Bedrooms
                  </label>
                  <Select
                    id='bedrooms'
                    name='bedrooms'
                    className='form-control border drop-text'
                  >
                    <option value=''>All</option>
                    <option value='1'>1+</option>
                    <option value='2'>2+</option>
                    <option value='3'>3+</option>
                    <option value='4'>4+</option>
                    <option value='5'>5+</option>
                  </Select>
                </div>
                <div className='form-group col-sm-3 text-left'>
                  <label className='label-text' htmlFor='cost'>
                    Cost
                  </label>
                  <Select
                    id='cost'
                    name='cost'
                    className='form-control border drop-text'
                  >
                    <option value=''>Any</option>
                    <option value='750'>$750+</option>
                    <option value='1000'>$1000+</option>
                    <option value='1500'>$1500+</option>
                    <option value='3000'>$3000+</option>
                  </Select>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default searchbar;
