import React, { useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import FloatingActionButtons from './FloatingActionButtons';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const LocationMarker = () => {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

const RecyclingMap = ({ recyclingPoints }) => {
  const macauCenter = [22.1987, 113.5439];
  const mapRef = useRef();

  const handleLocateMe = () => {
    mapRef.current.locate();
  };

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
      <MapContainer 
        center={macauCenter} 
        zoom={13} 
        style={{ height: '100%', width: '100%' }}
        ref={mapRef}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {recyclingPoints.map((point, index) => (
          <Marker key={index} position={[point.latitude, point.longitude]}>
            <Popup>
              <div>
                <h3>{point.name_tc}</h3><h3>{point.name_pt}</h3>
                <p>{point.address_tc}</p><p>{point.address_pt}</p>
              </div>
            </Popup>
          </Marker>
        ))}
        <LocationMarker />
      </MapContainer>
      <FloatingActionButtons onLocateMe={handleLocateMe} />
    </div>
  );
};

export default RecyclingMap;