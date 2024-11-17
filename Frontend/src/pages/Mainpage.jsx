import { useState , useEffect } from "react";
import { Link , useNavigate } from "react-router-dom";
import PostCreation from "../components/Post_compnent";

// Mock data for alumni posts


export default function FeedPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState([]);
  const [ispostactive , setIspostactive] = useState(false);
  const [likenumber  , setLikenumbers] = useState(0);
  const [upcomingEvents , setUpcomingevents ] = useState([ ]);
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    // Filter posts based on search term
    const filteredPosts = initialPosts.filter(
      (post) =>
        post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setPosts(filteredPosts);
  };


  const handlelikeclick = (post , id) => {
    setLikenumbers(likenumber + 1);
    fetch("http://localhost:3000/post/likepost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ postid: id }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(posts.map((post) => (post.id === id ? data : post)));
        setLikenumbers((prev)=>prev+1);
      });
  }

  useEffect(() => {
    fetch("http://localhost:3000/post/getposts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        
        setPosts(data);
      });
  }, [ispostactive , likenumber]);
  


  const handleclick = () => {
    navigate("/mentorship_application");

  };
  const handlelogout = () => {  
    localStorage.removeItem('token');
    navigate("/");
  }
  const createpostshandler = () => {
    setIspostactive(true);
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
                  <span className="font-semibold text-gray-500 text-lg">
                    ReconnectUs
                  </span>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-3">
              <Link
                to="/myprofile"
                className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-blue-500 hover:text-white transition duration-300"
              >
                Profile
              </Link>
              <button
               onClick={handlelogout}
             
                className="py-2 px-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-400 transition duration-300"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </nav>
      {
        ispostactive ? <PostCreation setIspostactive = {setIspostactive} ispostactive={ispostactive}/> : null 
      }
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <div className="md:w-2/3">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="mb-8">
              <div className="flex items-center gap-x-2 border-b border-blue-500 py-2">
                <input
                  className="appearance-none bg-white rounded-l-lg border border-gray-300 w-full text-gray-700 mr-3 py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
                  type="text"
                  placeholder="Search posts..."
                  aria-label="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded-r-lg"
                  type="submit"
                >
                  Search
                </button>
                <button
                  className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded-r-lg"
                  type="button"
                  onClick={createpostshandler}
                >
                 +
                </button>
              </div>
            </form>

            {/* Alumni Posts */}
            <div className="space-y-6">
              {posts.map((post) => (
                <div
                  key={post._id}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <div className="flex items-center mb-4">
                    <img
                      className="w-10 h-10 rounded-full mr-4"
                      src={"/avatar-svgrepo-com.svg"}
                      alt={`${post.author}'s avatar`}
                    />
                    <div >{post.user.name}</div>
                  </div>
                  <p className="text-gray-700 mb-4">{post.content}</p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <button className="flex items-center mr-4 hover:text-blue-500"
                    onClick={()=>handlelikeclick(post , post._id)}
                    >
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                        ></path>
                      </svg>
                      {post.likes} Likes
                    </button>
                   
                  </div>
                </div>
              ))}
            </div>
          </div>

            {/* Sidebar */}
            <div className="md:w-1/3">
              {/* {/* Upcoming Events */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
                <ul className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <li
                      key={event.id}
                      className="border-b pb-4 last:border-b-0 last:pb-0"
                    >
                      <h3 className="font-semibold">{event.title}</h3>
                      <p className="text-sm text-gray-600">
                        {new Date(event.date).toLocaleDateString()}
                      </p>
                      <p className="text-sm text-gray-600">{event.location}</p>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/events"
                  className="block mt-4 text-blue-500 hover:underline"
                >
                  View all events
                </Link>
              </div> 
            <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="px-6 py-8 text-center">
                <h2 className="font-bold text-2xl mb-4">
                  Join Mentorship Program
                </h2>
                <button
                  onClick={handleclick}
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                  aria-label="Apply for mentorship program"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* Footer */}
       <footer className="bg-gray-800 text-white mt-12">
         <div className="max-w-6xl mx-auto px-4 py-10">
           <div className="flex flex-col md:flex-row justify-between items-center">
             <div className="mb-4 md:mb-0">
               <h2 className="text-2xl font-bold">AlumniConnect</h2>
            </div>
             <div className="flex space-x-4">
               <Link href="/about" className="hover:text-gray-300">
                 About
               </Link>
               <Link href="/contact" className="hover:text-gray-300">
                 Contact
               </Link>
               <Link href="/privacy" className="hover:text-gray-300">
               Privacy Policy
               </Link>
             </div>
           </div>
           <div className="mt-8 text-center text-sm">
             &copy; {new Date().getFullYear()} AlumniConnect. All rights
             reserved.
           </div>
         </div>
       </footer>
     </div>
  );
}
