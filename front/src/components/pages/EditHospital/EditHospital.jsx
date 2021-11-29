import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { editHospitalProfileFromServer } from '../../../redux/ac/hospitalAC';

function EditHospital() {
  const { hospital } = useSelector(state => state);
  const [inputHeadOfDep, setInputHeadOfDep] = useState(hospital?.headOfDep);
  const [inputDescription, setInputDescription] = useState(hospital?.about);

  const dispatch = useDispatch();
  const navigate= useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(editHospitalProfileFromServer(inputHeadOfDep, inputDescription));
    navigate('/private/hospital')
  }
  return (
    <form onSubmit={submitHandler} className="d-flex align-items-center justify-content-center flex-column py-5">
      <h2 className="mb-4">Редактировать страницу</h2>
      <div className="mb-3">
        <label for="exampleInputEmail1" class="form-label">Head of department</label>
        <input type="text" value={inputHeadOfDep} onChange={(e) => setInputHeadOfDep(e.target.value)} placeholder="Enter our head of department" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Description hospital</label>
        <input type="text" value={inputDescription} onChange={(e) => setInputDescription(e.target.value)} placeholder="Enter our description" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <button type="submit" className="btn btn-success mt-1">Отправить</button>
    </form>
  )
}

export default EditHospital
