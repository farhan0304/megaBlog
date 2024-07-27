import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch, useSelector} from 'react-redux'
import { login,logout } from './store/authSlice';
import authService from './appwrite/auth'
import { Footer, Header} from './components'
import { Outlet } from 'react-router-dom'
import spinner from './assets/spinnertransparent.svg'

function App() {
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch();
  const loader = "https://loading.io/asset/750078"

  useEffect(() => {

      authService.getUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({userData}))
        } else {
          dispatch(logout())
        }
      },(error)=>{
        console.log("No Session Created")
      })
      .catch(()=> console.log("No Session Created"))
      .finally(() => setLoading(false))
    }, [])


  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-200'>
      <div className='w-full block'>
        <Header />
        <main>
        <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-200'>
      <div className='w-full block'>
        <Header />
        <main className='flex justify-center items-center'>
        <img src={spinner} alt="loading..." />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
