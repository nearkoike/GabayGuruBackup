import React from 'react'

const HowItWorks = () => {
  return (
    <div className='w-full bg-blue py-12'>
        <div className='section-container text-white'>
            <div>
                <h2 className='title text-center'>How It Works</h2>
            </div>

            <div className='flex flex-col gap-6'>
                {/* Browse Mentors */}
                <div className='flex justify-center items-center '>
                    <div className='md:w-1/3'>
                        <img src='src/assets/landing-page/browse-mentors.png' className='w-80'/>
                    </div>
                    <div className='md:w-1/4'>
                        <h3 className='subtitle'>Browse Mentors</h3>
                        <p>Explore mentors from diverse fields and send a personalized message expressing your learning goals for a perfect match.</p>
                    </div>
                </div>

                {/* Book A Session */}
                <div className='flex flex-row-reverse justify-center items-center '>
                    <div className='md:w-1/3 md:pl-32'>
                        <img src='src/assets/landing-page/book-session.png' className='w-80'/>
                    </div>
                    <div className='md:w-1/4'>
                        <h3 className='subtitle'>Book A Session</h3>
                        <p>Select your ideal mentor, schedule, and securely pay for your session, all while ensuring a tailored mentorship experience.</p>
                    </div>
                </div>

                {/* Learn and Grow */}
                <div className='flex justify-center items-center pb-10'>
                    <div className='md:w-1/3'>
                        <img src='src/assets/landing-page/learn-and-grow.png' className='w-80'/>
                    </div>
                    <div className='md:w-1/4'>
                        <h3 className='subtitle'>Learn and Grow</h3>
                        <p>Select your ideal mentor, schedule, and securely pay for your session, all while ensuring a tailored mentorship experience.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks