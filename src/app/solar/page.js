'use client'

import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { SolarMap } from "../components/solar-map/Index";

export default function Solar({ searchParams }) {
    const { lat: latitude, lng: longitude } = searchParams; // Destructure lat and lng from searchParams

    const [solarData, setSolarData] = useState(null);

    useEffect(() => {
        if (latitude && longitude) { // Ensure latitude and longitude are defined
            fetchSolarData(latitude, longitude);
        }
    }, [latitude, longitude]);

    useEffect(() => {
        
    }, [solarData])
    
    const fetchSolarData = async (lat, lng) => {
        try {
            const response = await axiosInstance.post(`/get-solar-data`, { latitude: lat, longitude: lng });
            if (response.status === 200) {
                setSolarData(response.data); // Set solarData to response.data, assuming the relevant data is directly in response.data
            }
        } catch (error) {
            console.error('Error fetching solar data:', error);
        }
    };
    
    
    if (!solarData) return <div>Loading...</div>;

    return (
        <div className="w-full">
            <SolarMap solarData={solarData} />
        </div>
    );
}
