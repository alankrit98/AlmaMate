
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function MentorshipForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate() ;
  
  const handleSubmit = (event) => {
    event.preventDefault()
   console.log(event.target )  ;
    
    setIsSubmitting(true)
    // Simulate form submission
    
    fetch('https://almamate-1.onrender.com/mentorship/mentorregistration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: event.target[0].value, email: event.target[1].value, role: event.target[2].value }),
    }).then((response) => response.json())
      .then((data) => { 
        console.log('Success:', data)
        setIsSubmitting(false)
        navigate(`/home/${data.data._id}`)
      }
      )

  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Mentorship Application</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Fill out the form below to apply for mentorship
          </p>
        </div>
        <form className="mt-8 space-y-6 " onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-y-6">
            <div >
              <label htmlFor="full-name" className="sr-only">
                Full Name
              </label>
              <input
                id="full-name"
                name="full-name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Full Name"
              />
            </div>
            <div >
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div >
            <div >
                    <label htmlFor="select_role" >Register as </label>
                    <select id="select_role" >
                    <option value="Mentor">Mentor</option>
                     <option value="Mentee">Mentee</option>
                    </select>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}