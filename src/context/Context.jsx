import { useContext, useEffect, useState } from 'react'
import  {fetchDataFromApi} from '../utils/api'
import { AppContext } from './contextApi'

const AppContextProvider = ({children}) => {
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    fetchDataFromApi().then((res)=>{
      console.log(res)
      setData(res);
      setLoading(false)})
    .catch((error)=>Console.log(error))
  },[])
  
  return(
    <AppContext.Provider value={{data,loading}}>
      {children}
    </AppContext.Provider>
  )
}

export const Context = () => {
  return (useContext(AppContext));
}

export default AppContextProvider;