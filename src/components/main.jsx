import React from 'react'
import FlightSearchCard from './FlightSearchCard'
import FlightDetails from './FlightDetails'
import FlightDetailsSlider from './FlightDetailsSlider'
import axios from "axios";
import { useState } from 'react';
import Lottie from 'lottie-react'
import animationLooking from '../assets/animi 2.json';
import animitionjson3 from '../assets/animi 3.json';
import notfoundanimation from '../assets/not found.json'
import FilterSection from './Filter';

const Main = () => {
    const [userData, setUserData] = useState({
        from: "",
        to: "",
        date: "",
        cabin_class: "",
        airline: "",
        min_price: ""
    })
    const BASE_URL = "https://backend-keiu.onrender.com";

    const [flightData, setFlightData] = useState([]);
    const [singelData, setSingelData] = useState()
    const [loading, setLoading] = useState(true)
    const [loadingimg, setLoadingimg] = useState(animationLooking)
    const getApiData = async () => {
        setLoadingimg(animationLooking)
        const response = await axios.get(`${BASE_URL}?from=${userData.from}&to=${userData.to}&date=${userData.date}&cabin_class=${userData.cabin_class}&min_price=${userData.min_price}&airline=${userData.airline}`);
        try {
            if (response.data.length > 0) {
                setFlightData(response.data)
                setSingelData(response.data[0])
                setLoading(false)

            } else {
                setLoading(true)
                setLoadingimg(notfoundanimation)
            }
        }
        catch (error) {
            throw new Error(error)
        }
    }
    function handlechange(e) {
        const { name, value } = e.target
        setUserData((prev) => ({ ...prev, [name]: value }))
    }
   const restdata=()=>{
    setUserData((prev) => ({
      ...prev,
      cabin_class: "",
      airline: "",
      min_price: "",
    }));
   }

    return (
        <div className='row'>
            <div className='col-md-8 col-lg-8 col-xl-8 col-sm-12'>
                <FlightSearchCard getData={getApiData} handlechange={handlechange} from={userData.from} to={userData.to} date={userData.date} cabin_class={userData.cabin_class} airline={userData.airline} />
                <div className='my-3'>
                    {loading ? <>
                        <Lottie animationData={loadingimg} style={{ height: "300px" }} />
                    </> : <>
                        <div className='d-flex align-items-center justify-content-between '>
                            <div>
                                <p className='mb-1'>From</p>
                                <h4 className='mb-1'>{singelData.departure.airport}</h4>
                                <p className='mb-1'>{singelData.departure.city}</p>
                            </div>
                            <Lottie animationData={animitionjson3} style={{ height: "120px" }} />
                            <div className='text-end'>
                                <p className='mb-1'>To</p>
                                <h4 className='mb-1'>{singelData.arrival.airport}</h4>
                                <p className='mb-1'>{singelData.arrival.city}</p>
                            </div>
                        </div>
                        <FlightDetailsSlider>{flightData.map((flight) => {
                            return (
                                <div>
                                    <FlightDetails flight={flight} />
                                </div>
                            )
                        })}
                        </FlightDetailsSlider>
                    </>
                    }
                </div>
            </div>
            <div className='col-md-4 col-lg-4 col-xl-4 col-sm-12'>
                <FilterSection airline={userData.airline} min_price={userData.min_price} cabin_class={userData.cabin_class} handlechange={handlechange} restdata={restdata} />
            </div>
        </div>
    )
}

export default Main