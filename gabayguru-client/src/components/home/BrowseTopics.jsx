import React from 'react'

const BrowseTopics = () => {
  return (
    <div>
        {/* Transition Elements */}
        <div className='flex justify-between'>
            <img src="src/assets/landing-page/transition-1-1.png" className='w-[288px] h-[193px]'/>
            <img src="src/assets/landing-page/transition-1-2.png"/>
        </div>

        <div className='section-container'>
            <div className='text-center relative -top-48 m-0'>
                <h2 className='title'>Browse Topics</h2>
                <p className='font-bold'>Discover a wide range of topics to enhance your knowledge and skills</p>
            </div>

            <div className='flex justify-between relative -top-32 mx-60'>
                <div className='flex flex-col text-center gap-3 w-48'>
                    <img src='src/assets/landing-page/it-tech.png' className='m-auto'/>
                    <h4 className='text-lg font-semibold'>IT and Technology</h4>
                </div>
                <div className='flex flex-col text-center gap-3 w-48'>
                    <img src='src/assets/landing-page/business-entrepreneurship.png' className='m-auto'/>
                    <h4 className='text-lg font-semibold'>Business and Entrepreneurship</h4>
                </div>
                <div className='flex flex-col text-center gap-3 w-48' >
                    <img src='src/assets/landing-page/creative-arts-design.png' className='m-auto'/>
                    <h4 className='text-lg font-semibold'>Creative Arts and Design</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BrowseTopics