import React from 'react'
import AppContextProvider from './context/Context'
import Images from './Images'

const App = () => {
  return (
    <AppContextProvider>
       <div className='w-full h-screen items-center justify-center flex bg-slate-300'><Images/></div>
    </AppContextProvider>
   
  )
}

export default App 