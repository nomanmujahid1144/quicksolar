'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLoadScript, Autocomplete } from '@react-google-maps/api';

const libraries = ['places'];

export const Hero = () => {
  const router = useRouter();
  const [address, setAddress] = useState('');
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyB85YRBTg_OK38D6DeDLPhnu7G0Z3KkY0s',
    libraries,
  });

    const handleSelect = (place) => {
        setAddress(place.formatted_address);
        const { geometry } = place;
        const lat = geometry.location.lat();
        const lng = geometry.location.lng();
        window.location.href = `/solar/?lat=${lat}&lng=${lng}`;
        // router.push(`/solar/?lat=${lat}&lng=${lng}`);
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
      <div className="hero bg-white min-h-screen">
          <div className="hero-content text-center">
              <div className="max-w-md">
                  <h1 className="text-5xl font-normal">Type Your Address</h1>
                  <Autocomplete
                        onLoad={(autocomplete) => {
                        autocomplete.addListener('place_changed', () => {
                            const place = autocomplete.getPlace();
                            handleSelect(place);
                        });
                      }}
                  >
                    <label className="input input-bordered flex items-center gap-2 mt-5 rounded-full">
                        <input
                            type="text"
                            className="grow"
                            placeholder="Search"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                        </svg>
                    </label>
                  </Autocomplete>
              </div>
          </div>
      </div>
  );
};

export default Hero;