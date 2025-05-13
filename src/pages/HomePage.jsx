import React from 'react'
import Siderbar from '../components/siderbar'
import Main from '../components/main'
// import Filter from '../components/Filter'

const HomePage = () => {
  return (
    <div>
      <div className='d-flex gap-3'>
        <Siderbar />
        <div className=" p-3 main-container ">
          <Main />
        </div>
      </div>
    </div>
  )
}

export default HomePage