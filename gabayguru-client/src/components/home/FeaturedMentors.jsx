import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FeaturedMentorCard from './FeaturedMentorCard'

const FeaturedMentors = () => {

    const [mentors, setMentors] = useState([])

    useEffect(() => {
        fetch("/src/assets/database/mentor.json").then(res => res.json()).then(data => {
            setMentors(data)
        })
    }, [])

  return (
    <div>
        <div className='section-container'>
            <h2 className='title text-center'>Featured Mentors</h2>
            <p className='font-bold text-center'>Meet our expert mentors from around the nation</p>

            <div className='flex flex-col md:flex-row justify-between align-center mt-14'>
                {mentors.map((item, i) => (
                    <FeaturedMentorCard key={i} item={item}/>
                ))}
            </div>

            <div className='flex flex-col md:flex-row mx-auto justify-center pt-14 gap-5'>
                <Link to="/" className="btn btn-blue">Browse Mentors</Link>
                <Link to="/auth/signup/mentor/1" className="underline font-semibold text-blue mt-3">Become A Mentor</Link>
            </div>
        </div>
    </div>
  )
}

export default FeaturedMentors