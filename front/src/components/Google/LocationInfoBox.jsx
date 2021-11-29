const LocationInfoBox = ({ info }) => {
  console.log(info);
  return (
    <div className="location-info">
      <h2>Информация</h2>
      <ul>
        <li>
          Больница: <strong>{info?.Hospital?.title}</strong>
          Дата: <strong>{info?.eventDate}</strong>
        </li>
      </ul>
    </div>
  );
};

export default LocationInfoBox;
//this appears when u click on a marker.
