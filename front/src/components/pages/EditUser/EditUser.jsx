import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editUserProfileFromServer } from '../../../redux/ac/userAC';

function EditUser() {
  const { user } = useSelector(state => state);
  const [inputCity, setInputCity] = useState(user.city);
  const [inputStreet, setInputStreet] = useState(user.street);
  const [inputBuilding, setInputBuilding] = useState(user.building);
  const [inputPhoneNumber, setInputPhoneNumber] = useState(user.phoneNumber);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(editUserProfileFromServer(inputCity, inputStreet, inputBuilding, inputPhoneNumber));
  }
  return (
    <form onSubmit={submitHandler} className="d-flex align-items-center justify-content-center flex-column py-5">
      <h2 className="mb-4">Редактировать страницу</h2>
      <div className="mb-3">
        <label for="exampleInputEmail1" class="form-label">City</label>
        <input type="text" value={inputCity} onChange={(e) => setInputCity(e.target.value)} placeholder="Enter our city" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" class="form-label">Street</label>
        <input type="text" value={inputStreet} onChange={(e) => setInputStreet(e.target.value)} placeholder="Enter our street" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" class="form-label">Building</label>
        <input type="text" value={inputBuilding} onChange={(e) => setInputBuilding(e.target.value)} placeholder="Enter our building" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" class="form-label">Number phone</label>
        <input type="text" value={inputPhoneNumber} onChange={(e) => setInputPhoneNumber(e.target.value)} placeholder="Enter our phone" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <button type="submit" className="btn btn-success mt-1">Отправить</button>
    </form>
  )
}
export default EditUser
