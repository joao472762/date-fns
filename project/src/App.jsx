import { useState } from 'react';
import styles from './global.module.css'
function App() {

  const  [publicationDate,setPublicationDate] =  useState('')
  

  function handleTime(){
    setInterval(() => {
      let time = new Date()
      time = time.toLocaleTimeString()
      setPublicationDate(time)
     
    },0);
    
  }
  handleTime()
  return (
    <div className={styles.app}>
      <time>
        {publicationDate}
      </time>
    </div>
  )
}

export default App
