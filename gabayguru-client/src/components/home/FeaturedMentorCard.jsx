import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa"
import { MdOutlineWorkOutline, MdOutlineAccessTime, MdChatBubbleOutline  } from "react-icons/md"

const FeaturedMentorCard = ({item}) => {

  return (
    <div className="card w-72 bg-base-100 shadow-xl">
        <Link to={`mentors/${item.MentorID}`}>
            <figure><img src="https://placehold.co/400"/></figure>
            <div className="card-body">
                <h2 className="card-title justify-between">
                    {`${item.FirstName} ${item.LastName}`}
                    <div className="badge bg-yellow text-white gap-1">
                        <FaStar/> {`${item.Rating}`}
                    </div>
                </h2>
                <div className='text-gray-500 flex flex-col gap-2'>
                    <div className="flex gap-2">
                        <MdOutlineWorkOutline className='lg:min-w-4 lg:min-h-4 mt-1'/>
                        <p className='text-sm'>{`${item.Bio}`}</p>
                    </div>
                    <div className="flex gap-2">
                        <MdOutlineAccessTime className='lg:min-w-4 lg:min-h-4 mt-1'/>
                        <p className='text-sm'>{`${item.WorkExperience}`}</p>
                    </div>
                    <div className="flex gap-2">
                        <MdChatBubbleOutline  className='lg:min-w-4 lg:min-h-4 mt-1'/>
                        <p className='text-sm'>{`${item.ReviewsNum} Reviews`} | {`${item.SessionsNum} Sessions`}</p>
                    </div>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default FeaturedMentorCard