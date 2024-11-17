export default function AlumniProfile() {
    return (
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            {/* Header/Cover Photo */}
            <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
  
            {/* Profile Information */}
            <div className="relative px-4 py-5 sm:px-6">
              <div className="absolute -mt-16 left-4">
                <Image
                  className="h-32 w-32 rounded-full ring-4 ring-white"
                  src="/placeholder.svg?height=128&width=128"
                  alt="Profile picture"
                  width={128}
                  height={128}
                />
              </div>
              <div className="ml-40 sm:ml-44">
                <h1 className="text-3xl font-bold text-gray-900">Jane Doe</h1>
                <p className="text-sm text-gray-500">Class of 2015 • Computer Science</p>
              </div>
            </div>
  
            {/* Bio */}
            <div className="px-4 py-5 sm:px-6">
              <p className="text-sm text-gray-700">
                Passionate software engineer with a focus on web technologies. Always eager to learn and connect with fellow alumni.
              </p>
            </div>
  
            {/* Education */}
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Education</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Bachelor of Science in Computer Science</h3>
                  <p className="text-sm text-gray-500">University of Technology • 2011 - 2015</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Master of Science in Software Engineering</h3>
                  <p className="text-sm text-gray-500">Tech Institute • 2016 - 2018</p>
                </div>
              </div>
            </div>
  
            {/* Work Experience */}
            <div className="px-4 py-5 sm:px-6 border-t border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Work Experience</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Senior Software Engineer</h3>
                  <p className="text-sm text-gray-500">TechCorp Inc. • 2019 - Present</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Leading development of cloud-based solutions and mentoring junior developers.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Software Developer</h3>
                  <p className="text-sm text-gray-500">WebSolutions Ltd. • 2015 - 2019</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Developed and maintained various web applications using modern JavaScript frameworks.
                  </p>
                </div>
              </div>
            </div>
  
            {/* Skills */}
            <div className="px-4 py-5 sm:px-6 border-t border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker', 'GraphQL', 'TypeScript'].map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
  
            {/* Contact/Connect Button */}
            <div className="px-4 py-5 sm:px-6 border-t border-gray-200">
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
                Connect with Jane
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }