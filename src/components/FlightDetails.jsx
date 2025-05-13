import React from 'react'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const FlightDetails = ({flight}) => {
    return (
        <div>
            <Card className='mx-2'>
                <Card.Body>
                    <div className='d-flex justify-content-between align-items-center'>
                        <Card.Title className='text-primary mb-0'><time>{flight.departure.time}</time> - <time>{flight.arrival.time}</time></Card.Title>
                        <FontAwesomeIcon icon={faEllipsisH} className="text-gray-600 text-xl" />
                    </div>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center'>
                            <img src="https://th.bing.com/th/id/OIP.ZGto8KjoIyVdhdlZKWWpWAHaE8?w=248&h=180&c=7&r=0&o=7&cb=iwp1&dpr=1.4&pid=1.7&rm=3" width={100} alt="" />
                            <div>
                                <h6 className='mb-0'>{flight.airline}</h6>
                                <p className='mb-0 text-success'>{flight.flight_id} . {flight.flight_duration} . {flight.cabin_class}</p>
                            </div>
                        </div>
                        <div className='text-end'>
                            <h6 className='mb-1'>{flight.price.currency} {flight.price.amount}</h6>
                            <p className='mb-1 text-secondary'>Price</p>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default FlightDetails