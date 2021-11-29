import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";

const Map = ({ eventData, coordinates, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const marker = (
    <LocationMarker
      lat={coordinates.lat}
      lng={coordinates.lng}
      onClick={() => setLocationInfo(eventData)}
    />
  );
  return (
    <div className="map container">
      <GoogleMapReact
        // bootstrapURLKeys={{ key: "AIzaSyAPpD6MEtXe6aj42FUQANeGsQ6VBriq9jA" }}
        center={coordinates}
        zoom={zoom}
      >
        {marker}
      </GoogleMapReact>

      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

export default Map;
