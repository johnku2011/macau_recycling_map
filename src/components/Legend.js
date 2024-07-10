import React from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

const Legend = () => {
  const map = useMap();

  React.useEffect(() => {
    const legend = L.control({ position: 'bottomright' });

    legend.onAdd = () => {
      const div = L.DomUtil.create('div', 'info legend');
      div.innerHTML = `
        <img src="https://cdn-icons-png.flaticon.com/512/3448/3448636.png" alt="Recycling Point" width="20" height="20">
        <span>回收點 / Recycling Point</span>
      `;
      return div;
    };

    legend.addTo(map);

    return () => {
      legend.remove();
    };
  }, [map]);

  return null;
};

export default Legend;