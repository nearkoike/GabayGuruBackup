import React from 'react'

const Banner = () => {
  return ( 
    <div>
        <div className="section-container">
            <div className="flex flex-col md:flex-row-reverse justify-between items-center">
                <img src="src/assets/landing-page/banner.png" className='h-[540px]'/>
                <div className='max-w-2xl'>
                    <h1 className="text-5xl font-bold">Personalized Mentorship For Your Unique Goals</h1>
                    <h3 className="py-6 text-xl">Connect, Learn, and Thrive with 1:1 guided mentorship from experts around the nation</h3>
                    <button className="btn btn-blue">Get Started</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner