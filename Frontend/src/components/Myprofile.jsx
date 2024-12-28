import { useState , react, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

export default function EditableAlumniProfile() {
    const [name, setName] = useState('');
    const [classYear, setClassYear] = useState('');
    const [major, setMajor] = useState('');
    const [bio, setBio] = useState('');
    const [education, setEducation] = useState([
      { degree: '', school: '', years: '' },
    ]);
    const [experience, setExperience] = useState([
      { title: '', company: '', years: '', description: '' },
    ]);
    const [skills, setSkills] = useState([]);
const navigate = useNavigate() ;
    const handleEducationChange = (index, key, value) => {
      const updatedEducation = [...education];
      updatedEducation[index][key] = value;
      setEducation(updatedEducation);
    }
    const handleExperienceChange = (index, key, value) => {
      const updatedExperience = [...experience];
      updatedExperience[index][key] = value;
      setExperience(updatedExperience);
    }

    const handleSkillsChange = (e) => {
      if (e.key === 'Enter'){

        setSkills([...skills, e.target.value]);
        e.target.value = '';
      }
    

    }
    
   
    const handlesave = () => {
      const profile = {
        name,
        classYear,
        major,
        bio,
        education,
        experience,
        skills,
      };
      fetch("https://almamate-1.onrender.com/user/userdetailupdate"  , {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(profile),
      })
        .then((res) => res.json())
        .then((data) => console.log(data)
      )
    }

    useEffect(() => {
      fetch("https://almamate-1.onrender.com/user/userdetail", {
        headers: {
          "Authorization" : `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          
          setName(data.name);
          setClassYear(data.current_class);
          setMajor(data.current_course);
          setBio(data.bio);
          setEducation(data.education);
          setExperience(data.work_experience);
          setSkills(data.skills);
        });
    }
    , []);
    return (
      <div className="bg-gray-100 min-h-screen">
        <button className=' rounded-full border-black border-2 w-10 h-10 cursor-pointer relative top-10 left-16' onClick={(e)=> navigate(-1)}>{"<"}</button>
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            {/* Header/Cover Photo */}
            <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
  
            {/* Profile Information */}
            <div className="relative px-4 py-5 sm:px-6">
              <div className="absolute -mt-16 left-4">
                <img
                  className="h-32 w-32 rounded-full ring-4 ring-white"
                  src="\avatar-svgrepo-com.svg"
                  alt="Profile picture"
                  width={128}
                  height={128}
                />
              </div>
              <div className="ml-40 sm:ml-44">
                <input
                  className="text-3xl font-bold text-gray-900 bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='Name'
                />
                <div className="flex gap-2 mt-1">
                  <input
                    className="text-sm text-gray-500 bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
                    value={classYear}
                    onChange={(e) => setClassYear(e.target.value)}
                    placeholder='Class of'
                  />
                  <span className="text-sm text-gray-500">•</span>
                  <input
                    className="text-sm text-gray-500 bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
                    value={major}
                    onChange={(e) => setMajor(e.target.value)}
                    placeholder='Major'
                  />
                </div>
              </div>
            </div>
  
            {/* Bio */}
            <div className="px-4 py-5 sm:px-6">
              <textarea
                className="w-full text-sm text-gray-700 bg-transparent border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={3}
                placeholder='Bio'
              />
            </div>
  
            {/* Education */}
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Education</h2>
              <div className="space-y-3">
                {education.map((edu, index) => (
                  <div key={index}>
                    <input
                      className="text-sm font-medium text-gray-900 bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 w-full"
                      value={edu.degree}
                      onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                      placeholder='Degree'
                    />
                    <div className="flex gap-2 mt-1">
                      <input
                        className="text-sm text-gray-500 bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
                        value={edu.school}
                        onChange={(e) => handleEducationChange(index, 'school', e.target.value)}
                        placeholder='School/University'
                      />
                      <span className="text-sm text-gray-500">•</span>
                      <input
                        className="text-sm text-gray-500 bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
                        value={edu.years}
                        onChange={(e) => handleEducationChange(index, 'years', e.target.value)}
                        placeholder='Years'
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Work Experience */}
            <div className="px-4 py-5 sm:px-6 border-t border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Work Experience</h2>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <div key={index}>
                    <input
                      className="text-sm font-medium text-gray-900 bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 w-full"
                      value={exp.title}
                      onChange={(e) => handleExperienceChange(index, 'title', e.target.value)}
                      placeholder='Title'
                    />
                    <div className="flex gap-2 mt-1">
                      <input
                        className="text-sm text-gray-500 bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
                        value={exp.company}
                        onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                        placeholder='Company'
                      />
                      <span className="text-sm text-gray-500">•</span>
                      <input
                        className="text-sm text-gray-500 bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
                        value={exp.years}
                        onChange={(e) => handleExperienceChange(index, 'years', e.target.value)}
                        placeholder='Years'
                      />
                    </div>
                    <textarea
                      className="w-full text-sm text-gray-700 bg-transparent border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:border-blue-500"
                      value={exp.description}
                      onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                      rows={2}
                      placeholder='Description'
                    />
                  </div>
                ))}
              </div>
            </div>
  
            {/* Skills */}
            <div className="px-4 py-5 sm:px-6 border-t border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Skills</h2>
              <input
                className="w-full text-sm text-gray-700 bg-transparent border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                onKeyDown={handleSkillsChange}

                placeholder="Enter skills separated by commas"
              />
              <div className="flex flex-wrap gap-2 mt-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
  
            {/* Save Button */}
            <div className="px-4 py-5 sm:px-6 border-t border-gray-200">
              <button onClick={handlesave} className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }