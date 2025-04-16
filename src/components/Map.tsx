'use client';

import { useEffect, useRef } from 'react';
import { Map as MapTilerMap } from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';

const MapComponent: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<MapTilerMap | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const apiKey = process.env.NEXT_PUBLIC_MAPTILER_API_KEY;
    if (!apiKey) {
      console.error('MapTiler API key is missing. Please set NEXT_PUBLIC_MAPTILER_API_KEY in .env.local');
      return;
    }

    map.current = new MapTilerMap({
      container: mapContainer.current,
      apiKey: apiKey,
      style: '019639a0-eaa5-7404-8b35-ff5ebc57b074',
      center: [0, 0],
      zoom: 0.98,
      interactive: true,
      navigationControl: false,
      attributionControl: false, // Disable default attribution control
    });

    console.log('Map initialized:', map.current);

    map.current.on('load', () => {
      console.log('Map loaded');
      const layers = map.current?.getStyle().layers;
      console.log('Loaded layers:', layers?.map((layer: { id: string; type: string; layout?: { visibility?: string }; paint?: object }) => ({
        id: layer.id,
        type: layer.type,
        visibility: layer.layout?.visibility || 'visible',
        paint: layer.paint || {},
      })));
      map.current?.resize();
      map.current?.triggerRepaint();
    });

    map.current.on('error', (e) => {
      console.error('Map error:', e);
    });

    const handleResize = () => {
      if (map.current) {
        map.current.resize();
        console.log('Map resized');
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 z-[-1]">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default MapComponent;