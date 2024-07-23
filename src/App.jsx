import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { login,logout } from './store/authSlice';
import authservice from './appwrite/auth'
function App() {
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch();
  useEffect( () =>{
    authservice.getUser()
    .then((userData) => {
      if (userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
      setLoading(true)
    })
    .catch((err)=>{
      setLoading(false)
    })
  
  },[])



  return (
    <>
      <div className='min-h-screen min-w-screen bg-slate-300' >
        <h1>Mega Blog Project</h1>

        {!loading ?<h1>Logged in</h1>  : <h1>Loading.........</h1> }
      </div>
      
    </>
  )
}

export default App
