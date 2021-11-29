import { Icon } from "@iconify/react";

const LocationMarker = ({  onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon="bx:bxs-donate-blood" color="red" width="50" height="50" />
    </div>
  );
};

export default LocationMarker;
//this plots a marker.
