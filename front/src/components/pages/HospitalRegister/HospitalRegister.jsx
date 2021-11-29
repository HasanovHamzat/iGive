import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { regHospital } from '../../../redux/ac/hospitalAC';

const HospitalRegister = () => {
  const initialValues = {
    email: '',
    password: '',
    inn: '',
    headOfDep: '',
    phoneNumber: '',
    city: '',
    street: '',
    building: '',
    webSite: '',
    title: '',
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
    dispatch(regHospital(values, navigate));
  }

  return (
    <form className='reg-container' onSubmit={submitRegister}>
      <div className='mb-3'>
        <label htmlFor='exampleInputEmail1' className='form-label'>
          Эл. почта:
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
        <label htmlFor='exampleInputPassword1' className='form-label'>
          Пароль:
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
      <div className='mb-3'>
        <label htmlFor='exampleInputEmail1' className='form-label'>
          ИНН:
        </label>
        <input
          type='text'
          className='form-control'
          value={values.inn}
          onChange={handleInputChange}
          pattern='[0-9]+'
          name='inn'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='exampleInputPassword1' className='form-label'>
          Главный админ:
        </label>
        <input
          type='text'
          className='form-control'
          id='exampleInputPassword1'
          value={values.headOfDep}
          onChange={handleInputChange}
          name='headOfDep'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='exampleInputEmail1' className='form-label'>
          Телефон:
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
          Город:
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
          Здание:
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
          Улица:
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
        <label htmlFor='exampleInputEmail1' className='form-label'>
          Веб Сайт:
        </label>
        <input
          type='text'
          className='form-control'
          value={values.webSite}
          onChange={handleInputChange}
          name='webSite'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='exampleInputEmail1' className='form-label'>
          Названия Больницы
        </label>
        <input
          type='text'
          className='form-control'
          value={values.title}
          onChange={handleInputChange}
          name='title'
        />
      </div>
      <button type='submit' className='btn btn-reg'>
        Зарегистрироваться
      </button>
    </form>
  );
};

export default HospitalRegister;
