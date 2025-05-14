import React, { useState, useEffect } from 'react';
import FlightSearchCard from './FlightSearchCard';
import FlightDetails from './FlightDetails';
import FlightDetailsSlider from './FlightDetailsSlider';
import axios from 'axios';
import Lottie from 'lottie-react';
import animationLooking from '../assets/animi 2.json';
import animationJson3 from '../assets/animi 3.json';
import notfoundanimation from '../assets/not found.json';
import FilterSection from './Filter';

const Main = () => {
    const [userData, setUserData] = useState({
        from: '',
        to: '',
        date: '',
        cabin_class: '',
        airline: '',
        min_price: ''
    });
const BASE_URL = import.meta.env.VITE_API_URL || 'https://backend-keiu.onrender.com';
    const [flightData, setFlightData] = useState([]);
    const [singleData, setSingleData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [loadingImg, setLoadingImg] = useState(animationLooking);

    const getApiData = async () => {
        setLoading(true);
        setLoadingImg(animationLooking);
        try {
            const response = await axios.get(`${BASE_URL}/api/flights?from=${userData.from}&to=${userData.to}&date=${userData.date}&cabin_class=${userData.cabin_class}&min_price=${userData.min_price}&airline=${userData.airline}`);
            if (response.data.length > 0) {
                setFlightData(response.data);
                setSingleData(response.data[0]);
                setLoading(false);
            } else {
                setFlightData([]);
                setSingleData(null);
                setLoadingImg(notfoundanimation);
            }
        } catch (error) {
            console.error('Error fetching flight data:', error);
            setLoadingImg(notfoundanimation);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prev) => ({ ...prev, [name]: value }));
    };

    const resetData = () => {
        setUserData({
            from: '',
            to: '',
            date: '',
            cabin_class: '',
            airline: '',
            min_price: ''
        });
        setFlightData([]);
        setSingleData(null);
    };

    return (
        <div className='row'>
            <div className='col-md-8 col-lg-8 col-xl-8 col-sm-12'>
                <FlightSearchCard getData={getApiData} handlechange={handleChange} {...userData} />
                <div className='my-3'>
                    {loading ? (
                        <Lottie animationData={loadingImg} style={{ height: '300px' }} />
                    ) : singleData ? (
                        <>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div>
                                    <p className='mb-1'>From</p>
                                    <h4 className='mb-1'>{singleData.departure?.airport || 'Unknown'}</h4>
                                    <p className='mb-1'>{singleData.departure?.city || 'Unknown'}</p>
                                </div>
                                <Lottie animationData={animationJson3} style={{ height: '120px' }} />
                                <div className='text-end'>
                                    <p className='mb-1'>To</p>
                                    <h4 className='mb-1'>{singleData.arrival?.airport || 'Unknown'}</h4>
                                    <p className='mb-1'>{singleData.arrival?.city || 'Unknown'}</p>
                                </div>
                            </div>
                            <FlightDetailsSlider>
                                {flightData.map((flight) => (
                                    <FlightDetails key={flight.id} flight={flight} />
                                ))}
                            </FlightDetailsSlider>
                        </>
                    ) : (
                        <Lottie animationData={notfoundanimation} style={{ height: '300px' }} />
                    )}
                </div>
            </div>
            <div className='col-md-4 col-lg-4 col-xl-4 col-sm-12'>
                <FilterSection {...userData} handlechange={handleChange} resetData={resetData} />
            </div>
        </div>
    );
};

export default Main;
