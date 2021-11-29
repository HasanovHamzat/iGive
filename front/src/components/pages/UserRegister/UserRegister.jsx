import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { regUser } from '../../../redux/ac/userAC';

const UserRegister = () => {
  const initialValues = {
    name: '',
    lastName: '',
    birthday: '',
    bloodTypeId: '-1',
    oms: '',
    city: '',
    building: '',
    street: '',
    phoneNumber: '',
    email: '',
    password: '',
  };

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  function submitRegister(e) {
    e.preventDefault();
    dispatch(regUser(values, navigate));
    setValues(initialValues);
  }

  return (
    <form className='reg-container' onSubmit={submitRegister}>
      <div className='mb-3'>
        <label htmlFor='exampleInputEmail1' className='form-label'>
          First Name
        </label>
        <input
          type='text'
          className='form-control'
          value={values.name}
          onChange={handleInputChange}
          name='name'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='exampleInputEmail1' className='form-label'>
          Last Name
        </label>
        <input
          type='text'
          className='form-control'
          value={values.lastName}
          onChange={handleInputChange}
          name='lastName'
        />
      </div>
      <div className='nativeDatePicker'>
        <label htmlFor='bday'>Birthday:</label>
        <input
          type='date'
          name='birthday'
          required
          value={values.birthday}
          onChange={handleInputChange}
        />
        <span className='validity'></span>
      </div>
      <div className='mb-3'>
        <label htmlFor='exampleInputEmail1' className='form-label'>
          Email Address
        </label>
        <input
          type='email'
          className='form-control'
          value={values.email}
          onChange={handleInputChange}
          name='email'
          id='exampleInputEmail1'
          aria-describedby='emailHelp'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='exampleInputEmail1' className='form-label'>
        Phone number:
        </label>
        <input
          type='text'
          className='form-control'
          value={values.phoneNumber}
          onChange={handleInputChange}
          pattern='[0-9]+'
          name='phoneNumber'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='exampleInputEmail1' className='form-label'>
          Blood Type
        </label>
        <select
          name='bloodTypeId'
          onChange={handleInputChange}
          value={values.bloodTypeId}
        >
          <option value='-1' selected>
            Please choose
          </option>
          <option value='1'>O(I) Rh+</option>
          <option value='2'>O(I) Rh-</option>
          <option value='3'>A(II) Rh+</option>
          <option value='4'>A(II) Rh-</option>
          <option value='5'>B(III) Rh+</option>
          <option value='6'>B(III) Rh-</option>
          <option value='7'>AB(IV) Rh+</option>
          <option value='8'>AB(IV) Rh-</option>
        </select>
      </div>

      <div className='mb-3'>
        <label htmlFor='exampleInputEmail1' className='form-label'>
          OMS:
        </label>
        <input
          type='text'
          className='form-control'
          value={values.oms}
          onChange={handleInputChange}
          pattern='[0-9]+'
          name='oms'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='exampleInputEmail1' className='form-label'>
          City:
        </label>
        <input
          type='text'
          className='form-control'
          value={values.city}
          onChange={handleInputChange}
          name='city'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='exampleInputEmail1' className='form-label'>
          Building:
        </label>
        <input
          type='text'
          className='form-control'
          value={values.building}
          onChange={handleInputChange}
          name='building'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='exampleInputEmail1' className='form-label'>
          Street:
        </label>
        <input
          type='text'
          className='form-control'
          value={values.street}
          onChange={handleInputChange}
          name='street'
        />
      </div>

      <div className='mb-3'>
        <label htmlFor='exampleInputPassword1' className='form-label'>
          Password
        </label>
        <input
          type='password'
          className='form-control'
          id='exampleInputPassword1'
          value={values.password}
          onChange={handleInputChange}
          name='password'
        />
      </div>
      <button type='submit' className='btn btn-reg'>
        Зарегистрироваться
      </button>
    </form>
  );
};

export default UserRegister;
