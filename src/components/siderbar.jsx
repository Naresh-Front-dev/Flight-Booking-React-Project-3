import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
const Siderbar = () => {
    return (
        <div className="sidebar">
            <div className="d-flex flex-column align-items-center justify-content-between h-100">
                <div className=' w-100'>
                    <h3 className='py-3 text-center'>Air Wings</h3>
                    <nav className='sidebar-links w-100'>
                        <ul>
                            <li className='active'> <FontAwesomeIcon icon={faHouseUser} /> <a href="">Home</a></li>
                            <li><a href="">Ticket</a></li>
                            <li><a href="">Schedule</a></li>
                            <li><a href="">History</a></li>
                            <li><a href="">Support</a></li>
                        </ul>
                    </nav>
                </div>
                <nav className='sidebar-links'>
                    <ul>
                        <li><a href="">Setting</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Siderbar