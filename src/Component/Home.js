import React from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate=useNavigate()
  const handleClick=async()=>{
    await auth.signOut();
    navigate("/login")
  }
  return (
    <div><h2>Welcome {auth.currentUser.phoneNumber}</h2>
         <button
                type="submit"
                onClick={handleClick}
                style={{width:"10rem",position:"absolute",top:"5rem",left:"50rem"}}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
               Logout
              </button>
    </div>
  )
}

export default Home