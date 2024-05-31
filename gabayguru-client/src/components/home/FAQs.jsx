import React, { useEffect, useState } from 'react'
import FAQCard from './FAQCard'

const FAQs = () => {

  const [FAQs, setFAQs] = useState([])
  
  useEffect(() => {
    fetch("/src/assets/database/faqs.json").then(res => res.json()).then(data => {
      setFAQs(data)
    })
  }, [])

  return (
    <div>
      <div className='section-container'>
        <div className='text-center relative m-0 mt-24 mb-12'>
            <h2 className='title'>Frequently Asked Questions</h2>
        </div>

        {
          FAQs.map((item, i) => (
            <FAQCard key={i} item={item}/>
          ))
        }  
      </div>

      <div className='flex justify-between relative'>
            <img src="src/assets/landing-page/transition-2-1.png"/>
            <img src="src/assets/landing-page/transition-2-2.png"/>
        </div>
    </div>
  )
}

export default FAQs