import React from 'react'

const FAQCard = ({item}) => {
  return (
    <div className="collapse collapse-arrow shadow-md outline outline-slate-100 mb-6">
        <input type="radio" name="FAQAccordion" defaultChecked /> 
        <div className="collapse-title text-xl font-medium">
            {item.Question}
        </div>
        <div className="collapse-content"> 
        <p>{item.Answer}</p>
        </div>
    </div>
  )
}

export default FAQCard