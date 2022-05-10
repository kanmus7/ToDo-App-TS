import React from 'react'


const Header : React.FC = () => {
  return (
    <header className='py-3 mb-3 border-bottom'>
      <div className='container-fluid d-grid gap-3 aling-items-center'>
        <h1>TO-DO-APP</h1>
        <div className='d-flex aling-items-center'>
          <form className='w-100 me-3'>
            <input type="search" className='form-control' placeholder='search...' aria-label='Search' />
          </form>
        </div>
      </div>
    </header>
  )
}

export default Header