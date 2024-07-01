import { NextResponse } from "next/server";

export async function POST(req, res) {
    const { latitude, longitude } = await req.json(); // Extract latitude and longitude from request body

    // Fetch solar data from Google Solar API
    const apiKey = "AIzaSyB85YRBTg_OK38D6DeDLPhnu7G0Z3KkY0s";
    const url = `https://solar.googleapis.com/v1/buildingInsights:findClosest?location.latitude=${latitude}&location.longitude=${longitude}&requiredQuality=HIGH&key=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch solar data');
        }
        const data = await response.json();
        
        console.log(data, 'Response')
        return NextResponse.json(data); // Return fetched data as JSON response
    } catch (error) {
        console.error('Error fetching solar data:', error);
        return NextResponse.error(error); // Return error response if fetch fails
    }
}
