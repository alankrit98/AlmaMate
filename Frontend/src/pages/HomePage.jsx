import { useState } from 'react'
import {Link , useNavigate} from "react-router-dom"
export default function HomePage() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate() ;
  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the email to your backend for newsletter signup
    console.log('Newsletter signup for:', email)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <Link href="/" className="flex items-center py-4 px-2">
                  <span className="font-semibold text-gray-500 text-lg">ReconnectUs</span>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-3">
              <Link to="/auth"  className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-blue-500 hover:text-white transition duration-300">Log In</Link>
              <Link to="/auth"  className="py-2 px-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-400 transition duration-300">Sign Up</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Connect with Your Alumni Network</h1>
            <p className="text-xl md:text-2xl mb-8">Stay connected, share experiences, and grow your professional network.</p>
            <Link to="/auth" className="bg-white text-blue-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">Join Now</Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 ">
        <h2 className="text-3xl font-bold text-center mb-8">Why Join AlumniConnect?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md ">
            <h3 className="text-xl font-semibold mb-4">Networking Opportunities</h3>
            <p className="text-gray-600">Connect with fellow alumni from your school and expand your professional network.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md ">
            <h3 className="text-xl font-semibold mb-4">Exclusive Events</h3>
            <p className="text-gray-600">Participate in alumni-only events, both virtual and in-person, to stay connected.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md ">
            <h3 className="text-xl font-semibold mb-4">Job Opportunities</h3>
            <p className="text-gray-600">Access exclusive job postings and career resources from fellow alumni.</p>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8">Subscribe to our newsletter for the latest alumni news and events.</p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex items-center border-b border-blue-500 py-2">
                <input 
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                  type="email" 
                  placeholder="Enter your email" 
                  aria-label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button 
                  className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded" 
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">AlumniConnect</h2>
            </div>
            <div className="flex space-x-4">
              <Link href="/about" className="hover:text-gray-300">About</Link>
              <Link href="/contact" className="hover:text-gray-300">Contact</Link>
              <Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            &copy; {new Date().getFullYear()} AlumniConnect. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}