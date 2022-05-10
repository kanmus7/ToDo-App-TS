import React from 'react'

const Footer : React.FC = () => {
  return (
    <div className='container'>
      <footer className='d-flex flex-wrap justify-content-between aling-items-center py-3 my-4 border-top'>
        <div className='col-md-4 d-flex aling-items-center'>
          <span className='text-muted'>© 2022 Kanmus Company, Inc</span>
        </div>
        <ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
          <li className='ms-3'>
            <a href="#" className='text-muted'>
              <svg className='bi' width='24' height='24'>
                <use xlinkHref='#instagram'></use>
              </svg>
            </a>
          </li>
          <li className='ms-3'>
            <a href="#" className='text-muted'>
            <svg className='bi' width='24' height='24'>
                <use xlinkHref='#facebook'></use>
              </svg>
            </a>
          </li>
          <li className='ms-3'>
            <a href="#" className='text-muted'>
            <svg className='bi' width='24' height='24'>
                <use xlinkHref='#twitter'></use>
              </svg>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer