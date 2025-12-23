
import React from 'react';

interface MapComponentProps {
  lat: number;
  lng: number;
  name: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ lat, lng, name }) => {
  const mapUrl = `https://maps.google.com/maps?q=${lat},${lng}&hl=es&z=14&output=embed`;

  return (
    <div className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
      <iframe
        title="Google Map"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        src={mapUrl}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MapComponent;
