
import React from 'react';
import AuthPage from './pages/AuthPage'
import { createBrowserRouter , Router, RouterProvider } from 'react-router-dom' ;
import HomePage from './pages/HomePage';
import FeedPage from './pages/Mainpage';
import Protectroute from './components/Protectroute';
import MentorshipPage from './pages/MentorshipPage';

function App() {
  const router  = createBrowserRouter([
    {
      path : '/' ,
      element : <HomePage />   ,
    },
    {
      path : '/auth' ,
      element : <AuthPage />   ,
    } ,
    {
      element : <Protectroute />   ,
      children : [

        {
          path : "/home/:id" ,
          element : <FeedPage /> ,
        } , 
        {
          path : "/mentorship_application" ,
          element : <MentorshipPage /> ,
        }
      ]
    } 
    
  ]) ;


  return (
    <>

    <RouterProvider router={router} />

    </>
  )
}

export default App
