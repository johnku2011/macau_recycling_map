export const calculateBounds = (points) => {
    if (points.length === 0) return null;
  
    const latitudes = points.map(p => p.latitude);
    const longitudes = points.map(p => p.longitude);
  
    const minLat = Math.min(...latitudes);
    const maxLat = Math.max(...latitudes);
    const minLng = Math.min(...longitudes);
    const maxLng = Math.max(...longitudes);
  
    return [
      [minLat, minLng],
      [maxLat, maxLng]
    ];
  };