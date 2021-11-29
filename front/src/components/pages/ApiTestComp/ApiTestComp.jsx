// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function ApiTestComp() {
//   const [cityInput, setCityInput] = useState('');
//   const [cities, setCities] = useState([]);
//   const [city, setCity] = useState({});
//   useEffect(() => {
//     cityInput &&
//       axios
//         .post('http://localhost:3001/addressApi/city', {cityInput})
//         .then((response) => setCities(response.data));
//   }, [cityInput]);
//   return (
//     <div>
//       <input onChange={(e) => setCityInput(e.target.value)} type='text' list='city' />
//       <datalist name='' id='city'>
//         {cities?.map((el) => (
//           <option value={`${el.zip}`}>{el.name}</option>
//         ))}
//       </datalist>
//     </div>
//   );
// }

// export default ApiTestComp;
