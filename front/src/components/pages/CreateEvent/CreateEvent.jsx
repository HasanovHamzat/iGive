import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNewEventFromServer } from '../../../redux/ac/eventAC';
import styles from './styleCreateEvent.module.css'
function CreateEvent() {
  const [inputBloodType, setInputBloodType] = useState('');
  const [inputAmountBlood, setInputAmountBlood] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [inputPriority, setInputPriority] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addNewEventFromServer(
        inputBloodType,
        inputAmountBlood,
        inputDate,
        inputPriority
      )
    );
    setInputBloodType('');
    setInputAmountBlood('');
    setInputDate('');
    navigate('/hospital');
  };
  return (
    <form
      onSubmit={submitHandler}
      className='d-flex align-items-center justify-content-center flex-column py-5'
    >
      <h2 className='mb-4'>Сбор крови</h2>
      <div className='mb-3'>
        <label htmlFor='exampleInputEmail1' className='form-label'>
          Тип Крови
        </label>
        <select
          className={styles.select}
          name='bloodTypeId'
          onChange={(e) => setInputBloodType(e.target.value)}
          value={inputBloodType}
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
        <input
          type='number'
          value={inputAmountBlood}
          onChange={(e) => setInputAmountBlood(e.target.value)}
          placeholder='Кол-во крови в литрах'
          className='form-control my-2'
          id='exampleInputEmail1'
          aria-describedby='emailHelp'
        />
        <input
          type='date'
          value={inputDate}
          onChange={(e) => setInputDate(e.target.value)}
          placeholder='Дату сбора'
          className='form-control my-2'
          id='exampleInputEmail1'
          aria-describedby='emailHelp'
        />
        <label htmlFor='exampleInputEmail1' className='form-label'>
          Приоритет
        </label>
        <select className={styles.select}
          name='priority'
          onChange={(e) => setInputPriority(e.target.value)}
          value={inputPriority}
        >
          <option value={`${1}`}>Низкий</option>
          <option value={`${2}`}>Средний</option>
          <option value={`${3}`}>Высокий</option>
        </select>
      </div>
      <button type='submit' className='btn btn-primary mt-1'>
        Добавить
      </button>
    </form>
  );
}

export default CreateEvent;
