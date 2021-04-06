import { TextInput, Select } from '../../utils/inputs';

const page2 = () => {
  return (
    <>
      <div className='form-row justify-content-center'>
        <div className='form-group col-sm-3 text-left'>
          <label className='label-text' htmlFor='unit_type'>
            Unit Type
          </label>
          <Select
            name='unit_type'
            className='form-control border border drop-text'
          >
            <option value=''>Pick</option>
            <option value='house'>House</option>
            <option value='appartment'>Apartment</option>
            <option value='townhouse'>Townhouse</option>
          </Select>
        </div>
        <div className='form-group col-sm-3 text-left'>
          <label className='label-text' htmlFor='offer_type'>
            Offer Type
          </label>
          <Select name='offer_type' className='form-control border drop-text'>
            <option value=''>Pick</option>
            <option value='buy'>Buy</option>
            <option value='rent'>Rent</option>
          </Select>
        </div>
        <div className='form-group col-sm-2 text-left'>
          <label className='label-text' htmlFor='bedrooms'>
            Bedrooms
          </label>
          <Select name='bedrooms' className='form-control border drop-text'>
            <option value=''>0</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
          </Select>
        </div>
        <div className='form-group col-sm-2 text-left'>
          <label className='label-text' htmlFor='bathrooms'>
            Bathrooms
          </label>
          <Select name='bathrooms' className='form-control border drop-text'>
            <option value=''>0</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </Select>
        </div>
      </div>
      <div className='form-row justify-content-center'>
        <div className='form-group col-sm-10 text-left'>
          <label className='label-text' htmlFor='description'>
            Description
          </label>
          <TextInput
            name='description'
            className='form-control'
            maxLength='500'
          />
        </div>
      </div>
    </>
  );
};

export default page2;
