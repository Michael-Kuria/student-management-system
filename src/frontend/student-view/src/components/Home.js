import React from 'react'

import Footer from './Footer';

export default function Home() {
  return (
    <div>
      <div className='home-container'>
        <div className='home-image'></div>
        <div className='home-description'>
          <div className ="home-description-container">
            <div className='home-description-welcome'>
              Welcome to
            </div>
            <div className="home-description-school">
              Kirenga Primary School
            </div>
            <div className='home-description-motto'>
            Our Motto is, enter to excel exit to prosper
            </div>

          </div>

        </div>

      </div>
      <Footer />
      
    </div>
  )
}
