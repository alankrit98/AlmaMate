import { useState } from 'react'

export default function PostCreation({ setIspostactive }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('https://almamate-1.onrender.com/post/createpost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ title, content }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setIspostactive(false)
      })
  }
  const handlecloseclick = () => {
    setIspostactive(false);
  }
  return (
    <div className=" w-2/4 mx-auto p-4 z-10 border-2 backdrop-blur-lg border-black absolute rounded left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <div className=' flex justify-between '>
      <h1 className="text-2xl font-bold mb-4">Create a New Post</h1>
      <h1 className="text-xl cursor-pointer mb-4" onClick={handlecloseclick}>X</h1>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter post title"
            required
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Write your post content here"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Create Post
        </button>
      </form>
    </div>
  )
}
