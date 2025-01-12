import React, { useEffect, useState } from 'react'
import Mycontext from './Mycontext'
import axios from 'axios'
function MyState({children}) {

    let [items, setitmes] = useState([''])
    let [search,setsearch]=useState('')


    async function fetcchingffooditems() {
     
       let response= await axios.post('https://mernsstack-hintxx-bites.onrender.com/api/getfooddata')
       console.log('response from state ',response)
       setitmes([response.data.data])
       console.log(['state se ',items])
    //    setitmes([123])
    

  
      
    }
  
    useEffect(() => {
  
      fetcchingffooditems()
  
  
    },[]);
  
  
  return (
   <Mycontext.Provider value={{items,search,setsearch}} > 
    {children}
   </Mycontext.Provider>
  )
}

export default MyState
