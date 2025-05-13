import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import lottie from "lottie-react";
import Lottie from 'lottie-react';
import flightanimation from '../assets/Animation - 1746953632901.json'
const FlightSearchCard = ({getData,from,to,date,handlechange }) => {
    function handlesubmit(e) {
        e.preventDefault()
        getData()
    }
    return (

        <Card className='card-design card shadow-sm'>
            <Card.Body>
                <div className='row'>
                    <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                        <p>Where would you want to go?</p>
                        <div style={{borderRadius:"10px",overflow:"hidden", height:"300px"}}>
                          <Lottie animationData={flightanimation}/>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                        <Form onSubmit={handlesubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>From</Form.Label>
                                <Form.Control type="text" placeholder="Mumbai" className='form-input' onChange={handlechange} value={from} name='from' />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>To</Form.Label>
                                <Form.Control type="text" placeholder="Delhi" className='form-input' onChange={handlechange} value={to} name='to' />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="date" placeholder="Enter Date" className='form-input' onChange={handlechange} value={date} name='date' />
                            </Form.Group>
                            <Button variant="primary" className='w-100 my-4 btn-color ' type="submit">
                                Search
                            </Button>
                        </Form>
                    </div>
                </div >
            </Card.Body>
        </Card>
    )
}

export default FlightSearchCard