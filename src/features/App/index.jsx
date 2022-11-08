import reactLogo from '../../assets/react.svg'
import Header from '../../components/Header'
import KKInput from '../../components/KKInputs'
import { KKPrimaryButton, KKSecondaryButton } from '../../components/KKButton'

import './App.css'
import { Outlet } from 'react-router-dom'
import Loading from '../Loading'

function App() {

  return (
    <div className='h-full flex flex-col'>
      {/* <Loading /> */}
      <Outlet />
    </div>
  )
}

export default App
