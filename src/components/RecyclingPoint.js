import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const recyclingIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/3448/3448636.png',
  iconSize: [25, 25],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const RecyclingPoint = ({ point }) => {
  return (
    <Marker position={[point.latitude, point.longitude]} icon={recyclingIcon}>
      <Popup>
        <div>
          <h3>{point.name_tc}</h3>
          <p>{point.address_tc}</p>
        </div>
      </Popup>
    </Marker>
  );
};

export default RecyclingPoint;