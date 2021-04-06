import { TextInput } from '../../utils/inputs';

const page1 = () => {
  return (
    <>
      <div className='form-row justify-content-center'>
        <div className='form-group col-sm-3 text-left'>
          <label className='label-text' htmlFor='building_num'>
            Building No.
          </label>
          <TextInput
            name='building_num'
            className='form-control'
            maxLength='4'
          />
        </div>

        <div className='form-group col-sm-8 text-left'>
          <label className='label-text' htmlFor='street'>
            Street
          </label>
          <TextInput name='street' className='form-control' maxLength='20' />
        </div>
      </div>
      <div className='form-row justify-content-center'>
        <div className='form-group col-sm-6 text-left'>
          <label className='label-text' htmlFor='city'>
            City
          </label>
          <TextInput name='city' className='form-control' maxLength='20' />
        </div>
        <div className='form-group col-sm-2 text-left'>
          <label className='label-text' htmlFor='state'>
            State
          </label>
          <TextInput name='state' className='form-control' maxLength='2' />
        </div>
        <div className='form-group col-sm-3 text-left'>
          <label className='label-text' htmlFor='zip_code'>
            Zip
          </label>
          <TextInput name='zip_code' className='form-control' maxLength='5' />
        </div>
      </div>
    </>
  );
};

export default page1;
